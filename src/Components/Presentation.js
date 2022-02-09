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
            j'ai commencé à pratiquer en autodidacte et via des formations en
            ligne telles que le{" "}
            <a href="https://www.freecodecamp.org/">Freecodecamp</a>,
            <a href="https://www.codecademy.com/"> Codecademy</a>,{" "}
            <a href="https://www.udemy.com/"> Udemy</a> et d'autres.
          </p>

          <p>
            Après plusieurs années passées dans un emploi dont j'avais fais le
            tour j'ai sauté le pas et entamé une reconversion professionnelle
            via la formation de développement web que propose
            <a href="https://www.lereacteur.io/"> Le Reacteur</a>.
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
