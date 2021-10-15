import React from "react"
import { Link } from "react-router-dom"
import { useSelector } from "react-redux"

const colours = {
  normal: "#A8A77A",
  fire: "#EE8130",
  water: "#6390F0",
  electric: "#F7D02C",
  grass: "#7AC74C",
  ice: "#96D9D6",
  fighting: "#C22E28",
  poison: "#A33EA1",
  ground: "#E2BF65",
  flying: "#A98FF3",
  psychic: "#F95587",
  bug: "#A6B91A",
  rock: "#B6A136",
  ghost: "#735797",
  dragon: "#6F35FC",
  dark: "#705746",
  steel: "#B7B7CE",
  fairy: "#D685AD",
}

const PokemonCard = ({ pokemon }) => {
  console.log(pokemon)
  console.log(colours[pokemon.types[0].type.name])

  const color = colours[pokemon.types[0].type.name]
  return (
    <div>
      <Link
        to={`/${pokemon.id}`}
        className="card"
        style={{ background: color }}
      >
        <p>{pokemon.id}</p>
        <img src={pokemon.sprites.front_default} alt={pokemon.name} />
        <p>{pokemon.name}</p>
      </Link>
    </div>
  )
}

const PokemonList = () => {
  const pokemons = useSelector((state) => state)
  console.log("PokemonLIst", pokemons)
  return (
    <div className="cards">
      {pokemons.map((pokemon) => (
        <PokemonCard key={pokemon.id} pokemon={pokemon} />
      ))}
    </div>
  )
}

export default PokemonList
