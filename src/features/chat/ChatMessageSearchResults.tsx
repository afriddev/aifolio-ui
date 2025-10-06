import {
  Source,
  Sources,
  SourcesContent,
  SourcesTrigger,
} from "@/components/ui/sources";
import type { chatMessageDataType } from "@/types/chatDataTypes";

interface ChatMessageSearchResultsInterface {
  message: chatMessageDataType;
}

function ChatMessageSearchResults({ message }: ChatMessageSearchResultsInterface) {
  return (
    <div>
      {message.searchResults && message.searchResults.length > 0 && (
        <Sources>
          <SourcesTrigger count={message.searchResults.length} />

          <SourcesContent>
            {message.searchResults.map((searchResult, index1) => {
              return (
                <Source
                  key={index1}
                  href={searchResult.url}
                  title={searchResult.title}
                />
              );
            })}
          </SourcesContent>
        </Sources>
      )}
    </div>
  );
}

export default ChatMessageSearchResults;
