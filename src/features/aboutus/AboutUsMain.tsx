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

        <div className="mt-32">
          <h6 className="text-4xl max-w-[40%]">
            We believe{" "}
            <FaArrowRight className="inline w-6 h-6 text-primary align-middle" />{" "}
            in a future where AI is abundant and accessible. We aspire to
            empower the world to build with and benefit from the most
            significant technology of our time.
          </h6>
        </div>
        <div className="flex gap-20 w-full mt-20">
          <div className="flex flex-col w-full gap-5">
            <p>
              Cortexvia is an advanced artificial intelligence platform founded
              to redefine how individuals and organizations interact with
              knowledge. Built by a team of innovators with deep expertise in AI
              systems, software engineering, and scalable cloud architectures,
              Cortexvia merges cutting-edge research with practical
              accessibility.
            </p>
            <p>
              Born from a belief that intelligence should be transparent,
              grounded, and available to everyone, Cortexvia challenges the
              limits of closed AI ecosystems. The team envisioned a platform
              that empowers developers, researchers, and enterprises to unlock
              the full potential of their data—securely, efficiently, and
              intelligently.
            </p>
            <p>
              Cortexvia’s mission is to democratize AI-driven knowledge
              retrieval. Through open SDKs, powerful Retrieval-Augmented
              Generation (RAG) systems, and seamless model integration,
              Cortexvia transforms how data becomes insight. By combining
              transparency, scalability, and ease of use, we aim to make the
              world’s most advanced AI tools accessible, interpretable, and
              empowering for all.
            </p>
          </div>

          <div className="w-full">
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

              <div className="inset-0 flex items-center justify-center  absolute z-50">
                <div>
                    <label className="text-[100px]">200+ </label>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUsMain;

// function AboutUsMain() {
//   return (
//     <div className="relative flex h-[20vh] overflow-hidden">
//       <div
//         className="absolute inset-0"
//         style={{
//           backgroundColor: "#fff",
//           backgroundImage: `
//             repeating-linear-gradient(to right, #000 0 1px, transparent 1px 50px),
//             repeating-linear-gradient(to bottom, #000 0 1px, transparent 1px 50px)
//           `,
//           backgroundSize: "50px 50px",
//           backgroundPosition: "0 0",
//         }}
//       ></div>
//       <div className="absolute bottom-0 left-0 w-full h-[1px] bg-black"></div>
//       <div className="absolute top-0 right-0 w-[1px] h-full bg-black"></div>
//     </div>
//   );
// }

// export default AboutUsMain;
