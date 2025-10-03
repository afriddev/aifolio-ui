import { BrowserRouter} from "react-router-dom";
import { Toaster } from "./components/ui/toaster";
import AppRoutes from "./apputils/AppRoutes";

function App() {
  return (
    <div className="w-full h-[100vh] flex bg-background text-foreground">
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
      <Toaster />
    </div>
  );
}

export default App;
