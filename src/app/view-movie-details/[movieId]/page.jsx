// "use client";
import MovieRatingComponent from "@/components/MovieRatingComponent";
import { getMovieByIdService } from "@/services/movie.service";
import moment from "moment";
import React from "react";

const MovieDetail = async ({ params }) => {
  console.log("Movie id: ", params.movieId);
  const movieData = await getMovieByIdService(params.movieId);
  const data = movieData.payload;
  console.log("movie data by id:", data.movie_title);
  const dateTimeString = data.posted_at;
  const formattedDateTime = moment(dateTimeString).format(
    "MMM-DD-YYYY, H:mm:ss A"
  );

  return (
    <div>
      <div className="pt-44 text-white h-screen">
        <div className="flex justify-center  gap-x-7">
          <div className="w-[59%] ">
            <img
              className="w-full rounded-lg shadow-lg object-cover"
              src={ data.image == ""
              ? "../images/default-image.avif"
              : data.image}
              alt="Product Image"
            />
          </div>

          <div className="w-[20%]">
            <h2 className="text-2xl font-bold mb-2">{data.director}</h2>
            <p className=" text-sm mb-1">{data.runtime} minutes</p>
            <p className="mt-1 italic font-semibold ">{data.genre}</p>

            <MovieRatingComponent initialRating={data.rating} />

            <div className="mt-12">
              <span className="font-bold text-xl">
                {data.movie_title} ( {data.released_year} )
              </span>
              <p className="text-left dark:text-gray-300 text-sm mt-2">
                {data.description}
              </p>
              <p className=" mt-16 text-justify text-sm ">
                {formattedDateTime}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetail;
