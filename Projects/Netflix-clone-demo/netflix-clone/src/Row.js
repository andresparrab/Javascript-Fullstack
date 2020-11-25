import React, { useEffect, useState } from "react";
import axios from "./axios";
import "./Row.css";
import YouTube from "react-youtube";
import movieTrailer from "movie-trailer";
const base_url = "https://image.tmdb.org/t/p/original/";

function Row({ title, fetchUrl, isLargeRow }) {
  const [movies, setMovies] = useState([]);
  const [trailerUrl, setTrailerUrl] = useState("");

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

  const opts = {
    height: "390",
    width: "100%",
    playerVars: {
      autoplay: 1,
    },
  };

  const handleClick = (movie) => {
    console.log("this is the selected movie--->>>>", movie)
    const searchMovie = `${movie?.name} --year ${movie.first_air_date.substring(0,4)}`;
    console.log("this is the selected searchmovie--->>>>", searchMovie)
    if (trailerUrl) {  // is the video trailer is open then close it
      setTrailerUrl("");
    } else {
      movieTrailer(movie?.title || movie?.name || movie?.original_name || "")
        .then((url) => {
          // https://www.youtube.com/watch?v=2Q8VIPJAox8
          const urlParams = new URLSearchParams(new URL(url).search);
          console.log("this is the URL VARIABLE--->>>>", url)
          setTrailerUrl(urlParams.get("v"));
        })
        .catch((error) => console.log(error));
    }
  };

  console.log(movies);
  return (
    <div className="row">
      <h2>{title}</h2>
      <div className="row__posters">
        {/*containert -> bunch of posters*/}

        {movies.map((movie) => (
          <img
            key={movie.id} //optimise to only refresh the unique poster, not the entire row
            onClick={() => handleClick(movie)} //AMAZIN WAY TO DO
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
      {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
    </div>
  );
}

export default Row;
