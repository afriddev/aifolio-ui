import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import PageWrapper from "@/apputils/PageWrapper";

function FaqsMain() {
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
        "You can upload PDFs, DOCX, or text files, as well as YouTube URLs. Cortexvia processes these files securely for contextual querying.",
    },
    {
      question: "Is my data secure?",
      answer:
        "Yes. All uploaded content is encrypted in transit and at rest. Cortexvia never sells or shares user data with third parties.",
    },
    {
      question: "Do I need an API key?",
      answer:
        "Yes, each user receives unique Data and Model API keys to access Cortexvia’s AI endpoints securely.",
    },
    {
      question: "Can I use Cortexvia for my app?",
      answer:
        "Absolutely. Cortexvia provides an SDK and API integration for web and backend systems to enable custom AI-powered features.",
    },
    {
      question: "Does Cortexvia have a free plan?",
      answer:
        "Yes, the Free plan includes basic features, while Developer and Enterprise plans offer higher data limits and faster performance tiers.",
    },
    {
      question: "Can I delete my data?",
      answer:
        "Yes, you can permanently delete uploaded data and associated records anytime from your dashboard.",
    },
    {
      question: "How do I contact support?",
      answer:
        "You can reach our support team at support@cortexvia.com for technical or billing assistance.",
    },
    {
      question: "Is Cortexvia updated regularly?",
      answer:
        "Yes. We frequently release updates to improve model accuracy, API performance, and dashboard functionality.",
    },
  ];

  const navigate = useNavigate();

  return (
    <PageWrapper>
      <div className="flex flex-col items-center justify-center w-full pb-20">
        <div className="w-[50%] text-gray-800">
          <Button
            variant="ghost"
            className="mb-6 text-gray-600 hover:text-black focus:outline-none"
            onClick={() => navigate(-1)}
          >
            ← Back
          </Button>

          <h1 className="text-3xl font-semibold mb-2">
            Cortexvia Frequently Asked Questions (FAQ)
          </h1>
          <p className="text-sm mb-8">Date of Last Update: April 21, 2025</p>

          {faqs.map((faq, index) => (
            <div key={index} className="mb-6">
              <h2 className="font-bold text-[16px] mb-2">
                {index + 1}. {faq.question}
              </h2>
              <p className="text-[15px] leading-relaxed">{faq.answer}</p>
            </div>
          ))}

          <div className="mt-10">
            <h2 className="font-bold text-[16px] mb-2">Still Have Questions?</h2>
            <p className="text-[15px] leading-relaxed">
              For any additional questions or custom plan inquiries, contact us at{" "}
              <strong>support@cortexvia.com</strong>.
            </p>
          </div>
        </div>
      </div>
    </PageWrapper>
  );
}

export default FaqsMain;
