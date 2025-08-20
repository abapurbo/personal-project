import React from "react";
import { motion } from "framer-motion";
import "../Page/AboutStyle/AboutImg.css";
import { Typewriter } from "react-simple-typewriter";
import { IoCloudDownloadOutline } from "react-icons/io5";

const About = () => {
    return (
        <section
            id="about"
            className="py-16  md:py-4  mb-20 px-6 md:px-20 flex flex-col-reverse md:flex-row justify-between items-center gap-16 relative"
        >
            {/* Image Section */}
            <motion.div
                className="relative w-full md:w-1/2 flex justify-center"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7 }}
            >
                <div className="relative group">
                    <div className="w-72 h-82  md:w-80 md:h-[400px] rounded-2xl  p-[6px] shadow-xl transition-transform duration-500 group-hover:scale-105">
                        <img
                            src="" // 👉 এখানে নিজের ছবি দিন
                            alt=""
                            className="w-full h-full object-cover rounded-xl shadow-md transition-transform duration-700 group-hover:scale-110"
                        />
                    </div>
                    {/* Glow Effect */}
                    <div className="absolute inset-2 rounded-3xl bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 blur-2xl opacity-25 group-hover:opacity-40 "></div>
                </div>
            </motion.div>

            {/* Text Section */}
            <motion.div
                className="w-full md:w-1/2 text-center md:text-left"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, delay: 0.2 }}
            >
                <h2 className="text-3xl md:text-4xl font-extrabold mb-6 text-transparent bg-gradient-to-r from-indigo-500 to-purple-600 bg-clip-text relative inline-block">
                    About Me
                    <span className="absolute left-0 -bottom-1 w-full h-[3px] bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full"></span>
                </h2>

                <p className="text-lg md:text-xl leading-relaxed text-gray-700 ">
                    I am a{" "}
                    <span className="font-semibold text-indigo-600">
                        Front-End Developer
                    </span>{" "}
                    passionate about turning ideas into{" "}
                    <span className="text-purple-600 font-medium">
                        intuitive, visually appealing, and high-performing
                    </span>{" "}
                    web applications. I don’t just write code—I craft{" "}
                    <span className="italic">experiences</span> that feel natural and engaging.
                </p>

                <p className="text-lg md:text-xl leading-relaxed text-gray-600 mb-8">
                    With expertise in modern frameworks and a strong eye for design, I
                    focus on building responsive interfaces, clean codebases, and seamless
                    user interactions. My ultimate goal is to deliver{" "}
                    <span className="text-indigo-600 font-medium">
                        innovative, scalable, and impactful
                    </span>{" "}
                    digital solutions that inspire and delight users.
                </p>

                <motion.a
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    href="/CV.pdf"
                    className="inline-block px-8 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl hover:from-purple-600 hover:to-indigo-600 transition-all"
                >
                    Download CV
                    
                </motion.a>
                
            </motion.div>
        </section>
    );
};

export default About;
