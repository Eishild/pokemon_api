import "./App.css"
import axios from "axios"
import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { Switch, Route } from "react-router-dom"
import "./styles/cards.css"
import "./styles/info.css"

import PokemonInfo from "./components/PokemonInfo"
import PokemonList from "./components/PokemonList"

function App() {
  const dispatch = useDispatch()

  useEffect(() => {
    const fetchPokemon = async () => {
      const responce = await axios.get("https://pokeapi.co/api/v2/pokemon/")
      let pokemons = responce.data.results

      for (let i = 0; i < pokemons.length; i++) {
        const responce = await axios.get(pokemons[i].url)
        pokemons[i] = responce.data
      }
      dispatch({ type: "SET_POKEMONS", data: pokemons })
    }
    fetchPokemon()
  }, [])

  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={PokemonList} />
        <Route exact path="/:id" component={PokemonInfo} />
      </Switch>
    </div>
  )
}

export default App
