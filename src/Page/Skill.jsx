import React from "react";
import { motion } from "framer-motion";

const Skill = () => {
  const skills = [
    { name: "Figma", img: "https://i.ibb.co/Pz1pVhv0/Figma-logo-svg.png" },
    { name: "Git", img: "https://i.ibb.co/1Y1GxZGd/Git-icon-svg.png" },
    { name: "HTML5", img: 'https://i.ibb.co.com/TD92c70t/1175208-removebg-preview.png' },
    { name: "CSS", img: "https://i.ibb.co.com/fKNRXdm/images-1-removebg-preview.png" },
    { name: "DaisyUI", img: "https://i.ibb.co.com/Tq2L0MDJ/images-6-removebg-preview-1.png" },
    { name: "Tailwind", img: "https://i.ibb.co.com/Csh60SY0/CIAZz2-CYc6-Kc-removebg-preview.png" },
    { name: "Javascript", img: "https://i.ibb.co.com/FbP0dMwy/images-2-removebg-preview-1.png" },
    { name: "React", img: "https://i.ibb.co.com/qYgz5RVj/images-10-removebg-preview-1.png" },
    { name: "React Router", img: 'https://i.ibb.co.com/278W6Tqt/images-9-removebg-preview.png' },
    { name: "Firebase", img: "https://i.ibb.co/ZqRTS5Z/images-3-removebg-preview.png" },
    { name: "Node.js", img: "https://i.ibb.co/JjDxhrJT/Node-js-logo-svg.png" },
    { name: "GitHub", img: 'https://i.ibb.co.com/5xwL5N66/images-8-removebg-preview.png' },
    { name: "Express.js", img: "https://i.ibb.co/HDhmgbqt/express-js.png" },
    { name: "Next.js", img: "https://i.ibb.co.com/8g9k9WRM/1-b-J2z2-NRf-Tnc-HAv5-Uj-Uxw-A-removebg-preview.png" },
    { name: "MongoDB", img:'https://i.ibb.co.com/Fb7LMB3S/images-2-removebg-preview.png' },
  ];

  return (
    <section className="relative  flex flex-col justify-center container mx-auto items-center overflow-hidden py-16  px-10">
      
      {/* Background blobs */}
      <div className="absolute top-0 left-0 w-[250px] h-[250px] bg-indigo-300/20 rounded-full blur-[100px] -z-10"></div>
      <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-pink-300/20 rounded-full blur-[100px] -z-10"></div>

      {/* Title */}
      <h2 className="text-4xl font-extrabold mb-12 text-center text-gray-800">
        My <span className="text-purple-600">Tech Stack</span>
      </h2>

      {/* Skill Grid */}
      <div className="grid lg:grid-cols-5 md:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-5  w-[100%]   ">
        {skills.map((skill, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.06, duration: 0.5 }}
            whileHover={{ y: -5 }}
            className="relative flex flex-col items-center justify-center p-3 rounded-md bg-white/50 backdrop-blur-md border border-white/20
            shadow-[0_2px_10px_rgba(0,0,0,0.05)] transition-all duration-500
            hover:scale-105 hover:shadow-[0_6px_20px_rgba(147,51,234,0.2)] group"
          >
            {/* Icon */}
            <img
              src={skill.img}
              alt={skill.name}
              className="w-10 h-10 object-contain mb-1 transform transition-transform duration-500 group-hover:scale-110"
            />

            {/* Skill Name */}
            <p className="text-sm font-semibold text-gray-700 transition-all duration-500
              group-hover:bg-gradient-to-r group-hover:from-indigo-600 group-hover:to-pink-500
              group-hover:bg-clip-text group-hover:text-transparent">
              {skill.name}
            </p>

            {/* Hover glow */}
            <div className="absolute inset-0 rounded-md opacity-0 group-hover:opacity-100 transition-all duration-700
              bg-gradient-to-br from-indigo-400/10 to-pink-400/10 blur-md"></div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skill;
