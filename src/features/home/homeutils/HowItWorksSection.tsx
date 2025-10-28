import {
  AnimateWithType,
  MotionH4,
  MotionParagraph,
} from "@/apputils/MotionUtils";
import { IoAddCircle, IoDocument, IoRocket } from "react-icons/io5";

function HowItWorksSection() {
  return (
    <div className="justify-between flex items-center gap-10 mt-5 lg:mt-32 lg:w-[70%] w-[95%]">
      <div className="flex flex-col gap-10">
        <div className="flex flex-col lg:items-center pb-5 gap-5 justify-center">
          <MotionH4 className="text-3xl lg:text-4xl font-medium">
            How Cortexvia Works
          </MotionH4>
          <MotionParagraph className="text-center lg:w-[60%] text-foreground/70">
            Cortexvia streamlines AI development from ingestion to deployment.
            With built-in RAG pipelines, model orchestration, and a unified SDK,
            you can transform your unstructured data into intelligent,
            query-ready knowledge systems—fast, secure, and scalable.
          </MotionParagraph>
        </div>

        <div className="flex flex-col lg:flex-row justify-between items-start gap-8 px-3 lg:w-full">
          <div className="lg:w-[25%] gap-2 flex flex-col">
            <AnimateWithType type="zoomIn">
              <div className="flex flex-col gap-1">
                <div className="rounded p-2 bg-background text-foreground w-fit h-fit border">
                  <IoAddCircle className="w-5 h-5" />
                </div>
                <h5 className="text-foreground/60">CREATE</h5>
              </div>
            </AnimateWithType>

            <div className="flex flex-col gap-2">
              <MotionH4 className="font-medium text-lg">
                Set up your workspace
              </MotionH4>
              <MotionParagraph className="text-foreground/80">
                Generate secure API keys for Data and Model access. Choose your
                speed tier — Normal, Medium, or Fast — and select preferred LLMs
                to optimize cost, latency, and performance across providers.
              </MotionParagraph>
            </div>
          </div>

          <div className="lg:w-[25%] gap-2 flex flex-col">
            <AnimateWithType type="zoomIn">
              <div className="flex flex-col gap-1">
                <div className="rounded p-2 bg-background text-foreground w-fit h-fit border">
                  <IoDocument className="w-5 h-5" />
                </div>
                <h5 className="text-foreground/60">INGEST</h5>
              </div>
            </AnimateWithType>

            <div className="flex flex-col gap-2">
              <MotionH4 className="font-medium text-lg">
                Upload and index your data
              </MotionH4>
              <MotionParagraph className="text-foreground/80">
                Upload PDFs, DOCX, TXT, or YouTube URLs. Cortexvia automatically
                extracts content, generates embeddings, and stores it in a
                secure vector database — ready for SmartRAG, LightRAG, or
                GraphRAG retrieval.
              </MotionParagraph>
            </div>
          </div>

          <div className="lg:w-[25%] gap-2 flex flex-col">
            <AnimateWithType type="zoomIn">
              <div className="flex flex-col gap-1">
                <div className="rounded p-2 bg-background text-foreground w-fit h-fit border">
                  <IoRocket className="w-5 h-5" />
                </div>
                <h5 className="text-foreground/60">DEPLOY</h5>
              </div>
            </AnimateWithType>
            <div className="flex flex-col gap-2">
              <MotionH4 className="font-medium text-lg">
                Launch your assistant anywhere
              </MotionH4>
              <MotionParagraph className="text-foreground/80">
                Integrate the React Chatbot SDK or connect through REST APIs.
                Deploy your assistant to web, apps, or internal dashboards with
                context-aware, citation-backed responses powered by Cortexvia’s
                RAG and model APIs.
              </MotionParagraph>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center mt-5">
          <MotionParagraph className="  border p-10 text-foreground text-center lg:w-[70%]">
            Cortexvia empowers developers and enterprises to turn unstructured
            data into actionable intelligence. From setup to deployment, every
            step is designed for speed, security, and seamless integration.
          </MotionParagraph>
        </div>
      </div>
    </div>
  );
}

export default HowItWorksSection;
