import vintedPicture from "../assets/Vinted.png";
import tripadvisorPicture from "../assets/TripAdvisor.png";

import PortfolioItem from "./PortfolioItem";

const Realisation = () => {
  return (
    <section id="portfolio">
      <h2>Portfolio</h2>

      <div className="portfolio-wrapper">
        <PortfolioItem
          techno={["Mongo DB", "Express", "React js", "Node js / Javascript"]}
          name={"Réplique Full Stack de Vinted"}
          picture={vintedPicture}
          site={"https://amazing-shockley-9c0948.netlify.app/"}
        />
        <PortfolioItem
          techno={["HTML", "CSS", "Vanilla Javascript"]}
          name={"Réplique Front-end de TripAdvisor"}
          picture={tripadvisorPicture}
          site={"https://angry-curie-b38763.netlify.app/"}
        />
      </div>
    </section>
  );
};

export default Realisation;
