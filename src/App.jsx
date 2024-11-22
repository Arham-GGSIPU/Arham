import React from "react";
import Footer from "./Footer"; // Import Footer component
import './App.css'; // Import global styles
import TeamSection from "./components/TeamSection";

function App() {
  return (
    <div className="w-full">
      {<TeamSection />}
      <Footer />
    </div>
  );
}

export default App;
