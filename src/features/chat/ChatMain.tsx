/* eslint-disable @typescript-eslint/no-explicit-any */
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

import { CopyIcon, GlobeIcon } from "lucide-react";
import { Loader } from "@/components/ui/loader";
import { Response } from "@/components/ui/response";

import { VscSymbolEvent } from "react-icons/vsc";
import {
  Source,
  Sources,
  SourcesContent,
  SourcesTrigger,
} from "@/components/ui/sources";

import { AiFillLike } from "react-icons/ai";
import { AiOutlineLike } from "react-icons/ai";
import { AiOutlineDislike } from "react-icons/ai";
import { AiFillDislike } from "react-icons/ai";
import { IoCheckmark } from "react-icons/io5";
import { BiBulb } from "react-icons/bi";
import { IoFlashSharp } from "react-icons/io5";
import { useHandleChat } from "./chatFunction";

function ChatMain() {
  const {
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
    useWebSearch,
    handleChatAction,
    useThink
  } = useHandleChat();

  return (
    <div className=" h-full  overflow-auto max-h-[100vh]  flex flex-col w-full  justify-between items-center py-5">
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
                  fileUploading={uploadingFile}
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
                  uploadingFile ||
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
                    uploadingFile ||
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
                variant={useThink ? "default" : "ghost"}
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
