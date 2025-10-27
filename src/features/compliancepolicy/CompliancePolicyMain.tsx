import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import PageWrapper from "@/apputils/PageWrapper";

function CompliancePolicyMain() {
  const navigate = useNavigate();

  return (
    <PageWrapper>
      <div className="flex flex-col items-center justify-center w-full pb-20">
        <div className="px-2 lg:px-0 lg:w-[50%] text-gray-800">
          <Button
            variant="ghost"
            className="mb-6 text-gray-600 hover:text-black focus:outline-none"
            onClick={() => navigate(-1)}
          >
            ← Back
          </Button>

          <h1 className="text-3xl font-semibold mb-2">
            Cortexvia Compliance Policy
          </h1>
          <p className="text-sm mb-8">
            Date of Last Revision: October 20, 2025
          </p>

          <p className="mb-4 text-[15px] leading-relaxed">
            This Compliance Policy describes Cortexvia’s adherence to global
            privacy and data protection standards. We ensure that all data
            processing and operational activities meet regulatory, ethical, and
            technical compliance obligations.
          </p>

          <h2 className="font-bold text-[16px] mb-2">1. Purpose and Scope</h2>
          <p className="mb-6 text-[15px] leading-relaxed">
            The purpose of this policy is to outline Cortexvia’s approach to
            data protection and compliance with international laws, ensuring
            transparency, fairness, and accountability in our handling of user
            information.
          </p>

          <h2 className="font-bold text-[16px] mb-2">
            2. Regulatory Alignment
          </h2>
          <p className="mb-6 text-[15px] leading-relaxed">
            Cortexvia complies with global regulations including the{" "}
            <strong>General Data Protection Regulation (GDPR)</strong>,{" "}
            <strong>California Consumer Privacy Act (CCPA)</strong>, and the{" "}
            <strong>Digital Personal Data Protection (DPDP) Act, India</strong>.
            We process user data only under lawful bases such as consent or
            contract fulfillment.
          </p>

          <h2 className="font-bold text-[16px] mb-2">
            3. Data Processing Agreements
          </h2>
          <p className="mb-6 text-[15px] leading-relaxed">
            Enterprise users or partners may request a Data Processing Agreement
            (DPA) outlining data handling obligations, security safeguards, and
            roles under applicable laws. Requests can be made by contacting{" "}
            <strong>compliance@cortexvia.com</strong>.
          </p>

          <h2 className="font-bold text-[16px] mb-2">4. User Rights</h2>
          <p className="mb-6 text-[15px] leading-relaxed">
            Cortexvia respects your right to access, correct, export, and delete
            personal data. Users can exercise these rights anytime via their
            dashboard or by contacting our privacy team.
          </p>

          <h2 className="font-bold text-[16px] mb-2">
            5. Government and Legal Requests
          </h2>
          <p className="mb-6 text-[15px] leading-relaxed">
            Cortexvia responds only to lawful data requests supported by valid
            legal orders. We review each request for jurisdictional validity and
            publish annual transparency summaries regarding government data
            access.
          </p>

          <h2 className="font-bold text-[16px] mb-2">
            6. Data Retention and Portability
          </h2>
          <p className="mb-6 text-[15px] leading-relaxed">
            User data is retained only as long as necessary to fulfill its
            intended purpose. Cortexvia provides mechanisms for users to export
            their data in standardized formats for portability or transfer to
            other services.
          </p>

          <h2 className="font-bold text-[16px] mb-2">
            7. Cross-Border Data Transfers
          </h2>
          <p className="mb-6 text-[15px] leading-relaxed">
            Where international data transfers occur, Cortexvia ensures
            compliance through appropriate safeguards such as Standard
            Contractual Clauses (SCCs) or equivalent legal frameworks.
          </p>

          <h2 className="font-bold text-[16px] mb-2">
            8. Third-Party Compliance
          </h2>
          <p className="mb-6 text-[15px] leading-relaxed">
            All vendors, hosting providers, and partners working with Cortexvia
            must adhere to strict confidentiality and compliance standards
            aligned with GDPR and DPDP Act requirements.
          </p>

          <h2 className="font-bold text-[16px] mb-2">
            9. Data Protection Officer (DPO)
          </h2>
          <p className="mb-6 text-[15px] leading-relaxed">
            Cortexvia’s Compliance and Data Protection Officer oversees
            adherence to applicable laws and manages all compliance-related
            inquiries.
            <br />
            <strong>Email:</strong> compliance@cortexvia.com
          </p>

          <h2 className="font-bold text-[16px] mb-2">10. Audits and Reviews</h2>
          <p className="mb-6 text-[15px] leading-relaxed">
            Regular compliance audits are conducted internally and through
            certified third parties to ensure ongoing conformance with privacy
            and security standards.
          </p>

          <h2 className="font-bold text-[16px] mb-2">
            11. Transparency and Accountability
          </h2>
          <p className="mb-6 text-[15px] leading-relaxed">
            Cortexvia publishes annual transparency reports highlighting
            compliance efforts, privacy impact assessments, and government data
            requests processed.
          </p>

          <h2 className="font-bold text-[16px] mb-2">12. Policy Updates</h2>
          <p className="mb-6 text-[15px] leading-relaxed">
            This Compliance Policy is reviewed periodically. Users will be
            notified of significant changes via email or dashboard
            notifications. Continued use of Cortexvia services implies
            acceptance of the updated terms.
          </p>

          <h2 className="font-bold text-[16px] mb-2">
            13. Contact Information
          </h2>
          <p className="mb-6 text-[15px] leading-relaxed">
            For compliance or legal-related questions:
            <br />
            <strong>Email:</strong> compliance@cortexvia.com
            <br />
            <strong>Support:</strong> support@cortexvia.com
            <br />
            <strong>Address:</strong> No where, Imaginary street, Nowhere City,
            00000
          </p>

          <h2 className="font-bold text-[16px] mb-2">14. Acknowledgment</h2>
          <p className="mb-6 text-[15px] leading-relaxed">
            By using Cortexvia’s platform or APIs, you acknowledge that you have
            read, understood, and agreed to comply with this Compliance Policy.
          </p>
        </div>
      </div>
    </PageWrapper>
  );
}

export default CompliancePolicyMain;
