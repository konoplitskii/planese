import React from 'react';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import {HomePage} from "./pages/homepage";
import {PlanePage} from "./pages/planepage";
import {path} from "./path";

function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path={path.home} element={<HomePage/>}/>
           <Route path={`${path.plane}/:id`} element={<PlanePage/>}/>
        </Routes>
      </BrowserRouter>
  );
}

export default App;
