import React from "react";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <div className="navigation">
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/likes">Likes</NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Navigation;
