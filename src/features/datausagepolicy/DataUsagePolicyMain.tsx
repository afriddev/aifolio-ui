// src/pages/DataUsagePolicy.tsx

import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Database,
  Lock,
  Shield,
  User,
  Trash2,
  BarChart3,
} from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/accordion";

const sections = [
  {
    id: "summary",
    title: "Summary",
    icon: <Database className="w-6 h-6 text-indigo-500" />,
    content: (
      <>
        <p className="mb-4 text-sm">
          <strong>Purpose & Scope:</strong> This Data Usage Policy explains how user-uploaded data is handled, processed, and protected within the Cortexvia platform.
        </p>
        <p className="mb-4 text-sm">
          <strong>Key Principles:</strong> We prioritize privacy, security, and user control, ensuring data is used only for intended services like RAG and AI inference.
        </p>
        <p className="mb-4 text-sm">
          <strong>User Rights:</strong> You own your data and can manage or delete it at any time.
        </p>
      </>
    ),
  },
  {
    id: "processing",
    title: "Data Processing",
    icon: <Database className="w-6 h-6 text-blue-500" />,
    content: (
      <p className="mb-4">
        Data is processed solely for retrieval (RAG) and AI inference. No unrelated processing occurs.
      </p>
    ),
  },
  {
    id: "storage",
    title: "Storage and Caching",
    icon: <Lock className="w-6 h-6 text-green-500" />,
    content: (
      <p className="mb-4">
        Files are stored securely and may be cached temporarily to optimize performance. Caches are cleared periodically.
      </p>
    ),
  },
  {
    id: "no-selling",
    title: "Data Monetization",
    icon: <Shield className="w-6 h-6 text-yellow-500" />,
    content: (
      <p className="mb-4">
        Cortexvia never sells, rents, or trains public models on user data. Your information remains private.
      </p>
    ),
  },
  {
    id: "ownership",
    title: "User Ownership",
    icon: <User className="w-6 h-6 text-teal-500" />,
    content: (
      <p className="mb-4">
        Users retain full ownership of their uploaded files. Cortexvia claims no rights to your content.
      </p>
    ),
  },
  {
    id: "deletion",
    title: "Data Deletion",
    icon: <Trash2 className="w-6 h-6 text-red-500" />,
    content: (
      <p className="mb-4">
        Deleted data is permanently erased within 30 days. Request deletion via the dashboard.
      </p>
    ),
  },
  {
    id: "analytics",
    title: "Usage Analytics",
    icon: <BarChart3 className="w-6 h-6 text-purple-500" />,
    content: (
      <p className="mb-4">
        Usage analytics are collected anonymously for performance improvement. No personal identifiers are linked.
      </p>
    ),
  },
];

const DataUsagePolicyMain: React.FC = () => {
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
              Data Usage Policy
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

export default DataUsagePolicyMain;