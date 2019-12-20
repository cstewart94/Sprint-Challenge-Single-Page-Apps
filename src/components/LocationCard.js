import React from "react";

import { Card, HOne, HTwo } from './Style.js';

const LocationCard = (props) => {
  return (
    <Card>
      <HTwo>{props.location.dimension}</HTwo>
      <HTwo>{props.location.type}</HTwo>
      <HOne>{props.location.name}</HOne>
    </Card>
  )

};

export default LocationCard;