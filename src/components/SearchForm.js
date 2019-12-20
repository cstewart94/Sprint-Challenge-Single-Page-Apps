import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';

import CharacterCard from './CharacterCard';
import axios from "axios";

import { Container } from './Style.js';

const SearchForm = (props) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    axios.get('https://rickandmortyapi.com/api/character/')
      .then(response => {
        console.log(response.data.results);
        const characters = response.data.results;
        const charSearchResults = characters.filter(character => {
          return character.name.toLowerCase().includes(searchTerm.toLowerCase());
        })
        setSearchResults(charSearchResults);
      })
      .catch(error => {
        console.log('Search Error', error);
      })
  }, [searchTerm]);

  const searchChange = event => {
    setSearchTerm(event.target.value);
    console.log(setSearchResults);
  }

  // let searchResult = '';
  // var submit = event => {
  //   return (searchResult = event.target.value)
  // }

  return (
    <section>
      <form>
        <input className='search-from'
          id='name'
          type='text'
          placeholder='Search...'
          value={searchTerm}
          onChange={searchChange} />
      </form>
      <Container>
        {
          searchResults.map((character) => (

            <CharacterCard character={character} />

          ))
        }
      </Container>
    </section>
  )

}


export default SearchForm;