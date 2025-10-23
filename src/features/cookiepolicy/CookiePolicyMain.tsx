import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import PageWrapper from "@/apputils/PageWrapper";

function CookiePolicyMain() {
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

          <h1 className="text-3xl font-semibold mb-2">
            Cortexvia Cookie Policy
          </h1>
          <p className="text-sm mb-8">Date of Last Revision: April 21, 2025</p>

          <p className="mb-4 text-[15px] leading-relaxed">
            This Cookie Policy explains how Cortexvia (“we,” “our,” or “us”)
            uses cookies and similar technologies on our website, APIs, and
            dashboards to enhance user experience, improve performance, and
            secure platform functionality.
          </p>

          <h2 className="font-bold text-[16px] mb-2">1. What Are Cookies</h2>
          <p className="mb-6 text-[15px] leading-relaxed">
            Cookies are small text files stored on your browser when you visit
            our site. They help maintain session data, remember preferences, and
            support secure access to Cortexvia’s platform and APIs.
          </p>

          <h2 className="font-bold text-[16px] mb-2">
            2. Types of Cookies We Use
          </h2>
          <p className="mb-6 text-[15px] leading-relaxed">
            Cortexvia uses the following categories of cookies:
            <ul className="list-disc ml-6 mt-2">
              <li>
                <strong>Essential Cookies:</strong> Required for authentication
                and API session continuity.
              </li>
              <li>
                <strong>Performance Cookies:</strong> Monitor system uptime,
                response times, and error tracking.
              </li>
              <li>
                <strong>Functional Cookies:</strong> Save interface preferences
                such as theme and layout.
              </li>
              <li>
                <strong>Analytics Cookies:</strong> Collect anonymous usage data
                to optimize AI performance.
              </li>
            </ul>
          </p>

          <h2 className="font-bold text-[16px] mb-2">3. How We Use Cookies</h2>
          <p className="mb-6 text-[15px] leading-relaxed">
            We use cookies to:
            <ul className="list-disc ml-6 mt-2">
              <li>Authenticate users and maintain login sessions</li>
              <li>Measure dashboard performance and identify errors</li>
              <li>Improve AI response times and usability</li>
              <li>Provide personalized feature recommendations</li>
            </ul>
          </p>

          <h2 className="font-bold text-[16px] mb-2">4. Third-Party Cookies</h2>
          <p className="mb-6 text-[15px] leading-relaxed">
            We may use third-party tools such as Google Analytics or Sentry for
            system performance and analytics. These providers adhere to their
            respective privacy and security policies.
          </p>

          <h2 className="font-bold text-[16px] mb-2">
            5. Managing and Disabling Cookies
          </h2>
          <p className="mb-6 text-[15px] leading-relaxed">
            You can manage, disable, or delete cookies in your browser settings.
            However, disabling cookies may limit access to secure sections or
            affect login and API functions.
          </p>

          <h2 className="font-bold text-[16px] mb-2">
            6. Data Protection and Security
          </h2>
          <p className="mb-6 text-[15px] leading-relaxed">
            Cortexvia encrypts all cookie-related data and ensures secure
            transmission. We do not use cookies for advertising or share cookie
            data externally.
          </p>

          <h2 className="font-bold text-[16px] mb-2">
            7. Cookies on Mobile Devices
          </h2>
          <p className="mb-6 text-[15px] leading-relaxed">
            Our cookie policy applies equally across mobile browsers and web
            apps. You may manage cookie preferences through your device’s
            browser or system settings.
          </p>

          <h2 className="font-bold text-[16px] mb-2">
            8. Changes to This Policy
          </h2>
          <p className="mb-6 text-[15px] leading-relaxed">
            Cortexvia may update this Cookie Policy from time to time. The
            revised version will be posted on our website with the effective
            date updated accordingly.
          </p>

          <h2 className="font-bold text-[16px] mb-2">9. Contact Information</h2>
          <p className="mb-6 text-[15px] leading-relaxed">
            For any questions about this Cookie Policy:
            <br />
            <strong>Email:</strong> privacy@cortexvia.com
            <br />
            <strong>Phone:</strong> +91 98765 43210
            <br />
            <strong>Address:</strong> 45 Data Hub Street, Bangalore, Karnataka,
            India
          </p>

          <h2 className="font-bold text-[16px] mb-2">10. Consent</h2>
          <p className="mb-6 text-[15px] leading-relaxed">
            By continuing to use Cortexvia’s website and dashboard, you consent
            to our use of cookies as outlined in this Policy.
          </p>
        </div>
      </div>
    </PageWrapper>
  );
}

export default CookiePolicyMain;
