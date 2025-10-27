import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import PageWrapper from "@/apputils/PageWrapper";

function DataUsagePolicyMain() {
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

          <h1 className="text-3xl font-semibold mb-2">Cortexvia Data Usage Policy</h1>
          <p className="text-sm mb-8">Date of Last Revision: October 20, 2025</p>

          <p className="mb-4 text-[15px] leading-relaxed">
            This Data Usage Policy explains how Cortexvia (“we,” “our,” or “us”) handles,
            processes, and protects user-uploaded data across all services, including RAG
            pipelines, AI inference, and API integrations. We are committed to maintaining
            user privacy, security, and full data ownership.
          </p>

          <h2 className="font-bold text-[16px] mb-2">1. Purpose and Scope</h2>
          <p className="mb-6 text-[15px] leading-relaxed">
            The purpose of this policy is to provide transparency on how data is collected,
            processed, stored, and deleted within the Cortexvia platform. It applies to all
            users, developers, and organizations using Cortexvia services.
          </p>

          <h2 className="font-bold text-[16px] mb-2">2. Data Processing</h2>
          <p className="mb-6 text-[15px] leading-relaxed">
            Uploaded data is processed solely for retrieval-augmented generation (RAG),
            question-answering, and AI inference. Cortexvia does not use user data for any
            unrelated analysis, model training, or third-party purposes.
          </p>

          <h2 className="font-bold text-[16px] mb-2">3. Data Storage and Caching</h2>
          <p className="mb-6 text-[15px] leading-relaxed">
            All files and user data are securely stored using encrypted infrastructure.
            Temporary caching may occur to improve system performance and reduce latency,
            and caches are automatically purged at regular intervals.
          </p>

          <h2 className="font-bold text-[16px] mb-2">4. Data Ownership</h2>
          <p className="mb-6 text-[15px] leading-relaxed">
            Users retain complete ownership of their uploaded files and content.
            Cortexvia claims no rights, license, or authorship over user data.
          </p>

          <h2 className="font-bold text-[16px] mb-2">5. Data Monetization</h2>
          <p className="mb-6 text-[15px] leading-relaxed">
            Cortexvia does not sell, rent, or trade user data. Your data is never used
            for public model training or shared with third parties.
          </p>

          <h2 className="font-bold text-[16px] mb-2">6. Data Deletion</h2>
          <p className="mb-6 text-[15px] leading-relaxed">
            Users can delete uploaded files at any time from the dashboard.
            Deleted data is permanently removed from our servers within <strong>30 days</strong>.
            Once deleted, data cannot be recovered.
          </p>

          <h2 className="font-bold text-[16px] mb-2">7. Usage Analytics</h2>
          <p className="mb-6 text-[15px] leading-relaxed">
            Cortexvia collects anonymous usage metrics to improve system reliability,
            performance, and model efficiency. Analytics are aggregated and contain
            no personally identifiable information.
          </p>

          <h2 className="font-bold text-[16px] mb-2">8. Security Practices</h2>
          <p className="mb-6 text-[15px] leading-relaxed">
            All data transfers occur over encrypted HTTPS connections. Access to user data
            is restricted to authorized systems only. Regular audits are performed to
            maintain compliance with industry security standards.
          </p>

          <h2 className="font-bold text-[16px] mb-2">9. User Rights</h2>
          <p className="mb-6 text-[15px] leading-relaxed">
            Users have the right to access, export, or permanently delete their data.
            You may contact <strong>privacy@cortexvia.com</strong> for any data-related
            requests or clarifications.
          </p>

          <h2 className="font-bold text-[16px] mb-2">10. Policy Updates</h2>
          <p className="mb-6 text-[15px] leading-relaxed">
            Cortexvia may periodically revise this policy to reflect updates in technology,
            security, or compliance standards. Continued use of our services after an update
            signifies your acceptance of the revised policy.
          </p>

          <h2 className="font-bold text-[16px] mb-2">11. Contact Information</h2>
          <p className="mb-6 text-[15px] leading-relaxed">
            For questions about this Data Usage Policy or data handling practices:
            <br />
            <strong>Email:</strong> privacy@cortexvia.com
            <br />
            <strong>Support:</strong> support@cortexvia.com
            <br />
            <strong>Address:</strong> No where, Imaginary street, Nowhere City, 00000
          </p>

          <h2 className="font-bold text-[16px] mb-2">12. Consent</h2>
          <p className="mb-6 text-[15px] leading-relaxed">
            By using Cortexvia’s platform, you acknowledge and consent to this Data Usage Policy
            and the processing of your information in accordance with it.
          </p>
        </div>
      </div>
    </PageWrapper>
  );
}

export default DataUsagePolicyMain;
