import React from "react"
import { Link } from "react-router-dom"
import { useSelector } from "react-redux"
import { useState } from "react"

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
  const [search, setSearch] = useState("")
  let regex = new RegExp(search, "gi")

  const handleChange = ({ target: { value } }) => {
    setSearch(value)
  }

  return (
    <div className="main">
      <input
        className="input-search"
        type="text"
        value={search}
        onChange={handleChange}
        placeholder="Search pokemon..."
      />
      <div className="cards">
        {pokemons
          .filter((pokemon) => pokemon.name.match(regex))
          .map((pokemon) => (
            <PokemonCard key={pokemon.id} pokemon={pokemon} />
          ))}
      </div>
    </div>
  )
}

export default PokemonList
