import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import PageWrapper from "@/apputils/PageWrapper";
import { MotionDiv, MotionH3, MotionH5, MotionParagraph } from "@/apputils/MotionUtils";

const CookiePolicyMain: React.FC = () => {
  const navigate = useNavigate();

  return (
    <PageWrapper>
      <div className="flex flex-col items-center justify-center w-full pb-20">
        <div className="px-4 lg:px-0 lg:w-[50%] text-gray-800">
          <MotionDiv>
            <Button
              variant="ghost"
              onClick={() => navigate(-1)}
            >
              ← Back
            </Button>
          </MotionDiv>

          <MotionH3>Cortexvia Cookie Policy</MotionH3>
          <MotionParagraph>
            Date of Last Revision: April 21, 2025
          </MotionParagraph>

          <MotionParagraph>
            This Cookie Policy explains how Cortexvia (“we,” “our,” or “us”) uses cookies and similar
            technologies on our website, APIs, and dashboards to enhance user experience, improve
            performance, and secure platform functionality.
          </MotionParagraph>

          <MotionH5>1. What Are Cookies</MotionH5>
          <MotionParagraph>
            Cookies are small text files stored on your browser when you visit our site. They help
            maintain session data, remember preferences, and support secure access to Cortexvia’s
            platform, APIs, and SDKs (e.g., CortexRAG, EmbiRankis, Chatbot Library).
          </MotionParagraph>

          <MotionH5>2. Types of Cookies We Use</MotionH5>
          <MotionParagraph>
            Cortexvia uses the following categories of cookies:
            <ul className="list-disc ml-6 mt-2">
              <li>
                <strong>Essential Cookies:</strong> Required for authentication and API session
                continuity for services like RAG pipelines and model inference.
              </li>
              <li>
                <strong>Performance Cookies:</strong> Monitor system uptime, response times, and error
                tracking for AI models and dashboards.
              </li>
              <li>
                <strong>Functional Cookies:</strong> Save interface preferences such as theme and
                layout for a personalized experience.
              </li>
              <li>
                <strong>Analytics Cookies:</strong> Collect anonymous usage data to optimize AI
                performance and platform usability.
              </li>
            </ul>
          </MotionParagraph>

          <MotionH5>3. How We Use Cookies</MotionH5>
          <MotionParagraph>
            We use cookies to:
            <ul className="list-disc ml-6 mt-2">
              <li>Authenticate users and maintain login sessions for API and dashboard access.</li>
              <li>Measure dashboard performance and identify errors in AI model responses.</li>
              <li>Improve response times for LLMs and RAG pipelines.</li>
              <li>Provide personalized feature recommendations based on usage patterns.</li>
            </ul>
          </MotionParagraph>

          <MotionH5>4. Third-Party Cookies</MotionH5>
          <MotionParagraph>
            We may use third-party tools such as Google Analytics or Sentry for system performance and
            analytics. These providers adhere to their respective privacy and security policies, and
            you are responsible for reviewing their terms.
          </MotionParagraph>

          <MotionH5>5. Managing and Disabling Cookies</MotionH5>
          <MotionParagraph>
            You can manage, disable, or delete cookies in your browser settings. Disabling cookies may
            limit access to secure sections, affect login functionality, or impact API and dashboard
            performance.
          </MotionParagraph>

          <MotionH5>6. Data Protection and Security</MotionH5>
          <MotionParagraph>
            Cortexvia encrypts all cookie-related data and ensures secure transmission. We do not use
            cookies for advertising or share cookie data externally, except as outlined in our Privacy
            Policy.
          </MotionParagraph>

          <MotionH5>7. Cookies on Mobile Devices</MotionH5>
          <MotionParagraph>
            Our cookie policy applies equally across mobile browsers and web apps. You may manage
            cookie preferences through your device’s browser or system settings.
          </MotionParagraph>

          <MotionH5>8. Changes to This Policy</MotionH5>
          <MotionParagraph>
            Cortexvia may update this Cookie Policy periodically. The revised version will be posted
            on our website with the effective date updated accordingly. Continued use of the Services
            constitutes acceptance of the updated policy.
          </MotionParagraph>

          <MotionH5>9. Contact Information</MotionH5>
          <MotionParagraph>
            For any questions about this Cookie Policy:
            <br />
            <strong>Email:</strong> privacy@cortexvia.com
            <br />
            <strong>Phone:</strong> +91 98765 43210
            <br />
            <strong>Address:</strong> 45 Data Hub Street, Bangalore, Karnataka, India
          </MotionParagraph>

          <MotionH5>10. Consent</MotionH5>
          <MotionParagraph>
            By continuing to use Cortexvia’s website, APIs, or dashboards, you consent to our use of
            cookies as outlined in this Policy.
          </MotionParagraph>

          <MotionH5>11. Cookies and Usage Limits</MotionH5>
          <MotionParagraph>
            Cookies may be used to enforce usage limits for Free, Developer, and Enterprise plans,
            including restrictions on document uploads, video processing, and query volume (e.g., RPM,
            RPD, TPM, TPD) as detailed at cortexvia.com.
          </MotionParagraph>

          <MotionH5>12. Third-Party Integrations</MotionH5>
          <MotionParagraph>
            Cookies may support third-party integrations (e.g., OpenAI-compatible endpoints) to
            enhance functionality. You are responsible for complying with the terms of any third-party
            services used with Cortexvia.
          </MotionParagraph>
        </div>
      </div>
    </PageWrapper>
  );
};

export default CookiePolicyMain;