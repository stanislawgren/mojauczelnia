import React from "react";
import ReactDOM from "react-dom/client";
import "./../public/styles/index.scss";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { MainPage } from "./pages";
import { LoginPage } from "./pages/login";
import { RegisterPage } from "./pages/register";
import { UserProfilePage } from "./pages/userProfile";
import { AuthProvider } from "./hooks/useAuth";
import { CookiesProvider } from "react-cookie";
import { RequireAuth } from "./components/RequireAuth";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/profile" element={<UserProfilePage />} />
          {/* Example protected route */}
          <Route path="/example" element={
            <RequireAuth>
              <RegisterPage />
            </RequireAuth>
          } />
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>
);