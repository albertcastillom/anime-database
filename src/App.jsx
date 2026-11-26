import './App.css'
import Home from "./pages/Home.jsx";
import Anime from "./pages/Anime.jsx";
import AnimeDetails from "./pages/AnimeDetails.jsx";
import { Routes, Route } from "react-router-dom";

function App() {
  
  return (
     <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/anime" element={<Anime />} />
        <Route path="/anime/:id" element={<AnimeDetails />} />
     </Routes>
  )
}

export default App
