import { RxOpenInNewWindow } from "react-icons/rx";

function ContactUsMain() {
  return (
    <div className=" flex items-center justify-center">
      <div className="w-full  lg:w-[70%] px-2 lg:px-20 lg:py-24 py-10 lg:mt-10 flex flex-col gap-16">
        <div className="flex flex-col items-start gap-4">
          <h2 className="text-5xl font-light">Contact Cortexvia</h2>
          <p className="text-lg text-foreground/70 lg:max-w-[60%]">
            Get in touch with our team — whether you’re building with Cortexvia,
            exploring enterprise solutions, or looking to share our story, we’d
            love to hear from you.
          </p>
        </div>

        <div className="flex flex-col gap-3">
          <h3 className="text-2xl font-semibold">Developer Support</h3>
          <p className="text-lg text-foreground/70">
            Explore our{" "}
            <a
              href="https://docs.cortexvia.com"
              className="text-primary underline"
            >
              Developer Docs
            </a>{" "}
            and community resources, or connect with us directly through the
            chat feature on the Cortexvia Dev Console for assistance with SDKs,
            APIs, or RAG integrations.
          </p>
        </div>
        <div className="flex flex-col gap-3">
          <h3 className="text-2xl font-semibold">Enterprises</h3>
          <p className="text-lg text-foreground/70">
            Interested in deploying Cortexvia for large-scale inference or
            secure, self-hosted solutions? Reach out to our enterprise team at{" "}
            <a
              href="mailto:enterprise@cortexvia.com"
              className="text-primary underline"
            >
              enterprise@cortexvia.com
            </a>{" "}
            to discuss your use case.
          </p>
        </div>

        <div className="flex flex-col gap-3">
          <h3 className="text-2xl font-semibold">Press / Media / Analysts</h3>
          <p className="text-lg text-foreground/70">
            For media inquiries, please contact{" "}
            <a
              href="mailto:press@cortexvia.com"
              className="text-primary underline"
            >
              press@cortexvia.com
            </a>{" "}
            and include:
          </p>
          <ul className="list-disc list-inside text-lg text-foreground/70">
            <li>Key topic or theme</li>
            <li>Your name and organization</li>
            <li>Request timeframe or deadlines</li>
            <li>Any specific Cortexvia team member you wish to involve</li>
          </ul>
        </div>

        <div className="flex flex-col gap-3">
          <h3 className="text-2xl font-semibold">Social Media</h3>
          <p className="text-lg text-foreground/70">
            Stay connected and follow Cortexvia across our social platforms:
          </p>
          <ul className="list-disc list-inside text-lg flex flex-col gap-5 text-foreground/70">
            <li className="flex items-center gap-2">
              <label className="flex items-center border-b ">
                X <RxOpenInNewWindow className="w-4 h-5 -mt-3 " /> 
              </label>{" "}
              Real-time product and developer updates
            </li>
            <li className="flex items-center gap-2">
              <label className="flex items-center border-b ">
                LinkedIn <RxOpenInNewWindow className="w-4 h-5 -mt-3 " />
              </label>{" "}
              Professional insights and business news
            </li>
            <li className="flex items-center gap-2">
              <label className="flex items-center border-b ">
                YouTube <RxOpenInNewWindow className="w-4 h-5 -mt-3 " />
              </label>{" "}
              Tutorials, demos, and feature deep dives
            </li>
            <li className="flex items-center gap-2">
              <label className="flex items-center border-b ">
                Instagram <RxOpenInNewWindow className="w-4 h-5 -mt-3 " />
              </label>{" "}
              Behind-the-scenes at Cortexvia and team culture
            </li>
          </ul>
        </div>

        <div className="flex flex-col gap-3">
          <h3 className="text-2xl font-semibold">Cortexvia Headquarters</h3>
          <p className="text-lg text-foreground/70">
            0-00 Cortexvia St,
            <br />
            Innovation City, CA 90000 Earth
          </p>

          <h3 className="text-2xl font-semibold">Mailing Address</h3>
          <p className="text-lg text-foreground/70">
            Under
            <br />
            Earth
          </p>
        </div>
      </div>
    </div>
  );
}

export default ContactUsMain;
