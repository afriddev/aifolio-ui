/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useRef, useState } from "react";
import {
  PromptInput,
  PromptInputActionAddAttachments,
  PromptInputActionMenu,
  PromptInputActionMenuContent,
  PromptInputActionMenuTrigger,
  PromptInputAttachment,
  PromptInputAttachments,
  PromptInputBody,
  PromptInputButton,
  PromptInputSubmit,
  PromptInputTextarea,
  PromptInputToolbar,
  PromptInputTools,
  type PromptInputMessage,
} from "@/components/ui/propt-input";
import {
  Reasoning,
  ReasoningContent,
  ReasoningTrigger,
} from "@/components/ui/reasoning";
import { Action, Actions } from "@/components/ui/actions";
import {
  Conversation,
  ConversationContent,
  ConversationScrollButton,
} from "@/components/ui/conversation";
import { Message, MessageContent } from "@/components/ui/message";
import type { FileUIPart } from "ai";

import { CopyIcon, GlobeIcon } from "lucide-react";
import { v4 as uuidv4 } from "uuid";
import { Loader } from "@/components/ui/loader";
import { Response } from "@/components/ui/response";
import type {
  chatMessageDataType,
  chatRequestDataType,
} from "@/types/ChatDataTypes";
import { VscSymbolEvent } from "react-icons/vsc";
import {
  Source,
  Sources,
  SourcesContent,
  SourcesTrigger,
} from "@/components/ui/sources";
import { ExtractFileData, getFormattedDate } from "@/apputils/AppUtils";
import { useUploadFile } from "@/hooks/fileHooks";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { useGetChatHistory } from "@/hooks/chatHooks";
import { useAppContext } from "@/apputils/AppContext";

import { AiFillLike } from "react-icons/ai";
import { AiOutlineLike } from "react-icons/ai";
import { AiOutlineDislike } from "react-icons/ai";
import { AiFillDislike } from "react-icons/ai";
import { IoCheckmark } from "react-icons/io5";
import { BiBulb } from "react-icons/bi";
import { IoFlashSharp } from "react-icons/io5";

const CHAT_API = "http://127.0.0.1:8001/api/v1/chat";
function ChatMain() {
  const [status, setStatus] = useState<string>("");
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<chatMessageDataType[]>([]);
  const [useWebSearch, setUseWebSearch] = useState<boolean>(false);
  const [useDeepResearch, setUseDeepResearch] = useState<boolean>(false);
  const [useFlash, setUseFlash] = useState<boolean>(false);
  const { uploadFile, isPending } = useUploadFile();
  const [uploadedFileId, setUploadedFileId] = useState<string | undefined>(
    undefined
  );
  const bottomRef = useRef<HTMLDivElement | null>(null);
  const [chatId, setChatId] = useState<string | undefined>(uuidv4().toString());
  const [messageId, setMessageId] = useState<string | undefined>(undefined);
  const navigate = useNavigate();
  const location = useLocation();
  const { getHistory } = useGetChatHistory();
  const [titleGenerated, setTitleGenerated] = useState<boolean>(false);
  const { allChats } = useAppContext();
  const { chatId: paramChatId } = useParams<{ chatId: string }>();
  const [copied, setCopied] = useState<number | null>(null);

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
      handleSetChatId(location?.state?.chatId);
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
    setUseDeepResearch(false);
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
      useDeepResearch: useDeepResearch,
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
        setUseDeepResearch(!useDeepResearch);
        break;
      case "webSearch":
        setUseWebSearch(!useWebSearch);
        break;
    }
  }

  function handleLike(index: number) {
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

  return (
    <div className="w-full h-full  overflow-auto max-h-[100vh]  flex flex-col justify-between items-center py-5">
      <div className="w-full h-full   pb-36 flex justify-center items-center">
        <Conversation className="h-full  flex justify-center items-center">
          <ConversationContent className="flex flex-col justify-center items-center">
            {messages.map((message, index) => {
              if (
                (message.content ||
                  message.reasoningContent ||
                  (message.searchResults &&
                    message.searchResults?.length > 0)) &&
                message.visible
              )
                return (
                  <div key={index} className=" mb-4 w-[40vw] flex items-start">
                    <Message from={message.role} className="p-0 relative">
                      <div
                        className={`${
                          message.role === "user"
                            ? "mt-3  -right-5"
                            : "mt-3  -left-5"
                        } -top-1  absolute`}
                      >
                        {message.role === "user" ? (
                          ""
                        ) : (
                          <div>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 298.24155 298.24154"
                              width="28"
                              height="28"
                              className="bg-red-500 rounded"
                              fill="white"
                            >
                              <polygon
                                points="242.424,90.909 242.424,121.212 212.121,121.212 212.121,151.515 181.818,151.515 181.818,121.212 151.515,121.212 151.515,90.909 121.212,90.909 121.212,212.121 90.909,212.121 90.909,242.424 181.818,242.424 181.818,212.121 151.515,212.121 151.515,181.818 181.818,181.818 181.818,212.121 212.121,212.121 212.121,181.818 242.424,181.818 242.424,212.121 212.121,212.121 212.121,242.424 303.03,242.424 303.03,212.121 272.727,212.121 272.727,90.909"
                                transform="translate(-47.848728,-17.545727)"
                              />
                            </svg>
                          </div>
                        )}
                      </div>
                      <MessageContent>
                        {message.reasoningContent && (
                          <Reasoning
                            className="w-full"
                            isStreaming={status === "streaming" ? true : false}
                            defaultOpen={false}
                          >
                            <ReasoningTrigger />
                            <ReasoningContent>
                              {message.reasoningContent}
                            </ReasoningContent>
                          </Reasoning>
                        )}

                        {message.searchResults &&
                          message.searchResults.length > 0 && (
                            <Sources>
                              <SourcesTrigger
                                count={message.searchResults.length}
                              />

                              <SourcesContent>
                                {message.searchResults.map(
                                  (searchResult, index1) => {
                                    return (
                                      <Source
                                        key={index1}
                                        href={searchResult.url}
                                        title={searchResult.title}
                                      />
                                    );
                                  }
                                )}
                              </SourcesContent>
                            </Sources>
                          )}

                        <Response
                          className={`${
                            message.role === "user" &&
                            "bg-muted px-4 py-2 rounded-3xl"
                          }`}
                        >
                          {message.content}
                        </Response>

                        <div className="flex items-center justify-between mt-1 space-x-2">
                          {message.role === "assistant" && (
                            <label className="flex items-center text-xs gap-2">
                              <IoFlashSharp className="text-orange-400 size-3" />{" "}
                              {message.timeAndDate}
                            </label>
                          )}
                          {message.role === "assistant" && (
                            <Actions>
                              <Action
                                onClick={async () => {
                                  await navigator.clipboard.writeText(
                                    message.content ? message.content : ""
                                  );
                                  setCopied(index);
                                  setTimeout(() => setCopied(null), 1000);
                                }}
                                label="Copy"
                              >
                                {copied === index ? (
                                  <IoCheckmark className="size-3" />
                                ) : (
                                  <CopyIcon className="size-3 " />
                                )}
                              </Action>
                              <Action
                                onClick={() => {
                                  handleLike(index);
                                }}
                                label="Like"
                              >
                                {message.liked ? (
                                  <AiFillLike className="size-3 " />
                                ) : (
                                  <AiOutlineLike className="size-3" />
                                )}
                              </Action>
                              <Action
                                label="Dislike"
                                onClick={() => {
                                  handleDislike(index);
                                }}
                              >
                                {message.disLiked ? (
                                  <AiFillDislike className="size-3 " />
                                ) : (
                                  <AiOutlineDislike className="size-3" />
                                )}
                              </Action>
                            </Actions>
                          )}
                        </div>
                      </MessageContent>
                    </Message>
                  </div>
                );
              else return null;
            })}
            {status === "submitted" && (
              <div className="w-[40vw] items-start">
                <Loader />
              </div>
            )}
            <div ref={bottomRef} />
          </ConversationContent>
          <ConversationScrollButton />
        </Conversation>
      </div>
      <div className="w-[40vw] absolute bottom-5 ">
        <PromptInput
          accept="application/pdf"
          maxFileSize={2 * 1024 * 1024}
          maxFiles={1}
          onSubmit={handleSubmit}
          onSelectFile={onSelectFile}
        >
          <PromptInputBody>
            <PromptInputAttachments>
              {(attachment) => (
                <PromptInputAttachment
                  fileUploading={isPending}
                  data={attachment}
                />
              )}
            </PromptInputAttachments>
            <div className="flex w-full items-center px-3">
              <PromptInputTextarea
                onChange={(e) => setInput(e.target.value)}
                value={input}
              />
              <PromptInputSubmit
                disabled={
                  (!input && !uploadedFileId ? true : false) ||
                  !status ||
                  isPending ||
                  !chatId ||
                  (uploadedFileId && !messageId)
                }
                status={status}
              />
            </div>
          </PromptInputBody>

          <PromptInputToolbar>
            <PromptInputTools>
              <PromptInputActionMenu>
                <PromptInputActionMenuTrigger
                  disabled={
                    (uploadedFileId ? true : false) ||
                    isPending ||
                    status === "pending" ||
                    !chatId
                  }
                />
                <PromptInputActionMenuContent>
                  <PromptInputActionAddAttachments label="Select File  " />
                </PromptInputActionMenuContent>
              </PromptInputActionMenu>

              <PromptInputButton
                variant={useFlash ? "default" : "ghost"}
                onClick={() => handleChatAction("flash")}
              >
                <VscSymbolEvent className="h-6 w-6" />
                <span>Flash</span>
              </PromptInputButton>
              <PromptInputButton
                variant={useDeepResearch ? "default" : "ghost"}
                onClick={() => handleChatAction("deepResearch")}
              >
                <BiBulb className="h-6 w-6" />
                <span>Think</span>
              </PromptInputButton>

              <PromptInputButton
                variant={useWebSearch ? "default" : "ghost"}
                onClick={() => handleChatAction("webSearch")}
              >
                <GlobeIcon size={16} />
                <span> Web search</span>
              </PromptInputButton>
            </PromptInputTools>
          </PromptInputToolbar>
        </PromptInput>
      </div>
    </div>
  );
}

export default ChatMain;
