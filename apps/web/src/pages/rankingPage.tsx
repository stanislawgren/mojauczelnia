import { RankingElement } from "../components/RankingElement";
import { UserNav } from "../components/UserNav";
import { useAuth } from "../hooks/useAuth";
import logo from "./../assets/logo.svg";
import { Link } from 'react-router-dom';

export const RankingPage = () => {
    const auth = useAuth()

    return (
        <div className="app-container">
            <div className="background-photo"></div>
            <div className="main-page__navbar">
                <div className="main-page__navbar-container">
                    <img src={logo} alt="logo" style={{ marginLeft: "-40px" }} />

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
            <div className="main-page__container ranking">
                <RankingElement star uniName="1. Politechnika Krakowska im. Tadeusza Kościuszki" uniRates={7} uniRating={4.5} />
                <RankingElement uniName="2. Uniwersytet Jagielloński" uniRates={3} uniRating={3.75} />
                <RankingElement uniName="3. Akademia Górniczo-Hutnicza im. Stanisława Staszica w Krakowie" uniRates={9} uniRating={3.5} />
                <RankingElement uniName="4. Uniwersytet Warszawski" uniRates={5} uniRating={3} />
                <RankingElement uniName="5. Uniwersytet Wrocławski" uniRates={8} uniRating={2} />
            </div>
        </div>
    );
};
