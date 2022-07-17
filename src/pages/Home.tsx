import { useEffect, useState } from "react";
import MovieCard from "../components/MovieCard";
import generateURL from "../constants";
import { IMovie } from "../interfaces/movie";

// import "../styles/Movies.css";
import "../styles/MoviesGrid.css";

function Home() {
  const [movies, setMovies] = useState<IMovie[]>([]);
  const [page, setPage] = useState(1);

  const getMovies = async () => {
    const topRatedUrl = generateURL(page, "", null);
    const res = await fetch(topRatedUrl);
    const data = await res.json();

    if (!data.results) return;

    setMovies([...movies, ...data.results]);
  };

  const seeMore = () => {
    setPage((prev) => prev + 1);
  };

  useEffect(() => {
    getMovies();
  }, [page]);

  return (
    <div className="container">
      <h2 className="title">Melhores filmes</h2>
      <div className="movies-container">
        {movies &&
          movies.map((movie: IMovie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
      </div>
      <div className="see-more">
        <button onClick={seeMore}>Ver mais</button>
      </div>
    </div>
  );
}

export default Home;
