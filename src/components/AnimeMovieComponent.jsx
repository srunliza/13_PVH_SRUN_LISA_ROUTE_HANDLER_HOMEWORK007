import React from "react";
import CardComponent from "./CardComponent";
import { getAllMovieService, getMovieByGenreService } from "@/services/movie.service";

const AnimeMovieComponent = async () => {
  const genre = "Anime"
  const getAnimeMovie = await getAllMovieService(genre);
  // console.log("Get anime movie from servie: ", getAnimeMovie);
  return (
    <div className="px-16">
      <h1 className="font-bold text-xl pt-12 pb-3 text-white">Anime Movie &gt;</h1>
      <CardComponent dataMovies={getAnimeMovie} />
    </div>
  );
};

export default AnimeMovieComponent;
