import {
  Reasoning,
  ReasoningContent,
  ReasoningTrigger,
} from "@/components/ui/reasoning";
import type { chatMessageDataType } from "@/types/chatDataTypes";

interface ChatMessageReasoningInterface {
  message: chatMessageDataType;
}

function ChatMessageReasoningContent({
  message,
}: ChatMessageReasoningInterface) {
  return (
    <div>
      {message.reasoningContent && (
        <Reasoning
          className="w-full"
          isStreaming={status === "streaming" ? true : false}
          defaultOpen={false}
        >
          <ReasoningTrigger />
          <ReasoningContent>{message.reasoningContent}</ReasoningContent>
        </Reasoning>
      )}
    </div>
  );
}

export default ChatMessageReasoningContent;
