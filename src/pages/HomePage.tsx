import { Link } from "react-router-dom";
import aboutImage from "../assets/meInArt.png";

export function HomePage() {
  return (
    <div className="container-fluid fullPage">
      <div className="container">
        <div className="row">
          <div className="intro col-md-12">
            <div className="about-img">
              <img src={aboutImage} alt="" />
            </div>

            <div>Sarah Victoria Berg</div>

            <div className="emoji-line">🐱🎮🪴🏃🏼‍♀️🍳🫧💻✨</div>

            <div className="col-md-8 intro mt-50">
              <h1>Hello world! 🫶🏻 </h1>
              <p>
                Jeg er en utvikler som elsker å ta bilder, drive med planter,
                spise mat, katten min osv osv.
              </p>
              <p>
                Dette er faktisk mitt første forsøk på egen nettside fra "bunnen
                av", så det er ikke stort å skryte av her enda.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
