import React from "react";
import FirstPage from "./Components/FirstPage";
import SecondPage from "./Components/SecondPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Detail from "./Components/Detail";



function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<FirstPage />} />
        </Routes>
        <Routes>
          <Route path="/second" element={<SecondPage />} />
        </Routes>
        <Routes>
          <Route path="/details" element={<Detail />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
