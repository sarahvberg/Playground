import { NavigateOptions, useNavigate } from "react-router-dom";

export function InfoPage() {
    const history = useNavigate(); //useHistory();
    const goToHomePage = () => history('/');
    return (
        <div>
            <h1>Welcome to my page!</h1>
            <button onClick={goToHomePage}>Hade</button>
        </div>
    );
}