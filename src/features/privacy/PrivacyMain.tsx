import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import PageWrapper from "@/apputils/PageWrapper";

function PrivacyMain() {
  const navigate = useNavigate();

  return (
    <PageWrapper>
      <div className="flex flex-col items-center justify-center w-full pb-20">
        <div className="w-[50%] text-gray-800">
          <Button
            variant="ghost"
            className="mb-6 text-gray-600 hover:text-black focus:outline-none"
            onClick={() => navigate(-1)}
          >
            ← Back
          </Button>

          <h1 className="text-3xl font-semibold mb-2">Cortexvia Privacy Policy</h1>
          <p className="text-sm mb-8">Date of Last Revision: April 21, 2025</p>

          <p className="mb-4 text-[15px] leading-relaxed">
            This Privacy Policy explains how Cortexvia (“we,” “our,” or “us”) collects, uses, and protects your information when you use our website, APIs, SDKs, and platform services (collectively, the “Services”). By accessing or using Cortexvia, you consent to the practices described in this Policy.
          </p>

          <h2 className="font-bold text-[16px] mb-2">1. Information We Collect</h2>
          <p className="mb-6 text-[15px] leading-relaxed">
            We collect information that you provide directly (such as registration details and uploaded data) and information automatically (like logs, analytics, and device metadata). Data collected includes:
            <ul className="list-disc ml-6 mt-2">
              <li>Name, email, and account credentials</li>
              <li>Uploaded documents, URLs, or datasets for RAG or model processing</li>
              <li>API usage statistics and request logs</li>
              <li>Billing and payment details (processed securely by third parties)</li>
            </ul>
          </p>

          <h2 className="font-bold text-[16px] mb-2">2. How We Use Your Information</h2>
          <p className="mb-6 text-[15px] leading-relaxed">
            We use collected data to:
            <ul className="list-disc ml-6 mt-2">
              <li>Deliver, improve, and maintain Cortexvia’s AI services</li>
              <li>Authenticate users and manage subscriptions</li>
              <li>Prevent fraud, misuse, or security breaches</li>
              <li>Notify you about feature updates or service interruptions</li>
            </ul>
          </p>

          <h2 className="font-bold text-[16px] mb-2">3. Data Sharing</h2>
          <p className="mb-6 text-[15px] leading-relaxed">
            We do not sell or rent personal data. Information may be shared only with trusted service providers who support hosting, analytics, or billing operations — all bound by strict confidentiality and data protection agreements.
          </p>

          <h2 className="font-bold text-[16px] mb-2">4. Data Security</h2>
          <p className="mb-6 text-[15px] leading-relaxed">
            Cortexvia employs encryption, token-based authentication, and access control measures to safeguard your data. While no system is entirely secure, we continuously enhance our infrastructure to meet industry-leading standards.
          </p>

          <h2 className="font-bold text-[16px] mb-2">5. Cookies</h2>
          <p className="mb-6 text-[15px] leading-relaxed">
            Cortexvia uses cookies and similar technologies for authentication and analytics. You may disable cookies in your browser, though some features of the platform may be affected.
          </p>

          <h2 className="font-bold text-[16px] mb-2">6. Data Retention</h2>
          <p className="mb-6 text-[15px] leading-relaxed">
            We retain personal data for as long as your account is active or as required by law. Upon termination, your data will be deleted or anonymized after a defined retention period unless legally required to retain it longer.
          </p>

          <h2 className="font-bold text-[16px] mb-2">7. Your Rights</h2>
          <p className="mb-6 text-[15px] leading-relaxed">
            You have the right to:
            <ul className="list-disc ml-6 mt-2">
              <li>Access, correct, or delete your personal data</li>
              <li>Request data export or transfer</li>
              <li>Withdraw consent or close your account at any time</li>
            </ul>
          </p>

          <h2 className="font-bold text-[16px] mb-2">8. Children’s Privacy</h2>
          <p className="mb-6 text-[15px] leading-relaxed">
            Cortexvia’s Services are intended for users aged 18 and above. We do not knowingly collect personal information from minors. If you believe a child has provided us with data, please contact us for prompt removal.
          </p>

          <h2 className="font-bold text-[16px] mb-2">9. Policy Updates</h2>
          <p className="mb-6 text-[15px] leading-relaxed">
            Cortexvia may update this Privacy Policy periodically. Continued use of the Services after changes indicates your acceptance of the revised version. You are encouraged to review the policy regularly.
          </p>

          <h2 className="font-bold text-[16px] mb-2">10. Contact Information</h2>
          <p className="mb-6 text-[15px] leading-relaxed">
            For privacy-related questions or concerns:
            <br />
            <strong>Email:</strong> support@cortexvia.com
            <br />
            <strong>Phone:</strong> +91 98765 43210
            <br />
            <strong>Address:</strong> 45 Data Hub Street, Bangalore, Karnataka, India
          </p>

          <h2 className="font-bold text-[16px] mb-2">11. Consent</h2>
          <p className="mb-6 text-[15px] leading-relaxed">
            By using Cortexvia, you consent to the collection, use, and processing of your information in accordance with this Privacy Policy.
          </p>
        </div>
      </div>
    </PageWrapper>
  );
};

export default PrivacyMain;
