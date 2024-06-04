import { UserNav } from "../components/UserNav";
import { useAuth } from "../hooks/useAuth";
import { IUniversity } from "../interfaces/IUniversity";
import logo from "./../assets/logo.svg";
import university from "./../assets/university.jpg";
import universitylogo from "./../assets/university_logo.png";
import { useState } from "react";
import { Link, useOutletContext, useParams } from 'react-router-dom';

export const UniversityDepartamentPage = () => {
    const auth = useAuth()
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
                        <Link to="../opinions" className="university-page__main__nav__button">Opinie o uczelni (18)</Link>
                        <Link to="../contact" className="university-page__main__nav__button">Kontakt</Link>
                        <a href={universityObj.recrutment} target="_blank" className="university-page__main__nav__button">Rekrutacja</a>
                    </div>
                    <div className="university-page__main__content">
                        <h2 className="university-page__main__content__title university-page__main__content__title--blue">Wydział Politechniki Krakowskiej</h2>
                        <div className="university-page__main__content__text-content">
                            <h3>Informacje o wydziale</h3>
                            <p>
                                Wydział Inżynierii Lądowej jest obecnie największym wydziałem Politechniki Krakowskiej pod względem liczebności kadry naukowo-dydaktycznej oraz liczebności kształconych studentów, odbywających studia w trybie stacjonarnym i niestacjonarnym, na studiach I stopnia (inżynierskich), II stopnia (uzupełniających magisterskich), III stopnia (doktoranckich) oraz w Szkole Doktorskiej PK.
                                <br></br><br></br>
                                Łącznie na wydziale studiuje obecnie 3400 studentów, w tym 2200 studentów studiów stacjonarnych, 1200 niestacjonarnych i 54 doktorantów. Oferta dydaktyczna wydziału obejmuje kierunki Budownictwo, Budownictwo w języku angielskim i Transport.
                            </p>
                            <h3 className="blue">Kierunki studiów na Wydziale Inżynierii Lądowej Politechniki Krakowskiej:</h3>
                            <ul>
                                <li>BUDOWNICTWO (w języku polskim) – studia stacjonarne I stopnia 3,5-letnie (bez specjalności)</li>
                                <li>BUDOWNICTWO (w języku polskim) – studia niestacjonarne I stopnia 4,5-letnie (bez specjalności)</li>
                                <li>BUDOWNICTWO (w języku polskim) – studia stacjonarne II stopnia 1,5-roczne</li>
                                <li>BUDOWNICTWO (w języku polskim) – studia niestacjonarne II stopnia 2-letnie</li>
                                <li>BUDOWNICTWO (w języku angielskim) – studia stacjonarne I stopnia 3,5-letnie (bez specjalności)</li>
                                <li>BUDOWNICTWO (w języku angielskim) – studia stacjonarne II stopnia 1,5-roczne</li>
                                <li>TRANSPORT – studia stacjonarne I stopnia 3,5-letnie (bez specjalności)</li>
                                <li>TRANSPORT – studia niestacjonarne I stopnia 4,5-letnie</li>
                                <li>TRANSPORT – studia stacjonarne II stopnia 1,5-roczne</li>
                                <li>TRANSPORT – studia niestacjonarne II stopnia 2-letnie</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
