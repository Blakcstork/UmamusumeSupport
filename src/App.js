import {BrowserRouter, Routes, Route} from "react-router-dom"
import Main from "./routes/Main";
import Movie from "./routes/Movie";
import Movies from "./routes/Movies";
import Home from "./routes/Home";
import Support from "./routes/Support";
import Uma from "./routes/Uma";

import "./css/AllAbove.css";


function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path = "/main" element = {<Main />} />
          <Route path = "/" element = {<Home />} />
          <Route path = "/support" element = {<Support />} />
          <Route path = "/uma" element = {<Uma />}/>
      </Routes>
    
    </BrowserRouter>
  );
}

export default App;
