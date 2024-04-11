import React from "react";
import CardComponent from "./CardComponent";
import { getAllMovieService, getMovieByGenreService } from "@/services/movie.service";

const DramaMovieComponent = async () => {
  const genre = "Drama"
  const getDramaMovie = await getAllMovieService(genre);
  // console.log("Movei type of Drama: ", getDramaMovie);
  return (
    <div className="mx-16">
      <h1 className="font-bold text-xl
       pt-12 pb-3 text-white">Drama Movie &gt;</h1>
      <CardComponent dataMovies={getDramaMovie} />
    </div>
  );
};

export default DramaMovieComponent;
