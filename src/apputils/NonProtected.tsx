import { Outlet } from "react-router-dom";
import NavBar from "./NavBar";
import Footer from "./Footer";

function NonProtected() {
  return (
    <div className="flex  h-full w-full  flex-col">
      <NavBar />

      <div className="h-full w-full ">
        <Outlet />
      </div>

      <Footer />
    </div>
  );
}

export default NonProtected;
