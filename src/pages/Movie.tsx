import { Article, ChartLineUp, Clock, Wallet } from "phosphor-react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import MovieCard from "../components/MovieCard";
import generateURL from "../constants";
import { IMovie } from "../interfaces/movie";

import "../styles/Movie.css";

const Movie = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState<IMovie>();

  const getMovie = async () => {
    const url = generateURL(1, "", id);
    const res = await fetch(url);
    const data = await res.json();

    if (!data) return;

    setMovie(data);
  };

  const formatCurrency = (number: number) => {
    return number.toLocaleString("pt-BR", {
      style: "currency",
      currency: "USD",
    });
  };

  useEffect(() => {
    getMovie();
  }, []);

  return (
    <div className="movie-page">
      {movie && (
        <>
          <MovieCard movie={movie} buttonVisibled={false} />
          <p className="tagline">{movie?.tagline}</p>
          <div className="info">
            <h3>
              <Wallet size={32} /> Orçamento:
            </h3>
            <p>{formatCurrency(movie?.budget)}</p>
          </div>
          <div className="info">
            <h3>
              <ChartLineUp size={32} />
              Receita:
            </h3>
            <p>{formatCurrency(movie?.revenue)}</p>
          </div>
          <div className="info">
            <h3>
              <Clock size={32} /> Duração:
            </h3>
            <p>{movie?.runtime} minutos</p>
          </div>
          <div className="info description">
            <h3>
              <Article size={32} /> Descrição:
            </h3>
            <p>{movie?.overview}</p>
          </div>
        </>
      )}
    </div>
  );
};

export default Movie;
