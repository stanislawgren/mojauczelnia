import { IUniversity } from "../interfaces/IUniversity";
import logo from "./../assets/logo.svg";
import university from "./../assets/university.jpg";
import universitylogo from "./../assets/university_logo.png";
import { useState } from "react";
import { Link, useOutletContext, useParams } from 'react-router-dom';

export const UniversityRecruitmentPage = () => {
    const universityObj = useOutletContext<IUniversity>()

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
                            <Link to={`/university/${universityObj.academy_id}`}>Politechnika Krakowska im. <br></br>Tadeusza Kościuszki</Link>
                        </h1>
                    </div>
                </div>
                <div className="university-page__main">
                    <div className="university-page__main__nav">
                        <Link to="../opinions" className="university-page__main__nav__button">Opinie o uczelni</Link>
                        <Link to="../contact" className="university-page__main__nav__button">Kontakt</Link>
                        <Link to="../recruitment" className="university-page__main__nav__button">Rekrutacja</Link>
                    </div>
                    <div className="university-page__main__content">
                        <h2 className="university-page__main__content__title university-page__main__content__title--blue">Rekrutacja</h2>
                        {universityObj.recrutment}
                    </div>
                </div>
            </div> 
        </div>
    );
};
