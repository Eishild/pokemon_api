import React from "react"
import { useSelector } from "react-redux"
import { useParams } from "react-router-dom"

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

export default function PolemonInfo() {
  const { id } = useParams()
  const pokemon = useSelector((state) => state[id - 1])
  if (!pokemon)
    return (
      <div>
        <p>Not Found</p>
      </div>
    )
  const color = colours[pokemon.types[0].type.name]

  const types = pokemon.types.map(({ type }) => type.name).join(" - ")
  return (
    <div id="info">
      <div className="bg" style={{ background: color }}>
        <h1>{pokemon.name}</h1>

        <img
          src={pokemon.sprites.other["official-artwork"].front_default}
        ></img>
      </div>
      <div className="statistics" style={{ color: color }}>
        <h3>Statistics</h3>
        <h3>
          Health : {pokemon.stats[0].base_stat}
          {pokemon.stats[0].stat.name}
        </h3>
        <h3> Weight : {pokemon.weight}</h3>
        <h3>Abilities :</h3>
        <ul>
          {pokemon.abilities.map(({ ability }) => (
            <li>{ability.name}</li>
          ))}
        </ul>
        <h3>Types : {types}</h3>

        <h3>Versions :</h3>
        <ul>
          {pokemon.game_indices.map(({ version }) => (
            <li>{version.name}</li>
          ))}
        </ul>
      </div>
    </div>
  )
}
