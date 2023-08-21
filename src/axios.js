import axios from "axios";

/**base url to make a request to the movies database */
// axios.create - used to create new instances of axios
// reusable for multiple requests
const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3",
});

export default instance;
