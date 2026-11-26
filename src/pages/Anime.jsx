import {useEffect, useState} from "react";
import ResultCard from "../components/ResultCard.jsx";

function Anime() {

  const [searchInput, setSearchInput] = useState(""); 
  const [searchTerm, setSearchTerm] = useState("");
  const [animeResults, setAnimeResults] = useState([]);

  useEffect(() => {
    if (!searchTerm) return;

    fetch(`https://kitsu.io/api/edge/anime?filter[text]=${encodeURIComponent(searchTerm)}`)
      .then((response) => response.json())
      .then((result) => setAnimeResults(result.data));
  }, [searchTerm]);

  function handleSubmit(event) {
    event.preventDefault();
    
    const trimmedInput = searchInput.trim();
    if(!trimmedInput) {
      return;
    }
    setSearchTerm(trimmedInput);
  }

  return (
    <main className="anime-page">
      <h1 className="anime-page__title">Anime Search</h1>

      <form className="search-form" onSubmit={handleSubmit}>
        <label className="search-form__label" htmlFor="anime-search">
          Search for anime:
        </label>
        <input
          className="search-form__input"
          type="text"
          id="anime-search"
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
        />
        <button className="search-form__button" type="submit">Search</button>
      </form>
      {searchTerm && (
        <p className="search-message">Searching for: {searchTerm}</p>
      )}

      <section className="results-grid">
        {animeResults.map((anime) => (
          <ResultCard key={anime.id} anime={anime} />
        ))}
      </section>
    </main>
  );
}

export default Anime;
