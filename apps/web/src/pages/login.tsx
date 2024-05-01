// import logo from "./../assets/auth_logo.svg";

export const LoginPage = () => {
    return (
      <div className="app-container">
        <div className="auth-background"></div>
        <div className="auth__container">
          <div className="auth__container-component">
            {/* <img src={logo} alt="logo" style={{ width: "50%" }} /> */}
            <p style={{ fontSize: "30px" }}>Logowanie</p>

            {/* TODO Poprawić CSS forma */}
            <form action="/login" method="POST">
              <input type="text" className="main-input" placeholder="E-Mail" />
              <input type="password" className="main-input" placeholder="Hasło" />
              <button className="blue-button" type="submit">Zaloguj się</button>
            </form>

          </div>
        </div>
      </div>
    );
  };