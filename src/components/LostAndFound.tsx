import { useState, useEffect } from "react";
import "../styles/LostAndFound.css";

import React from "react";

const LostAndFound = ({ type }: { type: "lost" | "found" }) => {
  const [items, setItems] = useState([
    { id: 1, name: "Backpack", date: "2025-03-20", location: "Library", status: "Not Found", image: "/images/backpack.jpg" },
    { id: 2, name: "Keys", date: "2025-03-18", location: "Cafeteria", status: "Found", image: "/images/keys.jpg" },
  ]);
  
  const [formData, setFormData] = useState({ name: "", description: "", date: "", location: "", image: "" });
  const [fadeIn, setFadeIn] = useState(false);

  useEffect(() => {
    setFadeIn(true);
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFormData({ ...formData, image: URL.createObjectURL(e.target.files[0]) });
    }
  };

  const handleReset = () => {
    setFormData({ name: "", description: "", date: "", location: "", image: "" });
  };

  return (
    <div className={`lost-found-container ${fadeIn ? "fade-in" : ""}`}>
      {/* Left Side: List of Items */}
      <div className="items-list">
        <h2>{type === "lost" ? "Lost Items" : "Found Items"}</h2>
        <div className="cards-container">
          {items.map((item) => (
            <div className="card floating" key={item.id}>
              <img src={item.image} alt={item.name} className="card-image" />
              <h3>{item.name}</h3>
              <p>Date: {item.date}</p>
              {type === "found" ? <p>Location: {item.location}</p> : <p>Status: {item.status}</p>}
            </div>
          ))}
        </div>
      </div>
      
      {/* Right Side: Form */}
      <div className="report-form slide-in">
        <h2>Report a {type === "lost" ? "Lost" : "Found"} Item</h2>
        <input type="text" name="name" placeholder="Item Name" value={formData.name} onChange={handleChange} />
        <textarea name="description" placeholder="Description" value={formData.description} onChange={handleChange}></textarea>
        <input type="date" name="date" value={formData.date} onChange={handleChange} />
        {type === "found" && <input type="text" name="location" placeholder="Location Found" value={formData.location} onChange={handleChange} />}
        <input type="file" name="image" onChange={handleFileChange} />
        {formData.image && <img src={formData.image} alt="Preview" className="image-preview" />}
        <button className="submit-btn hover-glow">Submit</button>
        <button className="reset-btn" onClick={handleReset}>Reset</button>
      </div>
    </div>
  );
};

export default LostAndFound;
