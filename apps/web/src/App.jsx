import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Accueil from "./pages/Accueil";
import NouvelEvenement from "./pages/NouvelEvenement";
import Detail from "./pages/Detail";
import NavBar from "./components/NavBar";
import { supabase } from "./lib/supabase";

const App = () => {
  const [evenements, setEvenements] = useState([]);
  const [chargement, setChargement] = useState(false);

  const charger = async () => {
  setChargement(true);
  const { data, error } = await supabase
    .from("evenements")
    .select("*")
    .order("date_debut", { ascending: true });

  if (error) {
    console.error("Erreur :", error.message);
  } else {
    setEvenements(data);
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
        element={<NouvelEvenement onAjoutReussi={charger} />}
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