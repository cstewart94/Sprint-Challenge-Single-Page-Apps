import React from "react";

const CharacterCard = (props) => {
  return (
    <div>
      <h1>{props.character.name}</h1>
      <h2>{props.character.status}</h2>
      <h2>{props.character.species}</h2>
      <img
        className="main-img"
        src={props.character.image}
        alt={props.character.name}
      />
    </div>
  )

};

export default CharacterCard;
