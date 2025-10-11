import React from "react";
import Lottie from "lottie-react";
import { IoIosSend } from "react-icons/io";
import sendEmailUs from "../../src/assets/Lottie/Email.json";
import { IoLocationSharp } from "react-icons/io5";
import { FaWhatsapp } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Contact = () => {
  const handleSubmitForm = (e) => {
    e.preventDefault();
  };

  return (
    <section className="relative min-h-screen  flex items-center justify-center py-12  px-6 overflow-hidden">
      {/* Soft Gradient Background Blobs */}
      <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-purple-300/30 rounded-full blur-[120px] -z-10"></div>
      <div className="absolute bottom-0 right-0 w-[450px] h-[450px] bg-pink-300/30 rounded-full blur-[120px] -z-10"></div>

      {/* Glass Container */}
      <div className="max-w-6xl w-full flex flex-col md:flex-row items-center justify-between gap-12 bg-white/60 backdrop-blur-3xl border border-white/30 shadow-[0_8px_50px_rgba(147,51,234,0.15)] rounded-3xl p-6  md:p-8 transition-all duration-500 hover:shadow-[0_8px_60px_rgba(236,72,153,0.25)] hover:scale-[1.01]">

        {/* Lottie Animation + Info */}
        <div className="md:w-1/2 w-full flex flex-col justify-center gap-6">
          <Lottie animationData={sendEmailUs} className="w-[400px] md:w-[440px]" />
          <div className="flex flex-row justify-between items-center gap-3 text-gray-700 text-sm md:text-base">
            <p className="flex items-center gap-2"><IoLocationSharp className="text-purple-600" /> Dhaka, Bangladesh</p>
            <p className="flex items-center gap-2"><FaWhatsapp className="text-green-600" /> +8801949823468</p>
            <p className="flex items-center gap-2"><MdEmail className="text-pink-500" /> absarker238@gmail.com</p>
          </div>
        </div>

        {/* Contact Form */}
        <div className="md:w-1/2 w-full">
          <div className="mb-8 text-center md:text-left">
            <h2 className="text-4xl font-extrabold bg-gradient-to-r from-[#4338CA] via-[#6D28D9] to-[#C026D3] bg-clip-text text-transparent drop-shadow-sm">
              Get in Touch
            </h2>
            <p className="text-gray-600 mt-2 text-base md:text-lg leading-relaxed">
              I’d love to hear from you! Whether it’s a project idea, collaboration, or just a friendly hello — drop me a message below.
            </p>
          </div>


          <form onSubmit={handleSubmitForm} className="grid grid-cols-2 gap-2">
            <input
              type="text"
              placeholder="Full Name"
              className="col-span-2 md:col-span-1 bg-white/70 border border-purple-100 rounded-xl px-5 py-3 text-gray-700 placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-400 shadow-sm transition-all duration-200"
            />
            <input
              type="email"
              placeholder="Email Address"
              className="col-span-2 md:col-span-1 bg-white/70 border border-purple-100 rounded-xl px-5 py-3 text-gray-700 placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-400 shadow-sm transition-all duration-200"
            />
            <input
              type="text"
              placeholder="Subject"
              className="col-span-2 bg-white/70 border border-purple-100 rounded-xl px-5 py-3 text-gray-700 placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-400 shadow-sm transition-all duration-200"
            />
            <textarea
              placeholder="Your message..."
              rows="5"
              className="col-span-2 bg-white/70 border border-purple-100 rounded-xl px-5 py-3 text-gray-700 placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-400 shadow-sm transition-all duration-200"
            ></textarea>

            <button
              type="submit"
              className="col-span-2 mt-2 flex justify-center items-center gap-2 text-lg text-white font-semibold py-3 rounded-xl 
  bg-gradient-to-r from-[#6366F1] via-[#8B5CF6] to-[#EC4899] 
  hover:from-[#4F46E5] hover:via-[#7C3AED] hover:to-[#DB2777] 
  shadow-md hover:shadow-lg transition-all duration-300"
            >
              Send Message <IoIosSend className="text-xl" />
            </button>

          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
