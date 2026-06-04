const EvenementCarte = ({ ev }) => {
  const prix = ev.prix === 0 ? "Gratuit" : `${ev.prix} FCFA`;

  return (
    <div>
      <h3>{ev.titre}</h3>
      <p>Categorie : {ev.categorie}</p>
      <p>Lieu : {ev.lieu_nom}</p>
      <p>{prix}</p>
    </div>
  );
};

export default EvenementCarte;