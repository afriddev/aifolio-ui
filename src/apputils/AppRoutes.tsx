import { Route, Routes } from "react-router-dom";
import ProtectedRoute from "./ProtectedRoute";
import ChatMain from "@/features/chat/ChatMain";
import ChatDemoMain from "@/features/chatdemo/ChatDemoMain";
import ApiKeysMain from "@/features/apikeys/ApiKeysMain";

function AppRoutes() {
  return (
    <Routes>
      <Route element={<ProtectedRoute />}>
        <Route path="/" element={<ChatMain />} />

        <Route path="/chat/:chatId" element={<ChatMain />} />
        <Route path="/chatdemo" element={<ChatDemoMain />} />
        <Route path="/apikeys" element={<ApiKeysMain />} />
      </Route>
    </Routes>
  );
}

export default AppRoutes;
