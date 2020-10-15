import React, { useEffect, useState } from "react";
import axios from "./axios";
import "./Row.css";

const base_url = "https://image.tmdb.org/t/p/original/";

function Row({ title, fetchUrl, isLargeRow }) {
  const [movies, setMovies] = useState([]);

  // A snippet of code that runs on a specific condition
  useEffect(() => {
    // We want to pull the info from tmdb when (like poster etc)
    // if [] run once when the row loads, and dont run again
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      // thi is  the same as get the link below when Rows calls fetchNetflixOriginals:
      //https://api.themoviedb.org/3/discover/tv?api_key=${API_KEY}$with_networks=213
      //console.log(request.data.results);
      setMovies(request.data.results);
      return request;
    }
    fetchData();
  }, [fetchUrl]); //you have to always include the variable here if you want Useeffect to use it, if it comes outside the block. (function Row({ title, fetchUrl })

  console.log(movies);
  return (
    <div className="row">
      <h2>{title}</h2>
      <div className="row__posters">
        {/*containert -> bunch of posters*/}

        {movies.map((movie) => (
          <img
            key={movie.id} //optimise to only refresh the unique poster, not the entire row
            //AMAZIN WAY TO DO
            // normaly className=row__poster but the line below is a string contatination {``} says that we make a row__poster
            // BUT if it isLargeRow make another className "row__posterLarge"
            className={`row__poster ${isLargeRow && "row__posterLarge"}`}
            src={`${base_url}${
              isLargeRow ? movie.poster_path : movie.backdrop_path
            }`}
            alt={movie.name}
          />
        ))}
      </div>
    </div>
  );
}

export default Row;