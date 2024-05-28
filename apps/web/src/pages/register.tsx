import React from 'react';
import {useAuth} from "../hooks/useAuth.tsx";
import {useNavigate} from "react-router-dom";

export const RegisterPage = () => {
  const auth = useAuth()
  const navigate = useNavigate();

  const registerSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const form = event.target as HTMLFormElement;
    const emailInput = form.elements.namedItem('email') as HTMLInputElement;
    const passwordInput = form.elements.namedItem('password') as HTMLInputElement;
    const confirmPasswordInput = form.elements.namedItem('confirmed_password') as HTMLInputElement;

    const email = emailInput.value;
    const password = passwordInput.value;
    const confirmPassword = confirmPasswordInput.value;

    auth.signUp(email, password, confirmPassword).then(r => {
      if (r) navigate('/')
    })
  };

  return (
    <div className="app-container">
      <div className="auth-background"></div>
      <div className="auth__container">
        <div className="auth__container-component">
          <p style={{fontSize: "30px"}}>Rejestracja</p>

          <form method="POST" onSubmit={registerSubmit}>
            <input name="email" type="text" className="main-input" placeholder="E-Mail"/>
            <input name="password" type="password" className="main-input" placeholder="Hasło"/>
            <input name="confirmed_password" type="password" className="main-input" placeholder="Powtórz hasło"/>
            <button className="blue-button" type="submit">Zarejestruj się</button>
          </form>

        </div>
      </div>
    </div>
  );
};