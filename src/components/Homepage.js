import React from "react";
import { Link } from "react-router-dom";

const Homepage = ({ currentUser }) => {
  if (!currentUser.isAuthenticated) {
    return (
      <div className="home-hero">
        <h1>Welcome to the POS</h1>
        <Link to="/signin" className="btn btn-primary">
          Login
        </Link>
      </div>
    );
  }
  return <div>{/* display logged in landing page */}</div>;
};

export default Homepage;
