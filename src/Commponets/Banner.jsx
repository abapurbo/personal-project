import { IoLogoGithub } from "react-icons/io";
import { FaLinkedinIn, FaTwitter, FaFacebookF } from "react-icons/fa";
import { IoCloudDownloadOutline } from "react-icons/io5";
import { BsCode, BsCodeSlash } from "react-icons/bs";
import { motion } from "framer-motion";
import './iconStyle.css'
import '../font/font.css'
export default function Banner() {
    return (
        <div className="relative cursor-none flex flex-col md:flex-row justify-between items-center px-10  py-10 bg-gradient-to-br from-white via-gray-50 to-gray-100 overflow-hidden">


            {/* Left Content */}
            <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity:1, x: 0 }}
                transition={{ duration: 0.7 }}
                className="relative z-10 "
            >
                {/* <h1 className="text-3xl font-semibold text-gray-600">Welcome</h1> */}
                <span className="text-4xl font-semibold text-shadow-cyan-50">Hey</span>
                <h1 className="text-5xl font-semibold  leading-tight">

                    I'm <span className="text-blue-400">Apurbo</span>
                </h1>
                <h2 className="text-3xl bitter-font  text-gray-500 mt-1  font-bold ">
                     <span>Front-end Developer</span>
                </h2>
                <p className="mt-5 oxygen-regular max-w-lg text-gray-600 leading-relaxed">
                    I design and code beautifully simple things, and I love what I do. I use animation
                    as a third dimension to make interfaces more engaging and intuitive.
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
                    className="mt-6 flex items-center cursor-none gap-2 text-[18px] font-semibold bg-blue-400 text-white px-4 py-2  rounded-lg shadow-lg transition-all duration-300"
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
                <BsCode className="text-6xl text-blue-400 absolute -top-2 -left-8 animate-bounce" />
                <div className="img-container relative w-65 h-82 overflow-hidden shadow-2xl bg-gray-200">
                    <img
                        src="https://i.ibb.co/fwmkfv5/professional.jpg"
                        alt="professional"
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    />
                </div>

                <BsCodeSlash className="text-5xl text-blue-400 absolute -bottom-10 -right-7 animate-bounce" />
            </motion.div>
        </div>
    );
}
