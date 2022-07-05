import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes,Route, } from "react-router-dom";
import App from './App';
import AllPokemones from './routes/AllPokemones';
import Buscar from './routes/BuscarPokemonid';
import Matricula from './routes/Matricula';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
      <Route path="pokemones" element={<AllPokemones />} />
      <Route path="pokemonId" element={<Buscar />} />
      <Route path="matricula" element={<Matricula />} />
      </Route>
    </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);