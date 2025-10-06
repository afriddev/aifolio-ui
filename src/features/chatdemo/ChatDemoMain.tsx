import ChatMain from "../chat/ChatMain";

function ChatDemoMain() {
  return (
    <div className="flex w-full">
      <ChatMain inputToolBar={false} tempChat={true} />
    </div>
  );
}

export default ChatDemoMain;
