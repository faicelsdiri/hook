import "../App.css";
import { Form ,Button} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import MovieCard from "./MovieCard";
import MoviesArray from "./MoviesArray";

import ReactStars from "react-stars";
import useMoviefilter from "./useMoviefilter";
import MovieModal from "./MovieModal";
import { useNavigate } from "react-router";


function Home() {
    
    const navigate =useNavigate();
    function ClicktoADD() {
        navigate(`/add`);

    }
  const {movies, setMovies, setTitleFilter, setMinStarsFilter,
  } = useMoviefilter(MoviesArray);

  
 

  const handleTitleChange = (event) => {
    setTitleFilter(event.target.value);
  };

  const handleStarsChange = (newRating) => {
    setMinStarsFilter(newRating);
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
        style={{ display: "flex", justifyContent: "center", flexWrap: "wrap"  }}
      >
        {movies.map((movie, key) => (
          <MovieCard {...movie} key={key} />
        ))}
      </div>
      <Button variant="warning" onClick={ClicktoADD}>  ADD MOVIE{" "} </Button>
      {/* <MovieModal addHandler={addHandler} /> */}
    </div>
    
  );
}

export default Home;