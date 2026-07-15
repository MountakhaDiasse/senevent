import { useState } from "react";
import EvenementCarte from "../components/EvenementCarte";
import SearchBar from "../components/SearchBar";
import styles from "./Accueil.module.css";

const Accueil = ({ evenements, chargement, onCharger }) => {
  const [recherche, setRecherche] = useState("");

  const evenementsFiltres = evenements.filter((ev) =>
    ev.titre.toLowerCase().includes(recherche.toLowerCase())
  );

  return (
    <div className={styles.container}>
      <h1 className={styles.titre}>
        SénEvent — Événements à Dakar
      </h1>
      <button
        className={styles.bouton}
        onClick={onCharger}
        disabled={chargement}
      >
        {chargement ? "Chargement..." : "Charger les événements"}
      </button>
      <SearchBar
        recherche={recherche}
        onRecherche={setRecherche}
      />
      <p className={styles.compteur}>
        {evenementsFiltres.length} événement(s) trouvé(s)
      </p>
      {evenementsFiltres.map((ev) => (
        <EvenementCarte
          key={ev.id}
          ev={ev}
          afficherDetails={true}
        />
      ))}
    </div>
  );
};

export default Accueil;