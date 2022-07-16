const API_KEY = import.meta.env.VITE_API_KEY;

interface URL_Type {
  type: "now_playing" | "popular" | "top_rated" | "upcoming";
}

export const URL_MOVIE_DB = {
  API: `https://api.themoviedb.org/3/movie/`,
  SEARCH: `https://api.themoviedb.org/3/search/movie/`,
  IMG: `https://image.tmdb.org/t/p/w500/`,
};

const generateURL = (type: any = "top_rated") => {
  return URL_MOVIE_DB.API + type + "?" + API_KEY + "&language=pt-BR";
};

export default generateURL;
