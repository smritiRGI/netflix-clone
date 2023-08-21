import Row from "./Row";
import React from "react";
import "./App.css";
import requests from "./requests";
import Banner from "./Banner";
import Nav from "./Nav";

const App: React.FC = () => {
  return (
    <div className="app">
      <Nav />
      <Banner />
      <Row
        title="NETFLIX ORIGINALS"
        fetchURL={requests.fetchNetflixOriginals}
        isLargeRow
      />
      <Row title="Trending NOW" fetchURL={requests.fetchTrending} />
      <Row title="Horror Movies" fetchURL={requests.fetchHorror} />
      <Row title="Drama Movies" fetchURL={requests.fetchDrama} />
      <Row title="Comedy Movies" fetchURL={requests.fetchComedy} />
      <Row title="Animation Movies" fetchURL={requests.fetchAnimation} />
      <Row title="Thriller Movies" fetchURL={requests.fetchThriller} />
    </div>
  );
};

export default App;
