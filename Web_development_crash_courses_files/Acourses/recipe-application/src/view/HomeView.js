import React, { useState } from "react";
import Axios from "axios";
import PokemonService from "../shared/api/service/pokemonService";

export const HomeView = () => {
  const [data, setData] = useState();
  const [search, setSearch] = useState();

  const fetchDataFromExternalAPI = () => {
    PokemonService.searchForPokemon(search.toLowerCase())
      .then((response) => setData(response.data))
      .catch((error) => console.log(error));
  };

  const displayData = () => {
    if (data) {
      return (
        <div>
          <h3>name: {data.name}</h3>
          <h3>ID: {data.id}</h3>
          <h3>weight: {data.weight}</h3>
          <h3>height: {data.height}</h3>

          <h3>type: {data.types[0].type.name}</h3>
          <h3>
            abilities: {data.abilities.map((item) => `${item.ability.name}, `)}
          </h3>
        </div>
      );
    }
  };

  return (
    <div>
      <span>Searc for pokemon </span>
      <input type="text" onChange={(e) => setSearch(e.target.value)}></input>
      <button onClick={() => fetchDataFromExternalAPI()}>
        Make API CALL :)
      </button>
      {displayData()}
      <button onClick={() => console.log(data)}>ShowState</button>
    </div>
  );
};
