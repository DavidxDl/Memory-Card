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
  const [score, setScore] = useState(0);
  const [highscore, setHighscore] = useState(0);
  const [gameOver, setGameOver] = useState(false);

  useEffect(() => {
    async function getPokemon() {
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/?limit=10&offset=${Math.floor(Math.random() * 100)}`);
      const data = await response.json();
      setPokemons(data.results);
    }
    getPokemon();
  }, [clickedPokemons])

  function handleStart() {
    setTimeout(() => {
      setHasStarted(true)
      setScore(0);
      setGameOver(false)
    }, 500);
  }

  function handleCardClick(pokemonName: string) {
    if (clickedPokemons.includes(pokemonName)) {
      setHasStarted(false);
      setClickedPokemons([]);
      setGameOver(true);
    } else {
      setClickedPokemons(clickedPokemons => [...clickedPokemons, pokemonName]);
      setScore(score => score + 1)
      if (score > highscore) setHighscore(score);
    }

  }

  if (!hasStarted) {
    return (
      <>
        <h2 style={{ textAlign: "center", color: "blue" }}>{gameOver && `Your Score Was: ${score}`}</h2>
        <h3 style={{ textAlign: "center", color: "blue" }}>{`highscore: ${highscore}`}</h3>
        <div className="game">
          <button className="startBtn" onClick={handleStart}>{gameOver ? "Play Again" : "Start Game"}</button>
        </div>
      </>
    )
  }

  return (
    <>
      <h2 style={{ textAlign: "center", color: "blue" }}>{`Score: ${score}`}</h2>
      <div className="game">
        {pokemons.map(pokemon => <PokemonCard
          key={crypto.randomUUID()}
          name={pokemon.name}
          imgURL={pokemon.url}
          onClick={handleCardClick}
        />)}

      </div>
    </>
  )

}
