import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHeartCirclePlus,
  faHeartCircleMinus,
} from "@fortawesome/free-solid-svg-icons";
import React, { useState } from "react";

const Card = ({ movie, genres, likes }) => {
  let [likeArray, setLikeArray] = useState(likes);
  const likeUpdate = () => {
    if (
      likeArray &&
      likeArray.find((m) => {
        return m.id === movie.id;
      })
    ) {
      const newLikes = likes.filter((m) => {
        return m.id !== movie.id;
      });
      localStorage.setItem("likes", JSON.stringify(newLikes));
      setLikeArray(newLikes);
    } else {
      const newLikes = likes ? [...likes, movie] : [movie];
      localStorage.setItem("likes", JSON.stringify(newLikes));
      setLikeArray(newLikes);
    }
  };
  return (
    <div className="card">
      <div className="likeIcon">
        {likeArray &&
        likeArray.find((m) => {
          return m.id === movie.id;
        }) ? (
          <FontAwesomeIcon icon={faHeartCircleMinus} onClick={likeUpdate} />
        ) : (
          <FontAwesomeIcon icon={faHeartCirclePlus} onClick={likeUpdate} />
        )}
      </div>
      <img
        src={"https://image.tmdb.org/t/p/w500/" + movie.backdrop_path}
        alt={"image du film "}
      />
      <h3> {movie.title}</h3>
      <p> {new Date(movie.release_date).toLocaleString("fr-FR")}</p>
      <p> {movie.vote_average}/10</p>
      <ul>
        {genres &&
          movie.genre_ids.map((id, index) => {
            const genre = genres.find((g) => g.id === id);
            return genre && <li key={index}>{genre.name}</li>;
          })}
      </ul>
      <p className="synopsis"> {movie.overview}</p>
    </div>
  );
};

export default Card;
