import { Star } from "phosphor-react";
import { Link } from "react-router-dom";
import { URL_MOVIE_DB } from "../constants";
import { Movie } from "../interfaces/movie";

import "../styles/MovieCard.css";

interface MovieCardProps {
  movie: Movie;
  buttonVisibled?: boolean;
}

function MovieCard({ movie, buttonVisibled = true }: MovieCardProps) {
  const imagesURL = URL_MOVIE_DB.IMG;
  return (
    <div className="movie-card-container">
      <img src={imagesURL + movie.poster_path} alt={movie.title} />
      <h2>{movie.title}</h2>
      <p>
        <Star size={22} color={"yellow"} /> {movie.vote_average}
      </p>
      {buttonVisibled && <Link to={`/movie/${movie.id}`}>Detalhes</Link>}
    </div>
  );
}

export default MovieCard;
