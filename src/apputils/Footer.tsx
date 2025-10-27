import { useNavigate } from "react-router-dom";
import { FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { BsLightningCharge } from "react-icons/bs";
import { Button } from "@/components/ui/button";

function Footer() {
  const navigate = useNavigate();

  return (
    <footer className="bg-background text-foreground/80 w-full lg:pt-16 pb-10 px-2 md:px-16 mt-10">
      <div className="flex w-full  items-center justify-center">
        <div className="w-full lg:w-[70%] flex flex-col gap-5">
          <div className="w-full flex items-center justify-center">
            <h3 className=" text-5xl lg:text-[70px]">Build the future with us.</h3>
          </div>
          <div className="items-center gap-14 flex flex-col justify-center bg-primary text-background rounded lg:p-20 p-10 w-full mt-10">
            <div className="w-fit h-fit">
              <BsLightningCharge className="w-6 h-6" />
            </div>
            <div className="flex flex-col gap-2 items-center justify-center text-center">
              <h3 className="text-4xl">Build Fast</h3>
              <p className="text-xl">
                Seamlessly integrate Cortexvia starting with just a few lines of
                code
              </p>
            </div>

            <Button className=" text-primary" variant={"outline"}>
              Try Cortexvia for Free{" "}
            </Button>
          </div>
        </div>
      </div>

      <div className="w-full  flex flex-col lg:flex-row  gap-16  mt-10 lg:mt-32 justify-between  ">
        <div className="flex flex-col  space-y-4 items-center lg:max-w-[15vw]">
          <div className="cursor-pointer  w-fit    ">
            <img src="/home/logo-1.png" className="w-48" alt="logo" />
          </div>
          <p className=" w-full text-center">
            A smart, intelligent system for data, knowledge, and AI-powered
            reasoning.
          </p>
        </div>

        {/* Quick Links */}
        <div className="flex flex-col items-start space-y-4 ">
          <h3 className="  text-foreground/60">QUICK LINKS</h3>
          <div className="  flex  items-start flex-col gap-4">
            <button
              onClick={() => navigate("/about")}
              className="cursor-pointer lg:hover:text-primary transition duration-300 text-left"
            >
              About Us
            </button>
            <button
              onClick={() => navigate("/contact")}
              className="cursor-pointer lg:hover:text-primary transition duration-300 text-left"
            >
              Contact Us
            </button>
            <button
              onClick={() => navigate("/privacy-policy")}
              className="cursor-pointer lg:hover:text-primary transition duration-300 text-left text-nowrap"
            >
              Privacy Policy
            </button>
            <button
              onClick={() => navigate("/terms")}
              className="cursor-pointer lg:hover:text-primary transition duration-300 text-left text-nowrap"
            >
              Terms of Service
            </button>
            <button
              onClick={() => navigate("/faq")}
              className="cursor-pointer lg:hover:text-primary transition duration-300 text-left"
            >
              FAQ
            </button>
          </div>
        </div>

        <div className="flex flex-col items-start space-y-4">
          <h3 className="  text-foreground/60">DEVELOPERS</h3>
          <div className="   gap-3 flex flex-col  items-start">
            <button
              onClick={() => navigate("/api-policy")}
              className="cursor-pointer lg:hover:text-primary transition duration-300 text-left text-nowrap"
            >
              API Policy
            </button>
            <button
              onClick={() => navigate("/developer-policy")}
              className="cursor-pointer lg:hover:text-primary transition duration-300 text-left text-nowrap"
            >
              Developer Policy
            </button>
          </div>
        </div>

        <div className="flex flex-col items-start space-y-4">
          <h3 className="  text-foreground/60">COMPANY</h3>
          <div className="   gap-3 flex flex-col  items-start">
            <button
              onClick={() => navigate("/cookie-policy")}
              className="cursor-pointer lg:hover:text-primary transition duration-300 text-left text-nowrap"
            >
              Cookie Policy
            </button>

            <button
              onClick={() => navigate("/refund-policy")}
              className="cursor-pointer lg:hover:text-primary transition duration-300 text-left text-nowrap"
            >
              Refund Policy
            </button>

            <button
              onClick={() => navigate("/data-usage-policy")}
              className="cursor-pointer lg:hover:text-primary transition duration-300 text-left text-nowrap"
            >
              Data Usage Policy
            </button>
            <button
              onClick={() => navigate("/security-policy")}
              className="cursor-pointer lg:hover:text-primary transition duration-300 text-left text-nowrap"
            >
              Security Policy
            </button>

            <button
              onClick={() => navigate("/compliance-policy")}
              className="cursor-pointer lg:hover:text-primary transition duration-300 text-left text-nowrap"
            >
              Compliance Policy
            </button>

            <button
              onClick={() => navigate("/legal-notice")}
              className="cursor-pointer lg:hover:text-primary transition duration-300 text-left text-nowrap"
            >
              Legal Notice
            </button>
          </div>
        </div>

        <div className="flex flex-col items-start space-y-4 ">
          <h3 className="text-foreground/60">Connect With Us</h3>
          <div className="flex gap-6 text-2xl">
            <button
              onClick={() => navigate("/twitter")}
              aria-label="Twitter"
              className="border border-white rounded-full p-3 hover:bg-white hover:text-foreground transition duration-300"
            >
              <FaTwitter />
            </button>
            <button
              onClick={() => navigate("/instagram")}
              aria-label="Instagram"
              className="border border-white rounded-full p-3 hover:bg-white hover:text-foreground transition duration-300"
            >
              <FaInstagram />
            </button>
            <button
              onClick={() => navigate("/linkedin")}
              aria-label="LinkedIn"
              className="border border-white rounded-full p-3 hover:bg-white hover:text-foreground transition duration-300"
            >
              <FaLinkedinIn />
            </button>
          </div>
        </div>
      </div>
      <div className="w-full h-[1px] bg-foreground/5 mt-10"> </div>

      {/* Bottom Section */}
      <div className="w-full flex flex-col md:flex-row justify-between items-center mt-5 border-t border-white/20 text-center  text-foreground gap-2">
        <p>© 2025 Cortexvia. All rights reserved.</p>

        <div className="flex space-x-6 lg:mt-4 md:mt-0">
          <button
            onClick={() => navigate("/twitter")}
            className="hover:underline"
          >
            Twitter
          </button>
          <button
            onClick={() => navigate("/linkedin")}
            className="hover:underline"
          >
            LinkedIn
          </button>
          <button
            onClick={() => navigate("/instagram")}
            className="hover:underline"
          >
            Instagram
          </button>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
