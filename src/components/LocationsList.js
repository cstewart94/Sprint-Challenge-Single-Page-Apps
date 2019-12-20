import React, { useEffect, useState } from "react";
import axios from "axios";

import LocationCard from './CharacterCard';
import LocationSearchForm from './LocationSearchForm.js';

import { Container } from './Style.js';

const LocationsList = props => {
  // TODO: Add useState to track data from useEffect
  const [newLocation, setNewLocation] = useState([])

  useEffect(() => {
    axios
      .get('https://rickandmortyapi.com/api/location/')
      .then(response => {
        console.log(response.data.results);
        setNewLocation(response.data.results);
      })
      .catch(error => {
        console.error('Data Error', error);
      });
  }, []);

  return (
    <Container className="character-list">
      <LocationSearchForm />
      {newLocation.map((location, id) => {
        return <LocationCard key={id} location={location} />;
      })}
    </Container>
  );
}

export default LocationsList; 