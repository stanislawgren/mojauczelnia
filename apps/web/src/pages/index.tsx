import logo from "./../assets/logo.svg";
import { Link } from 'react-router-dom';


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
          {/* TODO Poprawic tu CSS  */}
          <Link to="/login" className="main-button" style={{ textAlign: "center" , fontFamily: "Poppins", fontSize: "20px", justifySelf: "flex-end" }}>
            Zaloguj się
          </Link>
          <div style={{ width: "20px" }}> 
          {/* TODO dodać jakis margin czy cos  */}
          </div>
          <Link to="/register" className="main-button" style={{ textAlign: "center" , fontFamily: "Poppins", fontSize: "20px", justifySelf: "flex-end" }}>
            Zarejestruj się
          </Link>
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
