import LanguageWrapper from "./LanguageWrapper";
import cvPicture from "../assets/cv.png";

const Competences = ({ back, setBack, front, setFront, diver, setDiver }) => {
  return (
    <section id="competences">
      <h2>Mes compétences</h2>
      <div className="competences-wrapper">
        <div className="cv">
          <img src={cvPicture} alt="" />
        </div>

        <div className="languages">
          <div
            onMouseEnter={() => setBack(true)}
            onMouseLeave={() => setBack(false)}
            className="backend"
          >
            <h3 className="side-title">BACK-END</h3>
            <LanguageWrapper isActive={back} fully={85}>
              JAVASCRIPT / NODE JS
            </LanguageWrapper>

            <LanguageWrapper isActive={back} fully={80}>
              EXPRESS
            </LanguageWrapper>

            <LanguageWrapper isActive={back} fully={75}>
              MONGO DB
            </LanguageWrapper>
          </div>

          <div
            onMouseEnter={() => setFront(true)}
            onMouseLeave={() => setFront(false)}
            className="frontend"
          >
            <h3 className="side-title">FRONT-END</h3>

            <LanguageWrapper isActive={front} fully={85}>
              JAVASCRIPT
            </LanguageWrapper>

            <LanguageWrapper isActive={front} fully={90}>
              HTML / CSS
            </LanguageWrapper>

            <LanguageWrapper isActive={front} fully={78}>
              REACT JS
            </LanguageWrapper>

            <LanguageWrapper isActive={front} fully={70}>
              REACT NATIVE
            </LanguageWrapper>
          </div>

          <div
            onMouseEnter={() => setDiver(true)}
            onMouseLeave={() => setDiver(false)}
            className="diver"
          >
            <h3 className="side-title">OUTILS & TECHNOLOGIE</h3>

            <LanguageWrapper isActive={diver} fully={60}>
              GIT / GITHUB
            </LanguageWrapper>

            <LanguageWrapper isActive={diver} fully={70}>
              VISUAL STUDIO CODE
            </LanguageWrapper>

            <LanguageWrapper isActive={diver} fully={80}>
              POSTMAN
            </LanguageWrapper>

            <LanguageWrapper isActive={diver} fully={40}>
              STRIPE
            </LanguageWrapper>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Competences;
