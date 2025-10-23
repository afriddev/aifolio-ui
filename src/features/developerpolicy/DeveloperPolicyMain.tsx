import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import PageWrapper from "@/apputils/PageWrapper";

function DeveloperPolicyMain() {
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

          <h1 className="text-3xl font-semibold mb-2">Cortexvia Developer Policy</h1>
          <p className="text-sm mb-8">Date of Last Revision: October 20, 2025</p>

          <p className="mb-4 text-[15px] leading-relaxed">
            This Developer Policy outlines the terms and responsibilities for developers building
            integrations, SDKs, or applications using Cortexvia’s APIs, models, and platform tools.
            By developing with Cortexvia, you agree to follow these rules to maintain a safe and
            compliant ecosystem.
          </p>

          <h2 className="font-bold text-[16px] mb-2">1. Compliance Requirements</h2>
          <p className="mb-6 text-[15px] leading-relaxed">
            Developers must adhere to Cortexvia’s API Policy, Terms of Service, and Privacy Policy.
            All integrations must comply with applicable laws, data protection standards, and ethical
            AI practices.
          </p>

          <h2 className="font-bold text-[16px] mb-2">2. Data Storage and Consent</h2>
          <p className="mb-6 text-[15px] leading-relaxed">
            No user data may be stored, transmitted, or shared without explicit user consent.
            Applications must disclose data usage clearly and allow users to revoke permissions at
            any time.
          </p>

          <h2 className="font-bold text-[16px] mb-2">3. Attribution Requirements</h2>
          <p className="mb-6 text-[15px] leading-relaxed">
            Developers must provide visible attribution to Cortexvia where applicable, including in
            app interfaces, documentation, or public releases referencing Cortexvia’s technology or
            APIs.
          </p>

          <h2 className="font-bold text-[16px] mb-2">4. Prohibited AI Outputs</h2>
          <p className="mb-6 text-[15px] leading-relaxed">
            Developers are strictly prohibited from generating, hosting, or distributing harmful,
            biased, or misleading AI content. Applications must include safeguards and filters to
            prevent such misuse.
          </p>

          <h2 className="font-bold text-[16px] mb-2">5. SDK and API Updates</h2>
          <p className="mb-6 text-[15px] leading-relaxed">
            Cortexvia periodically updates SDKs and APIs to enhance functionality and security.
            Developers are responsible for ensuring their integrations remain compatible with new
            releases and deprecations.
          </p>

          <h2 className="font-bold text-[16px] mb-2">6. Performance and Security</h2>
          <p className="mb-6 text-[15px] leading-relaxed">
            Developers must follow secure coding practices and prevent unauthorized access or data
            leaks. Any detected vulnerabilities must be reported immediately to
            <strong> security@cortexvia.com</strong>.
          </p>

          <h2 className="font-bold text-[16px] mb-2">7. Violations and Termination</h2>
          <p className="mb-6 text-[15px] leading-relaxed">
            Non-compliance, abuse, or misuse of Cortexvia’s tools may result in developer account
            suspension or termination. Appeals can be submitted to
            <strong> support@cortexvia.com</strong> for review.
          </p>

          <h2 className="font-bold text-[16px] mb-2">8. Ethical AI Development</h2>
          <p className="mb-6 text-[15px] leading-relaxed">
            Developers are expected to uphold ethical standards when using Cortexvia’s platform.
            AI-based solutions must not promote discrimination, misinformation, or harmful behavior.
          </p>

          <h2 className="font-bold text-[16px] mb-2">9. Policy Updates</h2>
          <p className="mb-6 text-[15px] leading-relaxed">
            Cortexvia may revise this Developer Policy as technology or compliance requirements
            evolve. Continued development or distribution of Cortexvia-based integrations implies
            acceptance of these updates.
          </p>

          <h2 className="font-bold text-[16px] mb-2">10. Contact Information</h2>
          <p className="mb-6 text-[15px] leading-relaxed">
            For inquiries related to developer access or policy clarification:
            <br />
            <strong>Email:</strong> devsupport@cortexvia.com
            <br />
            <strong>Support:</strong> support@cortexvia.com
            <br />
            <strong>Address:</strong> 45 Data Hub Street, Bangalore, Karnataka, India
          </p>

          <h2 className="font-bold text-[16px] mb-2">11. Agreement</h2>
          <p className="mb-6 text-[15px] leading-relaxed">
            By developing with Cortexvia SDKs or APIs, you confirm that you have read and agreed to
            abide by this Developer Policy and all related Cortexvia terms.
          </p>
        </div>
      </div>
    </PageWrapper>
  );
}

export default DeveloperPolicyMain;
