import { NavigateOptions, useNavigate } from "react-router-dom";

export function InfoPage() {
    const history = useNavigate(); //useHistory();
    const goToHomePage = () => history('/');
    return (
        <div className="container-fluid align-items-center">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <h1>Welcome to my page!</h1>
                        <button onClick={goToHomePage}>Enter page</button>
                    </div>
                </div>
            </div>
        </div>
    );
}