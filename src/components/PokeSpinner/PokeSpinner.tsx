import pokeball from "../../assets/Poké_Ball_icon.svg"
import "./PokeSpinner.css"

interface props {
  size?: string;
}
export default function PokeSpinner({ size }: props) {
  return (
    <img
      className="spinner"
      src={pokeball}
      alt="loading..."
      style={{ width: size }}
    />
  )
}
