import {BrowserRouter, Routes, Route} from "react-router-dom"
import Movie from "./routes/Movie";
import Movies from "./routes/Movies";
import SearchInput from "./component/searchInput";


function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path = "/" element = {<SearchInput />} />
          <Route path = "/movies" element = {<Movies />} />
          <Route path = "/movies/:id" element = {<Movie />} />
      </Routes>
    
    </BrowserRouter>
  );
}

export default App;
