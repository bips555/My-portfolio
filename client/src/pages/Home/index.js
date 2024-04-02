import React from "react";
import Header from "../../components/Header.js";
import Intro from "./Intro.js";

function Home() {
  return (
    <>
    <div className="bg-primary px-20">
      <Header />
      <Intro />
      </div>
    </>
  );
}

export default Home;
