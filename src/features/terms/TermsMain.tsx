import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

import { Button } from "@/components/ui/button";
import {
  ClipboardList,
  Briefcase,
  FileText,
  DollarSign,
  AlertTriangle,
  Phone,
  RefreshCcw,
  Slash,
  Shield,
  Key,
} from "lucide-react";
import PageWrapper from "@/apputils/PageWrapper";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/accordion";

const sections = [
  {
    id: "summary",
    title: "Overview",
    icon: <Briefcase className="w-6 h-6 text-blue-500" />,
    content: (
      <>
        <p className="mb-4 text-sm">
          Welcome to Cortexvia – an intelligent AI platform offering document,
          video, and model-based solutions. By accessing our website, APIs, SDK,
          or chatbot library, you agree to the following Terms & Conditions.
          These ensure fair use, user safety, and compliance with global data
          standards.
        </p>
      </>
    ),
  },
  {
    id: "usage",
    title: "Platform Usage",
    icon: <ClipboardList className="w-6 h-6 text-green-500" />,
    content: (
      <>
        <p className="mb-4">
          Cortexvia provides tools for data uploads, retrieval-augmented
          generation (RAG), and AI model interaction. You may not use the
          platform to store, distribute, or generate content that is illegal,
          offensive, or violates intellectual property laws.
        </p>
        <p className="mb-4">
          Any misuse, including automated scraping, spamming, or exploiting
          system vulnerabilities, is strictly prohibited. Violations may result
          in immediate suspension or legal action.
        </p>
      </>
    ),
  },
  {
    id: "api-keys",
    title: "API Keys & Access",
    icon: <Key className="w-6 h-6 text-orange-500" />,
    content: (
      <>
        <p className="mb-4">
          Each user account is assigned unique Data and Model API keys. Keep
          them secure and never share or resell them. Unauthorized access or key
          abuse (e.g., key sharing or excessive requests) may lead to key
          revocation and account suspension.
        </p>
        <p>
          Cortexvia reserves the right to monitor API usage to maintain service
          stability and prevent abuse.
        </p>
      </>
    ),
  },
  {
    id: "plans",
    title: "Plans & Billing",
    icon: <DollarSign className="w-6 h-6 text-yellow-500" />,
    content: (
      <>
        <p className="mb-4">
          We offer Free and Developer plans with defined Word, speed, and data
          limits. Billing occurs monthly through secure payment gateways.
          Upgrades or downgrades can be managed from your dashboard.
        </p>
        <p>
          Refunds are only processed for verified service interruptions caused
          by Cortexvia. Subscription cancellations must occur before the next
          billing cycle.
        </p>
      </>
    ),
  },
  {
    id: "privacy",
    title: "Data & Privacy",
    icon: <Shield className="w-6 h-6 text-purple-500" />,
    content: (
      <>
        <p className="mb-4">
          We prioritize data security and privacy. Uploaded content is processed
          securely and may be temporarily cached for model inference. Cortexvia
          does not sell, rent, or distribute user data to third parties.
        </p>
        <p>
          Users retain ownership of their uploaded content but grant Cortexvia a
          limited license to process it for AI-based operations.
        </p>
      </>
    ),
  },
  {
    id: "limitations",
    title: "Usage Limitations",
    icon: <AlertTriangle className="w-6 h-6 text-red-500" />,
    content: (
      <>
        <p className="mb-4">
          Users must comply with all rate limits and usage restrictions.
          Generating or distributing harmful, biased, or misleading content via
          Cortexvia is strictly forbidden.
        </p>
        <p>
          Cortexvia reserves the right to throttle or restrict access to protect
          platform performance and maintain ethical AI practices.
        </p>
      </>
    ),
  },
  {
    id: "liability",
    title: "Liability Disclaimer",
    icon: <FileText className="w-6 h-6 text-gray-600" />,
    content: (
      <>
        <p className="mb-4">
          Cortexvia is provided “as is” without warranties. We are not liable
          for losses arising from system downtime, AI output errors, or
          third-party misuse. Users are responsible for verifying generated
          content before publication or decision-making.
        </p>
      </>
    ),
  },
  {
    id: "termination",
    title: "Account Termination",
    icon: <Slash className="w-6 h-6 text-pink-500" />,
    content: (
      <>
        <p className="mb-4">
          Accounts can be terminated due to policy violations, non-payment, or
          prolonged inactivity. Once terminated, all user data may be deleted
          without recovery. Backup critical data before closure.
        </p>
        <p>
          Cortexvia reserves the right to deny future registrations from users
          involved in prior misuse or violations.
        </p>
      </>
    ),
  },
  {
    id: "updates",
    title: "Policy Updates",
    icon: <RefreshCcw className="w-6 h-6 text-teal-500" />,
    content: (
      <>
        <p className="mb-4">
          Cortexvia may update these Terms periodically to reflect legal or
          technical changes. Continued use of the platform after such updates
          implies acceptance of revised terms.
        </p>
        <p>
          Users are advised to review this page regularly for the latest
          updates.
        </p>
      </>
    ),
  },
  {
    id: "contact",
    title: "Contact & Support",
    icon: <Phone className="w-6 h-6 text-blue-400" />,
    content: (
      <>
        <p className="mb-4">For legal or technical assistance, contact:</p>
        <p className="mb-2">
          <strong>Email:</strong> support@Cortexvia.com
        </p>
        <p className="mb-2">
          <strong>Phone:</strong> +91 98765 43210
        </p>
        <p>
          <strong>Address:</strong> 45 Data Hub Street, Bangalore, Karnataka,
          India
        </p>
      </>
    ),
  },
];


const TermsMain: React.FC = () => {
  const navigate = useNavigate();

  return (
    <PageWrapper>
      <div className="flex flex-col h-full w-full ">
        <div className=" w-full justify-center flex h-full  ">
          <div className="lg:w-[80vw] py-12 px-4 sm:px-6 lg:px-8">
            <Button
              variant="ghost"
              className="mb-6 text-gray-600 hover:text-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              onClick={() => navigate(-1)}
            >
              ← Back
            </Button>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-3xl sm:text-4xl font-bold text-indigo-700 mb-4 font-montserrat">
                Cortexvia Terms & Conditions
              </h1>
              <p className="text-lg text-gray-700 mb-8 font-roboto">
                Effective Date: April 21, 2025
              </p>

              <Card className="mb-8 shadow-lg bg-white">
                <CardHeader className=" border-b border-gray-200">
                  <h2 className="text-2xl mt-3 font-semibold text-indigo-700 flex items-center space-x-2 font-montserrat">
                    {sections[0].icon}
                    <span className="">{sections[0].title}</span>
                  </h2>
                </CardHeader>
                <CardContent className="p-6 text-gray-700 font-roboto leading-relaxed">
                  {sections[0].content}
                </CardContent>
              </Card>

              <Accordion type="single" collapsible className="space-y-4">
                {sections.slice(1).map((section) => (
                  <AccordionItem
                    key={section.id}
                    value={section.id}
                    className="border border-gray-200 rounded-md bg-white shadow-sm"
                  >
                    <AccordionTrigger className="p-4 text-gray-800 hover:bg-gray-100 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 font-montserrat">
                      <div className="flex items-center space-x-2">
                        {section.icon}
                        <span className="font-medium">{section.title}</span>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="p-4 text-gray-600 font-roboto leading-relaxed">
                      {section.content}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>

              <motion.div
                className="mt-12 text-center"
                initial={{ scale: 0.9 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5 }}
              >
                <Button
                  size="lg"
                  className="bg-indigo-600 text-white hover:bg-indigo-700 shadow-md hover:shadow-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  onClick={() => navigate("/signup")}
                >
                  Get Started
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </div>

      </div>
    </PageWrapper>
  );
};

export default TermsMain;
