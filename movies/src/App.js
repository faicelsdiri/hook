import "./App.css";

import { BrowserRouter, Route, Routes } from "react-router-dom";

import Description from "./Component/Descripition";
import Home from "./Component/Home";
import MovieModal from "./Component/MovieModal";

function App() {
  
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/description/:id" element={<Description />} />
          <Route path="/add" element={<MovieModal />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
