import React from "react";
import react from "../assets/react.svg";
import routerImg from "../assets/react-router.svg";
import githubImg from "../assets/github.svg";
import mongodb from "../assets/MongoDb.svg";
import htmlImg from "../assets/html-5.svg";
import "./SkillStyle/skillStyle.css";

const Skill = () => {
  const skills = [
    { name: "Figma", img: "https://i.ibb.co.com/Pz1pVhv0/Figma-logo-svg.png" },
    { name: "Git", img: "https://i.ibb.co.com/1Y1GxZGd/Git-icon-svg.png" },
    { name: "HTML5", img: htmlImg },
    { name: "CSS", img: "https://i.ibb.co.com/bj1kjC8y/css-img.png" },
    { name: "Javascript", img: "https://i.ibb.co.com/C5DqRxzT/java-script-js-logo-png-seeklogo-303341.png" },
    { name: "React", img: react },
    { name: "React Router", img: routerImg },
    { name: "Firebase", img: "https://i.ibb.co.com/ZqRTS5Z/images-3-removebg-preview.png" },
    { name: "Node.js", img: "https://i.ibb.co.com/JjDxhrJT/Node-js-logo-svg.png" },
    { name: "GitHub", img: githubImg },
    { name: "Express.js", img: "https://i.ibb.co.com/HDhmgbqt/express-js.png" },
    { name: "MongoDB", img: 'https://i.ibb.co.com/Fb7LMB3S/images-2-removebg-preview.png'},
  ];

  return (
    <div className="flex flex-col  justify-center items-center overflow-x-hidden">
      {/* Title */}
      <h2 className="text-4xl font-bold lg:mb-18 mb-12 relative text-gray-800">
        My{" "}
        <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
          Tech Stack
        </span>
      </h2>

      {/* Skill Grid */}
      <div className="card-container container px-10 grid lg:grid-cols-5 md:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-8">
        {skills.map((skill, i) => (
          <div
            key={i}
            className="relative flex flex-col items-center group p-6 rounded-xl  bg-white/60 backdrop-blur-lg border border-white/30 transition-all duration-500 hover:scale-105 hover:shadow-2xl"
          >
            <img
              src={skill.img}
              alt={skill.name}
              className="w-16 h-16 object-contain mb-3 transform group-hover:scale-110 transition-transform duration-500"
            />
            <p className="text-lg font-semibold text-gray-700 group-hover:bg-gradient-to-r group-hover:from-indigo-600 group-hover:to-pink-600 group-hover:bg-clip-text group-hover:text-transparent transition-colors duration-500">
              {skill.name}
            </p>
            <div className="h-10 absolute bg-red-800">

            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skill;
