import { useState } from "react";

const PortfolioItem = ({ picture, url, name, techno, description }) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <a
      onMouseEnter={() => setIsActive(true)}
      onMouseLeave={() => setIsActive(false)}
      rel="noreferrer"
      target="_blank"
      href={url}
      className="site-img-wrapper"
    >
      <img src={picture} alt={name} />
      <div style={{ display: isActive ? "flex" : "none" }} className="modal">
        <h3>{name}</h3>
        <p>{description}</p>

        <h3>Technologies</h3>

        <div className="techno-wrapper">
          {techno.map((item, index) => {
            return (
              <div className="techno" key={index}>
                {item}
              </div>
            );
          })}
        </div>
      </div>
    </a>
  );
};

export default PortfolioItem;
