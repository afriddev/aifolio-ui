import { Route, Routes } from "react-router-dom";
import ProtectedRoute from "./ProtectedRoute";
import ChatMain from "@/features/chat/ChatMain";
import ChatDemoMain from "@/features/chatdemo/ChatDemoMain";

function AppRoutes() {
  return (
    <Routes>
      <Route element={<ProtectedRoute />}>
        <Route path="/" element={<ChatMain />} />

        <Route path="/chat/:chatId" element={<ChatMain />} />
        <Route path="/chatdemo" element={<ChatDemoMain />} />
      </Route>
    </Routes>
  );
}

export default AppRoutes;
