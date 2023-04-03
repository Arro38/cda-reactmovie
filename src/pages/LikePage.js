import React, { useEffect, useState } from "react";
import Navigation from "../components/Navigation";
import axios from "axios";
import Card from "../components/Card";

const LikePage = () => {
  let [data, setData] = useState(JSON.parse(localStorage.getItem("likes")));

  return (
    <div className="app">
      <Navigation />

      <div className="cards">
        {data &&
          data.map((movie, index) => {
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

export default LikePage;
