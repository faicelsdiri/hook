import "./App.css";
import { Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import MovieCard from "./Component/MovieCard";
import MoviesArray from "./Component/MoviesArray";

import ReactStars from "react-stars";

import useMoviefilter from "./Component/useMoviefilter";
import MovieModal from "./Component/MovieModal";
import { useState } from "react";

function App() {
  const { filteredMovies, setFilter, setfiletrating ,setMovies} =
    useMoviefilter(MoviesArray);
 

  const handleFilterChange = (e) => {
    setFilter(e.target.value);
  };

  const ratingChanged = (movierating) => {
    setfiletrating(movierating);
  };

  const addHandler = (newMovie) => {
    console.log(newMovie);
    setMovies([...filteredMovies, newMovie]);
    console.log(filteredMovies)
  };

  return (
    <div className="App">
      <Form.Group className="mb-3">
        <Form.Label style={{ color: "azure", textAlign: "center" }}>
          <b> Filter :</b>
        </Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter name"
          onChange={handleFilterChange}
        />
      </Form.Group>
      <ReactStars
        count={5}
        size={60}
        color2={"#ffd700"}
        onChange={ratingChanged}
      />

      <div
        style={{ display: "flex", justifyContent: "center", flexWrap: "wrap" }}
      >
        {filteredMovies.map((movie, key) => (
          <MovieCard {...movie} key={key} />
        ))}
      </div>
      <MovieModal addHandler={addHandler} />
    </div>
  );
}

export default App;
