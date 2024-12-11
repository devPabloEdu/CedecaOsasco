import React, { useEffect } from "react";
import Navbar from "./Components/Navbar.tsx";
import Banner from "./Components/Banner.tsx"
import Quemsomos from "./Components/Quemsomos.tsx";
import Ondenosencontrar from "./Components/Ondenosencontrar.tsx";
import Timeline from "./Components/Timeline.tsx";
import Footer from "./Components/Footer.tsx";
import "./Styles/Navbar.css";
import "./Styles/Banner.css";
import "./Styles/Quemsomos.css";
import "./Styles/Ondenosencontrar.css";
import "./Styles/Timeline.css";
import "./Styles/Footer.css";
import AOS from "aos";



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
        <Timeline />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
