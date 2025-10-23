import { Route, Routes } from "react-router-dom";
import ProtectedRoute from "./ProtectedRoute";
import ChatDemoMain from "@/features/chatdemo/ChatDemoMain";
import ApiKeysMain from "@/features/apikeys/ApiKeysMain";
import HomeMain from "@/features/home/HomeMain";
import NonProtected from "./NonProtected";
import ChatMain from "@/features/chat/ChatMain";
import LoginMain from "@/features/auth/LoginMain";
import SignUpMain from "@/features/auth/SignUpMain";
import ForgotPasswordMain from "@/features/auth/ForgotPAsswordMain";
import ResetPasswordMain from "@/features/auth/ResetPasswordMain";
import TermsMain from "@/features/terms/TermsMain";
import CookiePolicyMain from "@/features/cookiepolicy/CookiePolicyMain";
import PrivacyMain from "@/features/privacy/PrivacyMain";
import FaqsMain from "@/features/faqs/FaqsMain";
import RefundPolicyMain from "@/features/refundpolicy/RefundPolicyMain";
import ApiPolicyMain from "@/features/apipolicy/ApiPolicyMain";
import DeveloperPolicyMain from "@/features/developerpolicy/DeveloperPolicyMain";
import DataUsagePolicyMain from "@/features/datausagepolicy/DataUsagePolicyMain";
import SecurityPolicyMain from "@/features/securitypolicy/SecurityPolicyMain";
import CompliancePolicyMain from "@/features/compliancepolicy/CompliancePolicyMain";
import AboutUsMain from "@/features/aboutus/AboutUsMain";
import ContactUsMain from "@/features/contactus/ContactUsMain";
import PricingMain from "@/features/pricing/PricingMain";
import ModelsMain from "@/features/models/ModelsMain";
import LegalNoticeMain from "@/features/legalnotice/LegalNoticeMain";

function AppRoutes() {
  return (
    <Routes>
      <Route element={<NonProtected />}>
        <Route path="/" element={<HomeMain />} />
        <Route path="/about" element={<AboutUsMain />} />
        <Route path="/contact" element={<ContactUsMain />} />
        <Route path="/pricing" element={<PricingMain />} />
        <Route path="/models" element={<ModelsMain />} />
        <Route path="/login" element={<LoginMain />} />
        <Route path="/signup" element={<SignUpMain />} />
        <Route path="/forgot-password" element={<ForgotPasswordMain />} />
        <Route path="/resetpassword/:token" element={<ResetPasswordMain />} />

        <Route path="/terms" element={<TermsMain />} />
        <Route path="/privacy-policy" element={<PrivacyMain />} />
        <Route path="/cookie-policy" element={<CookiePolicyMain />} />
        <Route path="/refund-policy" element={<RefundPolicyMain />} />
        <Route path="/faq" element={<FaqsMain />} />
        <Route path="/api-policy" element={<ApiPolicyMain />} />
        <Route path="/developer-policy" element={<DeveloperPolicyMain />} />
        <Route path="/data-usage-policy" element={<DataUsagePolicyMain />} />
        <Route path="/security-policy" element={<SecurityPolicyMain />} />
        <Route path="/compliance-policy" element={<CompliancePolicyMain />} />
        <Route path="/legal-notice" element={<LegalNoticeMain />} />
      </Route>
      <Route element={<ProtectedRoute />}>
        <Route path="/chat/:chatId" element={<ChatMain />} />
        <Route path="/chatdemo" element={<ChatDemoMain />} />
        <Route path="/apikeys" element={<ApiKeysMain />} />
      </Route>
    </Routes>
  );
}

export default AppRoutes;
