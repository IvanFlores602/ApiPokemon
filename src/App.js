import React from 'react';
import './App.css'
import { Link, Outlet } from "react-router-dom";

function App() {
  return (
    <>
      <nav
        style={{
          borderBottom: "solid 1px",
          paddingBottom: "1rem",
        }}
      > <div className='navbarLink'>
        <Link to="/pokemones">Pokemones</Link>|{" "}
        <Link to="/pokemonId">Buscar Pokemones</Link> |{" "}
        <Link to="/matricula">Alumno</Link>
      </div>
      </nav>
      <Outlet />
    </>
  );
}

export default App;
