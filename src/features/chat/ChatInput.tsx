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
import type { FileUIPart } from "ai";
import { GlobeIcon } from "lucide-react";
import { BiBulb } from "react-icons/bi";
import { VscSymbolEvent } from "react-icons/vsc";

interface ChatInputInterface {
  handleSubmit: (e: any) => void;
  onSelectFile: (file: FileUIPart) => Promise<void>;
  uploadingFile: boolean;
  setInput: React.Dispatch<React.SetStateAction<string>>;
  uploadedFileId?: string | undefined;
  input: string;
  chatId: string;
  messageId: string;
  useThink: boolean;
  useFlash: boolean;
  useWebSearch: boolean;
  handleChatAction: (action: "flash" | "webSearch" | "deepResearch") => void;
  toolBar?: boolean;
  status: string | undefined;
}

function ChatInput({
  handleSubmit,
  onSelectFile,
  uploadingFile,
  setInput,
  uploadedFileId,
  input,
  chatId,
  handleChatAction,
  messageId,
  useFlash,
  useThink,
  useWebSearch,
  toolBar = true,
  status,
}: ChatInputInterface) {
  return (
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
                (uploadingFile ? true : false) ||
                ((uploadedFileId && !messageId) ? true : false)
              }
              status={status}
            />
          </div>
        </PromptInputBody>

        {toolBar && (
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
        )}
      </PromptInput>
    </div>
  );
}

export default ChatInput;
