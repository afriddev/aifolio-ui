import NoCodeSection from "./homeutils/NoCodeSection";
import LovedBySections from "./homeutils/LovedBySections";
import HomeBannerSection from "./homeutils/HomeBannerSection";
import EmpowerSection from "./homeutils/EmpowerSection";

function HomeMain() {
  return (
    <div className="h-full w-full flex items-center justify-center">
      <div className="w-[70%] flex justify-center flex-col">
        <HomeBannerSection />

        <div className="-mt-[20vh] flex flex-col gap-10">
          <LovedBySections />
          <NoCodeSection />
          <EmpowerSection />
        </div>
      </div>
    </div>
  );
}

export default HomeMain;
