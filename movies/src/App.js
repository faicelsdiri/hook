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

  const {movies, setMovies, setTitleFilter, setMinStarsFilter,
  } = useMoviefilter(MoviesArray);

  
 

  const handleTitleChange = (event) => {
    setTitleFilter(event.target.value);
  };

  const handleStarsChange = (newRating) => {
    setMinStarsFilter(newRating);
  };

  const addHandler = (newMovie) => {
    console.log(newMovie);
    setMovies([...movies, newMovie]);
  }

  return (
    <div className="App">
      <Form.Group className="mb-3">
        <Form.Label style={{ color: "azure", textAlign: "center" }}>
          <b> Filter :</b>
        </Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter name"
          onChange={handleTitleChange}
        />
      </Form.Group>
      <ReactStars
        count={5}
        size={60}
        color2={"#ffd700"}
        onChange={handleStarsChange}
      />

      <div
        style={{ display: "flex", justifyContent: "center", flexWrap: "wrap" }}
      >
        {movies.map((movie, key) => (
          <MovieCard {...movie} key={key} />
        ))}
      </div>
      <MovieModal addHandler={addHandler} />
    </div>
  );
}

export default App;
