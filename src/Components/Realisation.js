import PortfolioItem from "./PortfolioItem";
import Data from "../Data";

console.log(Data);

const Realisation = () => {
  return (
    <section id="portfolio">
      <h2>Portfolio</h2>

      <div className="portfolio-wrapper">
        {Data.map((item, index) => {
          return (
            <PortfolioItem
              key={index}
              techno={item.techno}
              name={item.name}
              picture={item.picture}
              url={item.url}
              description={item.description}
            />
          );
        })}
      </div>
    </section>
  );
};

export default Realisation;
