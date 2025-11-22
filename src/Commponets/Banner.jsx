import { IoLogoGithub } from "react-icons/io";
import { FaLinkedinIn, FaTwitter, FaFacebookF } from "react-icons/fa";
import { IoCloudDownloadOutline } from "react-icons/io5";
import { BsCode, BsCodeSlash } from "react-icons/bs";
import { motion } from "framer-motion";
import './iconStyle.css'
import '../font/font.css'
import { Typewriter } from "react-simple-typewriter";
import MyImg from '../assets/MyImg/MyImg.png'
export default function Banner() {

    return (

        <div className=" container md:px-6 lg:px-10 px-6 mx-auto gap-20 mb-6 lg:mb-20 md:mb-10  flex flex-col md:flex-row   lg:justify-between md:justify-evenly items-center  py-10">

            <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7 }}
                className="relative  z-10 md:order-1 order-2  flex flex-col md:flex-start md:justify-start justify-center md:items-start items-center "
            >
                {/* <h1 className="text-3xl font-semibold text-gray-600">Welcome</h1> */}
                <span className="text-4xl md:text-5xl bitter-font  font-extrabold text-transparent bg-gradient-to-r from-indigo-500 to-purple-600 bg-clip-text drop-shadow-lg">
                    Hey
                </span>

                {/* Name */}
                <h1 className="text-4xl font-bold mt-2 leading-tight">
                    I'm <span className="text-purple-600">Apurbo</span>
                </h1>
                <h2 className="text-2xl  md:text-3xl bitter-font  font-extrabold mt-1 bg-clip-text text-transparent bg-gradient-to-r from-purple-500 via-pink-500 to-indigo-500 drop-shadow-lg">
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
                <p className="mt-5 inter-regular max-w-lg md:text-start text-center text-black leading-relaxed">
                    Passionate Front-end Developer crafting clean, responsive UIs with a focus on smooth user experience and engaging animations. I turn complex ideas into simple, elegant designs.
                </p>
                {/* Social Links */}
                <div className="flex items-center space-x-5 lg:mt-6 md:mt-2 mt-4 text-[30px]">
                    <a href="https://github.com/settings/profile"> <IoLogoGithub className=" p-2 rounded-full hover:bg-gray-300 hover:scale-110 transition-all duration-300" /></a>
                    <FaLinkedinIn className=" p-2 rounded-full hover:bg-[#0077b5] hover:text-white hover:scale-110 transition-all duration-300" />
                    <FaTwitter className=" p-2 rounded-full text-[#1DA1F2] hover:bg-[#1DA1F2] hover:text-white hover:scale-110 transition-all duration-300" />
                    <a href="https://www.facebook.com/profile.php?id=61577638051677"><FaFacebookF className=" p-2 rounded-full text-[#1877F2] hover:bg-[#1877F2] hover:text-white hover:scale-110 transition-all duration-300" />
                    </a>
                </div>

                {/* Button */}
                <motion.div>
                    <a href="/Resume.pdf" download>
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            className="lg:mt-6 mt-4 flex items-center cursor-none gap-2 lg:text-[18px] md:text-[18px]  text-[12px] bg-purple-600 text-white font-semibold  hover:bg-purple-700  lg:px-4 lg:py-2 px-2 py-2 rounded-lg shadow-lg transition-all duration-300"
                        >
                            Download Resume <IoCloudDownloadOutline className="lg:text-2xl text-xl" />
                        </motion.button>
                    </a>
                </motion.div>
            </motion.div>

            {/* Right Content (Image + Code Icons) */}
            <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7 }}
                className="relative lg:mt-10 md:mt-14 mt-16  md:order-2 order-1 z-10 "
            >
                <BsCode className="lg:text-5xl  md:text-5xl text-4xl text-purple-600 absolute lg:-top-2 -top-2 -left-4 lg:-left-8 animate-bounce" />
                <div className="relative group">
                    <div
                        className="img-container flex items-end w-65 h-82 overflow-hidden 
        rounded-2xl shadow-[0_10px_30px_rgba(0,0,0,0.25)]
        hover:shadow-[0_20px_40px_rgba(0,0,0,0.35)]
        transition-all duration-500 backdrop-blur-xl border border-white/20"
                    >
                        <img
                            src={MyImg}
                            alt="My_image"
                            className="object-cover"
                        />
                    </div>

                    {/* Glow Border */}
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-r 
        from-indigo-500 via-purple-500 to-pink-500 
        opacity-20 group-hover:opacity-40 blur-xl transition-all duration-500">
                    </div>
                </div>


                <BsCodeSlash className="lg:text-5xl md:text-5xl text-4xl text-purple-600 absolute right-0 animate-bounce" />
            </motion.div>
        </div>
    );
}
