import React from "react";

import { Card, ImgBox, HOne, HTwo } from './Style.js';

const CharacterCard = (props) => {
  return (
    <Card>
      <HTwo>{props.character.status}</HTwo>
      <HTwo>{props.character.species}</HTwo>
      <HOne>{props.character.name}</HOne>
      <ImgBox
        className="main-img"
        src={props.character.image}
        alt={props.character.name}
      />
    </Card>
  )

};

export default CharacterCard;
