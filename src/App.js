import React from "react";
import { Route } from 'react-router-dom';

import Header from "./components/Header.js";
import WelcomePage from './components/WelcomePage';
import CharacterList from './components/CharacterList.js';
import SearchForm from './components/SearchForm.js';


const App = () => {
  return (
    <main>
      <Header />
      <SearchForm />
      <Route exact path='/' component={WelcomePage} />
      <Route exact path='/Characters' component={CharacterList} />
    </main>
  );
}

export default App;