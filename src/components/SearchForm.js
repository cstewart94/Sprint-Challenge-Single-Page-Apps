import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';

import CharacterCard from './CharacterCard';
import axios from "axios";

const SearchForm = (props) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState();

  useEffect(() => {
    axios.get('https://rickandmortyapi.com/api/character/')
      .then(response => {
        console.log(response.data.results);
        const characters = response.data.results;
        const charSearchResults = characters.filter(character => {
          return character.name.toLowerCase().includes(searchResults.toLowerCase());
        })
        setSearchTerm(charSearchResults);
      })
      .catch(error => {
        console.log('Search Error', error);
      })
  }, [searchResults]);

  const searchChange = event => {
    setSearchResults(event.target.value);
    console.log(setSearchResults);
  }

  let searchResult = '';
  var submit = event => {
    return (searchResult = event.target.value)
  }

  return (
    <section>
      <form onSubmit={event => submit(event)}>
        <input className='search-from'
          id='name'
          type='text'
          placeholder='Search...'
          value={searchResults}
          onChange={event => searchChange(event)} />
      </form>
      {
        searchTerm.localeCompare((character, index) => {
          return (
            <CharacterCard key={index} char={character} />
          )
        })
      }
    </section>
  )

}


export default SearchForm;