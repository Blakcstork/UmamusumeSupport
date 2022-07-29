import {BrowserRouter, Routes, Route} from "react-router-dom"
import Movie from "./routes/Movie";
import Movies from "./routes/Movies";
import Home from "./routes/Home";
import Support from "./routes/Support";

import "./css/AllAbove.css";


function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path = "/" element = {<Home />} />
          <Route path = "/support" element = {<Support />} />
          <Route path = "/movies" element = {<Movies />} />
          <Route path = "/movies/:id" element = {<Movie />} />
      </Routes>
    
    </BrowserRouter>
  );
}

export default App;
