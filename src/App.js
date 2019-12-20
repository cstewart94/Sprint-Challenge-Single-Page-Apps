import React from "react";
import { Route } from 'react-router-dom';

import Header from "./components/Header.js";
import WelcomePage from './components/WelcomePage';
import CharacterList from './components/CharacterList.js';
import LocationsList from './components/LocationsList.js';


const App = () => {
  return (
    <main>
      <Header />
      {/* <SearchForm /> */}
      <Route exact path='/Home' component={WelcomePage} />
      <Route exact path='/Characters' component={CharacterList} />
      <Route exact path='/Locations' component={LocationsList} />
    </main>
  );
}

export default App;