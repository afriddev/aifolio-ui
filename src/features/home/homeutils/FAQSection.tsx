import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/accordion";
import { FaQuestionCircle } from 'react-icons/fa';
import { Button } from "@/components/ui/button";

const faqs = [
  {
    id: "faq-1",
    icon: <FaQuestionCircle className="w-5 h-5 text-indigo-500" />,
    title: "What is Cortexvia?",
    content: "Cortexvia is an AI platform that enables you to build, deploy, and manage intelligent chatbots using advanced RAG (Retrieval-Augmented Generation) techniques, supporting a wide range of content sources and integrations."
  },
  {
    id: "faq-2",
    icon: <FaQuestionCircle className="w-5 h-5 text-indigo-500" />,
    title: "How do I get started?",
    content: "Sign up for a free account on our website, upload your content, and use our intuitive interface or APIs to create your AI assistant in minutes."
  },
  {
    id: "faq-3",
    icon: <FaQuestionCircle className="w-5 h-5 text-indigo-500" />,
    title: "What content types are supported?",
    content: "We support documents (PDF, DOC, TXT), YouTube videos, Google Drive, Dropbox, and more, with additional sources like OneDrive and WordPress coming soon."
  },
  {
    id: "faq-4",
    icon: <FaQuestionCircle className="w-5 h-5 text-indigo-500" />,
    title: "Is my data secure?",
    content: "Yes, Cortexvia offers SOC 2 Type II certification, GDPR compliance, end-to-end encryption (TLS & AES-256), and granular access controls to protect your data."
  },
  {
    id: "faq-5",
    icon: <FaQuestionCircle className="w-5 h-5 text-indigo-500" />,
    title: "Can I integrate with my existing tools?",
    content: "Absolutely! Integrate with Slack, Microsoft Teams, ticketing systems, and more using our widgets or powerful APIs tailored to your workflow."
  },
  {
    id: "faq-6",
    icon: <FaQuestionCircle className="w-5 h-5 text-indigo-500" />,
    title: "What are the pricing plans?",
    content: "We offer a free plan with 10,000 tokens/day and a Developer plan with 1,000,000 tokens/day for $20/₹1,650/month. Visit our pricing page for details."
  },
  {
    id: "faq-7",
    icon: <FaQuestionCircle className="w-5 h-5 text-indigo-500" />,
    title: "How often is content updated?",
    content: "You can schedule automatic updates to keep your AI assistant current, with real-time sync options for connected sources like Google Drive."
  },
  {
    id: "faq-8",
    icon: <FaQuestionCircle className="w-5 h-5 text-indigo-500" />,
    title: "Do you offer support?",
    content: "Yes, free users get community support via Discord, while Developer plan users receive priority email and Discord support."
  }
];

function FAQSection() {
  return (
    <div className="flex flex-col items-center gap-12 mt-32 w-[90%] max-w-7xl mx-auto">
      <div className="flex flex-col items-center gap-6 text-center">
        <h2 className="text-4xl font-semibold text-foreground tracking-tight">
          Frequently Asked Questions
        </h2>
        <p className="text-lg text-foreground/60 leading-relaxed max-w-3xl">
          Get quick answers to common queries about Cortexvia’s features, security, and usage to help you get started with confidence.
        </p>
      </div>

      <Accordion type="single" collapsible className="w-full space-y-4">
        {faqs.map((faq) => (
          <AccordionItem
            key={faq.id}
            value={faq.id}
            className="border border-gray-200 rounded-lg bg-white shadow-md hover:shadow-lg transition-shadow duration-200"
          >
            <AccordionTrigger className="p-6 text-foreground hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 font-medium">
              <div className="flex items-center space-x-3">
                {faq.icon}
                <span>{faq.title}</span>
              </div>
            </AccordionTrigger>
            <AccordionContent className="p-6 text-foreground/70 leading-relaxed">
              {faq.content}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>

      <Button className="px-8 py-4 bg-indigo-500 text-white rounded-xl hover:bg-indigo-600 transition-colors duration-200 font-medium text-lg">
        Contact Support for More Help
      </Button>
    </div>
  );
}

export default FAQSection;