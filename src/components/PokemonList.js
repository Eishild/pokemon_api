import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

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
  console.log("PokemonLIst", pokemons);
  return (
    <div>
      {pokemons.map((pokemon) => (
        <PokemonCard key={pokemon.id} pokemon={pokemon} />
      ))}
    </div>
  );
};

export default PokemonList;
