import { Button } from "@/components/ui/button";
import { FaCircleCheck } from "react-icons/fa6";

function ContentSourcesSection() {
  return (
    <div className="flex flex-col items-center justify-center gap-12 mt-32 w-[70%]">
      <div className="flex items-center justify-center gap-12 mt-32">
        <div className="w-[35%]">
          <img alt="Sources" src="/docs2-t.png" className="w-[25vw] rounded-lg" />
        </div>
        <div className="flex flex-col gap-10 w-[50%]">
          <div className="flex flex-col gap-4 max-w-[35vw]">
            <h3 className="text-4xl font-bold text-foreground">
              Teach Your AI with Supported Content Sources
            </h3>
            <p className="text-lg text-foreground/70 leading-relaxed">
              Easily index your knowledge with drag-and-drop uploads for
              documents, YouTube videos, and other sources. Our platform
              automatically processes and indexes content using advanced RAG
              techniques, keeping your AI assistant up-to-date.
            </p>
          </div>

          <div className="flex flex-col gap-4 text-foreground/80">
            <div className="flex items-center gap-3">
              <div className="w-5 h-5">
                <FaCircleCheck className="w-4 h-4 text-constructive" />
              </div>
              <span>
                <strong>Document Upload:</strong> Index PDF, DOC, TXT, and HTML
                files with automatic text extraction and vector embedding.
              </span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-5 h-5">
                <FaCircleCheck className="w-4 h-4 text-constructive" />
              </div>
              <span>
                <strong>YouTube Videos:</strong> Import videos or playlists for
                transcription and indexing, ideal for tutorials and webinars.
              </span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-5 h-5">
                <FaCircleCheck className="w-4 h-4 text-constructive" />
              </div>
              <span>
                <strong>Other Sources:</strong> Explore integrations with Google
                Drive, Dropbox, Confluence, Zendesk, and more for comprehensive
                AI training.
              </span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-5 h-5">
                <FaCircleCheck className="w-4 h-4 text-constructive" />
              </div>
              <span>
                <strong>Seamless Updates:</strong> Schedule automatic updates to
                keep your AI assistant current with the latest content.
              </span>
            </div>
          </div>

          <Button className="rounded-lg px-6 py-3 w-fit">
            Start Indexing Your Content
          </Button>
        </div>
      </div>

      <div className="flex flex-col items-center gap-6 bg-gray-50 rounded-xl p-8 w-full">
        <h3 className="text-2xl font-semibold text-foreground">
          More Sources Coming Soon
        </h3>
        <p className="text-foreground/60 text-center max-w-2xl">
          We're actively expanding our content source integrations. Stay tuned
          for support for OneDrive, Box, WordPress, RSS feeds, and advanced URL
          crawling features.
        </p>
        <div className="flex flex-wrap gap-3 mt-4 justify-center">
          <span className="px-4 py-2 bg-white rounded-full text-foreground/60 border border-gray-200 hover:bg-gray-100 transition-colors duration-200">
            OneDrive
          </span>
          <span className="px-4 py-2 bg-white rounded-full text-foreground/60 border border-gray-200 hover:bg-gray-100 transition-colors duration-200">
            Box
          </span>
          <span className="px-4 py-2 bg-white rounded-full text-foreground/60 border border-gray-200 hover:bg-gray-100 transition-colors duration-200">
            WordPress
          </span>
          <span className="px-4 py-2 bg-white rounded-full text-foreground/60 border border-gray-200 hover:bg-gray-100 transition-colors duration-200">
            RSS Feeds
          </span>
          <span className="px-4 py-2 bg-white rounded-full text-foreground/60 border border-gray-200 hover:bg-gray-100 transition-colors duration-200">
            Sitemaps
          </span>
        </div>
      </div>
    </div>
  );
}

export default ContentSourcesSection;
