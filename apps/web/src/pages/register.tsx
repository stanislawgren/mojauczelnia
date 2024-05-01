export const RegisterPage = () => {
    return (
      <div className="app-container">
        <div className="auth-background"></div>
        <div className="auth__container">
          <div className="auth__container-component">
            {/* <img src={logo} alt="logo" style={{ width: "50%" }} /> */}
            <p style={{ fontSize: "30px" }}>Rejestracja</p>

            {/* TODO Poprawić CSS forma */}
            <form action="/register" method="POST">
              <input type="text" className="main-input" placeholder="E-Mail" />
              <input type="password" className="main-input" placeholder="Hasło" />
              <input type="password" className="main-input" placeholder="Powtórz hasło" />
              <button className="blue-button" type="submit">Zarejestruj się</button>
            </form>

          </div>
        </div>
      </div>
    );
  };