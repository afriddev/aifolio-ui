// src/pages/ApiPolicy.tsx

import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Key, Clock, AlertCircle, Zap, Shield, FileText } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/accordion";

const sections = [
  {
    id: "summary",
    title: "Summary",
    icon: <Key className="w-6 h-6 text-indigo-500" />,
    content: (
      <>
        <p className="mb-4 text-sm">
          <strong>Purpose & Scope:</strong> This API Policy defines how
          developers can access and use Cortexvia APIs to integrate with our
          platform for RAG-based systems and AI model inference.
        </p>
        <p className="mb-4 text-sm">
          <strong>Key Principles:</strong> Access is granted responsibly, with
          strict guidelines on usage, security, and commercial applications to
          ensure platform integrity and user trust.
        </p>
        <p className="mb-4 text-sm">
          <strong>Enforcement:</strong> Violations may result in suspension or
          termination of access. Always review the full policy for compliance.
        </p>
      </>
    ),
  },
  {
    id: "api-keys",
    title: "API Key Management",
    icon: <Key className="w-6 h-6 text-blue-500" />,
    content: (
      <p className="mb-4">
        API keys are account-bound; sharing or resale is prohibited. Treat your
        API key like a password and regenerate it if compromised.
      </p>
    ),
  },
  {
    id: "rate-limits",
    title: "Rate Limits and Quotas",
    icon: <Clock className="w-6 h-6 text-green-500" />,
    content: (
      <p className="mb-4">
        Respect rate limits and endpoint quotas to ensure fair usage across all
        users. Exceeding limits may trigger temporary throttling.
      </p>
    ),
  },
  {
    id: "prohibited",
    title: "Prohibited Activities",
    icon: <AlertCircle className="w-6 h-6 text-red-500" />,
    content: (
      <p className="mb-4">
        No automated scraping, abuse, or reverse engineering of APIs. These
        actions violate terms and may lead to immediate access revocation.
      </p>
    ),
  },
  {
    id: "suspension",
    title: "Access Suspension",
    icon: <Shield className="w-6 h-6 text-yellow-500" />,
    content: (
      <p className="mb-4">
        Cortexvia may suspend access for misuse or security risks. Suspensions
        are reviewed case-by-case, with appeals available via support.
      </p>
    ),
  },
  {
    id: "commercial",
    title: "Commercial Usage",
    icon: <Zap className="w-6 h-6 text-teal-500" />,
    content: (
      <p className="mb-4">
        Commercial usage requires explicit approval or a paid plan. Contact
        sales@Cortexvia.com for enterprise options.
      </p>
    ),
  },
  {
    id: "disclaimer",
    title: "Disclaimer",
    icon: <FileText className="w-6 h-6 text-purple-500" />,
    content: (
      <p className="mb-4">
        API results are “as-is” and must be verified before production use.
        Cortexvia is not liable for errors in AI-generated outputs.
      </p>
    ),
  },
];

const ApiPolicyMain: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col">
      <div className="min-h-screen w-full flex justify-center">
        <div className="lg:w-[80vw] mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <Button
            variant="ghost"
            className="mb-6 text-gray-600 hover:text-indigo-600"
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
            Cortexvia  API Policy
            </h1>
            <p className="text-lg text-gray-700 mb-8 font-roboto">
              Effective Date: October 20, 2025
            </p>

            <Card className="mb-8 shadow-lg bg-white">
              <CardHeader className="border-b border-gray-200">
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
                  <AccordionTrigger className="p-4 text-gray-800 hover:bg-gray-100 font-montserrat">
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
                className="bg-indigo-600 text-white hover:bg-indigo-700"
                onClick={() => navigate("/contact")}
              >
                Contact Us
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ApiPolicyMain;
