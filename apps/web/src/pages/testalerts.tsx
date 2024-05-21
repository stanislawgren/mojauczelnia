import logo from "../assets/logo.svg";
import * as Alerts from "../components/Alerts";


export const TestAlerts = () => {
    const handleQuestionClick = async () => {
        const result = await Alerts.Question();
        console.log(result);
    };
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
                </div>
            </div>
            <div className="main-page__container">
                <button onClick={handleQuestionClick}><h1>Question</h1></button>
                <button onClick={() => Alerts.LoginError()}><h1>LoginError</h1></button>
                <button onClick={() => Alerts.RegisterError()}><h1>RegisterError</h1></button>
                <button onClick={() => Alerts.Reaction()}><h1>Reaction</h1></button>
                <button onClick={() => Alerts.RegisterSuccess()}><h1>RegisterSuccess</h1></button>
                <button onClick={() => Alerts.Success()}><h1>Success</h1></button>
                <button onClick={() => Alerts.Error()}><h1>Error</h1></button>
                <button onClick={() => Alerts.Warning()}><h1>Warning</h1></button>
                <button onClick={() => Alerts.Info("Random info :D")}><h1>Info</h1></button>
                <button onClick={() => Alerts.LogoutAlert()}><h1>LogoutAlert</h1></button>
            </div>
        </div>
    );
}