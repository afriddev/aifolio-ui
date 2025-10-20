import { FaCircleCheck } from "react-icons/fa6";

function NoCodeSection() {
  return (
    <div className="justify-between flex items-center gap-10 mt-32 w-[70%] ">
      <div>
        <img alt="no code" src="/nocode.png" className="w-[30vw]" />
      </div>
      <div className="flex   flex-col gap-10">
        <div className=" gap-2 max-w-[30vw] flex flex-col">
          <h3 className="text-3xl font-bold">
            Build intelligent apps with AI-powered RAG, minimal coding required
          </h3>
          <p className="text-foreground/70 text-xl">
            Embed our React Chatbot Library and RAG SDK into web, React Native,
            or PWA apps in minutes—no heavy setup needed.
          </p>
        </div>

        <div className="flex  flex-col gap-2 text-foreground/70">
          <div className="flex items-center gap-3 ">
            <FaCircleCheck className="text-constructive w-5 h-5" /> Intuitive
            SDKs Easy APIs for RAG and multi-model inference
          </div>
          <div className="flex items-center gap-3 ">
            <FaCircleCheck className="text-constructive w-5 h-5" /> Customizable
            Themeable UI Custom components matching your app's branding.
          </div>
          <div className="flex items-center gap-3 ">
            <FaCircleCheck className="text-constructive w-5 h-5" /> Seamless
            Plug-and-Play Integration Seamless. No backend hassle.
          </div>
        </div>
      </div>
    </div>
  );
}

export default NoCodeSection;
