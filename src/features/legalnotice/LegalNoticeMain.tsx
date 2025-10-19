// src/pages/LegalNotice.tsx

import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import {
  FileText,
  Building,
  Gavel,
  Copyright,
  AlertCircle,
  Mail,
  MapPin,
} from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/accordion";
import { Button } from "@/components/ui/button";

const sections = [
  {
    id: "summary",
    title: "Summary",
    icon: <FileText className="w-6 h-6 text-indigo-500" />,
    content: (
      <>
        <p className="mb-4 text-sm">
          <strong>Purpose & Scope:</strong> This Legal Notice provides public disclosure of Cortexvia's entity details, governance, and content usage rules.
        </p>
        <p className="mb-4 text-sm">
          <strong>Key Principles:</strong> All platform content is protected; use is governed by Indian law with exclusive jurisdiction in Bangalore courts.
        </p>
        <p className="mb-4 text-sm">
          <strong>Protections:</strong> Trademarks and intellectual property are enforced to maintain brand integrity.
        </p>
      </>
    ),
  },
  {
    id: "entity",
    title: "Company Entity",
    icon: <Building className="w-6 h-6 text-blue-500" />,
    content: (
      <p className="mb-4">
        <strong>Entity:</strong> Cortexvia Technologies Pvt. Ltd.
      </p>
    ),
  },
  {
    id: "address",
    title: "Registered Address",
    icon: <MapPin className="w-6 h-6 text-green-500" />,
    content: (
      <p className="mb-4">
        <strong>Address:</strong> 45 Data Hub Street, Bangalore, India.
      </p>
    ),
  },
  {
    id: "jurisdiction",
    title: "Governing Law and Jurisdiction",
    icon: <Gavel className="w-6 h-6 text-yellow-500" />,
    content: (
      <p className="mb-4">
        Governed by Indian law; disputes settled in Bangalore courts. This applies to all users worldwide.
      </p>
    ),
  },
  {
    id: "trademarks",
    title: "Trademarks and Content Ownership",
    icon: <Copyright className="w-6 h-6 text-teal-500" />,
    content: (
      <p className="mb-4">
        All trademarks, names, and content belong to Cortexvia or respective owners. Unauthorized use is not permitted.
      </p>
    ),
  },
  {
    id: "prohibited",
    title: "Prohibited Actions",
    icon: <AlertCircle className="w-6 h-6 text-red-500" />,
    content: (
      <p className="mb-4">
        Unauthorized reproduction, redistribution, or scraping of platform content is prohibited. Violators may face legal action.
      </p>
    ),
  },
  {
    id: "contact",
    title: "Legal Contact",
    icon: <Mail className="w-6 h-6 text-purple-500" />,
    content: (
      <>
        <p className="mb-2">Contact legal department:</p>
        <p className="font-medium">legal@Cortexvia.com</p>
      </>
    ),
  },
];

const LegalNoticeMain: React.FC = () => {
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
              Legal Notice
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

export default LegalNoticeMain;