// src/pages/CookiePolicy.tsx

import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

import { Button } from "@/components/ui/button";
import {
  Cookie,
  Info,
  Zap,
  Settings,
  Globe,
  EyeOff,
  Shield,
  MapPin,
  FileWarning,
  Phone,
} from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/accordion";

const sections = [
  {
    id: "summary",
    title: "Summary",
    icon: <Cookie className="w-6 h-6 text-indigo-500" />,
    content: (
      <>
        <p className="mb-4 text-sm">
          <strong>Purpose & Scope:</strong> This Cookie Policy explains how
          Cortexvia uses cookies and tracking technologies across its website
          and dashboard to deliver a seamless user experience, store preferences,
          and analyze platform performance.
        </p>
        <p className="mb-4 text-sm">
          <strong>Categories & Use:</strong> Cortexvia uses essential,
          functional, performance, and analytical cookies to enable login
          sessions, secure API access, personalize dashboard settings, and
          improve system reliability.
        </p>
        <p className="mb-4 text-sm">
          <strong>User Control:</strong> You can adjust cookie settings anytime
          via browser preferences. Disabling cookies may affect login or API
          access functionality.
        </p>
      </>
    ),
  },
  {
    id: "definitions",
    title: "Definitions",
    icon: <Info className="w-6 h-6 text-blue-500" />,
    content: (
      <p className="mb-4">
        “Cookies” are small data files stored on your browser to maintain
        sessions and preferences. “Tracking technologies” include analytics and
        performance tools that help Cortexvia optimize user experience.
      </p>
    ),
  },
  {
    id: "types",
    title: "Types of Cookies",
    icon: <Settings className="w-6 h-6 text-green-500" />,
    content: (
      <ul className="list-disc ml-6 space-y-2">
        <li>
          <strong>Essential Cookies:</strong> Enable login authentication, API
          key management, and session continuity.
        </li>
        <li>
          <strong>Performance Cookies:</strong> Monitor system uptime, loading
          speed, and error tracking.
        </li>
        <li>
          <strong>Functional Cookies:</strong> Store user preferences, theme,
          and interface settings.
        </li>
        <li>
          <strong>Analytics Cookies:</strong> Collect anonymous usage data to
          help improve AI response speed and dashboard experience.
        </li>
      </ul>
    ),
  },
  {
    id: "use-of-cookies",
    title: "How We Use Cookies",
    icon: <Zap className="w-6 h-6 text-yellow-500" />,
    content: (
      <ul className="list-disc ml-6 space-y-2">
        <li>Maintain user sessions and API authentication securely.</li>
        <li>Track errors and improve website performance.</li>
        <li>Analyze dashboard interactions for better usability.</li>
        <li>Provide personalized model recommendations or data insights.</li>
      </ul>
    ),
  },
  {
    id: "third-party",
    title: "Third-Party Cookies",
    icon: <Globe className="w-6 h-6 text-teal-500" />,
    content: (
      <p className="mb-4">
        Cortexvia may use trusted analytics tools like Google Analytics and
        Sentry for monitoring usage patterns and improving service quality. These
        third parties follow their respective data protection policies.
      </p>
    ),
  },
  {
    id: "managing-cookies",
    title: "Managing & Disabling Cookies",
    icon: <EyeOff className="w-6 h-6 text-gray-600" />,
    content: (
      <p className="mb-4">
        You can disable or delete cookies via browser settings. Some features
        like secure login, API dashboard, or usage analytics may not work
        correctly if cookies are turned off.
      </p>
    ),
  },
  {
    id: "data-protection",
    title: "Data Protection & Security",
    icon: <Shield className="w-6 h-6 text-black" />,
    content: (
      <p className="mb-4">
        Cortexvia uses encryption and secure transmission for all cookie data.
        Cookie-based identifiers are anonymized and never used for advertising
        or shared outside our infrastructure.
      </p>
    ),
  },
  {
    id: "mobile-cookies",
    title: "Cookies on Mobile Devices",
    icon: <MapPin className="w-6 h-6 text-pink-400" />,
    content: (
      <p className="mb-4">
        Our cookie practices apply equally to mobile browsers and web apps. You
        can manage cookie preferences through your device’s browser or app
        settings.
      </p>
    ),
  },
  {
    id: "changes",
    title: "Changes to this Policy",
    icon: <FileWarning className="w-6 h-6 text-orange-500" />,
    content: (
      <p className="mb-4">
        Cortexvia may revise this Cookie Policy periodically. Major updates will
        be notified via our website or email, with the latest version always
        available on the policy page.
      </p>
    ),
  },
  {
    id: "contact",
    title: "Contact Information",
    icon: <Phone className="w-6 h-6 text-green-400" />,
    content: (
      <>
        <p className="mb-2">For questions about cookies or privacy:</p>
        <ul className="list-disc ml-6">
          <li>
            <strong>Email:</strong> privacy@Cortexvia.com
          </li>
          <li>
            <strong>Address:</strong> 45 Data Hub Street, Bangalore, India
          </li>
        </ul>
      </>
    ),
  },
];


const CookiePolicyMain: React.FC = () => {
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
              Cookie Policy
            </h1>
            <p className="text-lg text-gray-700 mb-8 font-roboto">
              Effective Date: April 21, 2025
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

export default CookiePolicyMain;