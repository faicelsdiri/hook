import { useState } from "react";
import MoviesArray from "./MoviesArray";

function useMoviefilter(movies) {
  const [movie, setMovies] = useState(MoviesArray);
  const [filter, setFilter] = useState("");
  const [filterranting ,setfiletrating]=useState("");

  const filteredMovies = movies.filter((movie) => {
    return (
       movie.name.toLowerCase().includes(filter.toLowerCase()) &&
       movie.rating >= filterranting
    );
  });
  return { filteredMovies, setFilter,setfiletrating ,setMovies };
}
// movie.rating==filter ||
export default useMoviefilter;
