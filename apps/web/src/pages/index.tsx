import logo from "./../assets/logo.svg";

export const MainPage = () => {
  return (
    <div className="app-container">
      <div className="background-photo"></div>
      <div className="main-page__navbar">
        <div className="main-page__navbar-container">
          <img
            src={logo}
            alt="logo"
            style={{ position: "absolute", left: "-20px" }}
          />
          <button className="main-button" style={{ justifySelf: "flex-end" }}>
            Zaloguj się
          </button>
        </div>
      </div>
      <div className="main-page__container">
        <div className="main-page__container-search-bar">
          <input type="text" className="main-input" placeholder="Wyszukaj" />
          <input type="text" className="main-input" placeholder="Miasto" />
          <input type="text" className="main-input" placeholder="Szkoła" />
          <button className="icon-button">
            <span className="material-icons" style={{ fontSize: "24px" }}>
              search
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};
