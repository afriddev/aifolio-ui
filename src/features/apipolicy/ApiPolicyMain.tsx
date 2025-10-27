import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import PageWrapper from "@/apputils/PageWrapper";
import {
  MotionDiv,
  MotionH3,
  MotionH5,
  MotionParagraph,
} from "@/apputils/MotionUtils";

const ApiPolicyMain: React.FC = () => {
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

          <MotionH3>Cortexvia API Policy</MotionH3>
          <MotionParagraph>
            Date of Last Revision: April 21, 2025
          </MotionParagraph>

          <MotionParagraph>
            This API Policy governs the use of Cortexvia’s APIs, which enable
            developers to integrate large language models (LLMs), Retrieval-Augmented
            Generation (RAG) pipelines, and SDKs (e.g., CortexRAG, EmbiRankis,
            Chatbot Library) into their applications. By accessing or using our
            APIs, you agree to comply with this Policy, our Terms and Conditions,
            and our Privacy Policy.
          </MotionParagraph>

          <MotionH5>1. API Access & Purpose</MotionH5>
          <MotionParagraph>
            Cortexvia’s APIs provide access to AI models (e.g., Cortexvia Mini,
            Flash Medium, Ultra), RAG pipelines (e.g., Basic RAG, Smart RAG, Graph
            RAG), and platform functionalities for developers and businesses. APIs
            are intended for:
            <ul className="list-disc ml-6 mt-2">
              <li>Integrating AI-powered features into applications or workflows.</li>
              <li>Processing documents, datasets, or YouTube URLs for RAG-based retrieval or inference.</li>
              <li>Building intelligent chatbots using the Chatbot Library or Business Chatbot SDK.</li>
              <li>Generating embeddings or reranking results via EmbiRankis.</li>
            </ul>
            All API usage must comply with Cortexvia’s Terms, Privacy Policy, and
            applicable laws.
          </MotionParagraph>

          <MotionH5>2. API Key Management</MotionH5>
          <MotionParagraph>
            Each registered user receives unique API keys linked to their account
            for accessing Cortexvia’s Services, including APIs, SDKs, and RAG
            pipelines. You are responsible for:
            <ul className="list-disc ml-6 mt-2">
              <li>Keeping API keys confidential and not sharing them publicly (e.g., in code repositories or client-side code).</li>
              <li>Regenerating compromised keys immediately via the Cortexvia dashboard.</li>
              <li>Monitoring usage to stay within tiered limits (e.g., Free Tier: 20–40 RPM; Developer Tier: 60 RPM).</li>
            </ul>
            Cortexvia may suspend or revoke API keys for misuse, unauthorized
            sharing, or excessive traffic (e.g., exceeding RPM, RPD, TPM, or TPD
            limits).
          </MotionParagraph>

          <MotionH5>3. Rate Limits and Quotas</MotionH5>
          <MotionParagraph>
            To ensure reliable service, Cortexvia enforces rate limits and quotas
            based on your subscription plan:
            <ul className="list-disc ml-6 mt-2">
              <li>
                <strong>Free Tier:</strong> Limited to 20–40 requests/min (RPM),
                500–5000 requests/day (RPD), 30K–150K tokens/min (TPM), and
                100K–1000K tokens/day (TPD), depending on the model (e.g., Cortexvia
                Mini, Flash Small).
              </li>
              <li>
                <strong>Developer Tier:</strong> Up to 60 RPM, 14K–20K RPD,
                60K–100K TPM, and 1M–6M TPD, depending on the model (e.g., Cortexvia
                Ultra, Flash Super).
              </li>
              <li>
                <strong>Enterprise Tier:</strong> Custom limits tailored to your
                agreement.
              </li>
            </ul>
            Exceeding these limits may result in temporary throttling or access
            suspension. Use caching mechanisms and optimize API calls to minimize
            redundant requests. Refer to our documentation at
            <a href="https://cortexvia.com"> cortexvia.com</a> for detailed limits.
          </MotionParagraph>

          <MotionH5>4. Prohibited Activities</MotionH5>
          <MotionParagraph>
            The following activities are strictly prohibited when using Cortexvia’s
            APIs:
            <ul className="list-disc ml-6 mt-2">
              <li>Reverse-engineering, decompiling, or modifying APIs or SDKs.</li>
              <li>Redistributing, reselling, or sublicensing API access without explicit permission.</li>
              <li>Generating illegal, harmful, or misleading content via LLMs or RAG pipelines.</li>
              <li>Automated scraping or excessive querying that disrupts service stability.</li>
              <li>Bypassing rate limits or usage quotas (e.g., via multiple accounts or unauthorized key sharing).</li>
              <li>Using APIs for malicious purposes, such as spamming or attacking systems.</li>
            </ul>
            Violations may lead to immediate account suspension, API key revocation,
            or legal action.
          </MotionParagraph>

          <MotionH5>5. Commercial Usage</MotionH5>
          <MotionParagraph>
            Commercial or production-grade API usage requires a Developer or
            Enterprise plan. Free Tier usage is limited to non-commercial,
            development, or testing purposes. For enterprise-grade access, custom
            integrations, or higher limits (e.g., unlimited queries or document
            uploads), contact <strong>sales@cortexvia.com</strong> for licensing
            and partnership details.
          </MotionParagraph>

          <MotionH5>6. Suspension & Enforcement</MotionH5>
          <MotionParagraph>
            Cortexvia reserves the right to suspend or revoke API access for:
            <ul className="list-disc ml-6 mt-2">
              <li>Violation of this Policy, Terms, or Privacy Policy.</li>
              <li>Excessive traffic exceeding rate limits (e.g., RPM, TPD).</li>
              <li>Security risks, such as unauthorized API key sharing or malicious activity.</li>
              <li>Non-payment or prolonged account inactivity.</li>
            </ul>
            Affected users will be notified, and appeals can be submitted to
            <strong>support@cortexvia.com</strong>. Suspended accounts may lose
            access to uploaded data, API keys, or processed datasets.
          </MotionParagraph>

          <MotionH5>7. Data Privacy and Security</MotionH5>
          <MotionParagraph>
            All data transmitted via Cortexvia APIs is encrypted in transit and at
            rest. Developers must:
            <ul className="list-disc ml-6 mt-2">
              <li>Avoid logging or exposing sensitive data, such as API keys, user inputs, or RAG-processed outputs.</li>
              <li>Implement secure practices in their applications to protect data handled by Cortexvia APIs or SDKs.</li>
              <li>Comply with our Privacy Policy for handling uploaded documents, datasets, or YouTube URLs.</li>
            </ul>
            Cortexvia employs token-based authentication and regular security audits
            to safeguard API interactions.
          </MotionParagraph>

          <MotionH5>8. Service Availability & Disclaimer</MotionH5>
          <MotionParagraph>
            Cortexvia strives for high API availability but does not guarantee
            uninterrupted or error-free access. Temporary disruptions may occur due
            to maintenance, updates, or technical issues. Processing speeds vary by
            plan and model (e.g., Free Tier: 50–2200 TPS; Developer Tier: 60–3000
            TPS). Cortexvia APIs are provided “as-is,” and we are not liable for:
            <ul className="list-disc ml-6 mt-2">
              <li>Downtime or service interruptions.</li>
              <li>Inaccuracies in AI-generated outputs (e.g., LLMs or RAG pipelines).</li>
              <li>Losses from API changes or deprecated endpoints.</li>
            </ul>
            Developers must validate API outputs before production deployment,
            especially for critical applications.
          </MotionParagraph>

          <MotionH5>9. Updates to This Policy</MotionH5>
          <MotionParagraph>
            Cortexvia may update this API Policy periodically to reflect changes in
            our Services, legal requirements, or operational practices. Updates will
            be posted on <a href="https://cortexvia.com">cortexvia.com</a>, and
            continued API usage constitutes acceptance of the revised Policy. We
            encourage regular review of this Policy.
          </MotionParagraph>

          <MotionH5>10. Contact Information</MotionH5>
          <MotionParagraph>
            For API-related inquiries or support:
            <br />
            <strong>Email:</strong> support@cortexvia.com
            <br />
            <strong>Phone:</strong> +91 98765 43210
            <br />
            <strong>Address:</strong> 45 Data Hub Street, Bangalore, Karnataka,
            India
          </MotionParagraph>

          <MotionH5>11. Acceptance</MotionH5>
          <MotionParagraph>
            By generating or using Cortexvia API keys, you confirm that you have
            read, understood, and agreed to abide by this API Policy, in addition
            to our Terms and Conditions and Privacy Policy.
          </MotionParagraph>
        </div>
      </div>
    </PageWrapper>
  );
};

export default ApiPolicyMain;