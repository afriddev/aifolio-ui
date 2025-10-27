import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import PageWrapper from "@/apputils/PageWrapper";
import {
  MotionDiv,
  MotionH3,
  MotionH5,
  MotionParagraph,
} from "@/apputils/MotionUtils";

const TermsMain: React.FC = () => {
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

          <MotionH3>Cortexvia Terms & Conditions</MotionH3>
          <MotionParagraph>
            Date of Last Revision: April 21, 2025
          </MotionParagraph>

          <MotionParagraph>
            These Terms and Conditions govern the use of Cortexvia’s website,
            APIs, SDKs, large language models (LLMs), Retrieval-Augmented
            Generation (RAG) pipelines, and platform services (collectively, the
            “Services”). By accessing or using Cortexvia, you agree to be bound
            by these Terms and all applicable laws. If you do not agree, you are
            prohibited from using the Services.
          </MotionParagraph>

          <MotionParagraph>
            PLEASE READ THESE TERMS CAREFULLY. THEY FORM A LEGALLY BINDING
            AGREEMENT BETWEEN YOU AND CORTEXVIA.
          </MotionParagraph>

          <MotionParagraph>
            IF YOU DO NOT AGREE TO THESE TERMS OR OUR PRIVACY POLICY, YOU MUST
            NOT ACCESS OR USE THE SERVICES.
          </MotionParagraph>

          <MotionH5>1. Privacy Policy; Entire Agreement</MotionH5>
          <MotionParagraph>
            Your privacy is critical to us. Please review our Privacy Policy to
            understand how we collect, process, and protect your data, including
            data uploaded for RAG pipelines or AI model inference. By using
            Cortexvia, you consent to these practices. These Terms and the
            Privacy Policy constitute the entire agreement between you and
            Cortexvia regarding the Services.
          </MotionParagraph>

          <MotionH5>2. Changes to Terms and Conditions</MotionH5>
          <MotionParagraph>
            Cortexvia may update these Terms at any time. Revised Terms will be
            posted on our website, and continued use of the Services constitutes
            acceptance of the updates. If you do not agree to the revised Terms,
            you must discontinue using the Services.
          </MotionParagraph>

          <MotionH5>3. Scope of Use</MotionH5>
          <MotionParagraph>
            Cortexvia grants you a limited, non-exclusive, non-transferable
            license to use its Services, including APIs, SDKs (e.g., CortexRAG,
            EmbiRankis, Chatbot Library), and AI models, for lawful purposes
            only. You may not copy, modify, reverse-engineer, or resell any part
            of the platform without express written permission from Cortexvia.
          </MotionParagraph>

          <MotionH5>4. Account and API Key Management</MotionH5>
          <MotionParagraph>
            Registered users receive unique API keys for accessing Cortexvia’s
            Services, including data uploads, model inference, and RAG
            pipelines. You are responsible for securing your credentials.
            Cortexvia may suspend or revoke keys for misuse, unauthorized
            sharing, or excessive traffic (e.g., exceeding RPM, RPD, TPM, or TPD
            limits as defined in our documentation).
          </MotionParagraph>

          <MotionH5>5. Plans and Billing</MotionH5>
          <MotionParagraph>
            Cortexvia offers Free, Developer, and Enterprise plans with tiered
            limits for document uploads, video processing, query volume, and
            token throughput (as outlined at cortexvia.com). Billing is
            processed monthly via secure payment providers. Refunds are issued
            only for verified service failures. Cancellations must be submitted
            before the next billing cycle.
          </MotionParagraph>

          <MotionH5>6. Data & Content Ownership</MotionH5>
          <MotionParagraph>
            You retain ownership of all data, documents, or videos uploaded to
            Cortexvia. By uploading, you grant Cortexvia a limited,
            non-exclusive license to process your data for RAG pipelines, model
            training, or inference as required to provide the Services.
            Cortexvia does not sell or share your data with third parties,
            except as described in our Privacy Policy.
          </MotionParagraph>

          <MotionH5>7. Acceptable Use Policy</MotionH5>
          <MotionParagraph>
            You may not use Cortexvia to generate, distribute, or host illegal,
            harmful, or misleading content. Prohibited actions include
            reverse-engineering APIs or models, overloading servers (e.g.,
            exceeding rate limits), automated scraping, or generating malicious
            content. Violations may result in account suspension, termination,
            or legal action.
          </MotionParagraph>

          <MotionH5>8. Service Availability</MotionH5>
          <MotionParagraph>
            Cortexvia strives for high availability but does not guarantee
            uninterrupted or error-free access. Maintenance, updates, or
            technical issues may cause temporary disruptions. Scheduled
            maintenance will be communicated in advance when feasible.
            Processing speeds (e.g., Low, Medium, High Speed tiers) vary by plan
            and model.
          </MotionParagraph>

          <MotionH5>9. Liability Disclaimer</MotionH5>
          <MotionParagraph>
            Cortexvia is provided “as is” without warranties. We are not liable
            for losses from downtime, data loss, or inaccuracies in AI-generated
            outputs, including those from LLMs or RAG pipelines. You are
            responsible for verifying all outputs before use, especially for
            critical applications.
          </MotionParagraph>

          <MotionH5>10. Account Termination</MotionH5>
          <MotionParagraph>
            Cortexvia may terminate accounts for policy violations, non-payment,
            or prolonged inactivity. Termination results in deletion of all
            associated data, including uploaded documents, videos, and API keys.
            Regular data backups are your responsibility. Re-registration may be
            denied for prior misuse.
          </MotionParagraph>

          <MotionH5>11. Policy Updates</MotionH5>
          <MotionParagraph>
            These Terms may be updated periodically. Continued use of the
            Services after updates indicates acceptance. You are responsible for
            reviewing the latest Terms regularly at cortexvia.com.
          </MotionParagraph>

          <MotionH5>12. Contact Information</MotionH5>
          <MotionParagraph>
            For inquiries or support:
            <br />
            <strong>Email:</strong> support@cortexvia.com
            <br />
            <strong>Phone:</strong> +91 98765 43210
            <br />
            <strong>Address:</strong> 45 Data Hub Street, Bangalore, Karnataka,
            India
          </MotionParagraph>

          <MotionH5>13. Intellectual Property</MotionH5>
          <MotionParagraph>
            All content, logos, AI models, APIs, SDKs (e.g., CortexRAG,
            EmbiRankis, Chatbot Library), and other intellectual property on
            Cortexvia are owned by Cortexvia or its licensors. Unauthorized
            copying, reproduction, or distribution is prohibited.
          </MotionParagraph>

          <MotionH5>14. Confidentiality</MotionH5>
          <MotionParagraph>
            You must maintain confidentiality of non-public information,
            including API specifications, unpublished features, or test data
            obtained through Cortexvia’s Services.
          </MotionParagraph>

          <MotionH5>15. Indemnification</MotionH5>
          <MotionParagraph>
            You agree to indemnify and hold Cortexvia, its affiliates, and
            partners harmless from claims, damages, or expenses arising from
            your use of the Services or violation of these Terms.
          </MotionParagraph>

          <MotionH5>16. Governing Law & Jurisdiction</MotionH5>
          <MotionParagraph>
            These Terms are governed by the laws of India. Disputes shall be
            resolved exclusively in the courts of Bangalore, Karnataka.
          </MotionParagraph>

          <MotionH5>17. Severability</MotionH5>
          <MotionParagraph>
            If any provision of these Terms is deemed unenforceable, the
            remaining provisions shall remain in full effect.
          </MotionParagraph>

          <MotionH5>18. Entire Agreement</MotionH5>
          <MotionParagraph>
            These Terms and the Privacy Policy constitute the entire agreement
            between you and Cortexvia, superseding all prior agreements
            regarding the Services.
          </MotionParagraph>
        </div>
      </div>
    </PageWrapper>
  );
};

export default TermsMain;
