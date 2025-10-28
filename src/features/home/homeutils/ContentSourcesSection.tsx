import {
  AnimateWithType,
  MotionH2,
  MotionH3,
  MotionParagraph,
} from "@/apputils/MotionUtils";
import { Button } from "@/components/ui/button";
import {
  IoDocumentText,
  IoLogoYoutube,
  IoCloudUpload,
  IoSyncCircle,
  IoCloudOutline,
} from "react-icons/io5";

function ContentSourcesSection() {
  return (
    <div className="flex flex-col items-center justify-center gap-20">
      <div className="flex flex-col items-center justify-center gap-12 mt-5 lg:mt-32 w-[95%] lg:w-[70%]">
        <div className="flex flex-col lg:flex-row bg-white/50 lg:gap-10 items-center">
          <div className="flex flex-col lg:flex-row gap-4 w-full text-foreground/80 items-center">
            <div className="flex flex-col gap-4 lg:max-w-[35vw] p-10 lg:p-20 ">
              <MotionH2 className="text-4xl lg:text-[50px] font-thin text-foreground tracking-tight">
                Teach Your AI with Supported Content Sources
              </MotionH2>
            </div>

            <div className="flex flex-col gap-10 lg:gap-5 p-5 lg:p-20  w-full text-foreground/80">
              <div className="flex items-start gap-3 lg:flex-row flex-col">
                <AnimateWithType
                 
                  className="w-10 h-10 lg:w-5 lg:h-5 border p-2 lg:p-0 lg:border-none"
                >
                  <IoDocumentText className="text-primary lg:w-5 w-5 h-5 lg:h-5 mt-1" />
                </AnimateWithType>
                <MotionParagraph>
                  <strong>Document Upload:</strong> Index PDF, DOC, TXT, and
                  HTML files with automatic text extraction and vector embedding
                  for instant RAG-ready data.
                </MotionParagraph>
              </div>

              <div className="flex items-start gap-3 lg:flex-row flex-col">
                <AnimateWithType
                 
                  className="w-10 h-10 lg:w-5 lg:h-5 border p-2 lg:p-0 lg:border-none"
                >
                  <IoLogoYoutube className="text-primary lg:w-5 w-5 h-5 lg:h-5 mt-1" />
                </AnimateWithType>
                <MotionParagraph>
                  <strong>YouTube Videos:</strong> Import videos or playlists
                  for transcription and semantic indexing — ideal for lectures,
                  tutorials, and webinars.
                </MotionParagraph>
              </div>

              <div className="flex items-start gap-3 lg:flex-row flex-col">
                <AnimateWithType
                 
                  className="w-10 h-10 lg:w-5 lg:h-5 border p-2 lg:p-0 lg:border-none"
                >
                  <IoCloudUpload className="text-primary lg:w-5 w-5 h-5 lg:h-5 mt-1" />
                </AnimateWithType>
                <MotionParagraph>
                  <strong>Other Sources:</strong> Integrate with Google Drive,
                  Dropbox, Confluence, and Zendesk to train your AI with
                  complete enterprise knowledge.
                </MotionParagraph>
              </div>

              <div className="flex items-start gap-3 lg:flex-row flex-col">
                <AnimateWithType
                 
                  className="w-10 h-10 lg:w-5 lg:h-5 border p-2 lg:p-0 lg:border-none"
                >
                  <IoSyncCircle className="text-primary lg:w-5 w-5 h-5 lg:h-5 mt-1" />
                </AnimateWithType>
                <MotionParagraph>
                  <strong>Seamless Updates:</strong> Automate content syncing
                  and keep your knowledge base always up to date with scheduled
                  refresh cycles.
                </MotionParagraph>
              </div>

              <AnimateWithType>
                <Button className="mt-6 rounded-lg py-3 px-6 transition-colors duration-200 font-medium w-fit">
                  Start Indexing Your Content
                </Button>
              </AnimateWithType>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center gap-6 bg-white rounded lg:rounded-xl p-8 w-full">
        <MotionH3 className="text-2xl  text-center  text-foreground">
          More Sources Coming Soon
        </MotionH3>
        <MotionParagraph className="text-foreground/60 text-center max-w-2xl">
          We’re expanding Cortexvia’s integrations for more content coverage and
          smarter RAG pipelines. Upcoming support includes enterprise connectors
          and real-time sync options.
        </MotionParagraph>

        <div className="flex flex-wrap gap-3 mt-4 justify-center">
          <AnimateWithType>
            <span className="px-4 py-2 bg-white rounded-full text-foreground/60 border lg:hover:bg-muted transition-colors duration-200 flex items-center gap-2">
              <IoCloudOutline className="w-4 h-4" /> OneDrive
            </span>
          </AnimateWithType>
          <AnimateWithType>
            <span className="px-4 py-2 bg-white rounded-full text-foreground/60 border lg:hover:bg-muted transition-colors duration-200 flex items-center gap-2">
              <IoCloudOutline className="w-4 h-4" /> Box
            </span>
          </AnimateWithType>
          <AnimateWithType>
            <span className="px-4 py-2 bg-white rounded-full text-foreground/60 border lg:hover:bg-muted transition-colors duration-200 flex items-center gap-2">
              <IoDocumentText className="w-4 h-4" /> WordPress
            </span>
          </AnimateWithType>
          <AnimateWithType>
            <span className="px-4 py-2 bg-white rounded-full text-foreground/60 border lg:hover:bg-muted transition-colors duration-200 flex items-center gap-2">
              <IoCloudOutline className="w-4 h-4" /> RSS Feeds
            </span>
          </AnimateWithType>
          <AnimateWithType>
            <span className="px-4 py-2 bg-white rounded-full text-foreground/60 border lg:hover:bg-muted transition-colors duration-200 flex items-center gap-2">
              <IoDocumentText className="w-4 h-4" /> Sitemaps
            </span>
          </AnimateWithType>
        </div>
      </div>
    </div>
  );
}

export default ContentSourcesSection;
