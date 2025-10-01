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
import type { ChatStatus, FileUIPart } from "ai";

import {
  CopyIcon,
  GlobeIcon,
  RefreshCcwIcon,
  ThumbsDownIcon,
  ThumbsUpIcon,
} from "lucide-react";
import { v4 as uuidv4 } from "uuid";
import { Loader } from "@/components/ui/loader";
import { Response } from "@/components/ui/response";
import type {
  chatMessageDataType,
  chatRequestDataType,
} from "@/types/ChatDataTypes";
import { LuBrain } from "react-icons/lu";
import { VscSymbolEvent } from "react-icons/vsc";
import {
  Source,
  Sources,
  SourcesContent,
  SourcesTrigger,
} from "@/components/ui/sources";

const CHAT_API = "http://127.0.0.1:8001/api/v1/chat";
function ChatMain() {
  const [status, setStatus] = useState<ChatStatus>("ready");
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<chatMessageDataType[]>([]);
  const [useWebSearch, setUseWebSearch] = useState<boolean>(false);
  const [useDeepResearch, setUseDeepResearch] = useState<boolean>(false);
  const [useFlash, setUseFlash] = useState<boolean>(false);

  const bottomRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  async function fileFromFileUIPart(part: FileUIPart): Promise<File> {
    const res = await fetch(part.url);
    const blob = await res.blob();

    return new File([blob], part.filename ?? `${uuidv4().toString()}.pdf`, {
      type: part.mediaType || blob.type || "application/octet-stream",
    });
  }

  async function sendToBackend(message: chatRequestDataType) {
    const body = {
      query: message.content,
      messages: messages,
      messageId: message.id,
      role: message.role,
      useWebSearch: useWebSearch,
      useDeepResearch: useDeepResearch,
      useFlash: useFlash,
      file:message.file ? true : false,
    };
    const allMessages = [
      ...messages,
      {
        role: message.role,
        id: message.id,
        reasoningContent: "",
        content: message.content,
      },
    ];
    setMessages(allMessages);

    const controller = new AbortController();
    const form = new FormData();
    form.append("payload", JSON.stringify(body));
    if (message.file) {
      const file = await fileFromFileUIPart(message.file);
      form.append("file", file);
      form.append("fileName", file.name);
      form.append("mediaType", file.type);
    }

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
              prev.map((m) =>
                m.id === assistantTemplateMessage.id
                  ? {
                      ...m,
                      content:
                        parsedToken.type === "content"
                          ? (m.content ?? "") + parsedToken.data
                          : m.content,
                      reasoningContent:
                        parsedToken.type === "reasoning"
                          ? (m.reasoningContent ?? "") + parsedToken.data
                          : m.reasoningContent,
                      searchResults:
                        parsedToken.type === "searchResults"
                          ? parsedToken.data
                          : m.searchResults,
                    }
                  : m
              )
            );
          }
        }
      }
    }

    setStatus("ready");
  }

  function handleSubmit(message: PromptInputMessage) {
    console.log("Message submitted:", message);
    if (message.text && message) {
      setStatus("submitted");
      sendToBackend({
        id: uuidv4().toString(),
        role: "user",
        content: message.text,
        file: message.files ? message.files[0] : undefined,
      });
      setInput("");
    }
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

  return (
    <div className="w-full h-full overflow-auto max-h-[100vh]  flex flex-col justify-between items-center py-5">
      <div className="w-full h-full   pb-36 flex justify-center items-center">
        <Conversation className="h-full  flex justify-center items-center">
          <ConversationContent className="flex flex-col justify-center items-center">
            {messages.map((message, index) => {
              if (
                message.content ||
                message.reasoningContent ||
                (message.searchResults && message.searchResults?.length > 0)
              )
                return (
                  <div key={index} className="mb-4 w-[50vw]">
                    <Message from={message.role}>
                      <MessageContent>
                        {message.reasoningContent && (
                          <Reasoning
                            className="w-full "
                            isStreaming={status === "streaming" ? true : false}
                            defaultOpen={true}
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
                        <Response>{message.content}</Response>
                        {message.role === "assistant" && (
                          <Actions>
                            <Action label="Like">
                              <ThumbsUpIcon className="size-4" />
                            </Action>
                            <Action label="Dislike">
                              <ThumbsDownIcon className="size-4" />
                            </Action>
                            <Action label="Retry">
                              <RefreshCcwIcon className="size-3" />
                            </Action>
                            <Action label="Copy">
                              <CopyIcon className="size-3" />
                            </Action>
                          </Actions>
                        )}
                      </MessageContent>
                    </Message>
                  </div>
                );
              else return null;
            })}
            {status === "submitted" && (
              <div className="w-[50vw] items-start">
                <Loader />
              </div>
            )}
            <div ref={bottomRef} />
          </ConversationContent>
          <ConversationScrollButton />
        </Conversation>
      </div>
      <div className="w-[50vw] absolute bottom-5">
        <PromptInput
          accept="application/pdf"
          maxFileSize={2 * 1024 * 1024}
          maxFiles={1}
          onSubmit={handleSubmit}
        >
          <PromptInputBody>
            <PromptInputAttachments>
              {(attachment) => <PromptInputAttachment data={attachment} />}
            </PromptInputAttachments>
            <div className="flex w-full items-center px-3">
              <PromptInputTextarea
                onChange={(e) => setInput(e.target.value)}
                value={input}
              />
              <PromptInputSubmit disabled={!input && !status} status={status} />
            </div>
          </PromptInputBody>

          <PromptInputToolbar>
            <PromptInputTools>
              <PromptInputActionMenu>
                <PromptInputActionMenuTrigger />
                <PromptInputActionMenuContent>
                  <PromptInputActionAddAttachments label="Add Your Resume" />
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
                <LuBrain className="h-6 w-6" />
                <span>Deep Reasearch</span>
              </PromptInputButton>

              <PromptInputButton
                variant={useWebSearch ? "default" : "ghost"}
                onClick={() => handleChatAction("webSearch")}
              >
                <GlobeIcon size={16} />
                <span>Search</span>
              </PromptInputButton>
            </PromptInputTools>
          </PromptInputToolbar>
        </PromptInput>
      </div>
    </div>
  );
}

export default ChatMain;
