import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import PageWrapper from "@/apputils/PageWrapper";
import { MotionDiv, MotionH3, MotionH5, MotionParagraph } from "@/apputils/MotionUtils";

const SecurityPolicyMain: React.FC = () => {
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

          <MotionH3>Cortexvia Security Policy</MotionH3>
          <MotionParagraph>
            Date of Last Revision: October 20, 2025
          </MotionParagraph>

          <MotionParagraph>
            This Security Policy outlines the measures Cortexvia implements to protect user data,
            ensure service reliability, and maintain the integrity of our platform, including APIs,
            SDKs (e.g., CortexRAG, EmbiRankis, Chatbot Library), and AI models (e.g., LLMs, RAG
            pipelines). Security is a continuous effort built into our infrastructure, products, and
            culture.
          </MotionParagraph>

          <MotionH5>1. Encryption Standards</MotionH5>
          <MotionParagraph>
            All data, including documents, videos, and API requests, is encrypted using <strong>TLS</strong> during
            transit and <strong>AES-256</strong> at rest. Encryption keys are rotated and managed
            securely to ensure privacy and protection against unauthorized access.
          </MotionParagraph>

          <MotionH5>2. Access Controls</MotionH5>
          <MotionParagraph>
            Access to internal systems follows a role-based access control (RBAC) model. Only
            authorized employees with legitimate business needs can access production environments,
            with authentication enforced through multi-factor verification.
          </MotionParagraph>

          <MotionH5>3. Vulnerability Scanning and Audits</MotionH5>
          <MotionParagraph>
            Regular vulnerability scans and internal security audits are conducted to identify and
            remediate potential threats. External penetration testing is scheduled periodically to
            validate our defense posture across APIs, SDKs, and platform services.
          </MotionParagraph>

          <MotionH5>4. System Monitoring</MotionH5>
          <MotionParagraph>
            Cortexvia continuously monitors systems for anomalies, suspicious patterns, and
            unauthorized access attempts, including excessive API usage (e.g., exceeding RPM, RPD,
            TPM, TPD limits). Alerts trigger immediate investigation and automated containment
            actions when necessary.
          </MotionParagraph>

          <MotionH5>5. Authentication and Tokens</MotionH5>
          <MotionParagraph>
            API and user authentication use token-based mechanisms. Tokens are short-lived, scoped to
            specific services (e.g., data uploads, model inference), and securely stored. Passwords
            are never stored in plain text and are hashed using industry-standard algorithms.
          </MotionParagraph>

          <MotionH5>6. Incident Response</MotionH5>
          <MotionParagraph>
            Cortexvia maintains an incident response protocol for identifying, assessing, and
            resolving security events. In the event of a breach, affected users are notified promptly
            in compliance with applicable laws (e.g., GDPR, CCPA).
          </MotionParagraph>

          <MotionH5>7. Penetration Testing</MotionH5>
          <MotionParagraph>
            Third-party experts conduct regular penetration tests to simulate attacks and identify
            weaknesses in our platform, APIs, and SDKs before they can be exploited. Findings are
            remediated immediately upon verification.
          </MotionParagraph>

          <MotionH5>8. Responsible Disclosure</MotionH5>
          <MotionParagraph>
            We encourage responsible disclosure of security vulnerabilities. Researchers and users
            can report potential flaws directly to <strong>security@cortexvia.com</strong>. Verified
            submissions may be eligible for acknowledgment under our disclosure program.
          </MotionParagraph>

          <MotionH5>9. Data Protection</MotionH5>
          <MotionParagraph>
            User data, including uploaded documents and videos, is processed and stored within secure
            environments that meet compliance standards. Cortexvia does not sell, trade, or share
            user data with unauthorized entities, as outlined in our Privacy Policy.
          </MotionParagraph>

          <MotionH5>10. Employee Security Training</MotionH5>
          <MotionParagraph>
            All Cortexvia employees undergo mandatory security awareness and data protection
            training. Access credentials are revoked immediately upon role changes or termination to
            maintain platform integrity.
          </MotionParagraph>

          <MotionH5>11. Policy Updates</MotionH5>
          <MotionParagraph>
            This policy is reviewed and updated regularly to reflect evolving security standards,
            technology, and legal obligations. Updates are published at cortexvia.com, and continued
            use of the Services implies acceptance.
          </MotionParagraph>

          <MotionH5>12. Contact Information</MotionH5>
          <MotionParagraph>
            For security concerns, incident reports, or vulnerability disclosures:
            <br />
            <strong>Email:</strong> security@cortexvia.com
            <br />
            <strong>Support:</strong> support@cortexvia.com
            <br />
            <strong>Phone:</strong> +91 98765 43210
            <br />
            <strong>Address:</strong> 45 Data Hub Street, Bangalore, Karnataka, India
          </MotionParagraph>

          <MotionH5>13. Acknowledgement</MotionH5>
          <MotionParagraph>
            By using Cortexvia, you acknowledge that you understand and agree to this Security
            Policy and its commitment to safeguarding your data and privacy.
          </MotionParagraph>

          <MotionH5>14. Third-Party Integrations</MotionH5>
          <MotionParagraph>
            Cortexvia supports third-party integrations (e.g., OpenAI-compatible endpoints) with
            secure data handling. Users and developers are responsible for complying with third-party
            terms when using such integrations.
          </MotionParagraph>

          <MotionH5>15. Usage Limits and Security</MotionH5>
          <MotionParagraph>
            Security measures include enforcing usage limits for Free, Developer, and Enterprise
            plans (e.g., document uploads, video processing, query volume). Exceeding limits may
            trigger temporary restrictions to protect platform stability, as detailed at
            cortexvia.com.
          </MotionParagraph>
        </div>
      </div>
    </PageWrapper>
  );
};

export default SecurityPolicyMain;