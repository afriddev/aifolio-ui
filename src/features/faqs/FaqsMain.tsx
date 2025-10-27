import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import PageWrapper from "@/apputils/PageWrapper";
import { MotionDiv, MotionH3, MotionH5, MotionParagraph } from "@/apputils/MotionUtils";

const FaqsMain: React.FC = () => {
  const navigate = useNavigate();
  const faqs = [
    {
      question: "What is Cortexvia?",
      answer:
        "Cortexvia is an AI platform that enables users to upload documents or YouTube videos and interact with them using advanced AI models and RAG-based contextual understanding.",
    },
    {
      question: "How does Cortexvia work?",
      answer:
        "Cortexvia uses Retrieval-Augmented Generation (RAG) to extract relevant data from your uploads and combine it with AI reasoning for precise contextual answers.",
    },
    {
      question: "What types of data can I upload?",
      answer:
        "You can upload PDFs, DOCX, TXT, Markdown files, or YouTube URLs. Cortexvia processes these securely for contextual querying, with limits based on your plan (Free, Developer, Enterprise).",
    },
    {
      question: "Is my data secure?",
      answer:
        "Yes. All uploaded content is encrypted in transit and at rest. Cortexvia does not sell or share user data with third parties, as detailed in our Privacy Policy.",
    },
    {
      question: "Do I need an API key?",
      answer:
        "Yes, each user receives unique Data and Model API keys to securely access Cortexvia’s AI endpoints, including RAG pipelines and LLM inference.",
    },
    {
      question: "Can I use Cortexvia for my app?",
      answer:
        "Absolutely. Cortexvia provides SDKs (e.g., CortexRAG, EmbiRankis, Chatbot Library) and API integration for web and backend systems to enable custom AI-powered features.",
    },
    {
      question: "Does Cortexvia have a free plan?",
      answer:
        "Yes, the Free plan includes limited document uploads, video processing, and query volume. Developer and Enterprise plans offer higher limits and faster performance tiers (e.g., High Speed Flash).",
    },
    {
      question: "Can I delete my data?",
      answer:
        "Yes, you can permanently delete uploaded data and associated records anytime from your dashboard, ensuring full control over your content.",
    },
    {
      question: "How do I contact support?",
      answer:
        "Reach our support team at support@cortexvia.com or +91 98765 43210 for technical, billing, or custom plan inquiries.",
    },
    {
      question: "Is Cortexvia updated regularly?",
      answer:
        "Yes. We frequently release updates to enhance model accuracy, API performance, and dashboard functionality, with details available at cortexvia.com.",
    },
    {
      question: "What are the usage limits for Cortexvia?",
      answer:
        "Usage limits vary by plan (Free, Developer, Enterprise) and include restrictions on document uploads, video processing, and query volume (RPM, RPD, TPM, TPD). Full details are available at cortexvia.com.",
    },
    {
      question: "Does Cortexvia support third-party integrations?",
      answer:
        "Yes, Cortexvia supports integrations with third-party services like OpenAI-compatible endpoints. You are responsible for complying with third-party terms when using these integrations.",
    },
  ];

  return (
    <PageWrapper>
      <div className="flex flex-col items-center justify-center w-full pb-20">
        <div className="px-4 lg:px-0 lg:w-[50%] text-gray-800">
          <MotionDiv>
            <Button
              variant="ghost"
              onClick={() => navigate(-1)}
            >
              ← Back
            </Button>
          </MotionDiv>

          <MotionH3>Cortexvia Frequently Asked Questions (FAQ)</MotionH3>
          <MotionParagraph>
            Date of Last Update: April 21, 2025
          </MotionParagraph>

          {faqs.map((faq, index) => (
            <MotionDiv key={index}>
              <MotionH5>
                {index + 1}. {faq.question}
              </MotionH5>
              <MotionParagraph>
                {faq.answer}
              </MotionParagraph>
            </MotionDiv>
          ))}

          <MotionDiv>
            <MotionH5>Still Have Questions?</MotionH5>
            <MotionParagraph>
              For additional questions or custom plan inquiries, contact us at{" "}
              <strong>support@cortexvia.com</strong> or +91 98765 43210.
            </MotionParagraph>
          </MotionDiv>
        </div>
      </div>
    </PageWrapper>
  );
};

export default FaqsMain;