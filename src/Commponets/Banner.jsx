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

        <div className=" container px-10 mx-auto   mb-20  flex flex-col md:flex-row   lg:justify-between md:justify-evenly items-center  py-10">

            <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7 }}
                className="relative  z-10 "
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
                <div className="flex items-center space-x-5 lg:mt-6 mt-2 text-[30px]">
                    <IoLogoGithub className=" p-2 rounded-full hover:bg-gray-300 hover:scale-110 transition-all duration-300" />
                    <FaLinkedinIn className=" p-2 rounded-full hover:bg-[#0077b5] hover:text-white hover:scale-110 transition-all duration-300" />
                    <FaTwitter className=" p-2 rounded-full text-[#1DA1F2] hover:bg-[#1DA1F2] hover:text-white hover:scale-110 transition-all duration-300" />
                    <FaFacebookF className=" p-2 rounded-full text-[#1877F2] hover:bg-[#1877F2] hover:text-white hover:scale-110 transition-all duration-300" />
                </div>

                {/* Button */}
                <motion.button
                    whileHover={{ scale: 1.05 }}
                    className="lg:mt-6 mt-3 flex items-center cursor-none gap-2 lg:text-[18px] md:text-[18px]  text-[12px] bg-purple-600 text-white font-semibold  hover:bg-purple-700  lg:px-4 lg:py-2 px-2 py-2 rounded-lg shadow-lg transition-all duration-300"
                >
                    Download Resume <IoCloudDownloadOutline className="lg:text-2xl text-xl" />
                </motion.button>
            </motion.div>

            {/* Right Content (Image + Code Icons) */}
            <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7 }}
                className="relative lg:mt-10 md:mt-14 mt-16   z-10 "
            >
                <BsCode className="lg:text-5xl  md:text-5xl text-4xl text-purple-600 absolute lg:-top-2 -top-2 -left-4 lg:-left-8 animate-bounce" />
                <div className=" relative group">
                    <div className=" img-container w-65 h-82 overflow-hidden shadow-2xl 
                  backdrop-blur-xl border border-white/20 ">
                        {/* image */}
                    </div>

                    {/* Glow Effect */}
                    <div className="img-container  border-2 -inset-2 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 blur-3xl opacity-25 group-hover:opacity-50 transition"></div>
                </div>

                <BsCodeSlash className="lg:text-5xl md:text-5xl text-4xl text-purple-600 absolute right-0 animate-bounce" />
            </motion.div>
        </div>
    );
}
