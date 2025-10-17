import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import AppContext from "./apputils/AppContext.tsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
const queryClient = new QueryClient();
import { GoogleOAuthProvider } from "@react-oauth/google";

createRoot(document.getElementById("root")!).render(
  <QueryClientProvider client={queryClient}>
    <AppContext>
      <GoogleOAuthProvider clientId="841316020944-tc0q9n9b72kkv4c20a19q4cmt7paf8rn.apps.googleusercontent.com">
        <App />
      </GoogleOAuthProvider>
    </AppContext>
  </QueryClientProvider>
);
