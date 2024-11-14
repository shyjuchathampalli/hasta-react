import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Treatment from "./components/Treatment";
import About from "./components/About";
import Services from "./components/Services";
import Doctors from "./components/Doctors";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div>
      <Navbar />

      <main>
        <div id="home">
          <Home />
        </div>

        <div id="about">
          <About />
        </div>

        <div id="treatment">
          <Treatment />
        </div>

        <div id="doctors">
          <Doctors />
        </div>

        <div id="services">
          <Services />
        </div>

      </main>

      <Footer />
    </div>
  );
};

export default App;
