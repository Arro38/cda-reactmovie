import React, { useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import LikePage from "./pages/LikePage";
import axios from "axios";

const App = () => {
  useEffect(() => {
    axios
      .get(
        "https://api.themoviedb.org/3/genre/movie/list?api_key=c08c164078b4818c695608834f121e17&language=fr-FR"
      )
      .then((response) => {
        localStorage.setItem("genres", JSON.stringify(response.data.genres));
      });
  }, []);

  //api.themoviedb.org/3/genre/movie/list?api_key=c08c164078b4818c695608834f121e17&language=fr-FR
  https: return (
    <BrowserRouter>
      <Routes>
        <Route path="/*" element={<HomePage />} />
        <Route path="/likes" element={<LikePage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
