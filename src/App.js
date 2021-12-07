import "./App.css";
import Header from "./Components/Header";
import picture from "./assets/IMG_3085.jpg";

import cvPicture from "./assets/cv.png";
import LanguageWrapper from "./Components/LanguageWrapper";
import Realisation from "./Components/Realisation";

// import { library } from "@fortawesome/fontawesome-svg-core";

// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {
//   faEnvelope,
//   faKey,
//   faListAlt,
//   faAddressCard,
// } from "@fortawesome/free-solid-svg-icons";
// library.add(faEnvelope, faKey, faListAlt, faAddressCard);

function App() {
  return (
    <div>
      <Header />
      <section id="accueil">
        <h1>Thomas Murzyn</h1>
        <h2>Développeur Web & Mobile</h2>
      </section>

      <section id="presentation">
        <h2>À propos de moi</h2>
        <div className="description-wrapper">
          <div className="col-1">
            <img src={picture} alt="" />
          </div>
          <div className="col-2">
            <p>
              <span style={{ fontWeight: "700" }}>
                Passionné par le développement Web{" "}
              </span>
              j'ai commencé à pratiquer en autodidacte en faisant des recherches
              sur le net et via des formations en ligne tel que le{" "}
              <a href="https://www.freecodecamp.org/">Freecodecamp</a>,
              <a href="https://www.codecademy.com/"> Codecademy</a>,{" "}
              <a href="https://www.udemy.com/"> Udemy</a> et d'autres.
            </p>

            <p>
              Après plusieurs année passé dans un emploi dont j'avais fais le
              tour j'ai décidé de sauté le pas et d'entamer une reconversion
              professionnel grâce l'excellente formation que propose
              <a href="https://www.lereacteur.io/"> le Reacteur</a>.
            </p>

            <p>
              Je développe des sites Web et des applications Mobile en{" "}
              <span style={{ fontWeight: "700" }}>React </span> et{" "}
              <span style={{ fontWeight: "700" }}>React Native</span>.
            </p>
          </div>
        </div>
      </section>

      <section id="competences">
        <h2>Mes compétences</h2>
        <div className="competences-wrapper">
          <div className="cv">
            <img src={cvPicture} alt="" />
          </div>

          <div className="languages">
            <div className="backend">
              <h3 className="side-title">BACK-END</h3>

              <LanguageWrapper fully={85}>JAVASCRIPT / NODE JS</LanguageWrapper>

              <LanguageWrapper fully={80}>EXPRESS</LanguageWrapper>

              <LanguageWrapper fully={75}>MONGO DB</LanguageWrapper>
            </div>

            <div className="frontend">
              <h3 className="side-title">FRONT-END</h3>

              <LanguageWrapper fully={85}>JAVASCRIPT</LanguageWrapper>

              <LanguageWrapper fully={90}>HTML / CSS</LanguageWrapper>

              <LanguageWrapper fully={78}>REACT JS</LanguageWrapper>

              <LanguageWrapper fully={70}>REACT NATIVE</LanguageWrapper>
            </div>

            <div className="diver">
              <h3 className="side-title">OUTILS & TECHNOLOGIE</h3>
              <LanguageWrapper fully={60}>Git / Github</LanguageWrapper>
              <LanguageWrapper fully={70}>Visual Studio Code</LanguageWrapper>
              <LanguageWrapper fully={80}>Postman</LanguageWrapper>
              <LanguageWrapper fully={40}>Stripe</LanguageWrapper>
            </div>
          </div>
        </div>
      </section>

      <Realisation />
    </div>
  );
}

export default App;
