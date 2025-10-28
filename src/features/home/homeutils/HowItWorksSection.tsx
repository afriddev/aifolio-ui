import {
  AnimateWithType,
  MotionH2,
  MotionH4,
  MotionH5,
  MotionParagraph,
} from "@/apputils/MotionUtils";
import { HowItWorksSvg } from "@/apputils/SvgUtils";
import { CiFileOn } from "react-icons/ci";
import {  IoAddCircleOutline, IoRocketOutline } from "react-icons/io5";

function HowItWorksSection() {
  return (
    <div className="flex items-center justify-center flex-col gap-10 ">
      <div className="justify-between flex items-center gap-10 mt-5 lg:mt-32 lg:w-[70%] w-[95%]">
        <div className="flex flex-col gap-10">
          <div className="flex flex-col lg:items-center pb-5 gap-5 justify-center">
            <MotionH2 className="text-2xl lg:text-4xl justify-center gap-5 flex items-center">
              <HowItWorksSvg /> How Cortexvia Works
            </MotionH2>
            {/* <MotionParagraph className="text-foreground/70 lg:text-center   mt-4 max-w-2xl mx-auto">
              Cortexvia streamlines AI development from ingestion to deployment.
              With built-in RAG pipelines, model orchestration, and a unified
              SDK, you can transform your unstructured data into intelligent,
              query-ready knowledge systems—fast, secure, and scalable.
            </MotionParagraph> */}
          </div>

          <div className="flex flex-col lg:flex-row justify-between items-start gap-8 px-3 lg:w-full">
            <div className="lg:w-[25%] gap-2 flex flex-col">
              <AnimateWithType type="zoomIn">
                <div className="flex flex-col gap-1">
                  <div className="rounded p-2 bg-background text-foreground w-fit h-fit border">
                    <IoAddCircleOutline  className="w-5 h-5" />
                  </div>
                  <h5 className="text-foreground/60">CREATE</h5>
                </div>
              </AnimateWithType>

              <div className="flex flex-col gap-2">
                <MotionH4 className=" text-lg text-foreground    ">
                  Set up your workspace
                </MotionH4>
                <MotionParagraph className="text-foreground/80">
                  Generate secure API keys for Data and Model access. Choose
                  your speed tier — Normal, Medium, or Fast — and select
                  preferred LLMs to optimize cost, latency, and performance
                  across providers.
                </MotionParagraph>
              </div>
            </div>

            <div className="lg:w-[25%] gap-2 flex flex-col">
              <AnimateWithType type="zoomIn">
                <div className="flex flex-col gap-1">
                  <div className="rounded p-2 bg-background text-foreground w-fit h-fit border">
                    <CiFileOn  className="w-5 h-5" />
                  </div>
                  <h5 className="text-foreground/60">INGEST</h5>
                </div>
              </AnimateWithType>

              <div className="flex flex-col gap-2">
                <MotionH5 className="  text-lg">
                  Upload and index your data
                </MotionH5>
                <MotionParagraph className="text-foreground/80">
                  Upload PDFs, DOCX, TXT, or YouTube URLs. Cortexvia
                  automatically extracts content, generates embeddings, and
                  stores it in a secure vector database — ready for SmartRAG,
                  LightRAG, or GraphRAG retrieval.
                </MotionParagraph>
              </div>
            </div>

            <div className="lg:w-[25%] gap-2 flex flex-col">
              <AnimateWithType type="zoomIn">
                <div className="flex flex-col gap-1">
                  <div className="rounded p-2 bg-background text-foreground w-fit h-fit border">
                    <IoRocketOutline  className="w-5 h-5" />
                  </div>
                  <h5 className="text-foreground/60">DEPLOY</h5>
                </div>
              </AnimateWithType>
              <div className="flex flex-col gap-2">
                <MotionH4 className=" text-lg">
                  Launch your assistant anywhere
                </MotionH4>
                <MotionParagraph className="text-foreground/80">
                  Integrate the React Chatbot SDK or connect through REST APIs.
                  Deploy your assistant to web, apps, or internal dashboards
                  with context-aware, citation-backed responses powered by
                  Cortexvia’s RAG and model APIs.
                </MotionParagraph>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center w-full bg-white/50 mt-5">
        <MotionParagraph className="  w-full p-10 text-foreground text-center lg:w-[50%]">
          Cortexvia empowers developers and enterprises to turn unstructured
          data into actionable intelligence. From setup to deployment, every
          step is designed for speed, security, and seamless integration.
        </MotionParagraph>
      </div>
    </div>
  );
}

export default HowItWorksSection;
