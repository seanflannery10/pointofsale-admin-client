import React from "react";
import { Link } from "react-router-dom";

const Buildings = ({ currentUser }) => {
  return (
    <div className="container">
      <h1>Welcome to the Buildings page</h1>
      <ul>
        <li>
          <Link to="/buildingModify">Modify/View Buildings</Link>
        </li>
        <li>
          <Link to="/buildingMealPrices">Modify/View Meal Prices</Link>
        </li>
        <li>
          <Link to="/buildingList">List/Print Buildings</Link>
        </li>
      </ul>
    </div>
  );
};

export default Buildings;
