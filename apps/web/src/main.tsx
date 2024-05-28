import React from "react";
import ReactDOM from "react-dom/client";
import "./../public/styles/index.scss";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {MainPage} from "./pages";
import {LoginPage} from "./pages/login";
import {RegisterPage} from "./pages/register";
import {AuthProvider} from "./hooks/useAuth";
import {RequireAuth} from "./components/RequireAuth";
import {ExamplePaginationPage} from "./pages/_example_pagination.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          {/* Example pagination */}
          <Route path="/pagination" element={<ExamplePaginationPage />} />
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