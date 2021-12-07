import { useState } from "react";

const PortfolioItem = ({ picture, site, name, techno }) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <a
      onMouseEnter={() => setIsActive(true)}
      onMouseLeave={() => setIsActive(false)}
      rel="noreferrer"
      target="_blank"
      href={site}
      className="site-img-wrapper"
    >
      <img src={picture} alt="Vinted by Thomas" />
      <div style={{ display: isActive ? "flex" : "none" }} className="modal">
        <h3>{name}</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium
          sit tenetur amet doloremque fuga magnam esse minima aliquam, et saepe?
          Fugiat voluptates repellat molestias quo earum. Quam repellendus
          cupiditate et.
        </p>

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
