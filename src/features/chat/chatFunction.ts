/* eslint-disable @typescript-eslint/no-explicit-any */
import { useAppContext } from "@/apputils/AppContext";
import { ExtractFileData, getFormattedDate } from "@/apputils/AppUtils";
import type { PromptInputMessage } from "@/components/ui/propt-input";
import { useGetChatHistory } from "@/hooks/chatHooks";
import { useUploadFile } from "@/hooks/fileHooks";
import type {
  chatMessageDataType,
  chatRequestDataType,
} from "@/types/ChatDataTypes";
import type { FileUIPart } from "ai";
import { useEffect, useRef, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";

export function useHandleChat() {
  const CHAT_API = "http://127.0.0.1:8001/api/v1/chat";

  const bottomRef = useRef<HTMLDivElement | null>(null);
  const location = useLocation();
  const { chatId: paramChatId } = useParams<{ chatId: string }>();
  const { allChats, webSocket } = useAppContext();
  const navigate = useNavigate();

  const [status, setStatus] = useState<string>("");
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<chatMessageDataType[]>([]);
  const [useWebSearch, setUseWebSearch] = useState<boolean>(false);
  const [useThink, setUseThink] = useState<boolean>(false);
  const [useFlash, setUseFlash] = useState<boolean>(false);
  const [titleGenerated, setTitleGenerated] = useState<boolean>(false);
  const [chatId, setChatId] = useState<string | undefined>(uuidv4().toString());
  const [messageId, setMessageId] = useState<string | undefined>(undefined);

  const [copied, setCopied] = useState<number | null>(null);
  const [uploadedFileId, setUploadedFileId] = useState<string | undefined>(
    undefined
  );
  const { uploadFile, isPending: uploadingFile } = useUploadFile();

  const { getHistory } = useGetChatHistory();

  useEffect(() => {
    if (status === "ready" || status === "submitted") {
      bottomRef.current?.scrollIntoView({ behavior: "smooth" });
    }

    if (paramChatId && (location?.state?.reload || !status)) {
      const tempChatId = location?.state?.chatId
        ? location?.state?.chatId
        : paramChatId;
      getHistory(
        {
          id: tempChatId,
        },
        {
          onSuccess: (data) => {
            if (data.data === "SUCCESS") {
              const tempMessages = [];

              for (let index = 0; index < data.chatHistory.length; index++) {
                {
                  tempMessages.push({
                    id: data.chatHistory[index].id,
                    role: data.chatHistory[index].role,
                    content: data.chatHistory[index].content,
                    visible: true,
                    liked: data.chatHistory[index].liked,
                    disLiked: data.chatHistory[index].disLiked,
                    timeAndDate: getFormattedDate(
                      data.chatHistory[index].timeAndDate
                    ),
                  });
                }
              }
              setTitleGenerated(data.titleGenerated);
              setMessages(tempMessages);
            }
          },
        }
      );
      handleSetChatId(tempChatId);
    }

    if (location.state?.reload) {
      resetChat();
      navigate(".", { state: undefined });
    }

    for (let index = 0; index < allChats.length; index++) {
      if (allChats[index].id === chatId) {
        setTitleGenerated(allChats[index]?.titleGenerated);
      }
    }
  }, [status, location.state, allChats]);

  function resetChat() {
    setTitleGenerated(false);
    setMessages([]);
    setInput("");
    setStatus("ready");
    setUseFlash(false);
    setUseThink(false);
    setUseWebSearch(false);
    setUploadedFileId(undefined);
    setMessageId(undefined);
  }

  function handleSetChatId(id?: string) {
    setChatId(id ? id : uuidv4().toString());
  }

  async function sendToBackend(message: chatRequestDataType) {
    if (messages.length === 0) {
      navigate(`/chat/${chatId}`, {
        state: { reload: false },
        replace: true,
      });
    }
    const body = {
      chatId: chatId,
      query: message.content,
      messages: messages,
      messageId: message.id,
      role: message.role,
      useWebSearch: useWebSearch,
      useThink: useThink,
      useFlash: useFlash,
      fileId: uploadedFileId,
      emailId: "afridayan01@gmail.com",
      titleGenerated,
    };
    const allMessages = [
      ...messages,
      {
        role: message.role,
        id: message.id,
        reasoningContent: "",
        content: message.content,
        visible: true,
        liked: false,
        disLiked: false,
        timeAndDate: getFormattedDate(),
      },
    ];
    setMessages(allMessages);

    const controller = new AbortController();
    const form = new FormData();
    form.append("payload", JSON.stringify(body));

    const resp = await fetch(CHAT_API, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
      signal: controller.signal,
    });

    const reader = resp.body?.getReader();
    const decoder = new TextDecoder();
    const assistantTemplateMessage: chatMessageDataType = {
      id: uuidv4().toString(),
      role: "assistant",
      content: "",
      reasoningContent: "",
      searchResults: [],
      visible: true,
      liked: false,
      disLiked: false,
      timeAndDate: getFormattedDate(),
    };

    setMessages((prev) => [...prev, assistantTemplateMessage]);
    while (true) {
      const { done, value } = await (reader as any).read();

      if (done) break;

      const chunk = decoder.decode(value, { stream: true });
      const lines = chunk.split("\n");
      for (const line of lines) {
        if (line.startsWith("data: ")) {
          const tokenData = line.slice(6);

          if (tokenData.trim()) {
            const parsedToken = JSON.parse(tokenData);
            setStatus("streaming");

            setMessages((prev) =>
              prev.map((m) => {
                if (m.id !== assistantTemplateMessage.id) return m;

                const newMsg = { ...m };

                if (parsedToken.type === "content") {
                  newMsg.content =
                    (newMsg.content ?? "") + String(parsedToken.data ?? "");
                } else if (parsedToken.type === "tool_name") {
                  if (parsedToken.data === "generatekey") {
                    newMsg.content =
                      (newMsg.content ?? "") +
                      "Generated your key, you will get the key by email. Please wait some time it may take few seconds to few minutes based on the data uploaded.";
                  } else {
                    newMsg.content =
                      (newMsg.content ?? "") + String(parsedToken.data ?? "");
                  }
                }

                if (parsedToken.type === "reasoning") {
                  newMsg.reasoningContent =
                    (newMsg.reasoningContent ?? "") +
                    String(parsedToken.data ?? "");
                }

                if (parsedToken.type === "searchResults") {
                  newMsg.searchResults = parsedToken.data;
                }
                newMsg.timeAndDate = getFormattedDate();

                return newMsg;
              })
            );
          }
        }
      }
    }
    setUploadedFileId(undefined);
    setMessageId(undefined);
    setStatus("ready");
  }

  async function onSelectFile(file: FileUIPart) {
    const extractedFile = await ExtractFileData(file);
    const tempMessageId = uuidv4().toString();
    setMessageId(tempMessageId);

    uploadFile(
      {
        ...extractedFile,
        chatId: chatId,
        messageId: tempMessageId,
        emailId: "afridayan01@gmail.com",
      },
      {
        onSuccess: (data) => {
          if (data?.data === "SUCCESS") {
            setUploadedFileId(data.id);
            const allMessages = [
              ...messages,
              {
                role: "user" as any,
                id: tempMessageId,
                reasoningContent: "",
                content: data.text,
                visible: false,
                liked: false,
                disLiked: false,
                timeAndDate: getFormattedDate(),
              },
            ];
            setMessages(allMessages);
          }
        },
      }
    );
  }
  function handleChatAction(type: "flash" | "deepResearch" | "webSearch") {
    switch (type) {
      case "flash":
        setUseFlash(!useFlash);
        break;
      case "deepResearch":
        setUseThink(!useThink);
        break;
      case "webSearch":
        setUseWebSearch(!useWebSearch);
        break;
    }
  }

  function handleLike(index: number) {
    const data = {
      type: "like",
      chatId: chatId,
      messageId: messages[index].id,
      liked: !messages[index].liked,
      disLiked: messages[index].disLiked ? false : false,
    };
    webSocket?.send(JSON.stringify(data));

    setMessages((prev) => {
      return prev.map((m, idx) => {
        if (idx === index) {
          return {
            ...m,
            liked: !m.liked,
            disLiked: m.disLiked ? false : m.disLiked,
          };
        }
        return m;
      });
    });
  }
  function handleDislike(index: number) {
    const data = {
      type: "disLike",
      chatId: chatId,
      messageId: messages[index].id,
      liked: messages[index].liked ? false : false,
      disLiked: !messages[index].disLiked,
    };
    webSocket?.send(JSON.stringify(data));

    setMessages((prev) => {
      return prev.map((m, idx) => {
        if (idx === index) {
          return {
            ...m,
            disLiked: !m.disLiked,
            liked: m.liked ? false : m.liked,
          };
        }
        return m;
      });
    });
  }
  function handleSubmit(message: PromptInputMessage) {
    if (
      message &&
      (message.text || (message.files && message.files.length > 0))
    ) {
      setStatus("submitted");
      sendToBackend({
        id: messageId ? messageId : uuidv4().toString(),
        role: "user",
        content: message.text,
      });
      setInput("");
    }
  }
  return {
    messages,
    status,
    setCopied,
    copied,
    handleLike,
    handleDislike,
    handleSubmit,
    input,
    setInput,
    bottomRef,
    uploadingFile,
    onSelectFile,
    uploadedFileId,
    chatId,
    messageId,
    useFlash,
    useThink,
    useWebSearch,
    handleChatAction,
    titleGenerated,
  };
}
