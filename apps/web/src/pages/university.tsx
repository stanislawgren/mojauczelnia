import logo from "./../assets/logo.svg";
import university from "./../assets/university.jpg";
import universitylogo from "./../assets/university_logo.png";
import tilePlaceholder from "./../assets/tile_placeholder.webp";
import { useState } from "react";
import { Link } from 'react-router-dom';

export const UniversityPage = () => {
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
                        <Link to="/login" className="main-button" style={{  }}>
                            Zaloguj się
                        </Link>
                        <Link to="/register" className="main-button" style={{  }}>
                            Zarejestruj się
                        </Link>
                        
                        </div>
                    </div>
                </div>
                <div className="university-page__hero-section">
                    <img className="university-page__hero-section__background" src={university} />
                    <div className="university-page__hero-section__title">
                        <img className="university-page__hero-section__title__logo" src={universitylogo} />
                        <h1 className="university-page__hero-section__title__text">
                            <Link to="/university">Politechnika Krakowska im. <br></br>Tadeusza Kościuszki</Link>
                        </h1>
                    </div>
                </div>
                <div className="university-page__main">
                    <div className="university-page__main__nav">
                        <Link to="/universityOpinions" className="university-page__main__nav__button">Opinie o uczelni (18)</Link>
                        <Link to="/universityContact" className="university-page__main__nav__button">Kontakt</Link>
                        <Link to="/universityRecruitment" className="university-page__main__nav__button">Rekrutacja</Link>
                    </div>
                    <div className="university-page__main__content">
                        <h2 className="university-page__main__content__title">Wydziały Politechniki Krakowskiej</h2>
                        <div className="university-page__main__content__grid">
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
                            </div>
                            <div className="university-page__main__content__grid__tile">
                                <img className="university-page__main__content__grid__tile__image" src={tilePlaceholder}/>
                                <Link to="/universityDepartament" className="university-page__main__content__grid__tile__text">Wydział Inżynierii Elektrycznej i Komputerowej</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div> 
        </div>
    );
};
