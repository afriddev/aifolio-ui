import NoCodeSection from "./homeutils/NoCodeSection";
import LovedBySections from "./homeutils/LovedBySections";
import HomeBannerSection from "./homeutils/HomeBannerSection";
import EmpowerSection from "./homeutils/EmpowerSection";
import CreateFirstSection from "./homeutils/CreateFirstSection";
import HowItWorksSection from "./homeutils/HowItWorksSection";
import PricingSection from "./homeutils/PricingSections";
import AIHeroSection from "./homeutils/AiHeroSection";
import ContentSourcesSection from "./homeutils/ContentSourcesSection";
import DeploymentSection from "./homeutils/DeploymentSection";
import SecuritySection from "./homeutils/SecurtySections";
import FAQSection from "./homeutils/FAQSection";

function HomeMain() {
  return (
    <div className="h-full w-full flex items-center justify-center">
      <div className=" flex items-center justify-center flex-col">
        <HomeBannerSection />

        <div className="-mt-[20vh] items-center  flex flex-col gap-10">
          <LovedBySections />
          <HowItWorksSection  />
          <CreateFirstSection />
          <SecuritySection />
          <AIHeroSection/>
          <NoCodeSection />
          <ContentSourcesSection />
          <DeploymentSection />
          <PricingSection />
          <EmpowerSection />
          <FAQSection />
        </div>
      </div>
    </div>
  );
}

export default HomeMain;
