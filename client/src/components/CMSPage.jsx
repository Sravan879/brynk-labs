import React, { useState } from "react";
import "../styles/CMSPage.css";
import { BACKEND_URL } from "../config";

const CMSPage = () => {
  const [newHeading, setNewHeading] = useState("");

  const updateHeading = () => {
    fetch(`${BACKEND_URL}/api/heading`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ text: newHeading }),
    })
      .then((response) => response.json())
      .then(() => alert("Heading updated successfully!"))
      .catch((error) => console.error("Error updating heading:", error));
  };

  return (
    <div className="cms-page">
      <h2>CMS Page</h2>
      <input
        type="text"
        className="cms-input"
        value={newHeading}
        onChange={(e) => setNewHeading(e.target.value)}
        placeholder="Enter new heading..."
      />
      <button className="cms-button" onClick={updateHeading}>
        Save Heading
      </button>
    </div>
  );
};

export default CMSPage;
