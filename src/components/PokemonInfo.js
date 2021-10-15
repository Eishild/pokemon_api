import React from "react"
import { useSelector } from "react-redux"
import { useParams } from "react-router-dom"

export default function PokemonInfo() {
  const { id } = useParams()
  const pokemon = useSelector((state) => state[id - 1])

  if (!pokemon) return <div>Not Found</div>

  return (
    <div id="info">
      <p>{pokemon.name}</p>
      <img src={pokemon.sprites.front_default}></img>
    </div>
  )
}
