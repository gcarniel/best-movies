import { useEffect, useState } from "react";
import MovieCard from "../components/MovieCard";
import generateURL from "../constants";
import { Movie } from "../interfaces/movie";

import "../styles/Movies.css";

function Home() {
  const [movies, setMovies] = useState<Movie[]>([]);

  const getMovies = async () => {
    const topRatedUrl = generateURL();
    const res = await fetch(topRatedUrl);
    const data = await res.json();

    if (!data.results) return;

    setMovies(data.results);
  };

  useEffect(() => {
    getMovies();
  }, []);

  return (
    <div className="container">
      <h1>Os mais avaliados</h1>
      <div className="movies">
        {movies &&
          movies.map((movie: Movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
      </div>
    </div>
  );
}

export default Home;
