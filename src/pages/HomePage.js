import React, { useEffect, useState } from "react";
import Navigation from "../components/Navigation";
import axios from "axios";
import Card from "../components/Card";

const HomePage = () => {
  let [query, setQuery] = useState("code");
  let [data, setData] = useState([]);
  let [sortMethod, setSortMethod] = useState("top");

  const fetchData = () => {
    axios
      .get(
        "https://api.themoviedb.org/3/search/movie?api_key=c08c164078b4818c695608834f121e17&query=" +
          query +
          "&language=fr-FR"
      )
      .then((response) => {
        setData(response.data.results);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  const searchSubmit = (e) => {
    e.preventDefault();
    fetchData();
  };

  const searchInput = (e) => {
    setQuery(e.target.value);
  };

  const topFlopClick = () => {
    if (sortMethod === "top") {
      setSortMethod("flop");
    } else {
      setSortMethod("top");
    }
  };
  return (
    <div className="app">
      <Navigation />
      <div className="form-container">
        <form className="formSearch" onSubmit={searchSubmit}>
          <input
            type="text"
            placeholder="Entrez le titre du film"
            onInput={searchInput}
          />
          <input type="submit" value="Rechercher" />
        </form>
        <div className="topFlop">
          <button onClick={topFlopClick}>{sortMethod.toUpperCase()}</button>
        </div>
      </div>
      <div className="cards">
        {data &&
          data
            .sort((a, b) => {
              if (sortMethod === "top") {
                return b.vote_average - a.vote_average;
              } else {
                return a.vote_average - b.vote_average;
              }
            })
            .map((movie, index) => {
              return (
                <Card
                  key={index}
                  movie={movie}
                  genres={JSON.parse(localStorage.getItem("genres"))}
                  likes={JSON.parse(localStorage.getItem("likes"))}
                />
              );
            })}
      </div>
    </div>
  );
};

export default HomePage;
