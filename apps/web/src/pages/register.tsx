export const RegisterPage = () => {
    return (
      <div className="app-container">
        <div className="auth-background"></div>
        <div className="auth__container">
          <div className="auth__container-component">
            {/* <img src={logo} alt="logo" style={{ width: "50%" }} /> */}
            <p style={{ fontSize: "30px" }}>Rejestracja</p>
            <input type="text" className="main-input" placeholder="E-Mail" />
            <input type="password" className="main-input" placeholder="Hasło" />
            <input type="password" className="main-input" placeholder="Powtórz hasło" />
            <button className="blue-button">Zarejestruj się</button>
          </div>
        </div>
      </div>
    );
  };