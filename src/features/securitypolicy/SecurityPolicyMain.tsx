import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import PageWrapper from "@/apputils/PageWrapper";

function SecurityPolicyMain() {
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

          <h1 className="text-3xl font-semibold mb-2">Cortexvia Security Policy</h1>
          <p className="text-sm mb-8">Date of Last Revision: October 20, 2025</p>

          <p className="mb-4 text-[15px] leading-relaxed">
            This Security Policy outlines the measures Cortexvia implements to protect user data,
            ensure service reliability, and maintain the integrity of our platform. Security is a
            continuous effort at Cortexvia — built into our infrastructure, products, and culture.
          </p>

          <h2 className="font-bold text-[16px] mb-2">1. Encryption Standards</h2>
          <p className="mb-6 text-[15px] leading-relaxed">
            All data is encrypted using <strong>TLS</strong> during transit and{" "}
            <strong>AES-256</strong> at rest. This ensures your data remains private and
            inaccessible to unauthorized entities. Encryption keys are rotated and managed securely.
          </p>

          <h2 className="font-bold text-[16px] mb-2">2. Access Controls</h2>
          <p className="mb-6 text-[15px] leading-relaxed">
            Access to internal systems follows a role-based access control (RBAC) model. Only
            authorized employees with legitimate business needs can access production environments.
            Authentication is enforced through multi-factor verification.
          </p>

          <h2 className="font-bold text-[16px] mb-2">3. Vulnerability Scanning and Audits</h2>
          <p className="mb-6 text-[15px] leading-relaxed">
            Regular vulnerability scans and internal security audits are conducted to identify and
            remediate potential threats. External penetration testing is scheduled periodically to
            validate our defense posture.
          </p>

          <h2 className="font-bold text-[16px] mb-2">4. System Monitoring</h2>
          <p className="mb-6 text-[15px] leading-relaxed">
            Cortexvia continuously monitors systems for anomalies, suspicious patterns, and
            unauthorized access attempts. Alerts trigger immediate investigation and, if necessary,
            automated containment actions.
          </p>

          <h2 className="font-bold text-[16px] mb-2">5. Authentication and Tokens</h2>
          <p className="mb-6 text-[15px] leading-relaxed">
            API and user authentication use token-based mechanisms. Tokens are short-lived, scoped,
            and securely stored. PassTokens are never stored in plain text and are hashed using
            industry-standard algorithms.
          </p>

          <h2 className="font-bold text-[16px] mb-2">6. Incident Response</h2>
          <p className="mb-6 text-[15px] leading-relaxed">
            Cortexvia maintains an incident response protocol for identifying, assessing, and
            resolving security events. In the event of a breach, affected users are notified promptly
            in compliance with applicable laws.
          </p>

          <h2 className="font-bold text-[16px] mb-2">7. Penetration Testing</h2>
          <p className="mb-6 text-[15px] leading-relaxed">
            Third-party experts conduct regular penetration tests to simulate attacks and identify
            weaknesses before they can be exploited. Findings are remediated immediately upon
            verification.
          </p>

          <h2 className="font-bold text-[16px] mb-2">8. Responsible Disclosure</h2>
          <p className="mb-6 text-[15px] leading-relaxed">
            We encourage responsible disclosure of security vulnerabilities. Researchers and users
            can report potential security flaws directly to{" "}
            <strong>security@cortexvia.com</strong>. Verified submissions may be eligible for
            acknowledgment under our disclosure program.
          </p>

          <h2 className="font-bold text-[16px] mb-2">9. Data Protection</h2>
          <p className="mb-6 text-[15px] leading-relaxed">
            User data is processed and stored within secure environments that meet compliance
            standards. Cortexvia does not sell, trade, or share user data with any unauthorized
            entity.
          </p>

          <h2 className="font-bold text-[16px] mb-2">10. Employee Security Training</h2>
          <p className="mb-6 text-[15px] leading-relaxed">
            All Cortexvia employees undergo mandatory security awareness and data protection
            training. Access credentials are revoked immediately upon role changes or termination.
          </p>

          <h2 className="font-bold text-[16px] mb-2">11. Policy Updates</h2>
          <p className="mb-6 text-[15px] leading-relaxed">
            This policy is reviewed and updated regularly to reflect evolving security standards,
            technology, and legal obligations. Updates are published on the official Cortexvia
            website.
          </p>

          <h2 className="font-bold text-[16px] mb-2">12. Contact Information</h2>
          <p className="mb-6 text-[15px] leading-relaxed">
            For security concerns, incident reports, or vulnerability disclosures:
            <br />
            <strong>Email:</strong> security@cortexvia.com
            <br />
            <strong>Support:</strong> support@cortexvia.com
            <br />
            <strong>Address:</strong> No where, Imaginary street, Nowhere City, 00000
          </p>

          <h2 className="font-bold text-[16px] mb-2">13. Acknowledgement</h2>
          <p className="mb-6 text-[15px] leading-relaxed">
            By using Cortexvia, you acknowledge that you understand and agree to this Security
            Policy and its commitment to safeguarding your data and privacy.
          </p>
        </div>
      </div>
    </PageWrapper>
  );
}

export default SecurityPolicyMain;
