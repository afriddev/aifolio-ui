import { AiFillLike } from "react-icons/ai";
import { AiOutlineLike } from "react-icons/ai";
import { AiOutlineDislike } from "react-icons/ai";
import { AiFillDislike } from "react-icons/ai";
import { IoCheckmark } from "react-icons/io5";
import { IoFlashSharp } from "react-icons/io5";
import { CopyIcon } from "lucide-react";
import { Action, Actions } from "@/components/ui/actions";
import type { chatMessageDataType } from "@/types/ChatDataTypes";

interface ChatAssistentActionsInterface {
  index: number;
  message: chatMessageDataType;
  copied: number | null;
  setCopied: React.Dispatch<React.SetStateAction<number | null>>;
  handleLike: (index: number) => void;
  handleDislike: (index: number) => void;
}

function ChatAssistentActions({
  index,
  copied,
  setCopied,
  handleLike,
  handleDislike,
  message,
}: ChatAssistentActionsInterface) {
  return (
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
  );
}
export default ChatAssistentActions;
