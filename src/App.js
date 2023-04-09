import React, { useState } from "react";
import { useEffect } from "react";
import FirstPage from "./Components/FirstPage";
import SecondPage from "./Components/SecondPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Detail from "./Components/Detail";
import axios from "axios";

function App() {
  const [catego, setCategry] = useState([]);
  const getProfiles = async () => {
    try {
      const fetchData = await axios.get("/v1/categories"); // Update the URL to match the proxy endpoint
      console.log(fetchData.data);
      setCategry( " category",fetchData.data);
    } catch (error) {
      console.log(error);
    }
  };
  const getProfiles1 = async () => {
    try {
      var fetch = await axios.get("/v1/highlights"); // Update the URL to match the proxy endpoint
      console.log("here is the highlight ", fetch);
    } catch (error) {
      console.log("error in highlight", error);
    }
  };
  useEffect(() => {
    getProfiles();
    getProfiles1();
  }, []);

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<FirstPage />} />
        </Routes>
        <Routes>
          <Route path="/details" element={<Detail />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
