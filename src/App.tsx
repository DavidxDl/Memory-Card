import { useEffect } from "react"
import "./App.css"

export default function App() {
  useEffect(() => {
    async function getPokemon() {
      const response = await fetch("https://pokeapi.co/api/v2/pokemon/ditto");
      const data = await response.json();
      console.log(data);

    }
    getPokemon();
  }, [])
  return (
    <div>
      <h1>Hello!</h1>
    </div>
  )
}
