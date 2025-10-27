import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import PageWrapper from "@/apputils/PageWrapper";

function TermsMain() {
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

          <h1 className="text-3xl font-semibold mb-2">Cortexvia Terms & Conditions</h1>
          <p className="text-sm mb-8">Date of Last Revision: April 21, 2025</p>

          <p className="mb-4 text-[15px] leading-relaxed">
            These Terms and Conditions govern the use of Cortexvia’s website, APIs, SDKs, and
            platform services (collectively, the “Services”). By using or accessing Cortexvia, you
            agree to be bound by these Terms and all applicable laws and regulations. If you do not
            agree with any of these Terms, you are prohibited from using the Services.
          </p>

          <p className="mb-4 text-[15px] leading-relaxed font-semibold">
            PLEASE READ THESE TERMS CAREFULLY. THEY CONSTITUTE A LEGALLY BINDING AGREEMENT BETWEEN
            YOU AND CORTEXVIA REGARDING YOUR USE OF THE PLATFORM.
          </p>

          <p className="mb-10 text-[15px] leading-relaxed font-semibold">
            IF YOU DO NOT AGREE TO THESE TERMS OR OUR PRIVACY POLICY, YOU SHOULD NOT ACCESS OR USE
            THE SERVICES.
          </p>

          <h2 className="font-bold text-[16px] mb-2">1. Privacy Policy; Entire Agreement</h2>
          <p className="mb-6 text-[15px] leading-relaxed">
            Your privacy is important to us. We encourage you to read our Privacy Policy to
            understand our practices. By using Cortexvia, you consent to the collection and use of
            information as described therein. These Terms and our Privacy Policy constitute the
            entire agreement between you and Cortexvia concerning the use of our Services.
          </p>

          <h2 className="font-bold text-[16px] mb-2">2. Changes to Terms and Conditions</h2>
          <p className="mb-6 text-[15px] leading-relaxed">
            Cortexvia may modify these Terms at any time. Updated Terms will be posted on the
            website. Continued use of the Services after such updates constitutes your acceptance of
            the revised Terms. If you do not agree to any changes, you must discontinue using the
            Services.
          </p>

          <h2 className="font-bold text-[16px] mb-2">3. Scope of Use</h2>
          <p className="mb-6 text-[15px] leading-relaxed">
            Cortexvia grants you a limited, non-exclusive, non-transferable right to use its
            Services for informational and lawful purposes only. You may not copy, modify,
            redistribute, or resell any part of Cortexvia’s platform, APIs, or models without
            written permission.
          </p>

          <h2 className="font-bold text-[16px] mb-2">4. Account and API Key Management</h2>
          <p className="mb-6 text-[15px] leading-relaxed">
            Each registered user receives unique API keys for Data and Model access. You are
            responsible for safeguarding your credentials. Cortexvia reserves the right to suspend
            keys if misuse, key sharing, or excessive traffic is detected.
          </p>

          <h2 className="font-bold text-[16px] mb-2">5. Plans and Billing</h2>
          <p className="mb-6 text-[15px] leading-relaxed">
            Cortexvia offers Free, Developer, and Enterprise plans. Billing occurs monthly through
            secure payment providers. Refunds may be granted only in cases of verified service
            failure. Subscription cancellations must occur before the next billing cycle.
          </p>

          <h2 className="font-bold text-[16px] mb-2">6. Data & Content Ownership</h2>
          <p className="mb-6 text-[15px] leading-relaxed">
            You retain ownership of data you upload to Cortexvia. By uploading or integrating data,
            you grant Cortexvia a limited license to process it for retrieval, model training, or
            inference purposes. Cortexvia does not sell or share your data with third parties.
          </p>

          <h2 className="font-bold text-[16px] mb-2">7. Acceptable Use Policy</h2>
          <p className="mb-6 text-[15px] leading-relaxed">
            You may not use Cortexvia to generate, distribute, or host illegal, harmful, or
            misleading content. Violations include attempts to reverse-engineer the platform,
            overloading APIs, or automated scraping. Misuse may result in termination or legal
            action.
          </p>

          <h2 className="font-bold text-[16px] mb-2">8. Service Availability</h2>
          <p className="mb-6 text-[15px] leading-relaxed">
            While Cortexvia strives for continuous uptime, maintenance or technical interruptions
            may occur. We do not guarantee uninterrupted or error-free access to the platform.
            Scheduled maintenance will be communicated in advance when possible.
          </p>

          <h2 className="font-bold text-[16px] mb-2">9. Liability Disclaimer</h2>
          <p className="mb-6 text-[15px] leading-relaxed">
            Cortexvia is provided “as is” without warranties of any kind. We are not liable for
            losses arising from downtime, data loss, or errors in AI-generated outputs. You are
            responsible for reviewing and verifying all model outputs before relying on them.
          </p>

          <h2 className="font-bold text-[16px] mb-2">10. Account Termination</h2>
          <p className="mb-6 text-[15px] leading-relaxed">
            Accounts may be terminated due to policy violations, non-payment, or inactivity.
            Termination will result in deletion of all associated data and credentials. Back up your
            data regularly. Cortexvia reserves the right to deny re-registration for prior misuse.
          </p>

          <h2 className="font-bold text-[16px] mb-2">11. Policy Updates</h2>
          <p className="mb-6 text-[15px] leading-relaxed">
            These Terms may be updated periodically. Continued use of Cortexvia after changes means
            you accept the new Terms. You are responsible for reviewing the latest version regularly.
          </p>

          <h2 className="font-bold text-[16px] mb-2">12. Contact Information</h2>
          <p className="mb-6 text-[15px] leading-relaxed">
            For inquiries or support:
            <br />
            <strong>Email:</strong> support@cortexvia.com
            <br />
            <strong>Phone:</strong> +91 98765 43210
            <br />
            <strong>Address:</strong> 45 Data Hub Street, Bangalore, Karnataka, India
          </p>

          <h2 className="font-bold text-[16px] mb-2">13. Intellectual Property</h2>
          <p className="mb-6 text-[15px] leading-relaxed">
            All content, logos, models, code, and intellectual property available through Cortexvia
            are owned by Cortexvia or its licensors. You may not copy, reproduce, or distribute
            platform materials without written authorization.
          </p>

          <h2 className="font-bold text-[16px] mb-2">14. Confidentiality</h2>
          <p className="mb-6 text-[15px] leading-relaxed">
            Users must maintain confidentiality regarding non-public information obtained through
            the platform, including system APIs, unpublished features, or testing data.
          </p>

          <h2 className="font-bold text-[16px] mb-2">15. Indemnification</h2>
          <p className="mb-6 text-[15px] leading-relaxed">
            You agree to indemnify and hold Cortexvia and its affiliates harmless from any claims,
            damages, or expenses arising from your use of the Services or violation of these Terms.
          </p>

          <h2 className="font-bold text-[16px] mb-2">16. Governing Law & Jurisdiction</h2>
          <p className="mb-6 text-[15px] leading-relaxed">
            These Terms are governed by the laws of India. Any disputes arising shall be subject to
            the exclusive jurisdiction of courts in Bangalore, Karnataka.
          </p>

          <h2 className="font-bold text-[16px] mb-2">17. Severability</h2>
          <p className="mb-6 text-[15px] leading-relaxed">
            If any provision of these Terms is found unenforceable, the remaining provisions shall
            remain in full force and effect.
          </p>

          <h2 className="font-bold text-[16px] mb-2">18. Entire Agreement</h2>
          <p className="mb-6 text-[15px] leading-relaxed">
            These Terms, along with the Privacy Policy, constitute the entire agreement between you
            and Cortexvia regarding your use of the Services and supersede all prior agreements or
            understandings.
          </p>
        </div>
      </div>
    </PageWrapper>
  );
};

export default TermsMain;
