import { FaArrowRight } from "react-icons/fa";

function AboutUsMain() {
  return (
    <div className="flex flex-col items-center justify-center  gap-20">
      <div className="h-[60vh] relative flex w-full items-center justify-center overflow-hidden">
        <div className="w-full absolute  h-[60vh] inset-0  ">
          <div
            className=" absolute inset-0"
            style={{
              backgroundImage: `
              repeating-linear-gradient(to right, #f9ebe4 0 1px, transparent 1px 50px),
              repeating-linear-gradient(to bottom, #f9ebe4 0 1px, transparent 1px 50px)
            `,
              backgroundSize: "50px 50px",
              backgroundPosition: "0 0",
            }}
          ></div>
        </div>
      </div>
      <div className="w-[70%]">
        <div className="flex absolute  mt-32 flex-col gap-2  inset-0 items-center  h-[70vh]  justify-center">
          <h1 className="text-[80px]">Frontier AI. For all of us.</h1>
          <p className="text-2xl">
            We exist to make frontier AI accessible to everyone.
          </p>
          <div className="mt-20">
            <img src="people-working-office.jpg" className="w-[70vw] " />
          </div>
        </div>

        <div className="bg-white p-16 mt-32 flex items-center justify-center">
          <h5 className="w-full text-5xl font-thin leading-[6vh]">
            The Minds Who <br /> Never Stopped <br /> Innovating
          </h5>
          <div className="flex w-full flex-col text-lg gap-5">
            <h6 className="font-medium text-xl">
              At Cortexvia, innovation isn’t a goal it’s a habit. It starts with
              builders who believe AI should empower, not obscure.
            </h6>
            <div className="flex flex-col gap-5 text-foreground/70">
              <p>
                Our founders and engineers come from deep tech and research
                backgrounds, but they’ve always shared one obsession making
                intelligence transparent and useful for everyone.
              </p>
              <p>
                Today, that same spirit drives Cortexvia. From RAG pipelines to
                open SDKs, we’re still building just smarter. Meet the team
                shaping the next era of AI.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-32">
          <h6 className="text-4xl max-w-[40%]">
            We believe{" "}
            <FaArrowRight className="inline w-6 h-6 text-primary align-middle" />{" "}
            in a world where knowledge is intelligent, connected, and within
            everyone’s reach. At Cortexvia, we empower builders to create,
            query, and innovate with AI that’s open, reliable, and built for the
            future.
          </h6>
        </div>

        <div className="flex items-center gap-20 w-full mt-20">
          <div className="flex flex-col w-full gap-5">
            <p className="text-lg flex flex-col text-foreground/70">
              <label className="text-foreground text-xl font-semibold">
                About Cortexvia{" "}
              </label>{" "}
              An advanced AI platform designed to redefine how people and
              organizations interact with knowledge. Cortexvia brings together
              cutting-edge Retrieval-Augmented Generation (RAG), intelligent
              querying, and multi-model integration to make data-driven insight
              effortless and scalable.
            </p>
            <p className="text-lg flex flex-col text-foreground/70">
              <label className="text-foreground text-xl font-semibold">
                Our Vision{" "}
              </label>{" "}
              We believe intelligence should be transparent, grounded, and
              accessible to everyone. Cortexvia challenges the limits of closed
              AI ecosystems, empowering developers and enterprises to unlock the
              full potential of their data.
            </p>
            <p className="text-lg flex flex-col text-foreground/70">
              <label className="text-foreground text-xl font-semibold">
                Our Mission{" "}
              </label>{" "}
              To democratize AI-powered knowledge retrieval through open SDKs,
              secure APIs, and seamless integrations— transforming complex data
              into clear, actionable intelligence for all.
            </p>
          </div>

          <div className="w-full flex flex-col gap-5">
            <div className="relative ">
              <div className="relative h-[20vh] w-full overflow-hidden">
                <div
                  className="absolute inset-0"
                  style={{
                    backgroundImage: `
                                    repeating-linear-gradient(to right, #f9ebe4 0 1px, transparent 1px 50px),
                                    repeating-linear-gradient(to bottom, #f9ebe4 0 1px, transparent 1px 50px)
                                    `,
                    backgroundSize: "50px 50px",
                    backgroundPosition: "0 0",
                  }}
                ></div>

                <div className="absolute inset-0 border border-[#f9ebe4] pointer-events-none"></div>
              </div>

              <div className="inset-0 flex items-center justify-between px-5  absolute z-50">
                <div>
                  <label className="text-[100px]">20+ </label>
                </div>
                <div className="flex gap-5">
                  <div className="flex ">
                    <div className="h-5 w-5 bg-foreground"></div>
                    <div className="bg-foreground text-background h-fit p-4  w-[10vw]  mt-5 flex items-center  justify-center text-center">
                      Team members
                    </div>
                  </div>
                  <img alt="Team members" src="/about/team-members.svg" />
                </div>
              </div>
            </div>
            <div className="relative  ">
              <div className="relative h-[20vh] w-full overflow-hidden">
                <div
                  className="absolute inset-0"
                  style={{
                    backgroundImage: `
                                    repeating-linear-gradient(to right, #f9ebe4 0 1px, transparent 1px 50px),
                                    repeating-linear-gradient(to bottom, #f9ebe4 0 1px, transparent 1px 50px)
                                    `,
                    backgroundSize: "50px 50px",
                    backgroundPosition: "0 0",
                  }}
                ></div>

                <div className="absolute inset-0 border border-[#f9ebe4] pointer-events-none"></div>
              </div>

              <div className="inset-0 flex items-center justify-between px-5 absolute z-50">
                <div>
                  <label className="text-[100px]">5+</label>
                </div>

                <div className="flex gap-5">
                  <div className="flex ">
                    <div className="h-5 w-5 bg-foreground"></div>
                    <div className="bg-foreground text-background h-fit p-4  w-[10vw]  mt-5 flex items-center  justify-center text-center">
                      Different nationalities
                    </div>
                  </div>
                  <img alt="Different nationalities" src="/about/earth.svg" />
                </div>
              </div>
            </div>

            <div className="relative ">
              <div className="relative h-[20vh] w-full overflow-hidden">
                <div
                  className="absolute inset-0"
                  style={{
                    backgroundImage: `
                                    repeating-linear-gradient(to right, #f9ebe4 0 1px, transparent 1px 50px),
                                    repeating-linear-gradient(to bottom, #f9ebe4 0 1px, transparent 1px 50px)
                                    `,
                    backgroundSize: "50px 50px",
                    backgroundPosition: "0 0",
                  }}
                ></div>

                <div className="absolute inset-0 border border-[#f9ebe4] pointer-events-none"></div>
              </div>

              <div className="inset-0 flex items-center justify-between px-5  absolute z-50">
                <div>
                  <label className="text-[100px]">50% </label>
                </div>
                <div className="flex gap-5">
                  <div className="flex ">
                    <div className="h-5 w-5 bg-foreground"></div>
                    <div className="bg-foreground text-background h-fit p-4  w-[10vw]  mt-5 flex items-center  justify-center text-center">
                      Female leaders
                    </div>
                  </div>
                  <img alt="Female leaders" src="/about/feamale-selfie.svg" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white w-[100%] p-16 flex items-center justify-center">
        <div className="w-[60%] gap-10 flex flex-col text-center">
          <p className="text-xl">
            AI isn’t about whether we’ll use it — it’s about how fast we can
            turn what we know into real intelligence and real impact.
          </p>
          <label className="font-thin text-xl">
            — Shaik Afrid, Founder & CEO
          </label>
        </div>
      </div>
    </div>
  );
}

export default AboutUsMain;
