import { Link } from "react-router-dom";

function ResultCard({ anime }) {
  const { canonicalTitle, posterImage } = anime.attributes;

  return (
    <article className="result-card">
      <Link className="result-card__link" to={`/anime/${anime.id}`}>
        <img
          className="result-card__image"
          src={posterImage?.medium}
          alt={`${canonicalTitle} poster`}
        />

        <h2 className="result-card__title">{canonicalTitle}</h2>
      </Link>
    </article>
  );
}

export default ResultCard;
