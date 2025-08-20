import React from "react";
import "../Page/SkillStyle/SkillStyle.css";
import react from "../assets/react.svg";
import routerImg from "../assets/react-router.svg";
import githubImg from "../assets/github.svg";
import mongodb from "../assets/MongoDb.svg";
import htmlImg from "../assets/html-5.svg";
import './SkillStyle/skillStyle.css'

const Skill = () => {
    const skills = [
        { name: "Figma", img: "https://i.ibb.co.com/Pz1pVhv0/Figma-logo-svg.png" },
        { name: "Git", img: "https://i.ibb.co.com/1Y1GxZGd/Git-icon-svg.png" },
        { name: "HTML5", img: htmlImg },
        { name: "CSS", img: "https://i.ibb.co.com/bj1kjC8y/css-img.png" },
        { name: "Javascript", img: "https://i.ibb.co.com/C5DqRxzT/java-script-js-logo-png-seeklogo-303341.png" },
        { name: "React", img: react },
        { name: "React Router", img: routerImg },
        { name: "Firebase", img: "https://i.ibb.co.com/h3mkG4m/firebase.png" },
        { name: "Node.js", img: "https://i.ibb.co.com/JjDxhrJT/Node-js-logo-svg.png" },
        { name: "GitHub", img: githubImg },
        { name: "Express.js", img: "https://i.ibb.co.com/HDhmgbqt/express-js.png" },
        { name: "MongoDB", img: mongodb },
    ];

    return (
        <div className=" flex flex-col justify-center items-center ">
            {/* Title */}
            <h2 className="text-4xl  font-extrabold mb-18 relative text-gray-800">

                My <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">Skills</span>
                <span className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-gradient-to-r from-indigo-500 to-pink-500 rounded-full"></span>
            </h2>

            {/* Skill Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-10 w-11/12 max-w-5xl">
                {skills.map((skill, i) => (
                    <div
                        id="skill-card"
                        key={i}
                        className="flex  overflow-hidden flex-col items-center group  p-6  shadow-lg bg-white   transition-all duration-500"
                    >
                        <img
                            id="card-img"

                            src={skill.img}
                            alt={skill.name}
                            className="skill z-10 w-22 h-22 object-contain mb-3 transform group-hover:scale-110  transition-transform duration-500"
                        />
                        <p className="text-sm z-10 absolute top-34 font-semibold text-gray-700 group-hover:bg-gradient-to-r group-hover:from-indigo-600 group-hover:to-pink-600  group-hover:bg-clip-text group-hover:text-transparent transition-colors duration-500">
                            {skill.name}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Skill;
