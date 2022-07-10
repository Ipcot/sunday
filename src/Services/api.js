import axios from 'axios';
const API_KEY = 'ed9b8dd4dcf22d9d746c4e21c6321e97';
const API_BASE_URL = 'https://api.themoviedb.org/3';
// export const API_IMG_URL = 'https://image.tmdb.org/t/p/w500';

axios.defaults.baseURL = API_BASE_URL;

export const fetchMovies = async page => {
  const data = await axios.get(
    `/trending/movie/day?page=${page}&api_key=${API_KEY}`
  );
  return data.data.results;
};
