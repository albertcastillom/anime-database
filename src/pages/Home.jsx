import { Link } from "react-router-dom";

function Home() {
  return (
    <main className="home-page">
      <h1 className="home-page__title">Anime Database</h1>
      <p className="home-page__intro">
        Search for anime and learn more about your favorite shows.
      </p>

      <Link className="home-page__link" to="/anime">Search anime</Link>
    </main>
  );
}

export default Home;
