import React from "react";
import Navbar from "./Components/Navbar.tsx";
import Banner from "./Components/Banner.tsx"
import Quemsomos from "./Components/Quemsomos.tsx";
import Ondenosencontrar from "./Components/Ondenosencontrar.tsx";
import "./Styles/Navbar.css";
import "./Styles/Banner.css";
import "./Styles/Quemsomos.css";
import "./Styles/Ondenosencontrar.css";



function App() {
  return (
    <div className="App">
      <header>
        <Navbar />
        <Banner />
        <Quemsomos />
      </header>
      <main>
        <Ondenosencontrar />
      </main>
    </div>
  );
}

export default App;
