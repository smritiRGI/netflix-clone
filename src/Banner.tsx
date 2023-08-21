import React, { useState, useEffect } from "react";
import axios from "./axios";
import requests from "./requests";
import "./Banner.css";

interface MovieType {
  backdrop_path: string;
  title?: string;
  name?: string;
  original_name?: string;
  overview?: string;
}

const Banner = () => {
  const [movie, setMovie] = useState<MovieType | null>();

  useEffect(() => {
    // if []  , run only once when the page loads
    // if variable like [movies], it runs once the page loads and evertime the movies changes.
    async function fetchData() {
      // await - wait for the request to respond back.
      try {
        const request = await axios.get(requests.fetchNetflixOriginals);
        if (request.status !== 200)
          throw new Error("Issue fetching movie data from the api");
        setMovie(
          request.data.results[
            Math.floor(Math.random() * request.data.results.length - 1)
          ]
        );
      } catch (e) {
        console.log(e);
      }
    }

    fetchData();
  }, []);

  return (
    <header
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
      }}
    >
      <div className="banner_content">
        <h1>{movie?.title || movie?.name || movie?.original_name}</h1>
        <div className="banner_buttons">
          <button className="banner_button">Play</button>
          <button className="banner_button">My List</button>
        </div>
        <h1 className="banner_description">{movie?.overview}</h1>
      </div>
      <div className="banner_fadebottom" />
    </header>
  );
};

export default Banner;
