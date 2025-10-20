import NoCodeSection from "./homeutils/NoCodeSection";
import LovedBySections from "./homeutils/LovedBySections";
import HomeBannerSection from "./homeutils/HomeBannerSection";
import EmpowerSection from "./homeutils/EmpowerSection";
import CreateFirstSection from "./homeutils/CreateFirstSection";

function HomeMain() {
  return (
    <div className="h-full w-full flex items-center justify-center">
      <div className=" flex items-center justify-center flex-col">
        <HomeBannerSection />

        <div className="-mt-[20vh] items-center  flex flex-col gap-10">
          <LovedBySections />
          <CreateFirstSection />
          <NoCodeSection />
          <EmpowerSection />
        </div>
      </div>
    </div>
  );
}

export default HomeMain;
