import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import PageWrapper from "@/apputils/PageWrapper";
import { MotionDiv, MotionH3, MotionH5, MotionParagraph } from "@/apputils/MotionUtils";

const DeveloperPolicyMain: React.FC = () => {
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

          <MotionH3>Cortexvia Developer Policy</MotionH3>
          <MotionParagraph>
            Date of Last Revision: October 20, 2025
          </MotionParagraph>

          <MotionParagraph>
            This Developer Policy outlines the terms and responsibilities for developers building
            integrations, SDKs, or applications using Cortexvia’s APIs, models (e.g., LLMs, RAG
            pipelines), and platform tools (e.g., CortexRAG, EmbiRankis, Chatbot Library). By
            developing with Cortexvia, you agree to follow these rules to maintain a safe and
            compliant ecosystem.
          </MotionParagraph>

          <MotionH5>1. Compliance Requirements</MotionH5>
          <MotionParagraph>
            Developers must adhere to Cortexvia’s API Policy, Terms of Service, and Privacy Policy.
            All integrations must comply with applicable laws, data protection standards (e.g., GDPR,
            CCPA), and ethical AI practices.
          </MotionParagraph>

          <MotionH5>2. Data Storage and Consent</MotionH5>
          <MotionParagraph>
            No user data may be stored, transmitted, or shared without explicit user consent.
            Applications must clearly disclose data usage for RAG pipelines or model inference and
            allow users to revoke permissions at any time via your application or Cortexvia’s
            dashboard.
          </MotionParagraph>

          <MotionH5>3. Attribution Requirements</MotionH5>
          <MotionParagraph>
            Developers must provide visible attribution to Cortexvia in app interfaces,
            documentation, or public releases when using our APIs, SDKs, or AI models, such as
            stating “Powered by Cortexvia” where applicable.
          </MotionParagraph>

          <MotionH5>4. Prohibited AI Outputs</MotionH5>
          <MotionParagraph>
            Developers are prohibited from generating, hosting, or distributing harmful, biased, or
            misleading AI content. Applications must implement safeguards and filters to prevent
            misuse of Cortexvia’s LLMs or RAG pipelines.
          </MotionParagraph>

          <MotionH5>5. SDK and API Updates</MotionH5>
          <MotionParagraph>
            Cortexvia periodically updates SDKs (e.g., CortexRAG, EmbiRankis) and APIs to enhance
            functionality and security. Developers must ensure integrations remain compatible with
            new releases and address deprecations promptly, as outlined at cortexvia.com.
          </MotionParagraph>

          <MotionH5>6. Performance and Security</MotionH5>
          <MotionParagraph>
            Developers must follow secure coding practices to prevent unauthorized access or data
            leaks. Any vulnerabilities in integrations must be reported immediately to
            <strong>security@cortexvia.com</strong>. Usage must stay within plan limits (e.g., RPM,
            RPD, TPM, TPD).
          </MotionParagraph>

          <MotionH5>7. Violations and Termination</MotionH5>
          <MotionParagraph>
            Non-compliance, abuse, or misuse of Cortexvia’s tools (e.g., exceeding rate limits,
            unauthorized key sharing) may result in developer account suspension or termination.
            Appeals can be submitted to <strong>support@cortexvia.com</strong> for review.
          </MotionParagraph>

          <MotionH5>8. Ethical AI Development</MotionH5>
          <MotionParagraph>
            Developers must uphold ethical standards when using Cortexvia’s platform. AI-based
            solutions must not promote discrimination, misinformation, or harmful behavior and should
            align with responsible AI principles.
          </MotionParagraph>

          <MotionH5>9. Policy Updates</MotionH5>
          <MotionParagraph>
            Cortexvia may revise this Developer Policy as technology or compliance requirements
            evolve. Continued development or distribution of Cortexvia-based integrations implies
            acceptance of these updates, posted at cortexvia.com.
          </MotionParagraph>

          <MotionH5>10. Contact Information</MotionH5>
          <MotionParagraph>
            For inquiries related to developer access or policy clarification:
            <br />
            <strong>Email:</strong> devsupport@cortexvia.com
            <br />
            <strong>Support:</strong> support@cortexvia.com
            <br />
            <strong>Phone:</strong> +91 98765 43210
            <br />
            <strong>Address:</strong> 45 Data Hub Street, Bangalore, Karnataka, India
          </MotionParagraph>

          <MotionH5>11. Agreement</MotionH5>
          <MotionParagraph>
            By developing with Cortexvia SDKs or APIs, you confirm that you have read and agreed to
            abide by this Developer Policy and all related Cortexvia terms.
          </MotionParagraph>

          <MotionH5>12. Third-Party Integrations</MotionH5>
          <MotionParagraph>
            Cortexvia supports integrations with third-party services (e.g., OpenAI-compatible
            endpoints). Developers are responsible for ensuring compliance with third-party terms and
            maintaining secure integration practices.
          </MotionParagraph>

          <MotionH5>13. Rate Limits and Usage</MotionH5>
          <MotionParagraph>
            Developers must adhere to usage limits for Free, Developer, or Enterprise plans,
            including restrictions on document uploads, video processing, and query volume (e.g.,
            RPM, RPD, TPM, TPD). Exceeding limits may result in temporary restrictions or additional
            charges, as detailed at cortexvia.com.
          </MotionParagraph>
        </div>
      </div>
    </PageWrapper>
  );
};

export default DeveloperPolicyMain;