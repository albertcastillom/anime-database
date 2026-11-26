import { Link, useParams } from "react-router-dom";

function AnimeDetails() {
  const { id } = useParams();

  return (
    <main className="anime-details-page">
      <Link className="anime-details-page__back-link" to="/anime">
        Back to search
      </Link>

      <h1 className="anime-details-page__title">Anime Details</h1>
      <p className="anime-details-page__id">Anime ID: {id}</p>

      {/* Fetch this individual anime using the ID. */}
    </main>
  );
}

export default AnimeDetails;
