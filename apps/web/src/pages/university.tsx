import logo from "./../assets/logo.svg";
import university from "./../assets/university.jpg";
import universitylogo from "./../assets/university_logo.png";
import tilePlaceholder from "./../assets/tile_placeholder.webp";
import { Link, useOutletContext } from 'react-router-dom';
import { IUniversity } from "../interfaces/IUniversity";
import { UserNav } from "../components/UserNav";
import { useAuth } from "../hooks/useAuth";

export const UniversityPage = () => {
    const auth = useAuth()
    const universityObj = useOutletContext<IUniversity>()

    return (
        <div className="app-container">
            <div className="university-page">
                <div className="university-page__navbar">
                    <div className="university-page__navbar-container">
                        <Link to="/">
                        <img
                            src={logo}
                            alt="logo"
                        />
                        </Link>

                        <div className="university-page__navbar__buttons">
                            {auth.token ? (
                                <UserNav />
                            ) : (
                                <>
                                    <Link to="/login" className="main-button" style={{}}>
                                        Zaloguj się
                                    </Link>
                                    <div style={{ width: "20px" }}></div>
                                    <Link to="/register" className="main-button" style={{}}>
                                        Zarejestruj się
                                    </Link>
                                </>
                            )}
                        </div>
                    </div>
                </div>
                <div className="university-page__hero-section">
                    <img className="university-page__hero-section__background" src={university} />
                    <div className="university-page__hero-section__title">
                        <img className="university-page__hero-section__title__logo" src={universitylogo} />
                        <h1 className="university-page__hero-section__title__text">
                            <Link to={`/university/${universityObj.academy_id}`}>{universityObj.academy_name}</Link>
                        </h1>
                    </div>
                </div>
                <div className="university-page__main">
                    <div className="university-page__main__nav">
                        <Link to="opinions" className="university-page__main__nav__button">Opinie o uczelni</Link>
                        <Link to="contact" className="university-page__main__nav__button">Kontakt</Link>
                        <a href={universityObj.recrutment} target="_blank" className="university-page__main__nav__button">Rekrutacja</a>
                    </div>
                    <div className="university-page__main__content">
                        <h2 className="university-page__main__content__title">Wydziały</h2>
                        <div className="university-page__main__content__grid">
                            <div className="university-page__main__content__grid__tile">
                                <img className="university-page__main__content__grid__tile__image" src={tilePlaceholder} />
                                <Link to="departament/1" className="university-page__main__content__grid__tile__text">Wydział Inżynierii Elektrycznej i Komputerowej</Link>
                            </div>
                            {/* foreach departaments? */}
                            {/* <div className="university-page__main__content__grid__tile">
                                <img className="university-page__main__content__grid__tile__image" src={tilePlaceholder} />
                                <Link to="departament/1" className="university-page__main__content__grid__tile__text">Wydział Inżynierii Elektrycznej i Komputerowej</Link>
                            </div>
                            <div className="university-page__main__content__grid__tile">
                                <img className="university-page__main__content__grid__tile__image" src={tilePlaceholder}/>
                                <Link to="/universityDepartament" className="university-page__main__content__grid__tile__text">Wydział Inżynierii Elektrycznej i Komputerowej</Link>
                            </div>
                            <div className="university-page__main__content__grid__tile">
                                <img className="university-page__main__content__grid__tile__image" src={tilePlaceholder}/>
                                <Link to="/universityDepartament" className="university-page__main__content__grid__tile__text">Wydział Inżynierii Elektrycznej i Komputerowej</Link>
                            </div>
                            <div className="university-page__main__content__grid__tile">
                                <img className="university-page__main__content__grid__tile__image" src={tilePlaceholder}/>
                                <Link to="/universityDepartament" className="university-page__main__content__grid__tile__text">Wydział Inżynierii Elektrycznej i Komputerowej</Link>
                            </div>
                            <div className="university-page__main__content__grid__tile">
                                <img className="university-page__main__content__grid__tile__image" src={tilePlaceholder}/>
                                <Link to="/universityDepartament" className="university-page__main__content__grid__tile__text">Wydział Inżynierii Elektrycznej i Komputerowej</Link>
                            </div>
                            <div className="university-page__main__content__grid__tile">
                                <img className="university-page__main__content__grid__tile__image" src={tilePlaceholder}/>
                                <Link to="/universityDepartament" className="university-page__main__content__grid__tile__text">Wydział Inżynierii Elektrycznej i Komputerowej</Link>
                            </div>
                            <div className="university-page__main__content__grid__tile">
                                <img className="university-page__main__content__grid__tile__image" src={tilePlaceholder}/>
                                <Link to="/universityDepartament" className="university-page__main__content__grid__tile__text">Wydział Inżynierii Elektrycznej i Komputerowej</Link>
                            </div>
                            <div className="university-page__main__content__grid__tile">
                                <img className="university-page__main__content__grid__tile__image" src={tilePlaceholder}/>
                                <Link to="/universityDepartament" className="university-page__main__content__grid__tile__text">Wydział Inżynierii Elektrycznej i Komputerowej</Link>
                            </div>
                            <div className="university-page__main__content__grid__tile">
                                <img className="university-page__main__content__grid__tile__image" src={tilePlaceholder}/>
                                <Link to="/universityDepartament" className="university-page__main__content__grid__tile__text">Wydział Inżynierii Elektrycznej i Komputerowej</Link>
                            </div> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
