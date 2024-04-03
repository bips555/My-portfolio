import React from "react";
import SectionTitle from "../../components/SectionTitle.js";
import "./Index.js";

function About() {
  const skills = ["Javascript", "Node", "Express", "MongoDB", "React"];

  return (
    <div>
      <SectionTitle title={"About Me"} />
      <div className="flex w-full items-center sm:flex-col">
        <div className="h-[60vh] w-1/2 sm:w-full">
          <dotlottie-player
            src="https://lottie.host/28517545-cc61-4752-bede-7dc5a914bee5/H9mhu4qk11.json"
            background="transparent"
            speed="1"
            autoplay
            loop
          ></dotlottie-player>
        </div>
        <div className="flex flex-col gap-5 w-1/2 sm:w-full">
          <p className="text-white">
            <span className="me-2 font-extrabold"> Hey there,</span>
            I'm a tech enthusiast, constantly exploring the depths of web
            development in search of opportunities to expand my knowledge.
            Currently in my 8th semester pursuing a CSIT degree, I'm passionate
            about crafting innovative solutions in the digital realm.
          </p>
          <p className="text-white">
            Over time, I've delved into various full-stack projects, each a
            testament to my journey in mastering web technologies. From a
            comprehensive TODO app to a seamless food delivery platform, and
            even a real-time chat application leveraging Socket.io, my projects
            reflect my dedication to honing my skills and pushing boundaries in
            the realm of web development.
          </p>
        </div>
      </div>
      <div className="py-5">
        <h1 className="text-secondary text-xl my-10">
          Some of the Technologies I used:
        </h1>
        <div className="flex flex-wrap gap-10">
          {skills.map((skill, index) => (
            <h1 className="border-tertiary border-2 text-white px-5 py-3 rounded">
              {skill}
            </h1>
          ))}
        </div>
      </div>
    </div>
  );
}

export default About;
