import http from "../pokemonAPI";

const searchForPokemon = (userSearch) => {
  return http.get(`/${userSearch}`);
};
export default { searchForPokemon };
