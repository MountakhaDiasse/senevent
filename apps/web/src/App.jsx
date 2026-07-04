import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Accueil from "./pages/Accueil";
import NouvelEvenement from "./pages/NouvelEvenement";
import Detail from "./pages/Detail";
import NavBar from "./components/NavBar";

const App = () => {
  const [evenements, setEvenements] = useState([]);
  const [chargement, setChargement] = useState(false);

  const charger = async () => {
    setChargement(true);
    try {
      const response = await fetch("/evenements.json");
      const data = await response.json();
      setEvenements(data);
    } catch (error) {
      console.error("Erreur :", error);
    }
    setChargement(false);
  };

  const ajouterEvenement = (nouvel) => {
    setEvenements((precedents) => [nouvel, ...precedents]);
  };

  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route
          path="/"
          element={
            <Accueil
              evenements={evenements}
              chargement={chargement}
              onCharger={charger}
            />
          }
        />
        <Route
          path="/nouveau"
          element={<NouvelEvenement onAjouter={ajouterEvenement} />}
        />
        <Route
          path="/evenement/:id"
          element={<Detail evenements={evenements} />}
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;