import { Button } from "@/components/ui/button";

function CreateFirstSection() {
  return (
    <div className="justify-center text-background   flex items-center gap-10 mt-32 relative ">
      <div>
        <img src="bg-banner.png" className=" rounded   " />
      </div>

      <div className="flex absolute gap-10 flex-col w-full items-center">
        <h1 className="text-[60px] font-semibold">Create your first RAG workflow today</h1>
        <p className="text-center text-lg max-w-[50%] text-background/90">
          Create your first RAG powered workflow in Cortexvia today: Simply upload a document, PDF, or YouTube video URL to build your knowledge base, then query it with natural language questions for context aware, cited responses. In minutes, integrate multi-model inference via our SDKs and deploy a fully customizable React chatbot streamlined for developers, scalable for teams, and hallucination-free for reliable results. No backend hassle, just pure AI acceleration.
        </p>
        <Button className=" mt-10 px-6 py-3 rounded-lg">Get Started for Free</Button>
      </div>
    </div>
  );
}

export default CreateFirstSection;
