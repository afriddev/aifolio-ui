import { Route, Routes } from "react-router-dom";
import ProtectedRoute from "./ProtectedRoute";
import ChatDemoMain from "@/features/chatdemo/ChatDemoMain";
import ApiKeysMain from "@/features/apikeys/ApiKeysMain";
import HomeMain from "@/features/home/HomeMain";
import NonProtected from "./NonProtected";
import ChatMain from "@/features/chat/ChatMain";

function AppRoutes() {
  return (
    <Routes>

      <Route element={<NonProtected />}>
        <Route path="/" element={<HomeMain />} />
      </Route>
      <Route element={<ProtectedRoute />}>
        <Route path="/chat/:chatId" element={<ChatMain />} />
        <Route path="/chatdemo" element={<ChatDemoMain />} />
        <Route path="/apikeys" element={<ApiKeysMain />} />
      </Route>
    </Routes>
  );
}

export default AppRoutes;
