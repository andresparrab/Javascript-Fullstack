import axios from "axios";

/**base  url to make request to the movie database */
const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3",
});

export default instance;

/** this will make an instance of with the default base url and with our requestfor example
 *  instace.get('/foo-bar') will send the request https://api.themoviedb.org/3/foo-bar/
 */
