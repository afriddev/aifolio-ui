import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import PageWrapper from "@/apputils/PageWrapper";
import {
  MotionDiv,
  MotionH3,
  MotionH5,
  MotionParagraph,
} from "@/apputils/MotionUtils";

const RefundPolicyMain: React.FC = () => {
  const navigate = useNavigate();

  return (
    <PageWrapper>
      <div className="flex flex-col items-center justify-center w-full pb-20">
        <div className="px-4 lg:px-0 lg:w-[50%] text-gray-800">
          <MotionDiv>
            <Button
              variant="ghost"
              className="mb-6 text-gray-600 hover:text-black focus:outline-none"
              onClick={() => navigate(-1)}
            >
              ← Back
            </Button>
          </MotionDiv>

          <MotionH3>Cortexvia Refund & Cancellation Policy</MotionH3>
          <MotionParagraph>
            Date of Last Revision: April 21, 2025
          </MotionParagraph>

          <MotionParagraph>
            This Refund & Cancellation Policy governs refunds, cancellations, and
            billing adjustments for Cortexvia’s Services, including APIs, SDKs
            (e.g., CortexRAG, EmbiRankis, Chatbot Library), large language models
            (LLMs), Retrieval-Augmented Generation (RAG) pipelines, and
            subscription plans (Free, Developer, Enterprise). By using our paid
            Services, you agree to the terms outlined in this Policy.
          </MotionParagraph>

          <MotionH5>1. Refund Eligibility</MotionH5>
          <MotionParagraph>
            Refunds are available only for the following verified cases:
            <ul className="list-disc ml-6 mt-2">
              <li>Failed transactions (e.g., payment processed but service not activated).</li>
              <li>Duplicate transactions (e.g., accidental double billing).</li>
              <li>
                Service unavailability exceeding 24 hours, impacting access to APIs,
                SDKs, or RAG pipelines (e.g., inability to process document uploads
                or API queries within tier limits).
              </li>
            </ul>
            Refund requests must be submitted within <strong>7 days</strong> from
            the transaction date. Refunds are not provided for:
            <ul className="list-disc ml-6 mt-2">
              <li>Consumed API calls, tokens, or query limits (e.g., exceeding Free Tier’s 100 queries/day or Developer Tier’s 6M tokens/day).</li>
              <li>Partially used subscriptions or billing cycles.</li>
              <li>Dissatisfaction with model outputs (e.g., LLM or RAG pipeline accuracy).</li>
              <li>Delays due to external factors (e.g., payment provider issues or YouTube URL processing).</li>
            </ul>
          </MotionParagraph>

          <MotionH5>2. Refund Process</MotionH5>
          <MotionParagraph>
            To request a refund:
            <ul className="list-decimal ml-6 mt-2">
              <li>
                Email <strong>billing@cortexvia.com</strong> with your account ID,
                payment ID, and a detailed reason for the request.
              </li>
              <li>
                Our billing team will review the request, verifying transaction
                logs and service usage (e.g., API request logs or RAG processing
                records).
              </li>
              <li>
                Approved refunds are processed within <strong>5–10 business days</strong>
                via the original payment method.
              </li>
              <li>
                You will receive a confirmation email once the refund is completed.
              </li>
            </ul>
            Refunds for Enterprise plans with custom agreements are subject to the
            terms specified in the contract.
          </MotionParagraph>

          <MotionH5>3. Subscription & Cancellation</MotionH5>
          <MotionParagraph>
            Cortexvia offers monthly subscriptions for Developer and Enterprise
            plans, with tiered limits for document uploads (e.g., 200 files/day for
            Developer Tier), video processing (e.g., 50 YouTube URLs/day for
            Developer Tier), and query volumes (e.g., unlimited queries for
            Developer Tier). Cancellations can be initiated as follows:
            <ul className="list-disc ml-6 mt-2">
              <li>
                Cancel your subscription anytime via the Cortexvia dashboard before
                the next billing cycle.
              </li>
              <li>
                Access to Services (e.g., APIs, SDKs, RAG pipelines) remains active
                until the end of the current billing period.
              </li>
              <li>
                No partial refunds are issued for unused subscription time or
                unconsumed limits (e.g., tokens or queries).
              </li>
              <li>
                Upon cancellation, uploaded data (e.g., documents, datasets) may be
                deleted per the retention policies outlined in our Privacy Policy.
              </li>
            </ul>
          </MotionParagraph>

          <MotionH5>4. Non-Refundable Cases</MotionH5>
          <MotionParagraph>
            The following are explicitly non-refundable:
            <ul className="list-disc ml-6 mt-2">
              <li>
                Usage of API calls, tokens, or queries within tier limits (e.g.,
                Free Tier: 100K–1000K TPD; Developer Tier: 1M–6M TPD).
              </li>
              <li>
                Active or renewed subscriptions for Developer or Enterprise plans.
              </li>
              <li>
                Performance issues related to model outputs, including LLMs (e.g.,
                Cortexvia Mini, Ultra) or RAG pipelines (e.g., Smart RAG, Graph RAG).
              </li>
              <li>
                Processing delays within expected timeframes (e.g., Free Tier:
                Standard Queue up to 2 mins; Developer Tier: Priority Queue 10–30 sec).
              </li>
              <li>
                Issues arising from user errors, such as incorrect API key usage or
                exceeding rate limits (e.g., RPM, RPD).
              </li>
            </ul>
          </MotionParagraph>

          <MotionH5>5. Payment Security</MotionH5>
          <MotionParagraph>
            All payments for Cortexvia’s Services are processed through secure,
            PCI-DSS compliant third-party payment gateways. We do not store
            payment card information on our servers. Billing disputes or errors
            caused by external payment providers must be resolved directly with
            the provider, though we will assist in coordinating resolution.
          </MotionParagraph>

          <MotionH5>6. Chargeback Policy</MotionH5>
          <MotionParagraph>
            Initiating a chargeback without contacting Cortexvia first may result
            in account suspension or termination, including loss of access to APIs,
            SDKs, and uploaded data. Please reach out to
            <strong> billing@cortexvia.com</strong> to resolve billing issues before
            pursuing a chargeback.
          </MotionParagraph>

          <MotionH5>7. Policy Updates</MotionH5>
          <MotionParagraph>
            Cortexvia may update this Refund & Cancellation Policy periodically to
            reflect changes in our Services or legal requirements. Updates will be
            posted on <a href="https://cortexvia.com">cortexvia.com</a>, and
            continued use of the Services constitutes acceptance of the revised
            Policy. We encourage you to review this Policy regularly.
          </MotionParagraph>

          <MotionH5>8. Contact Information</MotionH5>
          <MotionParagraph>
            For refund, cancellation, or billing inquiries:
            <br />
            <strong>Email:</strong> billing@cortexvia.com
            <br />
            <strong>Support:</strong> support@cortexvia.com
            <br />
            <strong>Phone:</strong> +91 98765 43210
            <br />
            <strong>Address:</strong> 45 Data Hub Street, Bangalore, Karnataka,
            India
          </MotionParagraph>

          <MotionH5>9. Acknowledgement</MotionH5>
          <MotionParagraph>
            By using Cortexvia’s paid Services, including APIs, SDKs, LLMs, or RAG
            pipelines, you acknowledge that you have read, understood, and agreed
            to this Refund & Cancellation Policy.
          </MotionParagraph>
        </div>
      </div>
    </PageWrapper>
  );
};

export default RefundPolicyMain;