import Link from "next/link";
import React from "react";

const CardComponent = async ({ dataMovies }) => {
  return (
    <div className="flex gap-x-4 overflow-hidden overflow-x-scroll no-scrollbar">
      {dataMovies.map((data) => (
        <div key={data.movie_id}>
          <div className="w-[300px]">
            <Link
              className=" max-w-lg p-3 bg-white  rounded-lg hover:shadow-xl hover:shadow-indigo-50 flex flex-col items-center"
              href={`/view-movie-details/${data.movie_id}`}
            >
              <div>
                <img
                  src={
                    data.image == ""
                      ? "../images/default-image.avif"
                      : data.image
                  }
                  className="shadow rounded-md  overflow-hidden border"
                />
              </div>

              <div className="pt-2 px-2">
                <h4 className="font-bold text-xl line-clamp-1">
                  {data.movie_title}
                </h4>
                <p className="mt-2 text-gray-600 line-clamp-2">
                  {data.description}
                </p>
              </div>
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CardComponent;
