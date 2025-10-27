import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import PageWrapper from "@/apputils/PageWrapper";

function RefundPolicyMain() {
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
            Cortexvia Refund & Cancellation Policy
          </h1>
          <p className="text-sm mb-8">Date of Last Revision: April 21, 2025</p>

          <p className="mb-4 text-[15px] leading-relaxed">
            This Refund & Cancellation Policy explains how Cortexvia manages
            refund requests, cancellations, and billing adjustments related to
            our digital services and AI-based API plans.
          </p>

          <h2 className="font-bold text-[16px] mb-2">1. Refund Eligibility</h2>
          <p className="mb-6 text-[15px] leading-relaxed">
            Refunds are available only for verified cases of failed or duplicate
            transactions. Requests must be submitted within{" "}
            <strong>7 days</strong> from the transaction date. Refunds are not
            provided for used API Tokens, partial subscriptions, or billing
            cycles already consumed.
          </p>

          <h2 className="font-bold text-[16px] mb-2">2. Refund Process</h2>
          <p className="mb-6 text-[15px] leading-relaxed">
            To request a refund:
            <ul className="list-decimal ml-6 mt-2">
              <li>
                Email <strong>billing@cortexvia.com</strong> with your payment ID
                and reason for request.
              </li>
              <li>
                Our billing team reviews each case and verifies transaction logs.
              </li>
              <li>
                Approved refunds are processed within{" "}
                <strong>5–10 business days</strong>.
              </li>
              <li>
                A confirmation will be sent once the refund is completed.
              </li>
            </ul>
          </p>

          <h2 className="font-bold text-[16px] mb-2">3. Non-Refundable Cases</h2>
          <p className="mb-6 text-[15px] leading-relaxed">
            The following are not eligible for refunds:
            <ul className="list-disc ml-6 mt-2">
              <li>Used API calls or consumed Tokens.</li>
              <li>Active or renewed subscriptions.</li>
              <li>Performance dissatisfaction or output accuracy issues.</li>
              <li>Delays caused by external payment providers.</li>
            </ul>
          </p>

          <h2 className="font-bold text-[16px] mb-2">
            4. Subscription & Cancellation
          </h2>
          <p className="mb-6 text-[15px] leading-relaxed">
            Users can cancel subscriptions anytime before the next billing date
            from their Cortexvia dashboard. Once cancelled, access remains active
            until the end of the billing period. No partial refunds are issued for
            unused subscription time.
          </p>

          <h2 className="font-bold text-[16px] mb-2">5. Payment Security</h2>
          <p className="mb-6 text-[15px] leading-relaxed">
            All payments are processed through secure PCI-DSS compliant gateways.
            Cortexvia does not store any payment card information on its servers.
          </p>

          <h2 className="font-bold text-[16px] mb-2">6. Policy Updates</h2>
          <p className="mb-6 text-[15px] leading-relaxed">
            Cortexvia may modify this Refund Policy at any time. Updated versions
            will be published on our website. Continued use of our services implies
            acceptance of the revised policy.
          </p>

          <h2 className="font-bold text-[16px] mb-2">7. Contact Information</h2>
          <p className="mb-6 text-[15px] leading-relaxed">
            For refund or billing inquiries:
            <br />
            <strong>Email:</strong> billing@cortexvia.com
            <br />
            <strong>Support:</strong> support@cortexvia.com
            <br />
            <strong>Phone:</strong> +91 98765 43210
            <br />
            <strong>Address:</strong> 45 Data Hub Street, Bangalore, Karnataka,
            India
          </p>

          <h2 className="font-bold text-[16px] mb-2">8. Acknowledgement</h2>
          <p className="mb-6 text-[15px] leading-relaxed">
            By using Cortexvia’s paid services, you acknowledge that you have read
            and agreed to this Refund & Cancellation Policy.
          </p>
        </div>
      </div>
    </PageWrapper>
  );
}

export default RefundPolicyMain;
