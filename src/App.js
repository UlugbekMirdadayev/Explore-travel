import React from "react";
import Section from "./Components/Section";
import Navbar from "./Components/Navbar";
import Trending from "./Components/Trending";
import Explore from "./Components/Explore";
import Ultimate from "./Components/Ultimate";
import Testim from "./Components/Testim";
import Corusel from "./Components/Corusel";
import Footer from "./Components/Footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Section />
      <Explore />
      <Corusel />
      <Ultimate />
      <Testim />
      <Trending />
      <Footer/>
    </div>
  );
}

export default App;
