import React from 'react';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import {HomePage} from "./pages/homepage";
import {PlanePage} from "./pages/planepage";
import {path} from "./path";
import {CreatePlanePage} from "./pages/create-pane-page";

function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path={path.home} element={<HomePage/>}/>
           <Route path={`${path.plane}/:id`} element={<PlanePage/>}/>
           <Route path={path.createPlane} element={<CreatePlanePage/>}/>
        </Routes>
      </BrowserRouter>
  );
}

export default App;
