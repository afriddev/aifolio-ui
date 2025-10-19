// src/pages/SecurityPolicy.tsx

import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Shield,
  Lock,
  Search,
  Key,
  Eye,
  Bug,
} from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/accordion";

const sections = [
  {
    id: "summary",
    title: "Summary",
    icon: <Shield className="w-6 h-6 text-indigo-500" />,
    content: (
      <>
        <p className="mb-4 text-sm">
          <strong>Purpose & Scope:</strong> This Security Policy describes the technical safeguards implemented by Cortexvia to protect user data, APIs, and platform integrity.
        </p>
        <p className="mb-4 text-sm">
          <strong>Key Principles:</strong> We employ industry-standard practices for encryption, monitoring, and testing to mitigate risks and respond to incidents swiftly.
        </p>
        <p className="mb-4 text-sm">
          <strong>Commitment:</strong> Security is ongoing; we encourage responsible disclosure of vulnerabilities.
        </p>
      </>
    ),
  },
  {
    id: "encryption",
    title: "Encryption Standards",
    icon: <Lock className="w-6 h-6 text-blue-500" />,
    content: (
      <p className="mb-4">
        Data encrypted in transit (TLS) and at rest (AES-256). All communications and storage are protected end-to-end.
      </p>
    ),
  },
  {
    id: "scans",
    title: "Vulnerability Scans and Audits",
    icon: <Search className="w-6 h-6 text-green-500" />,
    content: (
      <p className="mb-4">
        Regular vulnerability scans and access audits are conducted to identify and remediate potential threats proactively.
      </p>
    ),
  },
  {
    id: "authentication",
    title: "Access Controls",
    icon: <Key className="w-6 h-6 text-yellow-500" />,
    content: (
      <p className="mb-4">
        Role-based permissions and token-based authentication ensure only authorized users access sensitive features.
      </p>
    ),
  },
  {
    id: "monitoring",
    title: "System Monitoring",
    icon: <Eye className="w-6 h-6 text-teal-500" />,
    content: (
      <p className="mb-4">
        24/7 system monitoring and automated anomaly detection help detect and respond to unusual activity in real-time.
      </p>
    ),
  },
  {
    id: "testing",
    title: "Penetration Testing",
    icon: <Bug className="w-6 h-6 text-red-500" />,
    content: (
      <p className="mb-4">
        Periodic penetration testing and incident response procedures are in place to strengthen defenses.
      </p>
    ),
  },
  {
    id: "disclosure",
    title: "Responsible Disclosure",
    icon: <Shield className="w-6 h-6 text-purple-500" />,
    content: (
      <>
        <p className="mb-2">Bug-bounty or responsible disclosure email:</p>
        <p className="font-medium">security@Cortexvia.com</p>
      </>
    ),
  },
];

const SecurityPolicyMain: React.FC = () => {
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
             Cortexvia Security Policy
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

export default SecurityPolicyMain;