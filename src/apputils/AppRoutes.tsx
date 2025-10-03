import { Route, Routes } from "react-router-dom";
import ProtectedRoute from "./ProtectedRoute";
import ChatMain from "@/features/chat/ChatMain";

function AppRoutes() {
  return (
    <Routes>
      <Route element={<ProtectedRoute />}>
        <Route path="/" element={<ChatMain />} />

        <Route path="/chat/:chatId" element={<ChatMain />} />
      </Route>
    </Routes>
  );
}

export default AppRoutes;
