import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

function NavBar() {
  const navigate = useNavigate();

  return (
    <header className="w-full sticky top-0 z-[200] ">
      <div className="px-5 lg:px-20 py-4 flex items-center justify-between">
        <div
          onClick={() => navigate("/")}
          className="flex items-center gap-2 cursor-pointer"
        >
          <img src="logo-1.png" className="w-40" />
        </div>

        <div className="hidden md:flex items-center gap-2">
          <div
            onClick={() => navigate("/")}
            className=" font-medium   hover:bg-muted rounded px-4 py-2 cursor-pointer transition"
          >
            Docs
          </div>

          <div
            onClick={() => navigate("/collection")}
            className=" font-medium   hover:bg-muted rounded px-4 py-2 cursor-pointer transition"
          >
            Pricing
          </div>
          <div
            onClick={() => navigate("/about")}
            className=" font-medium   hover:bg-muted rounded px-4 py-2 cursor-pointer transition"
          >
            Models
          </div>

          <div
            onClick={() => navigate("/about")}
            className=" font-medium   hover:bg-muted rounded px-4 py-2 cursor-pointer transition"
          >
            Rate Limits
          </div>
        </div>
        <div className="flex gap-4">
          <Button variant={"default"}>Contact Us </Button>
          <Button variant={"default"}>Login</Button>
        </div>
      </div>
    </header>
  );
}

export default NavBar;
