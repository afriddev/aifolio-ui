import { BrowserRouter } from "react-router-dom";
import { Toaster } from "./components/ui/toaster";
import AppRoutes from "./apputils/AppRoutes";
import { useImageLoader } from "./apputils/AppHooks";
import ScrollToTop from "./apputils/ScrollToTop";

function App() {
  useImageLoader();

  return (
    <div className="w-full h-[100vh] flex bg-background text-foreground">
      <BrowserRouter>
        <ScrollToTop />

        <AppRoutes />
      </BrowserRouter>
      <Toaster />
    </div>
  );
}

export default App;
