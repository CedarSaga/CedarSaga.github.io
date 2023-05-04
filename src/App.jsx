import React from "react";
import Intro from "./components/intro";
import Contact from "./components/contact";
import Footer from "./components/footer";
import Portfolio from "./components/Portfolio";
import Timeline from "./components/Timeline";

function App() {

  return (
      <div className="App">
        <Intro />
        <Portfolio />
        <Timeline />
        <Contact />
        <Footer />
      </div>
  )

}

export default App
