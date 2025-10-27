import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import PageWrapper from "@/apputils/PageWrapper";
import {
  MotionDiv,
  MotionH3,
  MotionH5,
  MotionParagraph,
} from "@/apputils/MotionUtils";

const CompliancePolicyMain: React.FC = () => {
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

          <MotionH3>Cortexvia Compliance Policy</MotionH3>
          <MotionParagraph>
            Date of Last Revision: April 21, 2025
          </MotionParagraph>

          <MotionParagraph>
            This Compliance Policy outlines Cortexvia’s commitment to adhering to
            global privacy and data protection regulations while providing our
            Services, including large language models (LLMs), Retrieval-Augmented
            Generation (RAG) pipelines (e.g., Basic RAG, Smart RAG, Graph RAG),
            APIs, and SDKs (e.g., CortexRAG, EmbiRankis, Chatbot Library). We
            ensure transparency, accountability, and compliance in all data
            processing and operational activities.
          </MotionParagraph>

          <MotionH5>1. Purpose and Scope</MotionH5>
          <MotionParagraph>
            This Policy details Cortexvia’s approach to complying with international
            data protection laws and ethical standards. It applies to all users,
            developers, and organizations using our Services across Free, Developer,
            and Enterprise tiers, covering data uploads (e.g., documents, YouTube
            URLs), API interactions, and model inference.
          </MotionParagraph>

          <MotionH5>2. Regulatory Alignment</MotionH5>
          <MotionParagraph>
            Cortexvia complies with key global regulations, including:
            <ul className="list-disc ml-6 mt-2">
              <li>
                <strong>General Data Protection Regulation (GDPR):</strong> Ensuring
                lawful data processing, user consent, and rights for EU users.
              </li>
              <li>
                <strong>California Consumer Privacy Act (CCPA):</strong> Protecting
                California residents’ data rights, including access and deletion.
              </li>
              <li>
                <strong>Digital Personal Data Protection (DPDP) Act, India:</strong>
                Adhering to India’s data protection framework for user privacy.
              </li>
            </ul>
            Data is processed only under lawful bases, such as user consent, contract
            fulfillment, or legal obligations, as outlined in our Privacy Policy.
          </MotionParagraph>

          <MotionH5>3. Data Processing Agreements</MotionH5>
          <MotionParagraph>
            Enterprise users or partners integrating Cortexvia’s Services (e.g.,
            APIs, RAG pipelines, or SDKs) may request a Data Processing Agreement
            (DPA) to formalize:
            <ul className="list-disc ml-6 mt-2">
              <li>Data handling and security obligations.</li>
              <li>Roles and responsibilities under GDPR, CCPA, or DPDP Act.</li>
              <li>Compliance with tier-specific limits (e.g., Enterprise: Unlimited
                document uploads).</li>
            </ul>
            To request a DPA, contact <strong>compliance@cortexvia.com</strong>.
          </MotionParagraph>

          <MotionH5>4. User Rights</MotionH5>
          <MotionParagraph>
            Cortexvia respects your data rights, including:
            <ul className="list-disc ml-6 mt-2">
              <li>Accessing and reviewing uploaded data (e.g., documents, datasets)
                or API usage logs.</li>
              <li>Correcting inaccurate personal information.</li>
              <li>Exporting data in standardized formats (e.g., JSON, CSV) for
                portability.</li>
              <li>Deleting data permanently via the Cortexvia dashboard or by
                contacting <strong>privacy@cortexvia.com</strong>.</li>
            </ul>
            Requests are processed within 30 days, subject to legal requirements.
          </MotionParagraph>

          <MotionH5>5. Government and Legal Requests</MotionH5>
          <MotionParagraph>
            Cortexvia responds to government or legal data requests only when
            supported by valid legal orders (e.g., court orders, subpoenas). We:
            <ul className="list-disc ml-6 mt-2">
              <li>Review requests for jurisdictional validity and necessity.</li>
              <li>Notify users of requests where legally permitted.</li>
              <li>Publish annual transparency reports summarizing government data
                requests and our responses.</li>
            </ul>
            Contact <strong>compliance@cortexvia.com</strong> for inquiries about
            legal requests.
          </MotionParagraph>

          <MotionH5>6. Data Retention and Portability</MotionH5>
          <MotionParagraph>
            User data is retained only as long as necessary to fulfill its intended
            purpose or meet legal obligations:
            <ul className="list-disc ml-6 mt-2">
              <li>
                <strong>Uploaded Data:</strong> Documents (e.g., PDF, DOCX, TXT,
                Markdown) and YouTube URLs are stored based on tier limits (e.g.,
                Free Tier: 2 files/day; Developer Tier: 200 files/day) until deleted
                by the user or upon account termination.
              </li>
              <li>
                <strong>Usage Logs:</strong> API request logs and analytics (e.g.,
                RPM, TPD) are retained for up to 12 months, then anonymized.
              </li>
              <li>
                <strong>Portability:</strong> Users can export data (e.g., documents,
                datasets) via the dashboard in standardized formats.
              </li>
            </ul>
            Data deletion occurs within 30 days of a request, as outlined in our
            Data Usage Policy.
          </MotionParagraph>

          <MotionH5>7. Cross-Border Data Transfers</MotionH5>
          <MotionParagraph>
            Cortexvia operates servers globally to support our Services. Data (e.g.,
            uploaded documents, YouTube URLs, or API-generated outputs) may be
            transferred or stored outside India, subject to:
            <ul className="list-disc ml-6 mt-2">
              <li>Standard Contractual Clauses (SCCs) for GDPR compliance.</li>
              <li>Data protection agreements with third-party providers.</li>
              <li>Encryption (e.g., AES-256, HTTPS) to safeguard transfers.</li>
            </ul>
            We ensure compliance with GDPR, CCPA, and DPDP Act for all cross-border
            data flows.
          </MotionParagraph>

          <MotionH5>8. Third-Party Compliance</MotionH5>
          <MotionParagraph>
            All third-party vendors, hosting providers, and partners (e.g., payment
            processors, analytics services) are bound by strict confidentiality and
            compliance agreements aligned with:
            <ul className="list-disc ml-6 mt-2">
              <li>GDPR, CCPA, and DPDP Act requirements.</li>
              <li>ISO 27001 and PCI-DSS standards for security and data handling.</li>
            </ul>
            Third parties processing data for Cortexvia (e.g., YouTube URL
            processing) are vetted for compliance.
          </MotionParagraph>

          <MotionH5>9. Data Protection Officer (DPO)</MotionH5>
          <MotionParagraph>
            Cortexvia’s appointed Data Protection Officer oversees compliance with
            data protection laws and handles inquiries related to:
            <ul className="list-disc ml-6 mt-2">
              <li>Data processing practices for RAG pipelines, APIs, and SDKs.</li>
              <li>User rights requests (e.g., access, deletion).</li>
              <li>Regulatory compliance and audit processes.</li>
            </ul>
            Contact the DPO at <strong>compliance@cortexvia.com</strong>.
          </MotionParagraph>

          <MotionH5>10. Audits and Reviews</MotionH5>
          <MotionParagraph>
            Cortexvia conducts regular compliance audits, including:
            <ul className="list-disc ml-6 mt-2">
              <li>Internal reviews of data handling and security practices.</li>
              <li>Third-party audits to verify adherence to ISO 27001, GDPR, and
                DPDP Act standards.</li>
              <li>Privacy impact assessments for new features (e.g., Graph RAG,
                Chatbot Library).</li>
            </ul>
            Audit results inform ongoing improvements to our Services.
          </MotionParagraph>

          <MotionH5>11. Transparency and Accountability</MotionH5>
          <MotionParagraph>
            Cortexvia is committed to transparency through:
            <ul className="list-disc ml-6 mt-2">
              <li>Annual transparency reports detailing government data requests
                and compliance efforts.</li>
              <li>Public disclosure of privacy impact assessments for major updates.</li>
              <li>Clear communication of data processing limits (e.g., Free Tier:
                100 queries/day; Developer Tier: unlimited queries).</li>
            </ul>
            Reports are available on <a href="https://cortexvia.com">cortexvia.com</a>.
          </MotionParagraph>

          <MotionH5>12. Policy Updates</MotionH5>
          <MotionParagraph>
            Cortexvia may update this Compliance Policy periodically to reflect
            changes in regulations, Services, or operational practices. Updates will
            be posted on <a href="https://cortexvia.com">cortexvia.com</a>, with
            significant changes notified via email or dashboard. Continued use of
            the Services constitutes acceptance of the revised Policy.
          </MotionParagraph>

          <MotionH5>13. Contact Information</MotionH5>
          <MotionParagraph>
            For compliance or legal-related inquiries:
            <br />
            <strong>Email:</strong> compliance@cortexvia.com
            <br />
            <strong>Support:</strong> support@cortexvia.com
            <br />
            <strong>Phone:</strong> +91 98765 43210
            <br />
            <strong>Address:</strong> 45 Data Hub Street, Bangalore, Karnataka, India
          </MotionParagraph>

          <MotionH5>14. Acknowledgment</MotionH5>
          <MotionParagraph>
            By using Cortexvia’s Services, including APIs, SDKs, RAG pipelines, or
            LLMs, you acknowledge that you have read, understood, and agreed to
            comply with this Compliance Policy.
          </MotionParagraph>
        </div>
      </div>
    </PageWrapper>
  );
};

export default CompliancePolicyMain;