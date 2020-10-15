import React from "react";
import "./App.css";
import Row from "./Row";
import requests from "./requests";
import Banner from "./Banner";
import "./Banner.css";

function App() {
  return (
    <div className="App">
      <Banner />

      <Row
        title="NETFILX ORIGINALS"
        fetchUrl={requests.fetchNetflixOriginals}
        isLargeRow // to only write isLargeRow it defaults to isLargeRow = {True}
      />
      <Row title="Trending Now" fetchUrl={requests.fetchTrending} />
      <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
      <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
      <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
      <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
      <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} />
      <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries} />
      <h1>Project netflix-clon by Andres Parra</h1>
    </div>
  );
}

export default App;
