import logo from "./../assets/logo.svg";
import university from "./../assets/university.jpg";
import universitylogo from "./../assets/university_logo.png";
import { useState } from "react";
import { Link } from 'react-router-dom';

export const UniversityContactPage = () => {
    return (
        <div className="app-container"> 
            <div className="university-page">  
                <div className="university-page__navbar">
                    <div className="university-page__navbar-container">
                    <img
                        src={logo}
                        alt="logo"
                    />

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
                        <h2 className="university-page__main__content__title university-page__main__content__title--blue">Dane kontaktowe</h2>
                        <div className="university-page__main__content__contact">
                            <img className="university-page__main__content__contact__logo" src={universitylogo} />
                            <div className="university-page__main__content__contact__info">
                                <div className="university-page__main__content__contact__info__item">
                                    <div className="university-page__main__content__contact__info__item__icon">
                                        <img src="" alt="" />
                                    </div>
                                    <div className="university-page__main__content__contact__info__item__text">
                                        Strona internetowa <br></br>
                                        <a href="http://pk.edu.pl" target="_blank">pk.edu.pl</a>
                                    </div>
                                </div>
                                <div className="university-page__main__content__contact__info__item">
                                    <div className="university-page__main__content__contact__info__item__icon">
                                        <img src="" alt="" />
                                    </div>
                                    <div className="university-page__main__content__contact__info__item__text">
                                        Adres <br></br>
                                        Ulica Warszawska 24 31-155 Kraków
                                    </div>
                                </div>
                                <div className="university-page__main__content__contact__info__item">
                                    <div className="university-page__main__content__contact__info__item__icon">
                                        <img src="" alt="" />
                                    </div>
                                    <div className="university-page__main__content__contact__info__item__text">
                                        tel.: 12 632 86 44, <br></br>
                                        12 628 21 91
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div> 
        </div>
    );
};
