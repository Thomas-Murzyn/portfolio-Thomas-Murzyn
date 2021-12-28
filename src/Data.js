import vintedPicture from "./assets/Vinted.png";
import tripadvisorPicture from "./assets/TripAdvisor.png";
import EmojiSearch from "./assets/EmojiSearch.png";
import gamepadPicture from "./assets/gamepadPicture.png";

const data = [
  {
    name: "Gamepad",
    techno: ["Mongo DB", "Express", "React js", "Node js / Javascript"],
    picture: gamepadPicture,
    url: "https://gamepad-by-thomas.netlify.app",
    description:
      "Un site qui recense et qui permet de chercher tous les jeux vidéo, le site utilise l'api de RAWG. Il a été réalisé avec la MERN Stack c'est à dire avec les technologies Mongo DB, Express, React js et Node js.",
  },

  {
    name: "Réplique Full Stack de Vinted",
    techno: ["Mongo DB", "Express", "React js", "Node js / Javascript"],
    picture: vintedPicture,
    url: "https://vinted-by-thomas.netlify.app",
    description:
      "Ce site est une réplique du célébre site Vinted. Il a été réalisé avec la MERN Stack c'est à dire avec les technologies Mongo DB, Express, React js et Node js.",
  },

  {
    name: "Réplique Front-end de TripAdvisor",
    techno: ["HTML", "CSS", "Vanilla Javascript"],
    picture: tripadvisorPicture,
    url: "https://tripadvisor-by-thomas.netlify.app",
    description:
      "Ce site est une réplique Front-End de la page Paris du célèbre site TripAdvisor. Il a été réalisé en HTML CSS et Vanilla Javascript.",
  },

  {
    name: "EmojiSearch",
    techno: ["React js, CSS"],
    picture: EmojiSearch,
    url: "https://emojisearch-thomas.netlify.app",
    description:
      "Une petite application permmetant de rechercher des Emojis. Elle a été réalisé avec React js",
  },
];

export default data;
