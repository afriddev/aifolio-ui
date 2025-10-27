import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import PageWrapper from "@/apputils/PageWrapper";
import {
  MotionDiv,
  MotionH3,
  MotionH5,
  MotionParagraph,
} from "@/apputils/MotionUtils";

const PrivacyMain: React.FC = () => {
  const navigate = useNavigate();

  return (
    <PageWrapper>
      <div className="flex flex-col items-center justify-center w-full pb-20">
        <div className="px-4 lg:px-0 lg:w-[50%] text-gray-800">
          <MotionDiv>
            <Button
              variant="ghost"
              className="mb-6 text-gray-600 hover:text-black focus:outline-none"
              onClick={() => navigate(-1)}
            >
              ← Back
            </Button>
          </MotionDiv>

          <MotionH3>Cortexvia Privacy Policy</MotionH3>
          <MotionParagraph>
            Date of Last Revision: April 21, 2025
          </MotionParagraph>

          <MotionParagraph>
            This Privacy Policy governs how Cortexvia (“we,” “our,” or “us”)
            collects, uses, processes, and protects your information when you use
            our website, APIs, SDKs (e.g., CortexRAG, EmbiRankis, Chatbot
            Library), large language models (LLMs), Retrieval-Augmented Generation
            (RAG) pipelines, and platform services (collectively, the “Services”).
            By accessing or using Cortexvia, you consent to the practices
            described in this Policy. If you do not agree, you must not use the
            Services.
          </MotionParagraph>

          <MotionH5>1. Information We Collect</MotionH5>
          <MotionParagraph>
            We collect information to provide, improve, and secure our Services.
            This includes:
            <ul className="list-disc ml-6 mt-2">
              <li>
                <strong>Account Information:</strong> Name, email, and account
                credentials provided during registration for accessing APIs, SDKs,
                or platform features.
              </li>
              <li>
                <strong>Uploaded Data:</strong> Documents (e.g., PDF, DOCX, TXT,
                Markdown), YouTube URLs, or datasets uploaded for RAG pipelines,
                model inference, or chatbot training, subject to tiered limits
                (e.g., Free Tier: 2 files/day, 50MB each; Developer Tier: 200
                files/day, 100MB each).
              </li>
              <li>
                <strong>Usage Data:</strong> API request logs, query statistics
                (e.g., RPM, RPD, TPM, TPD as defined in our documentation), model
                usage patterns, and interaction data from SDKs like CortexRAG or
                Chatbot Library.
              </li>
              <li>
                <strong>Billing Information:</strong> Payment details processed
                securely by third-party providers for Developer or Enterprise plan
                subscriptions.
              </li>
              <li>
                <strong>Technical Data:</strong> Device metadata, IP addresses,
                browser type, and analytics data collected during platform
                interactions.
              </li>
            </ul>
          </MotionParagraph>

          <MotionH5>2. How We Use Your Information</MotionH5>
          <MotionParagraph>
            We use your information to deliver and enhance the Services,
            including:
            <ul className="list-disc ml-6 mt-2">
              <li>
                Processing uploaded documents, videos, or datasets for RAG
                pipelines (e.g., Basic RAG, Smart RAG, Graph RAG) and AI model
                inference (e.g., Cortexvia Mini, Flash Medium, Ultra).
              </li>
              <li>
                Authenticating users, managing API keys, and enforcing usage
                limits (e.g., 100 queries/day for Free Tier, unlimited for
                Developer Tier).
              </li>
              <li>
                Optimizing model performance, query speeds (e.g., Low Speed: 50–200
                TPS; High Speed: 1000–3000 TPS), and platform scalability.
              </li>
              <li>
                Monitoring for fraud, misuse, or excessive traffic (e.g.,
                exceeding RPM or TPD limits) to ensure platform security.
              </li>
              <li>
                Sending notifications about account status, feature updates, or
                scheduled maintenance.
              </li>
              <li>
                Analyzing usage trends to improve SDKs, APIs, and model offerings.
              </li>
            </ul>
          </MotionParagraph>

          <MotionH5>3. Data Sharing</MotionH5>
          <MotionParagraph>
            Cortexvia does not sell, rent, or share your personal data with third
            parties for marketing purposes. Data may be shared only with:
            <ul className="list-disc ml-6 mt-2">
              <li>
                Trusted service providers (e.g., hosting, analytics, billing
                processors) bound by strict confidentiality and data protection
                agreements.
              </li>
              <li>
                Legal authorities when required by law or to protect Cortexvia’s
                rights, safety, or property.
              </li>
            </ul>
            Uploaded data (e.g., documents or videos) used in RAG pipelines or
            model inference remains confidential and is not shared externally
            unless explicitly authorized by you.
          </MotionParagraph>

          <MotionH5>4. Data Security</MotionH5>
          <MotionParagraph>
            We implement robust security measures, including:
            <ul className="list-disc ml-6 mt-2">
              <li>Encryption for data in transit and at rest.</li>
              <li>
                Token-based authentication for API and SDK access (e.g., unique
                API keys for Cortexvia Services).
              </li>
              <li>
                Access controls to prevent unauthorized use of uploaded data or
                account credentials.
              </li>
              <li>
                Regular security audits to align with industry-leading standards.
              </li>
            </ul>
            While we strive to protect your data, no system is entirely secure.
            You are responsible for safeguarding your API keys and account
            credentials.
          </MotionParagraph>

          <MotionH5>5. Cookies and Tracking</MotionH5>
          <MotionParagraph>
            We use cookies and similar technologies to:
            <ul className="list-disc ml-6 mt-2">
              <li>Authenticate users and maintain session continuity.</li>
              <li>
                Track platform usage (e.g., API calls, query volumes) for
                analytics and performance optimization.
              </li>
              <li>Personalize user experiences, such as model or SDK preferences.</li>
            </ul>
            You may disable cookies via browser settings, but this may impact
            access to features like API authentication or chatbot interfaces.
          </MotionParagraph>

          <MotionH5>6. Data Retention</MotionH5>
          <MotionParagraph>
            We retain your data as follows:
            <ul className="list-disc ml-6 mt-2">
              <li>
                <strong>Account Data:</strong> Retained for as long as your
                account is active or as required to comply with legal obligations.
              </li>
              <li>
                <strong>Uploaded Data:</strong> Documents, videos, or datasets
                used in RAG pipelines or model inference are stored based on your
                plan’s limits (e.g., Free Tier: 2 files/day; Enterprise:
                Unlimited). Data is deleted upon account termination or after
                inactivity (per tier-specific retention periods).
              </li>
              <li>
                <strong>Usage Logs:</strong> API request logs and analytics data
                are retained for up to 12 months for performance and security
                monitoring, then anonymized.
              </li>
            </ul>
            You may request data deletion at any time, subject to legal retention
            requirements.
          </MotionParagraph>

          <MotionH5>7. Your Rights</MotionH5>
          <MotionParagraph>
            You have the following rights regarding your data:
            <ul className="list-disc ml-6 mt-2">
              <li>Access, review, or correct your personal information.</li>
              <li>Request export or transfer of your data (e.g., uploaded documents or API usage logs).</li>
              <li>
                Delete your account and associated data, including RAG-processed
                datasets or API keys.
              </li>
              <li>Withdraw consent for data processing at any time.</li>
              <li>
                Opt out of non-essential communications (e.g., feature updates).
              </li>
            </ul>
            To exercise these rights, contact us at support@cortexvia.com.
          </MotionParagraph>

          <MotionH5>8. Children’s Privacy</MotionH5>
          <MotionParagraph>
            Cortexvia’s Services are designed for users aged 18 and above. We do
            not knowingly collect personal information from minors. If we become
            aware that a minor has provided data (e.g., through account
            registration or data uploads), we will promptly delete it. Contact us
            immediately if you believe this has occurred.
          </MotionParagraph>

          <MotionH5>9. International Data Transfers</MotionH5>
          <MotionParagraph>
            Cortexvia operates servers in multiple regions to support global
            access to our Services. Your data (e.g., uploaded documents or API
            logs) may be transferred to or stored in jurisdictions outside India,
            subject to compliance with applicable data protection laws (e.g.,
            GDPR, CCPA). We ensure adequate safeguards for cross-border transfers
            through contractual agreements and encryption.
          </MotionParagraph>

          <MotionH5>10. Third-Party Integrations</MotionH5>
          <MotionParagraph>
            Our Services may integrate with third-party tools (e.g., YouTube for
            video uploads, payment processors for billing). These providers have
            their own privacy policies, and we are not responsible for their
            practices. Review their policies before uploading content or sharing
            payment details.
          </MotionParagraph>

          <MotionH5>11. Policy Updates</MotionH5>
          <MotionParagraph>
            We may update this Privacy Policy periodically to reflect changes in
            our Services, legal requirements, or operational practices. Updates
            will be posted on cortexvia.com, and continued use of the Services
            constitutes acceptance of the revised Policy. We encourage you to
            review this Policy regularly.
          </MotionParagraph>

          <MotionH5>12. Contact Information</MotionH5>
          <MotionParagraph>
            For privacy-related inquiries or to exercise your data rights:
            <br />
            <strong>Email:</strong> support@cortexvia.com
            <br />
            <strong>Phone:</strong> +91 98765 43210
            <br />
            <strong>Address:</strong> 45 Data Hub Street, Bangalore, Karnataka,
            India
          </MotionParagraph>

          <MotionH5>13. Consent</MotionH5>
          <MotionParagraph>
            By using Cortexvia’s Services, including APIs, SDKs, RAG pipelines,
            or AI models, you consent to the collection, use, processing, and
            storage of your information as described in this Privacy Policy.
          </MotionParagraph>
        </div>
      </div>
    </PageWrapper>
  );
};

export default PrivacyMain;