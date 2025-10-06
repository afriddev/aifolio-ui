import type { chatMessageDataType } from "@/types/ChatDataTypes";

interface ChatMessageAvatarInterface {
  message: chatMessageDataType;
}

function ChatMessageAvatar({ message }: ChatMessageAvatarInterface) {
  return (
    <div
      className={`${
        message.role === "user" ? "mt-3  -right-5" : "mt-3  -left-5"
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
  );
}

export default ChatMessageAvatar;
