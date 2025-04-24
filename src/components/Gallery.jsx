import { Link } from "react-router-dom";

export function Gallery({ link, image, alt }) {
  return (
    <ul className="machines-list">
      <li>
        <Link to={link} className="relative block w-[282px] h-[316px]  rounded-xl overflow-hidden" target="_blank">
          <div className="absolute inset-0 flex justify-center items-center rounded-xl opacity-0 text-white hover:bg-zinc-950 hover:opacity-60 transition-opacity">
            <p>더 자세히 보기</p>
          </div>
          <img src={image} alt={alt} loading="lazy" className="w-full h-full bg-white rounded-xl object-cover hover:blur-lg transition" />
        </Link>
      </li>
    </ul>
  );
}
