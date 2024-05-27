// import logo from "./../assets/auth_logo.svg";
import { useState } from "react";
import { useAuth } from "../hooks/useAuth";
import { useNavigate } from "react-router-dom";

export const LoginPage = () => {
  const auth = useAuth();
  const navigate = useNavigate()

  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleLogin = async () => {
    const result = await auth.signIn(email, password)
    if (result) {
      navigate('/')
    }
  };

  return (
    <div className="app-container">
      <div className="auth-background"></div>
      <div className="auth__container">
        <div className="auth__container-component">
          {/* <img src={logo} alt="logo" style={{ width: "50%" }} /> */}
          <p style={{ fontSize: "30px" }}>Logowanie</p>
          <input
            type="text"
            className="main-input"
            placeholder="E-Mail"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <input
            type="password"
            className="main-input"
            placeholder="Hasło"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          <button className="blue-button" onClick={handleLogin}>
            Zaloguj się
          </button>
        </div>
      </div>
    </div>
  );
};
