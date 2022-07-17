const API_KEY = import.meta.env.VITE_API_KEY;

interface URL_Type {
  type: "now_playing" | "popular" | "top_rated" | "upcoming";
}

export const URL_MOVIE_DB = {
  API: `https://api.themoviedb.org/3/movie/`,
  SEARCH: `https://api.themoviedb.org/3/search/movie/`,
  IMG: `https://image.tmdb.org/t/p/w500/`,
};

const generateURL = (
  page: number = 1,
  type?: string,
  id?: any,
  isSearch: boolean = false
) => {
  if (isSearch) {
    return URL_MOVIE_DB.SEARCH + "?" + API_KEY + "&language=pt-BR&page=" + page;
  }

  if (id) {
    return URL_MOVIE_DB.API + id + "?" + API_KEY + "&language=pt-BR";
  }

  const type_url = type || "top_rated";

  return (
    URL_MOVIE_DB.API + type_url + "?" + API_KEY + "&language=pt-BR&page=" + page
  );
};

export default generateURL;
