import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import PageWrapper from "@/apputils/PageWrapper";

function ApiPolicyMain() {
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

          <h1 className="text-3xl font-semibold mb-2">Cortexvia API Policy</h1>
          <p className="text-sm mb-8">
            Date of Last Revision: October 20, 2025
          </p>

          <p className="mb-4 text-[15px] leading-relaxed">
            This API Policy outlines the terms for developers and users
            accessing Cortexvia’s APIs. By using our APIs, you agree to follow
            these rules to ensure security, reliability, and fair use across all
            users.
          </p>

          <h2 className="font-bold text-[16px] mb-2">
            1. API Access & Purpose
          </h2>
          <p className="mb-6 text-[15px] leading-relaxed">
            Cortexvia APIs allow developers to integrate Retrieval-Augmented
            Generation (RAG), AI inference, and platform functionalities into
            external systems. Use of the API must align with Cortexvia’s Terms
            and Privacy Policy.
          </p>

          <h2 className="font-bold text-[16px] mb-2">2. API Key Management</h2>
          <p className="mb-6 text-[15px] leading-relaxed">
            Each user receives unique API keys linked to their account. Keys are
            confidential and must not be shared, sold, or embedded in public
            repositories. If compromised, regenerate immediately from your
            dashboard.
          </p>

          <h2 className="font-bold text-[16px] mb-2">
            3. Rate Limits and Quotas
          </h2>
          <p className="mb-6 text-[15px] leading-relaxed">
            Cortexvia enforces rate limits to maintain stable service for all
            users. Exceeding limits may trigger temporary throttling or access
            suspension. Use caching where possible to minimize redundant
            requests.
          </p>

          <h2 className="font-bold text-[16px] mb-2">
            4. Prohibited Activities
          </h2>
          <p className="mb-6 text-[15px] leading-relaxed">
            The following actions are strictly prohibited:
            <ul className="list-disc ml-6 mt-2">
              <li>
                Automated scraping or reverse-engineering of Cortexvia APIs
              </li>
              <li>Redistributing or reselling API access</li>
              <li>Generating harmful, illegal, or deceptive content</li>
              <li>Using the API to bypass usage or billing limits</li>
            </ul>
          </p>

          <h2 className="font-bold text-[16px] mb-2">5. Commercial Usage</h2>
          <p className="mb-6 text-[15px] leading-relaxed">
            Commercial or production-level API usage requires an active paid
            plan. Developers seeking enterprise-grade access should contact{" "}
            <strong>sales@cortexvia.com</strong> for licensing and partnership
            details.
          </p>

          <h2 className="font-bold text-[16px] mb-2">
            6. Suspension & Enforcement
          </h2>
          <p className="mb-6 text-[15px] leading-relaxed">
            Cortexvia reserves the right to suspend or revoke API access if
            misuse, abuse, or security risks are detected. Appeals can be
            submitted through <strong>support@cortexvia.com</strong>.
          </p>

          <h2 className="font-bold text-[16px] mb-2">
            7. Data Privacy and Security
          </h2>
          <p className="mb-6 text-[15px] leading-relaxed">
            All data transmitted via Cortexvia APIs is encrypted. Developers
            must not log or expose sensitive information such as API keys,
            tokens, or private datasets.
          </p>

          <h2 className="font-bold text-[16px] mb-2">8. Disclaimer</h2>
          <p className="mb-6 text-[15px] leading-relaxed">
            Cortexvia APIs are provided “as-is.” The company is not liable for
            damages or losses arising from downtime, API changes, or
            inaccuracies in AI-generated responses. Developers should validate
            all outputs before production deployment.
          </p>

          <h2 className="font-bold text-[16px] mb-2">
            9. Updates to This Policy
          </h2>
          <p className="mb-6 text-[15px] leading-relaxed">
            Cortexvia may modify this API Policy periodically. Continued use of
            APIs after such updates constitutes your acceptance of the revised
            terms.
          </p>

          <h2 className="font-bold text-[16px] mb-2">
            10. Contact Information
          </h2>
          <p className="mb-6 text-[15px] leading-relaxed">
            For API-related inquiries or support:
            <br />
            <strong>Email:</strong> support@cortexvia.com
            <br />
            <strong>Phone:</strong> +91 00000 00000
            <br />
            <strong>Address:</strong> No where Road, Imaginary City, Country
            123456
          </p>

          <h2 className="font-bold text-[16px] mb-2">11. Acceptance</h2>
          <p className="mb-6 text-[15px] leading-relaxed">
            By generating or using Cortexvia API keys, you confirm that you have
            read and agreed to abide by this API Policy.
          </p>
        </div>
      </div>
    </PageWrapper>
  );
}

export default ApiPolicyMain;
