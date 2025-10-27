import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import PageWrapper from "@/apputils/PageWrapper";
import {
  MotionDiv,
  MotionH3,
  MotionH5,
  MotionParagraph,
} from "@/apputils/MotionUtils";

const DataUsagePolicyMain: React.FC = () => {
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

          <MotionH3>Cortexvia Data Usage Policy</MotionH3>
          <MotionParagraph>
            Date of Last Revision: April 21, 2025
          </MotionParagraph>

          <MotionParagraph>
            This Data Usage Policy explains how Cortexvia (“we,” “our,” or “us”)
            collects, processes, stores, and protects user-uploaded data across our
            Services, including large language models (LLMs), Retrieval-Augmented
            Generation (RAG) pipelines (e.g., Basic RAG, Smart RAG, Graph RAG),
            APIs, and SDKs (e.g., CortexRAG, EmbiRankis, Chatbot Library). We are
            committed to ensuring user privacy, data security, and full ownership
            of your data. By using our Services, you consent to the practices
            described in this Policy, our Terms and Conditions, and our Privacy Policy.
          </MotionParagraph>

          <MotionH5>1. Purpose and Scope</MotionH5>
          <MotionParagraph>
            This Policy provides transparency on how Cortexvia handles data uploaded
            or generated through our platform, including documents, datasets, YouTube
            URLs, and API interactions. It applies to all users, developers, and
            organizations across Free, Developer, and Enterprise tiers.
          </MotionParagraph>

          <MotionH5>2. Data Processing</MotionH5>
          <MotionParagraph>
            Uploaded data is processed solely for the following purposes:
            <ul className="list-disc ml-6 mt-2">
              <li>Executing RAG pipelines (e.g., Basic RAG, Smart RAG, Graph RAG) for retrieval and context-aware responses.</li>
              <li>Performing AI model inference using LLMs (e.g., Cortexvia Mini, Flash Medium, Ultra).</li>
              <li>Generating embeddings or reranking results via EmbiRankis for improved retrieval accuracy.</li>
              <li>Powering chatbot functionalities through the Chatbot Library or Business Chatbot SDK.</li>
            </ul>
            Data is processed within the limits of your plan (e.g., Free Tier: 2
            files/day, 50MB each; Developer Tier: 200 files/day, 100MB each) and is
            not used for unrelated analysis, public model training, or third-party
            purposes unless explicitly authorized.
          </MotionParagraph>

          <MotionH5>3. Data Storage and Caching</MotionH5>
          <MotionParagraph>
            User data is stored securely using encrypted infrastructure:
            <ul className="list-disc ml-6 mt-2">
              <li>
                <strong>Uploaded Data:</strong> Documents (e.g., PDF, DOCX, TXT,
                Markdown) and YouTube URLs are stored based on tier limits (e.g.,
                Free Tier: 1 YouTube URL/day; Developer Tier: 50 URLs/day).
              </li>
              <li>
                <strong>Temporary Caching:</strong> Data may be cached to optimize
                query speeds (e.g., Low Speed: 50–200 TPS; High Speed: 1000–3000 TPS)
                and reduce latency. Caches are purged after 24 hours or upon data deletion.
              </li>
              <li>
                <strong>Storage Duration:</strong> Data is retained for as long as
                your account is active or as required by law, unless deleted earlier
                by you.
              </li>
            </ul>
            All storage complies with industry-standard encryption protocols.
          </MotionParagraph>

          <MotionH5>4. Data Ownership</MotionH5>
          <MotionParagraph>
            You retain full ownership of all uploaded content, including documents,
            datasets, and videos. Cortexvia claims no rights, license, or authorship
            over your data. By uploading data, you grant Cortexvia a limited,
            non-exclusive license to process it solely for delivering the Services
            (e.g., RAG pipelines, model inference) as outlined in our Privacy Policy.
          </MotionParagraph>

          <MotionH5>5. Data Monetization</MotionH5>
          <MotionParagraph>
            Cortexvia does not sell, rent, trade, or monetize your uploaded data.
            Data is not used for public model training, advertising, or sharing with
            third parties, except as required to provide the Services (e.g., with
            trusted service providers bound by confidentiality agreements).
          </MotionParagraph>

          <MotionH5>6. Data Deletion</MotionH5>
          <MotionParagraph>
            You may delete uploaded data (e.g., documents, datasets, or processed
            outputs) at any time via the Cortexvia dashboard:
            <ul className="list-disc ml-6 mt-2">
              <li>Deleted data is permanently removed from our servers within <strong>30 days</strong>.</li>
              <li>Upon account termination, all associated data (e.g., uploaded files, API logs) is deleted per our Privacy Policy, unless legally required to retain longer.</li>
              <li>Deleted data cannot be recovered, and you are responsible for maintaining backups.</li>
            </ul>
            To request immediate deletion, contact <strong>privacy@cortexvia.com</strong>.
          </MotionParagraph>

          <MotionH5>7. Usage Analytics</MotionH5>
          <MotionParagraph>
            Cortexvia collects anonymous, aggregated usage metrics to improve
            platform performance, model efficiency, and service reliability:
            <ul className="list-disc ml-6 mt-2">
              <li>Metrics include API request volumes (e.g., RPM, RPD), query speeds (e.g., 50–3000 TPS), and model usage patterns.</li>
              <li>No personally identifiable information is included in analytics.</li>
              <li>Data is retained for up to 12 months for performance monitoring, then anonymized.</li>
            </ul>
            These metrics help optimize Services like RAG pipelines and SDK
            integrations without compromising user privacy.
          </MotionParagraph>

          <MotionH5>8. Security Practices</MotionH5>
          <MotionParagraph>
            Cortexvia employs robust security measures to protect your data:
            <ul className="list-disc ml-6 mt-2">
              <li>Data transfers occur over encrypted HTTPS connections.</li>
              <li>Storage uses AES-256 encryption for data at rest.</li>
              <li>Access to user data is restricted to authorized systems via token-based authentication.</li>
              <li>Regular security audits ensure compliance with industry standards (e.g., ISO 27001, GDPR).</li>
            </ul>
            You are responsible for securing your account credentials and API keys to
            prevent unauthorized access.
          </MotionParagraph>

          <MotionH5>9. User Rights</MotionH5>
          <MotionParagraph>
            You have the following rights regarding your data:
            <ul className="list-disc ml-6 mt-2">
              <li>Access and review uploaded data or processed outputs.</li>
              <li>Export data (e.g., documents, datasets) via the Cortexvia dashboard.</li>
              <li>Delete data permanently, subject to the 30-day deletion process.</li>
              <li>Withdraw consent for data processing by closing your account.</li>
            </ul>
            To exercise these rights, contact <strong>privacy@cortexvia.com</strong>
            or use the dashboard tools provided.
          </MotionParagraph>

          <MotionH5>10. International Data Transfers</MotionH5>
          <MotionParagraph>
            Cortexvia operates servers globally to support our Services. Uploaded
            data (e.g., documents, YouTube URLs) may be stored or processed in
            jurisdictions outside India, subject to compliance with data protection
            laws (e.g., GDPR, CCPA). We implement safeguards, such as encryption and
            contractual agreements, to protect data during cross-border transfers.
          </MotionParagraph>

          <MotionH5>11. Policy Updates</MotionH5>
          <MotionParagraph>
            Cortexvia may update this Data Usage Policy periodically to reflect
            changes in our Services, technology, or legal requirements. Updates will
            be posted on <a href="https://cortexvia.com">cortexvia.com</a>, and
            continued use of the Services constitutes acceptance of the revised
            Policy. We encourage you to review this Policy regularly.
          </MotionParagraph>

          <MotionH5>12. Contact Information</MotionH5>
          <MotionParagraph>
            For questions about this Data Usage Policy or our data handling practices:
            <br />
            <strong>Email:</strong> privacy@cortexvia.com
            <br />
            <strong>Support:</strong> support@cortexvia.com
            <br />
            <strong>Phone:</strong> +91 98765 43210
            <br />
            <strong>Address:</strong> 45 Data Hub Street, Bangalore, Karnataka, India
          </MotionParagraph>

          <MotionH5>13. Consent</MotionH5>
          <MotionParagraph>
            By using Cortexvia’s Services, including uploading data for RAG pipelines,
            APIs, or SDKs, you acknowledge and consent to the processing, storage,
            and handling of your data as described in this Data Usage Policy.
          </MotionParagraph>
        </div>
      </div>
    </PageWrapper>
  );
};

export default DataUsagePolicyMain;