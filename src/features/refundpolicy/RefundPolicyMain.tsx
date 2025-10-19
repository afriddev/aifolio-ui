// src/pages/RefundPolicyMain.tsx

import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/accordion";
import { Button } from "@/components/ui/button";
import {
  HandCoins,
  FileWarning,
  CreditCard,
  ShieldCheck,
  Slash,
  Clock,
  Info,
  Phone,
} from "lucide-react";

const sections = [
  {
    id: "overview",
    title: "Overview",
    icon: <Info className="w-6 h-6 text-indigo-500" />,
    content: (
      <p className="mb-4 text-sm">
        This Refund & Cancellation Policy outlines how Cortexvia handles
        payment disputes, cancellations, and refund eligibility. As we provide
        digital services such as API access and AI-based processing, refunds are
        handled case-by-case to maintain system fairness.
      </p>
    ),
  },
  {
    id: "eligibility",
    title: "Refund Eligibility",
    icon: <ShieldCheck className="w-6 h-6 text-green-600" />,
    content: (
      <ul className="list-disc ml-6 space-y-2">
        <li>Refunds apply only to failed or duplicate payments verified by our billing team.</li>
        <li>Requests must be made within <strong>7 days</strong> of the payment date.</li>
        <li>No refunds are issued for tokens, API calls, or subscription time already used.</li>
        <li>Users may cancel subscriptions before the next renewal date to avoid future charges.</li>
      </ul>
    ),
  },
  {
    id: "process",
    title: "Refund Process",
    icon: <HandCoins className="w-6 h-6 text-yellow-600" />,
    content: (
      <ol className="list-decimal ml-6 space-y-2">
        <li>Contact <strong>billing@Cortexvia.com</strong> with your order ID and reason for request.</li>
        <li>Our team verifies transaction logs and confirms eligibility.</li>
        <li>Approved refunds are processed within <strong>5–10 business days</strong>.</li>
        <li>You’ll receive confirmation once your refund is completed.</li>
      </ol>
    ),
  },
  {
    id: "non-refundable",
    title: "Non-Refundable Items",
    icon: <Slash className="w-6 h-6 text-red-500" />,
    content: (
      <ul className="list-disc ml-6 space-y-2">
        <li>Consumed API tokens or used requests.</li>
        <li>Monthly or annual subscriptions post-renewal.</li>
        <li>Performance-based or model-accuracy complaints.</li>
        <li>Delays from third-party payment providers.</li>
      </ul>
    ),
  },
  {
    id: "subscription",
    title: "Subscription & Cancellation",
    icon: <Clock className="w-6 h-6 text-blue-500" />,
    content: (
      <p className="mb-4">
        Subscriptions can be cancelled anytime before the next billing date via
        your dashboard. Once cancelled, you’ll retain access until the end of
        your current cycle. Partial refunds for unused time are not provided.
      </p>
    ),
  },
  {
    id: "security",
    title: "Payment Security",
    icon: <CreditCard className="w-6 h-6 text-teal-500" />,
    content: (
      <p className="mb-4">
        All payments are processed via secure gateways with encryption and
        compliance to industry standards. Cortexvia never stores card details on
        its servers.
      </p>
    ),
  },
  {
    id: "changes",
    title: "Policy Updates",
    icon: <FileWarning className="w-6 h-6 text-orange-500" />,
    content: (
      <p className="mb-4">
        Cortexvia may revise this Refund Policy periodically. Any major change
        will be announced on our website, and continued use implies agreement
        with the updated version.
      </p>
    ),
  },
  {
    id: "contact",
    title: "Contact Information",
    icon: <Phone className="w-6 h-6 text-green-400" />,
    content: (
      <>
        <p className="mb-2">For billing or refund queries, reach out:</p>
        <ul className="list-disc ml-6">
          <li>
            <strong>Email:</strong> billing@Cortexvia.com
          </li>
          <li>
            <strong>Support:</strong> support@Cortexvia.com
          </li>
          <li>
            <strong>Address:</strong> 45 Data Hub Street, Bangalore, India
          </li>
        </ul>
      </>
    ),
  },
];

const RefundPolicyMain: React.FC = () => {
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
              Refund & Cancellation Policy
            </h1>
            <p className="text-lg text-gray-700 mb-8 font-roboto">
              Effective Date: April 21, 2025
            </p>

            {/* Summary Card */}
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

            {/* Accordion */}
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
                Contact Support
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default RefundPolicyMain;
