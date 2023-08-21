// # do not ever keep api key like this in production

const requests = {
  fetchTrending: `/trending/all/day?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`,
  fetchTopRated: `/movie/top_rated?api_key=${process.env.REACT_APP_PI_KEY}&language=en-US`,
  fetchNetflixOriginals: `discover/tv?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&with_networks=213`,
  fetchComedy: `/discover/movie?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&with_genres=35`,
  fetchThriller: `/discover/movie?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&with_genres=53`,
  fetchDrama: `/discover/movie?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&with_genres=18`,
  fetchHorror: `/discover/movie?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&with_genres=27`,
  fetchAnimation: `/discover/movie?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&with_genres=16`,
};

export default requests;
