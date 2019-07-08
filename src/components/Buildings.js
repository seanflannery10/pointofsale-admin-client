import React from "react";
import { Link } from "react-router-dom";

const Buildings = ({ currentUser }) => {
  return (
    <div className="home-hero">
      <h1>Welcome to the Buildings page</h1>
      <ul>
        <li>
          <Link to="/modifyBuildings">Modify/View Buildings</Link>
        </li>
        <li>
          <Link to="/modifyMealPrices">Modify/View Meal Prices</Link>
        </li>
        <li>
          <Link to="/listStudent">List/Print Buildings</Link>
        </li>
      </ul>
    </div>
  );
};

export default Buildings;
