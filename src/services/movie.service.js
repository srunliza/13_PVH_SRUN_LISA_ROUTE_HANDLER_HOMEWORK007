
// Get all movies from API
export async function getAllMovieService(genre) {
  const res = await fetch("https://movie-api-get-only-bmc3.vercel.app/api");
  // convert to json object to js object
  const data = await res.json();
  const payload = data.payload;
  // console.log("Get all movie: ", payload);

  if(genre){
    // Get movies by genre
    const filterPayload = payload.filter(movies => movies.genre === genre);
    return filterPayload;
  }
  return payload;
}


// Get movie by id
export async function getMovieByIdService(id) {
  const res = await fetch(
    "https://movie-api-get-only-bmc3.vercel.app/api/" + id);
  const data = await res.json();
  return data;
}
