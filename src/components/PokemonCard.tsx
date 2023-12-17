import { useEffect, useState } from "react";
import PokeSpinner from "./PokeSpinner/PokeSpinner";

interface props {
  imgURL: string;
  name: string;
  onClick: (name: string) => void;
}
export default function PokemonCard({ name, imgURL, onClick }: props) {
  const [img, setImg] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function getImg() {
      setLoading(true);
      const res = await fetch(imgURL);
      const data = await res.json();
      setImg(data.sprites.other["official-artwork"].front_default)
      setLoading(false)
    }
    getImg();
  }, [imgURL])

  return (
    <div className="card" onClick={() => onClick(name)}>
      <div style={{ backgroundColor: "black" }}>
        {loading
          ? <PokeSpinner />
          : <img src={img} alt="" />
        }
      </div>
      <div>
        <h3>{name}</h3>
      </div>
    </div>
  )
}

