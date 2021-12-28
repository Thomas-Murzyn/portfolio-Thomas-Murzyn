import picture from "../assets/IMG_3085.jpg";

const Presentation = () => {
  return (
    <section id="presentation">
      <h2>À propos de moi</h2>
      <div className="description-wrapper">
        <div className="col-1">
          <img src={picture} alt="Me" />
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
            Après plusieurs année passé dans un emploi dont j'avais fais le tour
            j'ai décidé de sauté le pas et d'entamer une reconversion
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
  );
};

export default Presentation;
