import { IoLogoGithub } from "react-icons/io";
import { FaLinkedinIn, FaTwitter, FaFacebookF } from "react-icons/fa";
import { IoCloudDownloadOutline } from "react-icons/io5";
import { BsCode, BsCodeSlash } from "react-icons/bs";
import { motion } from "framer-motion";
import './iconStyle.css'
import '../font/font.css'
import { Typewriter } from "react-simple-typewriter";
export default function Banner() {
    return (
        <div className="relative mb-20 cursor-none flex flex-col md:flex-row justify-between items-center px-10  py-10 overflow-hidden">


            {/* Left Content */}
            <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7 }}
                className="relative z-10 "
            >
                {/* <h1 className="text-3xl font-semibold text-gray-600">Welcome</h1> */}
                <span className="text-5xl md:text-5xl bitter-font  font-extrabold text-transparent bg-gradient-to-r from-indigo-500 to-purple-600 bg-clip-text drop-shadow-lg">
                    Hey
                </span>

                {/* Name */}
                <h1 className="text-5xl font-bold mt-2 leading-tight">
                    I'm <span className="text-purple-600">Apurbo</span>
                </h1>
                <h2 className="text-2xl md:text-3xl bitter-font  font-extrabold mt-1 bg-clip-text text-transparent bg-gradient-to-r from-purple-500 via-pink-500 to-indigo-500 drop-shadow-lg">
                    <Typewriter
                        words={["Front-End Developer"]}
                        loop={true}
                        cursor
                        cursorStyle="|"
                        typeSpeed={50}
                        deleteSpeed={40}
                        delaySpeed={1000}
                    />
                </h2>
                <p className="mt-5 inter-regular max-w-lg text-black leading-relaxed">
                    Passionate Front-end Developer crafting clean, responsive UIs with a focus on smooth user experience and engaging animations. I turn complex ideas into simple, elegant designs.
                </p>

                {/* Social Links */}
                <div className="flex items-center space-x-5 mt-6 text-[30px]">
                    <IoLogoGithub className=" p-2 rounded-full hover:bg-gray-300 hover:scale-110 transition-all duration-300" />
                    <FaLinkedinIn className=" p-2 rounded-full hover:bg-[#0077b5] hover:text-white hover:scale-110 transition-all duration-300" />
                    <FaTwitter className=" p-2 rounded-full text-[#1DA1F2] hover:bg-[#1DA1F2] hover:text-white hover:scale-110 transition-all duration-300" />
                    <FaFacebookF className=" p-2 rounded-full text-[#1877F2] hover:bg-[#1877F2] hover:text-white hover:scale-110 transition-all duration-300" />
                </div>

                {/* Button */}
                <motion.button
                    whileHover={{ scale: 1.05 }}
                    className="mt-6 flex items-center cursor-none gap-2 text-[18px] bg-purple-600 text-white font-semibold  hover:bg-purple-700  px-4 py-2  rounded-lg shadow-lg transition-all duration-300"
                >
                    Download CV <IoCloudDownloadOutline className="text-2xl" />
                </motion.button>
            </motion.div>

            {/* Right Content (Image + Code Icons) */}
            <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7 }}
                className="relative mt-10 md:mt-0 z-10 "
            >
                <BsCode className="text-6xl text-purple-600 absolute -top-2 -left-8 animate-bounce" />
                <div className=" relative group">
                    <div className=" img-container w-65 h-82 overflow-hidden shadow-2xl 
                  bg-[] backdrop-blur-xl border border-white/20 ">
                        <img
                            src="https://i.ibb.co/fwmkfv5/professional.jpg"
                            alt="professional"
                            className="w-full h-full object-cover hover:scale-105 transition-transform transform duration-700"
                        />
                    </div>

                    {/* Glow Effect */}
                    <div className="img-container absolute -inset-4 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 blur-3xl opacity-25 group-hover:opacity-50 transition"></div>
                </div>

                <BsCodeSlash className="text-5xl text-purple-600 absolute -bottom-10 -right-7 animate-bounce" />
            </motion.div>
        </div>
    );
}
