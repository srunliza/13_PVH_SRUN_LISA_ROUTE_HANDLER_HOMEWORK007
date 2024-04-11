import React from "react";
import CardComponent from "./CardComponent";
import { getAllMovieService, getMovieByGenreService } from "@/services/movie.service";

const HollywoodMovieComponent = async () => {
  const genre = "Hollywood"
  const getHollywoodMovie = await getAllMovieService(genre);
  // console.log("Movie type of Hollywood from service : ", getHollywoodMovie);
  return (
    <div className="mx-16">
      <h1 className="font-bold text-xl pt-12 pb-3 text-white">
        Hollywood Movie &gt;
      </h1>
      <CardComponent dataMovies={getHollywoodMovie} />
    </div>
  );
};

export default HollywoodMovieComponent;
