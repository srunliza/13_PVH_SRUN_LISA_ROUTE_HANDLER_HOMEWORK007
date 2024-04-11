import React from 'react'
import CardComponent from './CardComponent';
import { getAllMovieService, getMovieByGenreService } from '@/services/movie.service';

const ActionMovieComponent = async () => {
  const genre = "Action"
  const getActionMovie = await getAllMovieService(genre);
  // console.log("action movie:", getActionMovie);
  return (
    <div className="px-16">
    <h1 className="font-bold text-xl pt-12 pb-3 text-white">Action Movie &gt;</h1>

    <CardComponent dataMovies={getActionMovie} />
  </div>
  )
}

export default ActionMovieComponent