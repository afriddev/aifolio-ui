// src/pages/Faqs.tsx

import Footer from "@/apputils/Footer";
import NavBar from "@/apputils/NavBar";
import PageWrapper from "@/apputils/PageWrapper";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/accordion";

import { motion } from "framer-motion";
import { FaBrain, FaCode, FaCogs, FaExclamationTriangle, FaFileUpload, FaGift, FaHeadset, FaKey, FaLock, FaRobot, FaSyncAlt, FaTachometerAlt, FaTrashAlt, FaUsers } from "react-icons/fa";


const faqs = [
  {
    question: "What is Cortexvia?",
    answer:
      "Cortexvia is a unified AI platform that lets users upload documents or YouTube videos, ask contextual questions using RAG, and access multiple AI models through a single API.",
    icon: <FaBrain className="text-indigo-500 w-6 h-6" />,
  },
  {
    question: "How does Cortexvia work?",
    answer:
      "Cortexvia uses Retrieval-Augmented Generation (RAG) to extract information from your uploaded data and combine it with AI reasoning, delivering precise, context-aware answers.",
    icon: <FaCogs className="text-blue-500 w-6 h-6" />,
  },
  {
    question: "What can I upload to Cortexvia?",
    answer:
      "You can upload documents such as PDFs, DOCX, or text files, and also add YouTube URLs. The system processes and indexes them for accurate AI-powered answers.",
    icon: <FaFileUpload className="text-green-500 w-6 h-6" />,
  },
  {
    question: "Do I need an API key to use Cortexvia?",
    answer:
      "Yes, each user is assigned a unique Data API key for querying uploaded data and a Model API key for accessing supported AI models.",
    icon: <FaKey className="text-yellow-500 w-6 h-6" />,
  },
  {
    question: "Which AI models are supported?",
    answer:
      "Cortexvia integrates with major providers such as OpenAI, Groq, and Cerebras, offering model selection by speed tiers — Normal, Medium, and Fast.",
    icon: <FaRobot className="text-teal-500 w-6 h-6" />,
  },
  {
    question: "Is there a free plan available?",
    answer:
      "Yes, the Free tier offers limited uploads and standard model access. The Developer plan provides faster speeds, larger data limits, and extended API usage.",
    icon: <FaGift className="text-purple-500 w-6 h-6" />,
  },
  {
    question: "How secure is my data?",
    answer:
      "All uploaded content is encrypted in transit and at rest. Data is used only to generate responses and is never shared with external parties.",
    icon: <FaLock className="text-gray-600 w-6 h-6" />,
  },
  {
    question: "Can I integrate Cortexvia into my app?",
    answer:
      "Yes. Cortexvia offers a React Chatbot Library and RAG SDK for easy integration into web apps, allowing contextual chat and data-driven interactions.",
    icon: <FaCode className="text-orange-500 w-6 h-6" />,
  },
  {
    question: "How fast are the responses?",
    answer:
      "Response speed depends on your plan tier — Fast (2000–2500 tokens/sec), Medium (700–1000), and Normal (200–500). Developer plans unlock higher throughput.",
    icon: <FaTachometerAlt className="text-red-500 w-6 h-6" />,
  },
  {
    question: "Can I share or transfer my API key?",
    answer:
      "No. API keys are tied to your account and must remain confidential. Sharing or redistributing keys may result in suspension or termination.",
    icon: <FaExclamationTriangle className="text-rose-600 w-6 h-6" />,
  },
  {
    question: "How do I contact support?",
    answer:
      "For technical or billing issues, reach us at support@Cortexvia.com or use the Help section on your dashboard for quick assistance.",
    icon: <FaHeadset className="text-green-400 w-6 h-6" />,
  },
  {
    question: "Can I delete my data from Cortexvia?",
    answer:
      "Yes. You can delete uploaded data anytime from your dashboard. Once deleted, the data is permanently removed from our systems.",
    icon: <FaTrashAlt className="text-red-500 w-6 h-6" />,
  },
  {
    question: "Is Cortexvia suitable for teams?",
    answer:
      "Absolutely. Team and enterprise plans support multi-user access, shared data spaces, and centralized API management.",
    icon: <FaUsers className="text-blue-600 w-6 h-6" />,
  },
  {
    question: "How often is Cortexvia updated?",
    answer:
      "We release regular updates for model performance, SDK improvements, and dashboard features to ensure a cutting-edge experience.",
    icon: <FaSyncAlt className="text-cyan-500 w-6 h-6" />,
  },
];


export default function FaqsMain() {
  return (
    <PageWrapper>
      <div className="flex flex-col">
        <NavBar />
        <div className="min-h-screen py-16 px-4 sm:px-6 lg:px-8">
          <motion.div
            className="lg:w-[80vw] mx-auto text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-3xl sm:text-4xl font-bold text-indigo-700 mb-4 font-montserrat">
              Frequently Asked Questions
            </h1>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto font-roboto leading-relaxed">
              Here are answers to common questions about Cortexvia.
            </p>
          </motion.div>

          <Accordion
            type="single"
            collapsible
            className="max-w-4xl mx-auto space-y-6"
          >
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border border-gray-200 rounded-md bg-white shadow-sm"
              >
                <AccordionTrigger className="p-4 text-lg font-medium text-gray-800 hover:bg-gray-100 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 font-montserrat flex items-center gap-3">
                  {faq.icon}
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="p-4 text-gray-600 text-base font-roboto leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
        <Footer />
      </div>
    </PageWrapper>
  );
}