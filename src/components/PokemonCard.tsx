import { useEffect, useState } from "react";

interface props {
  imgURL: string;
  name: string;
  onClick: (name: string) => void;
}
export default function PokemonCard({ name, imgURL, onClick }: props) {
  const [img, setImg] = useState("");
  useEffect(() => {
    async function getImg() {
      const res = await fetch(imgURL);
      const data = await res.json();
      setImg(data.sprites.other["official-artwork"].front_default)
    }
    getImg();
  }, [imgURL])
  return (
    <div className="card" onClick={() => onClick(name)}>
      <img src={img} />
      <div>
        <h3>{name}</h3>
      </div>
    </div>
  )
}

