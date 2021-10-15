import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'

const PokemonList = () => {
  const dispatch = useDispatch()
  const allPokemons = useSelector(state => state)
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    const fetchPokemon = async () => {
      const responce = await axios.get(
        "https://pokeapi.co/api/v2/pokemon?limit=10"
      );
      let pokemons = responce.data.results;

      pokemons.forEach(async (pokemon) => {
        const responce = await axios.get(pokemon.url);
        pokemon.data = responce.data;
      });
      dispatch({type: 'SET_POKEMONS', data: pokemons})
    };
    fetchPokemon();
  }, [setPokemons]);
  
  console.log(allPokemons);
  return (
    <div>

      
    </div>
  )
}

export default PokemonList
