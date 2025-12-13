import {
  AnimateWithType,
  MotionH2,
  MotionParagraph,
} from "@/apputils/MotionUtils";
import { SourcesSvg } from "@/apputils/SvgUtils";
import { Button } from "@/components/ui/button";
import {
  IoDocumentText,
  IoLogoYoutube,
  IoCloudUpload,
  IoSyncCircle,
} from "react-icons/io5";

function ContentSourcesSection() {
  return (
    <div className="flex lg:flex-row flex-col items-center justify-center">
      <div className="flex flex-col bg-white/50 gap-5 p-5 py-10 lg:p-20 lg:gap-10 items-center">
        <div className="flex flex-col gap-4 lg:items-center">
          <MotionH2 className="flex items-center gap-5 tracking-tight">
            <SourcesSvg />
            Teach Your AI with Supported Content Sources
          </MotionH2>
        </div>

        <div className="flex lg:flex-row flex-col lg:mt-16 mt-5 gap-10 lg:gap-10 w-full text-foreground/80">
          <div className="flex items-start gap-1 lg:gap-8 flex-col">
            <AnimateWithType className="w-10 h-10 lg:w-5 lg:h-5">
              <IoDocumentText className="lg:w-8 w-6 h-6 lg:h-8 mt-1 text-foreground/70" />
            </AnimateWithType>
            <MotionParagraph>
              <strong>Document Upload:</strong> Index PDF, DOC, TXT, and HTML
              files with automatic text extraction and vector embedding for
              instant RAG-ready data.
            </MotionParagraph>
          </div>

          <div className="flex items-start gap-1 lg:gap-8 flex-col">
            <AnimateWithType className="w-10 h-10 lg:w-5 lg:h-5">
              <IoLogoYoutube className="lg:w-8 w-6 h-6 lg:h-8 mt-1 text-foreground/70" />
            </AnimateWithType>
            <MotionParagraph>
              <strong>YouTube Videos:</strong> Import videos or playlists for
              transcription and semantic indexing — ideal for lectures,
              tutorials, and webinars.
            </MotionParagraph>
          </div>

          <div className="flex items-start gap-1 lg:gap-8 flex-col">
            <AnimateWithType className="w-10 h-10 lg:w-5 lg:h-5">
              <IoCloudUpload className="lg:w-8 w-6 h-6 lg:h-8 mt-1 text-foreground/70" />
            </AnimateWithType>
            <MotionParagraph>
              <strong>Other Sources:</strong> Integrate with Google Drive,
              Dropbox, Confluence, and Zendesk to train your AI with complete
              enterprise knowledge.
            </MotionParagraph>
          </div>

          <div className="flex items-start gap-1 lg:gap-8 flex-col">
            <AnimateWithType className="w-10 h-10 lg:w-5 lg:h-5">
              <IoSyncCircle className="lg:w-8 w-6 h-6 lg:h-8 mt-1 text-foreground/70" />
            </AnimateWithType>
            <MotionParagraph>
              <strong>Seamless Updates:</strong> Automate content syncing and
              keep your knowledge base always up to date with scheduled refresh
              cycles.
            </MotionParagraph>
          </div>
        </div>

        <AnimateWithType>
          <Button
            variant="outline"
            className="mt-6 rounded-lg py-3 px-6 transition-colors duration-200 font-medium bg-foreground text-background hover:bg-foreground/90  hover:text-white w-fit"
          >
            Start Indexing Your Content
          </Button>
        </AnimateWithType>
      </div>
    </div>
  );
}

export default ContentSourcesSection;
