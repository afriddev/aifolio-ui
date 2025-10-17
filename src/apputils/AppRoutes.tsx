import { Route, Routes } from "react-router-dom";
import ProtectedRoute from "./ProtectedRoute";
import ChatMain from "@/features/chat/ChatMain";
import ChatDemoMain from "@/features/chatdemo/ChatDemoMain";
import ApiKeysMain from "@/features/apikeys/ApiKeysMain";
import Footer from "./Footer";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Footer />} />

      <Route element={<ProtectedRoute />}>
        <Route path="/chat/:chatId" element={<ChatMain />} />
        <Route path="/chatdemo" element={<ChatDemoMain />} />
        <Route path="/apikeys" element={<ApiKeysMain />} />
      </Route>
    </Routes>
  );
}

export default AppRoutes;
