import React from 'react';
import { IoIosSend } from 'react-icons/io';

const Contact = () => {
    const handleSubmitForm = (e) => {
        e.preventDefault()
    }
    return (
        <div className='py-30 grid grid-cols-2 gap-6  container px-10  mx-auto '>
           
       <form
  onSubmit={handleSubmitForm}
  className="bg-gradient-to-br from-purple-50/70 via-pink-50/60 to-indigo-50/60
             backdrop-blur-xl border border-purple-200/30 shadow-2xl 
             rounded-lg p-8 grid grid-cols-2 gap-4 transition-all duration-300 
             hover:shadow-pink-200/50 hover:scale-[1.01]"
>
  <input
    type="text"
    placeholder="Enter your full name"
    className="bg-white/50 border border-purple-200/40 rounded-md px-4 py-3 
               focus:outline-none focus:ring-2 focus:ring-purple-400 
               placeholder:text-gray-600 shadow-sm transition-all duration-200"
  />
  <input
    type="email"
    placeholder="Enter your email"
    className="bg-white/50 border border-purple-200/40 rounded-md px-4 py-3 
               focus:outline-none focus:ring-2 focus:ring-purple-400 
               placeholder:text-gray-600 shadow-sm transition-all duration-200"
  />
  <input
    type="text"
    placeholder="Subject"
    className="col-span-2 w-full bg-white/50 border border-purple-200/40 rounded-md px-4 py-3 
               focus:outline-none focus:ring-2 focus:ring-purple-400 
               placeholder:text-gray-600 shadow-sm transition-all duration-200"
  />
  <textarea
    placeholder="Message"
    rows="5"
    className="col-span-2 w-full bg-white/50 border border-purple-200/40 rounded-md px-4 py-3 
               focus:outline-none focus:ring-2 focus:ring-purple-400 
               placeholder:text-gray-600 shadow-sm transition-all duration-200"
  ></textarea>

  <button
    type="submit"
    className="col-span-2 flex justify-center items-center mt-3 text-white font-semibold py-3 
              bg-[#9333EA]
               rounded-md shadow-md hover:shadow-lg transition-all duration-300"
  >
   <span className='flex flex-row items-center gap-1'> Send Message <IoIosSend /></span>
  </button>
</form>




        </div>
    );
};

export default Contact;