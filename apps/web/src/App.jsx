import { useState } from "react";

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

  return (
    <div style={{ maxWidth: "700px", margin: "2rem auto", fontFamily: "sans-serif" }}>
      <h1 style={{ color: "#1a3a5c" }}>
        SénEvent — Événements à Dakar
      </h1>

      <button onClick={charger} disabled={chargement}>
        {chargement ? "Chargement..." : "Charger les événements"}
      </button>

      {evenements.map((ev) => (
        <EvenementCarte key={ev.id} ev={ev} />
      ))}
    </div>
  );
};

const EvenementCarte = ({ ev }) => {
  const prix = ev.prix === 0 ? "Gratuit" : `${ev.prix} FCFA`;

  return (
    <div
      style={{
        border: "1px solid #ccc",
        padding: "1rem",
        margin: "0.8rem 0",
        borderRadius: "8px"
      }}
    >
      <h3 style={{ margin: 0, color: "#1a3a5c" }}>
        {ev.titre}
      </h3>

      <p>Catégorie : {ev.categorie}</p>
      <p>Lieu : {ev.lieu_nom}</p>

      <p style={{ fontWeight: "bold", color: "#ea7d2b" }}>
        {prix}
      </p>
    </div>
  );
};

export default App;