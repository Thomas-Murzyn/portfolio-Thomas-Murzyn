import keyboard from "../assets/keyboard.jpg";

const Accueil = () => {
  return (
    <section id="accueil">
      <img src={keyboard} alt="keyboard" />
      <div>
        <h1>Thomas Murzyn</h1>
        <h2>Développeur Web & Mobile</h2>
      </div>
    </section>
  );
};

export default Accueil;
