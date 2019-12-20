import React from "react";
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header className="ui centered">
      <h1 className="ui center">Rick &amp; Morty Fan Page</h1>
      <Link to='/Characters'><button>Characters</button></Link>
      <Link to='/Locations'><button>Locations</button></Link>
      <Link to='/Home'><button>Home</button></Link>
    </header>
  );
}
