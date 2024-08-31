import React, { useState } from "react";

const FriendManager = () => {
  const [amis, setAmis] = useState([]);
  const [nomAmi, setNomAmi] = useState("");
  const [avatarUrl, setAvatarUrl] = useState("");

  const ajouterAmi = () => {
    if (nomAmi && avatarUrl) {
      setAmis([...amis, { nom: nomAmi, avatarUrl }]);
      setNomAmi("");
      setAvatarUrl("");
    } else {
      alert("Veuillez remplir les champs.");
    }
  };

  const supprimerAmi = (index) => {
    setAmis(amis.filter((_, i) => i !== index));
  };

  return (
    <div align="left" className="amis-container">
      <h3>Mes Amis</h3>
      <ul className="amis-list">
        {amis.map((ami, index) => (
          <li key={index} className="ami-item">
            <img
              src={ami.avatarUrl}
              alt={`${ami.nom}'s avatar`}
              className="avatar"
            />
            <span>{ami.nom}</span>
            &#160; &#160; &#160;
            <button onClick={() => supprimerAmi(index)}>Supprimer</button>
          </li>
        ))}
      </ul>

      <div className="ajouter-ami">
        <input
          type="text"
          value={nomAmi}
          onChange={(e) => setNomAmi(e.target.value)}
          placeholder="Nom de l'ami"
        />
        <input
          type="text"
          value={avatarUrl}
          onChange={(e) => setAvatarUrl(e.target.value)}
          placeholder="URL de l'avatar"
        />
         &#160; &#160; &#160;
        <button onClick={ajouterAmi}>Ajouter</button>
      </div>
    </div>
  );
};

export default FriendManager;
