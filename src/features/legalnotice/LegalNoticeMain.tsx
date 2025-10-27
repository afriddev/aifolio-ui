import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import PageWrapper from "@/apputils/PageWrapper";

function LegalNoticeMain() {
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

          <h1 className="text-3xl font-semibold mb-2">Cortexvia Legal Notice</h1>
          <p className="text-sm mb-8">Date of Last Revision: October 20, 2025</p>

          <p className="mb-4 text-[15px] leading-relaxed">
            This Legal Notice provides official information regarding Cortexvia’s legal entity,
            jurisdiction, and intellectual property rights. By using this platform, you agree to
            comply with the applicable legal framework described below.
          </p>

          <h2 className="font-bold text-[16px] mb-2">1. Company Information</h2>
          <p className="mb-6 text-[15px] leading-relaxed">
            <strong>Entity Name:</strong> Cortexvia Technologies Pvt. Ltd.
            <br />
            <strong>Registered Address:</strong> No where, Imaginary street, Nowhere City, 00000
          </p>

          <h2 className="font-bold text-[16px] mb-2">2. Purpose and Scope</h2>
          <p className="mb-6 text-[15px] leading-relaxed">
            This notice outlines legal responsibilities related to Cortexvia’s operations, ownership,
            and intellectual property rights. It applies to all visitors, users, and partners of
            Cortexvia’s platform and services.
          </p>

          <h2 className="font-bold text-[16px] mb-2">3. Governing Law and Jurisdiction</h2>
          <p className="mb-6 text-[15px] leading-relaxed">
            All legal matters involving Cortexvia are governed by the laws of India. Any disputes
            shall be exclusively resolved in the courts of Bangalore, Karnataka, India. This
            jurisdiction clause applies universally to all users worldwide.
          </p>

          <h2 className="font-bold text-[16px] mb-2">4. Intellectual Property</h2>
          <p className="mb-6 text-[15px] leading-relaxed">
            All trademarks, logos, models, source code, and related content available through
            Cortexvia are the exclusive property of Cortexvia Technologies Pvt. Ltd. or its
            licensors. Unauthorized reproduction, redistribution, or modification is strictly
            prohibited without written consent.
          </p>

          <h2 className="font-bold text-[16px] mb-2">5. Copyright and Content Ownership</h2>
          <p className="mb-6 text-[15px] leading-relaxed">
            The website, platform interfaces, APIs, and documentation are protected under applicable
            copyright laws. Users may view or use Cortexvia materials solely for lawful personal or
            business purposes as permitted by license or agreement.
          </p>

          <h2 className="font-bold text-[16px] mb-2">6. Prohibited Actions</h2>
          <p className="mb-6 text-[15px] leading-relaxed">
            Users are prohibited from reproducing, redistributing, framing, scraping, or reselling
            any part of the Cortexvia website, documentation, or services. Legal action may be taken
            against violations of intellectual property or brand misuse.
          </p>

          <h2 className="font-bold text-[16px] mb-2">7. Liability Disclaimer</h2>
          <p className="mb-6 text-[15px] leading-relaxed">
            Cortexvia is provided “as is,” without warranties of any kind. The company is not liable
            for any direct or indirect damages arising from the use of its platform, APIs, or
            content.
          </p>

          <h2 className="font-bold text-[16px] mb-2">8. Legal Contact Information</h2>
          <p className="mb-6 text-[15px] leading-relaxed">
            For legal correspondence or trademark inquiries, contact:
            <br />
            <strong>Email:</strong> legal@cortexvia.com
            <br />
            <strong>Address:</strong> 45 Data Hub Street, Bangalore, Karnataka, India
          </p>

          <h2 className="font-bold text-[16px] mb-2">9. Changes to Legal Notice</h2>
          <p className="mb-6 text-[15px] leading-relaxed">
            Cortexvia may update this Legal Notice from time to time. The most recent version will
            always be published on this page. Continued use of our services constitutes your
            acknowledgment of the updated notice.
          </p>

          <h2 className="font-bold text-[16px] mb-2">10. Acknowledgment</h2>
          <p className="mb-6 text-[15px] leading-relaxed">
            By using Cortexvia’s platform, you confirm that you have read, understood, and agree to
            abide by this Legal Notice, including all applicable laws and regulations.
          </p>
        </div>
      </div>
    </PageWrapper>
  );
}

export default LegalNoticeMain;
