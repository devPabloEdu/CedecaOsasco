import React from "react";
import "./Styles/Navbar.css";
import "./Styles/Imgdefundo.css";
import "./Styles/Quemsomos.css";
import "./Styles/Linhadotempo.css"
import Navbar from "./Components/Navbar.tsx";
import ImagemDeFundo from "./Components/ImagemDeFundo.tsx";
import Quemsomos from "./Components/Quemsomos.tsx";
import Linhadotempo from "./Components/Linhadotempo.tsx";

function App() {
  return (
    <div className="App">
      <Navbar />
      <ImagemDeFundo />
      <Quemsomos />
      <Linhadotempo />
    </div>
  );
}

export default App;
