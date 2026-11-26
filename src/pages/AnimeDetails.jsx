import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

function AnimeDetails() {
  const { id } = useParams();
  const [anime, setAnime] = useState(null);

  useEffect(() => {
    fetch(`https://kitsu.io/api/edge/anime/${id}`)
      .then((response) => response.json())
      .then((result) => setAnime(result.data));
  }, [id]);

  if (!anime) {
    return <p className="loading-message">Loading...</p>;
  }

  const {
    canonicalTitle,
    synopsis,
    posterImage,
    averageRating,
    episodeCount,
    status,
  } = anime.attributes;

  return (
    <main className="anime-details-page">
      <Link className="anime-details-back-link" to="/anime">
        Back to search
      </Link>

      <img
        className="anime-details-image"
        src={posterImage?.large}
        alt={`${canonicalTitle} poster`}
      />

      <section className="anime-details-content">
        <h1 className="anime-details-title">{canonicalTitle}</h1>

        <p className="anime-details-synopsis">{synopsis}</p>

        <p className="anime-details-episodes">
          Episodes: {episodeCount || "Unknown"}
        </p>
        <p className="anime-details-rating">
          Rating: {averageRating || "Not rated"}
        </p>
        <p className="anime-details-status">Status: {status}</p>
      </section>

    </main>
  );
}

export default AnimeDetails;
