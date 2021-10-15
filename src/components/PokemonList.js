import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useState } from "react";

const PokemonCard = ({ pokemon }) => {
  console.log(pokemon);
  return (
    <div style={{ width: "200px", border: "1px solid red" }}>
      <p>{pokemon.name}</p>
      <Link to={`/${pokemon.id}`}>Info</Link>
    </div>
  );
};

const PokemonList = () => {
  const pokemons = useSelector((state) => state);
  const [search, setSearch] = useState('')
  let regex = new RegExp(search,'gi');

  const handleChange = ({target: { value }}) => {
    setSearch(value)
  }
  console.log("PokemonLIst", pokemons);
  return (
    <div>
      <input 
        className="input-search" 
        type="text" 
        value={search} 
        onChange={handleChange}
        placeholder="Search pokemon..."
      />
      {pokemons
        .filter(pokemon => regex.test(pokemon.name))
        .map((pokemon) => (
        <PokemonCard key={pokemon.id} pokemon={pokemon} />
      ))}
    </div>
  );
};

export default PokemonList;
