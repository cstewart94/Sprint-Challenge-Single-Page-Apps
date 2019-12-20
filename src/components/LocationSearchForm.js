import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';

import LocationCard from './LocationCard';
import axios from "axios";

import { Container } from './Style.js';

const LocationSearchForm = (props) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    axios.get('https://rickandmortyapi.com/api/location/')
      .then(response => {
        console.log(response.data.results);
        const locations = response.data.results;
        const locationSearchResults = locations.filter(location => {
          return location.name.toLowerCase().includes(searchTerm.toLowerCase());
        })
        setSearchResults(locationSearchResults);
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
          searchResults.map((location) => (

            <LocationCard location={location} />

          ))
        }
      </Container>
    </section>
  )

}


export default LocationSearchForm;