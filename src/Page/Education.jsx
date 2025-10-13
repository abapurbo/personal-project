    import React from "react";
    import { motion } from "framer-motion";
    import { GraduationCap } from "lucide-react";

    export default function Education() {
        const education = [
            {
                title: "Diploma in Engineering",
                institution: "Sherpur Polytechnic Institute",
                year: "2022 - Present",
                description:
                    "Currently studying in the Computer Science & Technology (CST) department, where I’m self-learning front-end development and building skills in modern web technologies.",
            },
            {
                title: "Secondary School Certificate (SSC)",
                institution: "Bhringaraj Talibabad High School, Gazipur, Kaliakair",
                year: "2020 - 2021",
                description:
                    "Completed SSC in the Science stream, developing an early interest in technology and web development.",
            },
        ];

        return (
            <section
                id="education"
                className="relative md:py-16 py-6 px-6 lg:px-10 md:px-6 container  mx-auto  overflow-hidden"
            >
                {/* Background Blobs */}
                <div className="absolute top-0 left-0 w-[300px] h-[300px] bg-purple-300/30 rounded-full blur-[120px] -z-10"></div>
                <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-pink-300/30 rounded-full blur-[120px] -z-10"></div>

                {/* Title */}
                {/* Title */}
                <div className="container mx-auto max-w-3xl text-center md:mb-16 mb-8">
                    <motion.h2
                        initial={{ opacity: 0, y: -30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-4xl md:text-5xl font-bold text-purple-700" // ← Header color changed
                    >
                        Education
                    </motion.h2>
                    <p className="text-gray-700 mt-4 text-xl md:text-2xl font-medium"> {/* ← Subtitle bigger */}
                        My Academic Journey
                    </p>
                </div>

                {/* Timeline Container */}
                <div className="relative max-w-5xl mx-auto before:content-[''] before:absolute before:top-0 before:bottom-0 before:left-1/2 before:w-1 before:bg-purple-400 before:-translate-x-1/2">
                    {education.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.2 }}
                            className={`mb-12 flex flex-col md:flex-row  items-center ${index % 2 === 0 ? "md:flex-row-reverse" : ""
                                }`}
                        >
                            {/* Connector Dot */}
                            <div className="w-6 h-6 bg-purple-500 rounded-full shadow-md flex items-center justify-center absolute left-1/2 transform -translate-x-1/2 z-10">
                                <GraduationCap size={14} className="text-white" />
                            </div>

                            {/* Content Card */}
                            <div
                                className={`bg-white/70 backdrop-blur-xl border border-purple-200/40 shadow-md rounded-2xl p-6 md:w-[45%] z-20 transition-all duration-300 hover:shadow-lg ${index % 2 === 0
                                        ? "md:mr-auto md:text-left"
                                        : "md:ml-auto md:text-left "
                                    }`}
                            >
                                <h3 className="text-xl md:text-2xl font-semibold text-purple-700">
                                    {item.title}
                                </h3>
                                <h4 className="text-gray-800 font-medium mt-1">
                                    {item.institution}
                                </h4>
                                <span className="block text-sm text-gray-500 mt-1">
                                    {item.year}
                                </span>
                                <p className="text-gray-600 mt-3">{item.description}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>
        );
    }
