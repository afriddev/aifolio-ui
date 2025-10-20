import { Button } from "@/components/ui/button";
import { FaCircleCheck } from "react-icons/fa6";

function NoCodeSection() {
  return (
    <div className="flex items-center justify-center gap-12 mt-32 w-[70%]">
      
      <div className="flex flex-col gap-10 w-[50%]">
        <div className="flex flex-col gap-4 max-w-[35vw]">
          <h3 className="text-4xl font-bold text-foreground">
            Create AI-Powered Apps with Minimal Coding
          </h3>
          <p className="text-lg text-foreground/70 leading-relaxed">
            Seamlessly integrate our React Chatbot Library and RAG SDK into web,
            React Native, or PWA apps in minutes—no complex setup or backend
            expertise required.
          </p>
        </div>

        <div className="flex flex-col gap-4 text-foreground/80">
          <div className="flex items-center gap-3">
            <div className="w-5 h-5">
              <FaCircleCheck className="w-4 h-4 text-constructive" />
            </div>
            <span>
              <strong>Intuitive SDKs:</strong> User-friendly APIs for RAG
              querying and multi-model inference, simplifying development.
            </span>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-5 h-5">
              <FaCircleCheck className="w-4 h-4 text-constructive" />
            </div>
            <span>
              <strong>Customizable UI:</strong> Themeable components to align
              perfectly with your app’s branding and design.
            </span>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-5 h-5">
              <FaCircleCheck className="w-4 h-4 text-constructive" />
            </div>
            <span>
              <strong>Seamless Integration:</strong> Plug-and-play chatbot with
              Data/Model APIs for effortless setup across platforms.
            </span>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-5 h-5">
              <FaCircleCheck className="w-4 h-4 text-constructive" />
            </div>
            <span>
              <strong>Rapid Deployment:</strong> Launch AI-powered features
              quickly, without complexity.
            </span>
          </div>
        </div>
        <Button className="rounded-lg px-6 py-3 w-fit">Get Started Now</Button>
      </div>
      <div className="w-[35%]">
        <img alt="No Code" src="/no-code.jpg" className="w-[25vw] rounded-lg" />
      </div>
    </div>
  );
}

export default NoCodeSection;
