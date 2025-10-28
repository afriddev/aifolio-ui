import LovedBySections from "./homeutils/LovedBySections";
import HomeBannerSection from "./homeutils/HomeBannerSection";
import HowItWorksSection from "./homeutils/HowItWorksSection";
import SecuritySection from "./homeutils/SecurtySections";
import UseCaseSection from "./homeutils/UseCaseSection";
import ServiceTiersSection from "./homeutils/ServiceTiersSection";

// import FAQSection from "./homeutils/FAQSection";
// import PricingSection from "./homeutils/PricingSections";
// import AIHeroSection from "./homeutils/AiHeroSection";
// import ContentSourcesSection from "./homeutils/ContentSourcesSection";
// import DeploymentSection from "./homeutils/DeploymentSection";
// import NoCodeSection from "./homeutils/NoCodeSection";
// import EmpowerSection from "./homeutils/EmpowerSection";

function HomeMain() {
  return (
    <div className="h-full w-full flex items-center justify-center">
      <div className=" flex items-center justify-center flex-col">
        <HomeBannerSection />
        <div className="lg:-mt-[10vh] items-center  flex flex-col gap-10">
          <LovedBySections />
          <HowItWorksSection />
          <UseCaseSection />
          <ServiceTiersSection />
          {/* <CreateFirstSection /> */}
          <SecuritySection />
          {/* <AIHeroSection />
          <NoCodeSection />
          <ContentSourcesSection />
          <DeploymentSection />
          <PricingSection />
          <EmpowerSection /> */}
          {/* <FAQSection /> */}
        </div>
      </div>
    </div>
  );
}

export default HomeMain;
