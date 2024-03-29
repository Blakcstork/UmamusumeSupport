import {BrowserRouter, Routes, Route} from "react-router-dom"
import Main from "./routes/Main";
import Home from "./routes/Home";
import Support from "./routes/Support";
import Uma from "./routes/Uma";

import "./css/AllAbove.css";


function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path = "/" element = {<Main />} />
          <Route path = "/race" element = {<Home />} />
          <Route path = "/support" element = {<Support />} />
          <Route path = "/uma" element = {<Uma />}/>
      </Routes>
    
    </BrowserRouter>
  );
}

export default App;
