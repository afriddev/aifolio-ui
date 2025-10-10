/* eslint-disable @typescript-eslint/no-explicit-any */

import {
  Conversation,
  ConversationContent,
  ConversationScrollButton,
} from "@/components/ui/conversation";
import { Message, MessageContent } from "@/components/ui/message";

import { Loader } from "@/components/ui/loader";
import { Response } from "@/components/ui/response";

import { useHandleChat } from "./chatFunction";
import ChatInput from "./ChatInput";
import ChatAssistentActions from "./ChatAssistentActions";
import ChatMessageAvatar from "./ChatMessageAvatar";
import ChatMessageReasoningContent from "./ChatMessageReasoningContent";
import ChatMessageSearchResults from "./ChatMessageSearchResults";

interface ChatMainInterface {
  inputToolBar?: boolean;
  tempChat?: boolean;
  extraBody?:any
  api?:string
}

function ChatMain({
  inputToolBar = true,
  tempChat = false,
  extraBody,
  api
}: ChatMainInterface) {
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
    useThink,
  } = useHandleChat(tempChat,extraBody,api);

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
                      <ChatMessageAvatar message={message} />
                      <MessageContent>
                        <ChatMessageReasoningContent message={message} />
                        <ChatMessageSearchResults message={message} />
                        <Response
                          className={`${
                            message.role === "user" &&
                            "bg-muted px-4 py-2 rounded-3xl"
                          }`}
                        >
                          {message.content}
                        </Response>
                        <ChatAssistentActions
                          index={index}
                          message={message}
                          copied={copied}
                          setCopied={setCopied}
                          handleLike={handleLike}
                          handleDislike={handleDislike}
                        />
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
      <ChatInput
        chatId={chatId as never}
        messageId={messageId as never}
        useFlash={useFlash}
        useThink={useThink}
        useWebSearch={useWebSearch}
        handleChatAction={handleChatAction}
        onSelectFile={onSelectFile}
        handleSubmit={handleSubmit}
        uploadingFile={uploadingFile}
        setInput={setInput}
        uploadedFileId={uploadedFileId}
        input={input}
        status={status}
        toolBar={inputToolBar}
      />
    </div>
  );
}

export default ChatMain;
