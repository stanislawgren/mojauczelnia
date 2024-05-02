// import logo from "./../assets/auth_logo.svg";

import LoginLogic from '../modules/loginLogic.tsx';


export const LoginPage = () => {
  const loginSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    
    const form = event.target as HTMLFormElement;
    const emailInput = form.elements.namedItem('email') as HTMLInputElement;
    const passwordInput = form.elements.namedItem('password') as HTMLInputElement;

    const email = emailInput.value;
    const password = passwordInput.value;

    LoginLogic(email, password);
  };
    return (
      <div className="app-container">
        <div className="auth-background"></div>
        <div className="auth__container">
          <div className="auth__container-component">
            {/* <img src={logo} alt="logo" style={{ width: "50%" }} /> */}
            <p style={{ fontSize: "30px" }}>Logowanie</p>

            {/* TODO Poprawić CSS forma */}
            <form action="/login" method="POST" onSubmit={loginSubmit}>
              <input name = "email" type="text" className="main-input" placeholder="E-Mail" />
              <input name = "password" type="password" className="main-input" placeholder="Hasło" />
              <button className="blue-button" type="submit">Zaloguj się</button>
            </form>

          </div>
        </div>
      </div>
    );
  };