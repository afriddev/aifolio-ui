// src/pages/DeveloperPolicy.tsx

import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Code,
  UserCheck,
  Database,
  AlertTriangle,
  Zap,
  Shield,
} from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/accordion";

const sections = [
  {
    id: "summary",
    title: "Summary",
    icon: <Code className="w-6 h-6 text-indigo-500" />,
    content: (
      <>
        <p className="mb-4 text-sm">
          <strong>Purpose & Scope:</strong> This Developer Policy governs the use of SDKs, integrations, and third-party apps built with Cortexvia tools.
        </p>
        <p className="mb-4 text-sm">
          <strong>Key Principles:</strong> Developers must prioritize user privacy, ethical AI practices, and platform compatibility to foster a secure ecosystem.
        </p>
        <p className="mb-4 text-sm">
          <strong>Enforcement:</strong> Non-compliance may lead to access termination. Stay updated on policy changes.
        </p>
      </>
    ),
  },
  {
    id: "compliance",
    title: "Compliance Requirements",
    icon: <UserCheck className="w-6 h-6 text-blue-500" />,
    content: (
      <p className="mb-4">
        Developers must comply with API Policy and Terms of Service. All integrations must adhere to these foundational guidelines.
      </p>
    ),
  },
  {
    id: "data-storage",
    title: "Data Storage and Consent",
    icon: <Database className="w-6 h-6 text-green-500" />,
    content: (
      <p className="mb-4">
        No storage of user data without explicit consent. Ensure users are informed and can revoke access at any time.
      </p>
    ),
  },
  {
    id: "attribution",
    title: "Attribution Requirements",
    icon: <Code className="w-6 h-6 text-yellow-500" />,
    content: (
      <p className="mb-4">
        Must display Cortexvia attribution where required, such as in app credits or documentation.
      </p>
    ),
  },
  {
    id: "prohibited-output",
    title: "Prohibited AI Outputs",
    icon: <AlertTriangle className="w-6 h-6 text-red-500" />,
    content: (
      <p className="mb-4">
        Prohibited: harmful, biased, or deceptive AI output. Developers are responsible for moderating and validating responses.
      </p>
    ),
  },
  {
    id: "updates",
    title: "SDK and API Updates",
    icon: <Zap className="w-6 h-6 text-teal-500" />,
    content: (
      <p className="mb-4">
        Updates to SDKs or APIs may deprecate older versions; developers must adapt within stated timelines to maintain compatibility.
      </p>
    ),
  },
  {
    id: "violations",
    title: "Violations and Termination",
    icon: <Shield className="w-6 h-6 text-purple-500" />,
    content: (
      <p className="mb-4">
        Violations may result in termination of developer access. Appeals can be submitted to support@Cortexvia.com.
      </p>
    ),
  },
];

const DeveloperPolicyMain: React.FC = () => {
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
              Developer Policy
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

export default DeveloperPolicyMain;