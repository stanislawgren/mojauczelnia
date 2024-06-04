import logo from "./../assets/logo.svg";
import university from "./../assets/university.jpg";
import universitylogo from "./../assets/university_logo.png";
import { useState } from "react";
import { Link } from 'react-router-dom';

export const UniversityRecruitmentPage = () => {
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
                        <h2 className="university-page__main__content__title university-page__main__content__title--blue">Rekrutacja na Politechnikę Krakowską</h2>
                        <div className="university-page__main__content__text-content">
                            <h3>Rekrutacja na Politechnikę Krakowską odbywa się w formie on-line. Poniżej przedstawiamy zasady przyjęć na poszczególne poziomy studiów:</h3>
                            <p>
                                <b>Dowiedz się więcej:&nbsp; </b><a href="https://rekrutacja.pk.edu.pl/rekrutacja/">https://rekrutacja.pk.edu.pl/rekrutacja/</a>
                            </p>
                            <h3 className="blue">Studia Inżynierskie i Licencjackie</h3>
                            <p>Podstawą rekrutacji są wyniki egzaminu dojrzałości, które przeliczane są na punkty rekrutacyjne.</p>
                            <h3 className="blue">Studia Magisterskie Uzupełniające</h3>
                            <p>Kryteria przyjęć obejmują:</p>
                            <ul>
                                <li>Analizę programu studiów pierwszego stopnia.</li>
                                <li>Podobieństwo kierunku studiów do ukończonych studiów licencjackich lub inżynierskich.</li>
                                <li>Ocenę wiedzy, umiejętności oraz kompetencji społecznych kandydata.</li>
                            </ul>
                            <h3 className="blue">Studia Podyplomowe</h3>
                            <p> Warunki przyjęcia:</p>
                            <ul>
                                <li>Przeznaczone dla absolwentów studiów inżynierskich, licencjackich oraz magisterskich.</li>
                                <li>Decyduje kolejność zgłoszeń.</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div> 
        </div>
    );
};
