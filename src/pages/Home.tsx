import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Home.css";

const Home: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="container">
      {/* Header with Login & Register buttons */}
      <div className="auth-buttons">
        <button onClick={() => navigate("/login")}>Login</button>
        <button onClick={() => navigate("/register")}>Register</button>
      </div>

      {/* Main Title */}
      <h1 className="title">Find My Stuff</h1>

      {/* Lost & Found Section */}
      <div className="lost-found-section">
        <p>Lost something? Found something?</p>
        <div className="action-buttons">
          <button onClick={() => navigate("/lost")}>Lost an Item</button>
          <button onClick={() => navigate("/found")}>Found an Item</button>
        </div>
      </div>
    </div>
  );
};

export default Home;
