import "./Header.css"
import pokeballIcon from "../../assets/Poké_Ball_icon.svg"

export default function Header() {
  return (
    <header>
      <img src={pokeballIcon} />
      <h1>PokeDesk</h1>
      <img src={pokeballIcon} />
    </header>
  )
}
