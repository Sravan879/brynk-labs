import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import CMSPage from "./pages/CMSPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/cms" element={<CMSPage />} />
      </Routes>
    </Router>
  );
}

export default App;
