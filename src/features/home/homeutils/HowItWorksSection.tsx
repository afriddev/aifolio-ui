import { IoAddCircle, IoDocument, IoRocket } from "react-icons/io5";

function HowItWorksSection() {
  return (
    <div className="justify-between flex items-center gap-10 mt-5 lg:mt-32 lg:w-[70%] w-[95%] ">
      <div className="flex flex-col gap-10">
        <div className="flex flex-col items-center  pb-5 gap-5 justify-center">
          <h1 className="text-4xl  font-bold ">How Cortexvia Works</h1>
          <p className="text-lg text-center  lg:w-[70%] text-foreground/70">
            Build your custom RAG-powered AI assistant in four effortless
            steps—no coding or backend expertise needed. Our streamlined
            platform empowers developers and teams to upload data, query
            intelligently, and deploy scalable chatbots in minutes, delivering
            precise, context-aware responses every time.
          </p>
        </div>
        <div className="flex flex-col lg:flex-row  justify-between items-start gap-8  px-3 lg:w-full">
          <div className="lg:w-[25%] gap-2 flex flex-col">
            <div className="flex flex-col gap-1">
              <div className="rounded p-2 bg-primary w-fit h-fit text-background">
                <IoAddCircle className="w-5 h-5" />
              </div>
              <h5 className="text-foreground/60">CREATE</h5>
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="font-semibold text-xl">
                Build your RAG assistant in minutes
              </h3>
              <p className="text-foreground/80">
                Set up with secure API keys and privacy controls, then select
                from speed tiers and multi-provider models to align with your
                performance and cost needs.
              </p>
            </div>
          </div>

          <div className="lg:w-[25%] gap-2 flex flex-col">
            <div className="flex flex-col gap-1">
              <div className="rounded p-2 bg-primary w-fit h-fit text-background">
                <IoDocument className="w-5 h-5" />
              </div>
              <h5 className="text-foreground/60">TRAIN</h5>
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="font-semibold text-xl">Upload your source data</h3>
              <p className="text-foreground/80">
                Drag-and-drop documents, PDFs, or YouTube URLs for automatic
                text extraction, vector embeddings, and indexing in our secure
                vector database—ready for RAG querying in seconds.
              </p>
            </div>
          </div>

          

          <div className="lg:w-[25%] gap-2 flex flex-col">
            <div className="flex flex-col gap-1">
              <div className="rounded p-2 bg-primary w-fit h-fit text-background">
                <IoRocket className="w-5 h-5" />
              </div>
              <h5 className="text-foreground/60">LAUNCH</h5>
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="font-semibold text-xl">
                Deploy your assistant anywhere
              </h3>
              <p className="text-foreground/80">
                Embed the themeable React chatbot in your app, expose via
                Data/Model APIs for custom integrations, or connect to workflows
                with seamless support  and more.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HowItWorksSection;
