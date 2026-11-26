import { Link } from "react-router-dom";

function Home() {
  return (
    <main className="home-page">
      <h1 className="home-page-title">Anime Database</h1>
      <p className="home-page-intro">
        Search for anime and learn more about your favorite series. <br/>
        A react app that searches for animes using the Kitsu REST API 
      </p>

      <Link className="home-page-link" to="/anime">Search anime</Link>
    </main>
  );
}

export default Home;
