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
import { ExamplePaginationPage } from "./pages/_example_pagination.tsx";
import { UserProfilePage } from "./pages/userProfile.tsx";
import { UniversityRoot } from "./pages/universityRoot.tsx";
import { UniversityOpinionsPage } from "./pages/universityOpinions.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/university/:universityId" element={<UniversityRoot />}>
            <Route path={""} element={<UniversityPage />} />
            <Route
              path="departament/:departamentId"
              element={<UniversityDepartamentPage />}
            />
            <Route path="opinions" element={<UniversityOpinionsPage />} />
            <Route path="contact" element={<UniversityContactPage />} />
            <Route path="recruitment" element={<UniversityRecruitmentPage />} />
          </Route>
          <Route path="/pagination" element={<ExamplePaginationPage />} />
          <Route path="/profile" element={<UserProfilePage />} />
          <Route
            path="/example"
            element={
              <RequireAuth>
                <RegisterPage />
              </RequireAuth>
            }
          />
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>
);
