import { useEffect, useState } from "react"
import "./Game.css"
import PokemonCard from "../PokemonCard";

interface pokemon {
  name: string;
  url: string;
}

export default function Game() {
  const [hasStarted, setHasStarted] = useState(false);
  const [pokemons, setPokemons] = useState<pokemon[]>([]);
  const [clickedPokemons, setClickedPokemons] = useState<Array<string>>([]);

  useEffect(() => {
    async function getPokemon() {
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/?limit=10&offset=${Math.floor(Math.random() * 100)}`);
      const data = await response.json();
      console.log(data);
      setPokemons(data.results);
    }
    getPokemon();
  }, [clickedPokemons])

  function handleStart() {
    setTimeout(() => setHasStarted(true), 500);
  }

  function handleCardClick(pokemonName: string) {
    if (clickedPokemons.includes(pokemonName)) {
      setHasStarted(false);
      setClickedPokemons([]);
    }
    setClickedPokemons([...clickedPokemons, pokemonName]);

  }

  if (!hasStarted) {
    return (
      <div className="game">
        <button className="startBtn" onClick={handleStart}>Start Game</button>
      </div>
    )
  }

  return (
    <div className="game">
      {pokemons.map(pokemon => <PokemonCard
        key={crypto.randomUUID()}
        name={pokemon.name}
        imgURL={pokemon.url}
        onClick={handleCardClick}
      />)}

    </div>
  )

}
