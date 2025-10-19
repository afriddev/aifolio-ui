// src/pages/CompliancePolicy.tsx

import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Scale,
  Globe,
  Download,
  Shield,
  Mail,
} from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/accordion";

const sections = [
  {
    id: "summary",
    title: "Summary",
    icon: <Scale className="w-6 h-6 text-indigo-500" />,
    content: (
      <>
        <p className="mb-4 text-sm">
          <strong>Purpose & Scope:</strong> This Compliance Policy ensures Cortexvia's adherence to global privacy and data protection regulations.
        </p>
        <p className="mb-4 text-sm">
          <strong>Key Principles:</strong> We align with major frameworks to safeguard user rights, facilitate data portability, and cooperate only with lawful authorities.
        </p>
        <p className="mb-4 text-sm">
          <strong>Transparency:</strong> Compliance is core to our operations; contact our officer for specific inquiries.
        </p>
      </>
    ),
  },
  {
    id: "regulations",
    title: "Regulatory Alignment",
    icon: <Globe className="w-6 h-6 text-blue-500" />,
    content: (
      <p className="mb-4">
        Cortexvia aligns with GDPR, CCPA, and Indian DPDP Act principles. We process data in compliance with these standards.
      </p>
    ),
  },
  {
    id: "agreements",
    title: "Data Processing Agreements",
    icon: <Download className="w-6 h-6 text-green-500" />,
    content: (
      <p className="mb-4">
        Data processing agreements available upon request for enterprise users or specific integrations.
      </p>
    ),
  },
  {
    id: "user-rights",
    title: "User Rights",
    icon: <Shield className="w-6 h-6 text-yellow-500" />,
    content: (
      <p className="mb-4">
        Users may export or delete their personal information anytime through the dashboard or support.
      </p>
    ),
  },
  {
    id: "government-requests",
    title: "Government Requests",
    icon: <Scale className="w-6 h-6 text-teal-500" />,
    content: (
      <p className="mb-4">
        Cortexvia cooperates with lawful government data requests only under valid orders. Transparency reports are published annually.
      </p>
    ),
  },
  {
    id: "officer",
    title: "Compliance Officer",
    icon: <Mail className="w-6 h-6 text-purple-500" />,
    content: (
      <>
        <p className="mb-2">For compliance-related questions:</p>
        <p className="font-medium">compliance@Cortexvia.com</p>
      </>
    ),
  },
];

const CompliancePolicyMain: React.FC = () => {
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
            Cortexvia  Compliance Policy
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

export default CompliancePolicyMain;