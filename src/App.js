import "./App.css";
import { useState } from "react";
import Header from "./Components/Header";

import Presentation from "./Components/Presentation";

import Accueil from "./Components/Accueil";
import Competences from "./Components/Competences";
import Realisation from "./Components/Realisation";
import Contact from "./Components/Contact";

function App() {
  const [back, setBack] = useState(false);
  const [front, setFront] = useState(false);
  const [diver, setDiver] = useState(false);

  return (
    <div>
      <Header />
      <Accueil />

      <Presentation />

      <Competences
        back={back}
        setBack={setBack}
        front={front}
        setFront={setFront}
        diver={diver}
        setDiver={setDiver}
      />

      <Realisation />
      <Contact />
    </div>
  );
}

export default App;
