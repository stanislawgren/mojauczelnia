import React from "react";
import ReactDOM from "react-dom/client";
import "./../public/styles/index.scss";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { MainPage } from "./pages";
import { LoginPage } from "./pages/login";
import { RegisterPage } from "./pages/register";
import { UniversityPage } from "./pages/university";
import { UniversityDepartamentPage } from "./pages/universityDepartament";
import { UniversityContactPage } from "./pages/universityContact";
import { UniversityRecruitmentPage } from "./pages/universityRecruitment";
import { AuthProvider } from "./hooks/useAuth";
import { RequireAuth } from "./components/RequireAuth";
import {ExamplePaginationPage} from "./pages/_example_pagination.tsx";
import { UserProfilePage } from "./pages/userProfile.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/university" element={<UniversityPage />} />
          <Route path="/universityDepartament" element={<UniversityDepartamentPage />} />
          <Route path="/universityContact" element={<UniversityContactPage />} />
          <Route path="/universityRecruitment" element={<UniversityRecruitmentPage />} />
          <Route path="/pagination" element={<ExamplePaginationPage />} />
          <Route path="/profile" element={<UserProfilePage />} />
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