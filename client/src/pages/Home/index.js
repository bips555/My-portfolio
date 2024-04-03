import React from "react";
import Header from "../../components/Header.js";
import Intro from "./Intro.js";
import About from "./About.js";
import Academics from "./Academics.js";

function Home() {
  return (
    <>
    <div >
      <Header />
      <div className="bg-primary px-20 sm:px-5">
              <Intro />
              <About/>
              <Academics/>
      </div>
      </div>

    </>
  );
}

export default Home;
