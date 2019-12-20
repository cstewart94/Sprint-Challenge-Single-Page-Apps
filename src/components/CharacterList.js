import React, { useEffect, useState } from "react";
import axios from "axios";

import CharacterCard from './CharacterCard';
import SearchForm from './SearchForm.js';

import { Container } from './Style.js';

const CharacterList = props => {
  // TODO: Add useState to track data from useEffect
  const [newCharacter, setNewCharacter] = useState([])

  useEffect(() => {
    axios
      .get('https://rickandmortyapi.com/api/character')
      .then(response => {
        console.log(response.data.results);
        setNewCharacter(response.data.results);
      })
      .catch(error => {
        console.error('Data Error', error);
      });
  }, []);

  return (
    <Container className="character-list">
      <SearchForm />
      {newCharacter.map((character, id) => {
        return <CharacterCard key={id} character={character} />;
      })}
    </Container>
  );
}

export default CharacterList; 