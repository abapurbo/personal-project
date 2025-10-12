import React from "react";
import { motion } from "framer-motion";
import { IoCloudDownloadOutline } from "react-icons/io5";

const About = () => {
    const isSmallScreen = window.innerWidth < 768;
    return (
        <section
            id="about"
            className="md:py-16 p-8  container px-10 mx-auto  lg:mb-20 md:mb-14 mb-0 flex lg:flex-row  flex-col justify-between items-center gap-12 relative"
        >

            {/* Image Section */}
            <motion.div
                className="relative  md:flex md:justify-center items-center "
                initial={{
                    opacity: 0,
                    x: isSmallScreen ? 0 : 30,  // Right on large, 0 on small
                    y: isSmallScreen ? 30 : 0,  // Bottom on small, 0 on large
                }}
                whileInView={{ opacity: 1, x: 0, y: 0 }}
                transition={{ duration: 0.7, delay: 0.2 }}
            >
                <div className="relative group">
                    <div className="h-[400px] w-80 md:w-80 md:h-[400px] rounded-2xl  p-[6px] shadow-xl transition-transform duration-500 group-hover:scale-105">

                    </div>
                    {/* Glow Effect */}
                    <div className="absolute inset-2 rounded-3xl bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 blur-2xl opacity-25 group-hover:opacity-40 "></div>
                </div>
            </motion.div>
            {/* text-content */}
            <motion.div
                className="w-full flex md:flex-col md:text-left"
                initial={{
                    opacity: 0,
                    x: isSmallScreen ? 0 : 30,  // Right on large, 0 on small
                    y: isSmallScreen ? 30 : 0,  // Bottom on small, 0 on large
                }}
                whileInView={{ opacity: 1, x: 0, y: 0 }}
                transition={{ duration: 0.7, delay: 0.2 }}
            >
                <div className="flex flex-col lg:items-start md:items-center items-center">
                    <h2 className="text-2xl border-b-3 border-b-[#9333EA] md:text-3xl font-extrabold lg:mb-6 md:mb-5 mb-4 text-transparent bg-gradient-to-r from-indigo-500 to-purple-600 bg-clip-text relative md:text-center">
                        About Me
                    </h2>

                    <p className="text-lg md:text-xl text-center md:text-justify leading-relaxed text-gray-700">
                        I am a{" "}
                        <span className="font-semibold text-indigo-600">Front-End Developer</span>{" "}
                        passionate about turning ideas into{" "}
                        <span className="text-purple-600 font-medium">
                            intuitive, visually appealing, and high-performing
                        </span>{" "}
                        web applications. I don’t just write code—I craft{" "}
                        <span className="italic">experiences</span> that feel natural and engaging.
                    </p>

                    <p className="text-lg md:text-xl text-center md:text-justify leading-relaxed text-gray-600 mb-8">
                        With expertise in modern frameworks and a strong eye for design, I focus on
                        building responsive interfaces, clean codebases, and seamless user interactions.
                        My ultimate goal is to deliver{" "}
                        <span className="text-indigo-600 font-medium">innovative, scalable, and impactful</span>{" "}
                        digital solutions that inspire and delight users.
                    </p>

                    <motion.span
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex lg:text-[18px] md:text-[18px] text-[12px] items-center lg:px-6 md:px-5 px-4 lg:py-3 md:py-2 py-2 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl hover:from-purple-600 hover:to-indigo-600 transition-all"
                    >
                        Download Resume <IoCloudDownloadOutline className="lg:text-2xl ml-2 text-xl" />
                    </motion.span>
                </div>
            </motion.div>
        </section>
    );
};

export default About;
