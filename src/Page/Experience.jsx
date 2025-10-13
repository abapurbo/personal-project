import React from "react";
import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";

export default function Experience() {
 const experience = {
  role: "Front-End Developer (MERN)",
  company: "BD Calling IT Ltd.",
  period: "September 2025 – November 2025",
  description:
    "Completed a 3-month Industrial Attachment at BD Calling IT Ltd. as a Front-End Developer, where I learned React.js, Node.js, Express.js, and MongoDB, and enhanced my communication and team collaboration skills.",
};


  return (
    <div
      id="experience"
      className="relative container mx-auto lg:px-10 md:px-6 px-6 md:py-20 flex flex-col items-center"
    >
      {/* Section Title */}
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl md:text-5xl font-bold text-gray-800 mb-12 relative"
      >
        Experience
        <span className="absolute left-1/2 -bottom-3 w-24 h-[3px] bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 -translate-x-1/2 rounded-full"></span>
      </motion.h1>

      {/* Experience Card */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="relative bg-white/60 backdrop-blur-xl border border-purple-200/40 shadow-xl rounded-2xl md:p-8 p-6 w-full max-w-3xl 
                   hover:shadow-purple-200/60 hover:-translate-y-1 transition-all duration-300"
      >
        {/* Icon */}
        <div className="absolute -top-6 left-8 bg-gradient-to-br from-indigo-500 to-pink-400 p-3 rounded-full shadow-lg">
          <Briefcase className="text-white w-6 h-6" />
        </div>

        {/* Content */}
        <div className="mt-4">
          <h2 className="text-xl  md:text-3xl font-semibold text-gray-900 mb-1">
            {experience.role}
          </h2>
          <p className="text-lg text-purple-600 font-medium mb-2">
            {experience.company}
          </p>
          <p className="text-sm text-gray-600 italic mb-4">{experience.period}</p>
          <p className="text-gray-700 leading-relaxed">{experience.description}</p>
        </div>

        {/* Decorative line */}
        <div className="absolute left-0 top-0 h-full w-[3px] bg-gradient-to-b from-indigo-400 via-purple-400 to-pink-400 rounded-full"></div>
      </motion.div>

      {/* Subtle glow at bottom */}
      <div className="absolute bottom-0 left-1/2 w-1/2 h-24 bg-gradient-to-t from-pink-200/40 via-transparent to-transparent blur-3xl -translate-x-1/2"></div>
    </div>
  );
}
