import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import PageWrapper from "@/apputils/PageWrapper";
import { MotionDiv, MotionH3, MotionH5, MotionParagraph } from "@/apputils/MotionUtils";

const LegalNoticeMain: React.FC = () => {
  const navigate = useNavigate();

  return (
    <PageWrapper>
      <div className="flex flex-col items-center justify-center w-full pb-20">
        <div className="px-4 lg:px-0 lg:w-[50%] text-gray-800">
          <MotionDiv>
            <Button
              variant="ghost"
              onClick={() => navigate(-1)}
            >
              ← Back
            </Button>
          </MotionDiv>

          <MotionH3>Cortexvia Legal Notice</MotionH3>
          <MotionParagraph>
            Date of Last Revision: October 20, 2025
          </MotionParagraph>

          <MotionParagraph>
            This Legal Notice provides official information regarding Cortexvia’s legal entity,
            jurisdiction, and intellectual property rights for its platform, APIs, SDKs (e.g.,
            CortexRAG, EmbiRankis, Chatbot Library), and AI models (e.g., LLMs, RAG pipelines). By
            using Cortexvia, you agree to comply with the applicable legal framework described below.
          </MotionParagraph>

          <MotionH5>1. Company Information</MotionH5>
          <MotionParagraph>
            <strong>Entity Name:</strong> Cortexvia Technologies Pvt. Ltd.
            <br />
            <strong>Registered Address:</strong> 45 Data Hub Street, Bangalore, Karnataka, India
          </MotionParagraph>

          <MotionH5>2. Purpose and Scope</MotionH5>
          <MotionParagraph>
            This notice outlines legal responsibilities related to Cortexvia’s operations, ownership,
            and intellectual property rights. It applies to all visitors, users, developers, and
            partners interacting with Cortexvia’s platform and services.
          </MotionParagraph>

          <MotionH5>3. Governing Law and Jurisdiction</MotionH5>
          <MotionParagraph>
            All legal matters involving Cortexvia are governed by the laws of India. Any disputes
            shall be exclusively resolved in the courts of Bangalore, Karnataka, India, applicable to
            all users worldwide.
          </MotionParagraph>

          <MotionH5>4. Intellectual Property</MotionH5>
          <MotionParagraph>
            All trademarks, logos, AI models, APIs, SDKs, source code, and related content available
            through Cortexvia are the exclusive property of Cortexvia Technologies Pvt. Ltd. or its
            licensors. Unauthorized reproduction, redistribution, or modification is strictly
            prohibited without written consent.
          </MotionParagraph>

          <MotionH5>5. Copyright and Content Ownership</MotionH5>
          <MotionParagraph>
            The website, platform interfaces, APIs, SDKs, and documentation are protected under
            applicable copyright laws. Users may view or use Cortexvia materials solely for lawful
            personal or business purposes as permitted by license or agreement.
          </MotionParagraph>

          <MotionH5>6. Prohibited Actions</MotionH5>
          <MotionParagraph>
            Users are prohibited from reproducing, redistributing, framing, scraping, or reselling
            any part of the Cortexvia platform, APIs, SDKs, or documentation. Legal action may be
            taken against violations of intellectual property or brand misuse.
          </MotionParagraph>

          <MotionH5>7. Liability Disclaimer</MotionH5>
          <MotionParagraph>
            Cortexvia is provided “as is,” without warranties of any kind. The company is not liable
            for any direct or indirect damages arising from the use of its platform, APIs, SDKs, or
            AI-generated content, including outputs from LLMs or RAG pipelines.
          </MotionParagraph>

          <MotionH5>8. Legal Contact Information</MotionH5>
          <MotionParagraph>
            For legal correspondence or trademark inquiries:
            <br />
            <strong>Email:</strong> legal@cortexvia.com
            <br />
            <strong>Phone:</strong> +91 98765 43210
            <br />
            <strong>Address:</strong> 45 Data Hub Street, Bangalore, Karnataka, India
          </MotionParagraph>

          <MotionH5>9. Changes to Legal Notice</MotionH5>
          <MotionParagraph>
            Cortexvia may update this Legal Notice periodically. The most recent version will be
            published at cortexvia.com. Continued use of our services constitutes acknowledgment of
            the updated notice.
          </MotionParagraph>

          <MotionH5>10. Acknowledgment</MotionH5>
          <MotionParagraph>
            By using Cortexvia’s platform, APIs, or SDKs, you confirm that you have read,
            understood, and agree to abide by this Legal Notice and all applicable laws and
            regulations.
          </MotionParagraph>

          <MotionH5>11. Usage Limits and Compliance</MotionH5>
          <MotionParagraph>
            Users must comply with usage limits for Free, Developer, or Enterprise plans, including
            restrictions on document uploads, video processing, and query volume (e.g., RPM, RPD,
            TPM, TPD). Non-compliance may result in legal action or service restrictions, as detailed
            at cortexvia.com.
          </MotionParagraph>

          <MotionH5>12. Third-Party Integrations</MotionH5>
          <MotionParagraph>
            Cortexvia supports third-party integrations (e.g., OpenAI-compatible endpoints). Users
            and developers are responsible for ensuring compliance with third-party terms when using
            such integrations with Cortexvia’s services.
          </MotionParagraph>
        </div>
      </div>
    </PageWrapper>
  );
};

export default LegalNoticeMain;