import React from "react";
import { getAllMovieService } from "@/services/movie.service";
import CardComponent from "./CardComponent";

const AllMoviesComponent = async () => {
  const getAllMovies = await getAllMovieService();
  //console.log("get all movies: ", getAllMovies);
  return (
    <div className="px-16">
      <h1 className="font-bold text-xl pt-12 pb-3 text-white">
        All Movies &gt;
      </h1>
      <CardComponent dataMovies={getAllMovies} />
    </div>
  );
};

export default AllMoviesComponent;
