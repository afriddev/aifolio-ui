import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

import { Button } from "@/components/ui/button";
import {
  Shield,
  ClipboardList,
  Database,
  Zap,
  Globe,
  FileLock,
  Eye,
  UserCheck,
  Clock,
  FileWarning,
  Phone,
  DollarSign,
  AlertTriangle,
  FileText,
  Slash,
} from "lucide-react";
import PageWrapper from "@/apputils/PageWrapper";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/accordion";

const sections = [
  {
    id: "summary",
    title: "Summary",
    icon: <Shield className="w-6 h-6 text-indigo-500" />,
    content: (
      <p className="mb-4 text-sm">
        Cortexavi values your privacy and trust. These Terms & Conditions and Privacy Policy explain how we handle your data, govern your access to our AI services, and outline your rights as a user. By using Cortexavi, you agree to comply with these policies in full.
      </p>
    ),
  },
  {
    id: "definitions",
    title: "Definitions",
    icon: <ClipboardList className="w-6 h-6 text-blue-500" />,
    content: (
      <p className="mb-4">
        <strong>“User”</strong> refers to any individual or organization accessing Cortexavi.{" "}
        <strong>“Services”</strong> include document/video upload, model APIs, SDKs, and chatbot features.{" "}
        <strong>“Personal Data”</strong> means information that identifies you directly or indirectly, like your name, email, or usage logs.
      </p>
    ),
  },
  {
    id: "data-collected",
    title: "Data We Collect",
    icon: <Database className="w-6 h-6 text-green-500" />,
    content: (
      <ul className="list-disc ml-6 space-y-2">
        <li>Name and Email Address (for account setup)</li>
        <li>Uploaded files and YouTube URLs (for RAG processing)</li>
        <li>API usage logs and analytics</li>
        <li>Billing and payment details (handled via secure gateway)</li>
        <li>Browser and device information (for security and optimization)</li>
      </ul>
    ),
  },
  {
    id: "use-of-data",
    title: "Use of Your Information",
    icon: <Zap className="w-6 h-6 text-yellow-500" />,
    content: (
      <ul className="list-disc ml-6 space-y-2">
        <li>To deliver and improve AI model and RAG-based services</li>
        <li>To manage your account, billing, and API keys</li>
        <li>To prevent fraud and ensure service stability</li>
        <li>To send important updates, new features, or maintenance notices</li>
      </ul>
    ),
  },
  {
    id: "sharing",
    title: "Information Sharing",
    icon: <Globe className="w-6 h-6 text-teal-500" />,
    content: (
      <p className="mb-4">
        Cortexavi never sells or rents personal information. Data may be shared only with trusted partners for hosting, payment, or analytics under strict confidentiality and data protection agreements.
      </p>
    ),
  },
  {
    id: "security",
    title: "Data Security",
    icon: <FileLock className="w-6 h-6 text-black" />,
    content: (
      <p className="mb-4">
        We employ encryption, token-based authentication, and role-based access to secure user data. Although no system is immune to attacks, Cortexavi continuously improves its infrastructure to meet industry security standards.
      </p>
    ),
  },
  {
    id: "usage-terms",
    title: "User Responsibilities",
    icon: <UserCheck className="w-6 h-6 text-purple-600" />,
    content: (
      <ul className="list-disc ml-6 space-y-2">
        <li>Use Cortexavi only for lawful purposes.</li>
        <li>Do not share API keys publicly or resell access.</li>
        <li>Avoid uploading copyrighted or malicious content.</li>
        <li>Comply with API limits and usage guidelines.</li>
      </ul>
    ),
  },
  {
    id: "plans",
    title: "Plans, Payments & Refunds",
    icon: <DollarSign className="w-6 h-6 text-yellow-500" />,
    content: (
      <p className="mb-4">
        Cortexavi offers Free and Developer plans with defined usage tiers. Billing occurs monthly via secure payment processors. Refunds are available only for verified technical issues within 7 days of payment.
      </p>
    ),
  },
  {
    id: "limitations",
    title: "Acceptable Use Policy",
    icon: <AlertTriangle className="w-6 h-6 text-red-500" />,
    content: (
      <p className="mb-4">
        You agree not to misuse Cortexavi for generating illegal, biased, or harmful content. Automated scraping, reverse engineering, or performance attacks on the platform are prohibited and may result in legal action.
      </p>
    ),
  },
  {
    id: "liability",
    title: "Liability Disclaimer",
    icon: <FileText className="w-6 h-6 text-gray-600" />,
    content: (
      <p className="mb-4">
        Cortexavi is provided “as is.” We are not responsible for damages caused by service downtime, data loss, or reliance on AI-generated outputs. Users must verify all results before applying them commercially or publicly.
      </p>
    ),
  },
  {
    id: "termination",
    title: "Account Suspension & Termination",
    icon: <Slash className="w-6 h-6 text-pink-500" />,
    content: (
      <p className="mb-4">
        We may suspend or terminate accounts for policy violations, payment issues, or misuse. Upon termination, all associated data may be deleted permanently after 30 days.
      </p>
    ),
  },
  {
    id: "cookies",
    title: "Cookies & Tracking",
    icon: <Eye className="w-6 h-6 text-blue-600" />,
    content: (
      <p className="mb-4">
        Cortexavi uses cookies for authentication and analytics. You can disable cookies in your browser, but certain features may stop functioning properly.
      </p>
    ),
  },
  {
    id: "children",
    title: "Children’s Privacy",
    icon: <Clock className="w-6 h-6 text-gray-400" />,
    content: (
      <p className="mb-4">
        Cortexavi’s services are intended for users aged 18 and above. We do not knowingly collect or store personal information from minors.
      </p>
    ),
  },
  {
    id: "updates",
    title: "Policy Updates",
    icon: <FileWarning className="w-6 h-6 text-orange-500" />,
    content: (
      <p className="mb-4">
        These Terms and the Privacy Policy may be updated periodically. Continued use of Cortexavi after updates means you accept the revised terms. The latest version will always be available on our website.
      </p>
    ),
  },
  {
    id: "contact",
    title: "Contact Us",
    icon: <Phone className="w-6 h-6 text-green-400" />,
    content: (
      <>
        <p className="mb-2">
          For any legal, technical, or privacy-related queries, contact us:
        </p>
        <p className="mb-1">
          <strong>Email:</strong> support@cortexavi.com
        </p>
        <p className="mb-1">
          <strong>Phone:</strong> +91 98765 43210
        </p>
        <p>
          <strong>Address:</strong> 45 Data Hub Street, Bangalore, India
        </p>
      </>
    ),
  },
];


const PrivacyMain: React.FC = () => {
  const navigate = useNavigate();
  return (
    <PageWrapper>
      <div className="flex flex-col">
        <div className="min-h-screen w-full flex justify-center">
          <div className="lg:w-[80vw] mx-auto py-12 px-4 sm:px-6 lg:px-8">
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
                Cortexvia Pickles Privacy Policy
              </h1>
              <p className="text-lg text-gray-700 mb-8 font-roboto">
                Effective Date: April 21, 2025
              </p>

              <Card className="mb-8 shadow-lg bg-white">
                <CardHeader className=" border-b border-gray-200">
                  <h2 className="text-xl sm:text-2xl font-semibold text-indigo-700 flex items-center space-x-2 font-montserrat">
                    {sections[0].icon}
                    <span>{sections[0].title}</span>
                  </h2>
                </CardHeader>
                <CardContent className="p-6 text-gray-700 font-roboto leading-relaxed">
                  {sections[0].content}
                </CardContent>
              </Card>

              <Accordion type="single" collapsible className="space-y-6">
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
                  onClick={() => navigate("/contact")}
                >
                  Contact Us
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </div>

      </div>
    </PageWrapper>
  );
};

export default PrivacyMain;