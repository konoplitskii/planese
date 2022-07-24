import React from 'react';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import {HomePage} from "./pages/homepage";
import {path} from "./path";

function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path={path.home} element={<HomePage/>}/>
        </Routes>
      </BrowserRouter>
  );
}

export default App;
