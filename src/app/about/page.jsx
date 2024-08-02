"use client";
import Brain from "@/components/Brain";
import { motion, useInView, useScroll } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";
const list = [
    "Java",
    "JavaScript",
    "HTML",
    "CSS",
    "TypeScript",
    "SCSS",
    "ReactJS",
    "NodeJS",
    "ExpressJS",
    "TailWind CSS",
    "Mongoose",
    "VS Code",
    "Sublime Text",
    "API",
    "Postman",
    "MongoDB",
    "JWT",
    "Redux Toolkit",
    "Multer",
    "Cloudinary",
    "Firebase",
    "Stripe",
    "DBMS",
    "Operating System",
    "Object-Oriented Programming (OOPS)",
    "Data Structures & Algorithms",
    "Computer Networks"
]
const AboutPage = () => {
    const containerRef = useRef();

    const { scrollYProgress } = useScroll({ container: containerRef });

    const skillRef = useRef();
    // const isSkillRefInView = useInView(skillRef, {once:true});
    const isSkillRefInView = useInView(skillRef, { margin: "-100px" });

    const experienceRef = useRef();
    const isExperienceRefInView = useInView(experienceRef, { margin: "-100px" });
    return (
        <motion.div
            className="h-full"
            initial={{ y: "-200vh" }}
            animate={{ y: "0%" }}
            transition={{ duration: 1 }}
        >
            {/* CONTAINER */}
            <div className="h-full overflow-scroll lg:flex" ref={containerRef}>
                {/* TEXT CONTAINER */}
                <div className="p-4 sm:p-8 md:p-12 lg:p-20 xl:p-48 flex flex-col gap-24 md:gap-32 lg:gap-48 xl:gap-64 lg:w-2/3 lg:pr-0 xl:w-1/2">
                    {/* BIOGRAPHY CONTAINER */}
                    <div className="flex flex-col gap-12 justify-center">
                        {/* BIOGRAPHY IMAGE */}
                        <Image
                            src="/mujeeb.png"
                            alt=""
                            width={112}
                            height={112}
                            className="w-28 h-28 rounded-full object-cover"
                        />
                        {/* BIOGRAPHY TITLE */}
                        <h1 className="font-bold text-2xl">BIOGRAPHY</h1>
                        {/* BIOGRAPHY DESC */}
                        <p className="text-lg ">
                            I am Mujeeburrahman, a passionate software engineer and full stack web developer with a B.E. in Computer Science
                            from Chandigarh University, Mohali. Proficient in Java, JavaScript, HTML, CSS, TypeScript, and SCSS,
                            I specialize in developing dynamic web applications using ReactJS, NodeJS, ExpressJS, and TailWind CSS.
                            I have hands-on experience with MongoDB, JWT, Redux Toolkit, and Multer, and am adept at using tools like
                            VS Code, Sublime Text, and Postman.
                        </p>
                        {/* BIOGRAPHY QUOTE */}
                        <span className="italic">
                            &quot;Code is the bridge between dreams and reality, and every line written with purpose is a step towards innovation. &quot;
                        </span>
                        {/* BIOGRAPHY SIGN SVG*/}
                        <div className="self-end">
                            <svg width="130" height="138" viewBox="0 0 130 138" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M15 54C15 58.7456 26.8546 47.0557 27.4445 46.4444C38.5399 34.9466 46.808 15.7546 32.9556 2.26668C28.8367 -1.74382 32.3221 13.774 32.6889 19.5111C33.869 37.9716 35.4823 56.4655 35.4445 74.9778C35.4333 80.4244 36.8973 118.949 22.2 111.6" stroke="#121010" stroke-width="3" stroke-linecap="round" />
                                <path d="M21.4 97.2C21.4 89.5797 26.0704 75.5956 33.5778 72.3111C38.8879 69.9879 40.677 77.8644 41.0444 81.3778C41.6801 87.4563 37.6935 105.589 38.3333 99.5111C38.9583 93.5738 42.0707 87.9732 44.4667 82.6222C44.7961 81.8864 47.9557 72.6474 50.0222 77.1111C51.6325 80.5893 50.2223 85.1217 49.5778 88.6667C48.5591 94.2693 53.1958 77.8539 55.4445 72.6222C55.6012 72.2577 62.4265 57.0425 63.2222 64.0445C63.5118 66.5924 63.368 77.007 61.0444 78.6667C59.3163 79.9011 61.0687 74.3928 61.4889 72.3111C62.6854 66.383 64.3193 60.479 66.6445 54.8889C68.1794 51.1985 70.1454 47.3471 72.6889 44.2222C76.0585 40.0824 74.3181 47.0358 73.8445 48.1333C68.9612 59.4483 60.3554 69.0695 51.6222 77.5556C47.1404 81.9105 52.8625 80.105 56.6445 81.7778C63.2465 84.6979 67.9353 90.5494 73.5778 94.8444C79.3352 99.227 81.8582 95.9418 86.2 91.6" stroke="#121010" stroke-width="3" stroke-linecap="round" />
                                <path d="M2.20001 135.6C-0.383639 138.183 8.48961 131.857 11.8 130.311C45.6612 114.5 80.9988 101.858 114.733 85.8667C115.244 85.6247 131.439 74.481 127 80.4" stroke="#121010" stroke-width="3" stroke-linecap="round" />
                            </svg>

                        </div>
                        {/* BIOGRAPHY SCROLL SVG */}
                        <motion.svg
                            initial={{ opacity: 0.2, y: 0 }}
                            animate={{ opacity: 1, y: "10px" }}
                            transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            width={50}
                            height={50}
                        >
                            <path
                                d="M5 15C5 16.8565 5.73754 18.6371 7.05029 19.9498C8.36305 21.2626 10.1435 21.9999 12 21.9999C13.8565 21.9999 15.637 21.2626 16.9498 19.9498C18.2625 18.6371 19 16.8565 19 15V9C19 7.14348 18.2625 5.36305 16.9498 4.05029C15.637 2.73754 13.8565 2 12 2C10.1435 2 8.36305 2.73754 7.05029 4.05029C5.73754 5.36305 5 7.14348 5 9V15Z"
                                stroke="#000000"
                                strokeWidth="1"
                            ></path>
                            <path d="M12 6V14" stroke="#000000" strokeWidth="1"></path>
                            <path
                                d="M15 11L12 14L9 11"
                                stroke="#000000"
                                strokeWidth="1"
                            ></path>
                        </motion.svg>
                    </div>
                    {/* SKILLS CONTAINER */}
                    <div className="flex flex-col gap-12 justify-center" ref={skillRef}>
                        {/* SKILL TITLE */}
                        <motion.h1
                            initial={{ x: "-300px" }}
                            animate={isSkillRefInView ? { x: 0 } : {}}
                            transition={{ delay: 0.2 }}
                            className="font-bold text-2xl"
                        >
                            SKILLS
                        </motion.h1>
                        {/* SKILL LIST */}
                        <motion.div
                            initial={{ x: "-300px" }}
                            animate={isSkillRefInView ? { x: 0 } : {}}
                            className="flex gap-4 flex-wrap"
                        >
                            {list.map((li) => (
                                <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black" key={li}>
                                    {li}
                                </div>
                            ))}
                        </motion.div>
                        {/* SKILL SCROLL SVG */}
                        <motion.svg
                            initial={{ opacity: 0.2, y: 0 }}
                            animate={{ opacity: 1, y: "10px" }}
                            transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            width={50}
                            height={50}
                        >
                            <path
                                d="M5 15C5 16.8565 5.73754 18.6371 7.05029 19.9498C8.36305 21.2626 10.1435 21.9999 12 21.9999C13.8565 21.9999 15.637 21.2626 16.9498 19.9498C18.2625 18.6371 19 16.8565 19 15V9C19 7.14348 18.2625 5.36305 16.9498 4.05029C15.637 2.73754 13.8565 2 12 2C10.1435 2 8.36305 2.73754 7.05029 4.05029C5.73754 5.36305 5 7.14348 5 9V15Z"
                                stroke="#000000"
                                strokeWidth="1"
                            ></path>
                            <path d="M12 6V14" stroke="#000000" strokeWidth="1"></path>
                            <path
                                d="M15 11L12 14L9 11"
                                stroke="#000000"
                                strokeWidth="1"
                            ></path>
                        </motion.svg>
                    </div>
                    {/* EXPERIENCE CONTAINER */}
                    <div
                        className="flex flex-col gap-12 justify-center pb-48"
                        ref={experienceRef}
                    >
                        {/* EXPERIENCE TITLE */}
                        <motion.h1
                            initial={{ x: "-300px" }}
                            animate={isExperienceRefInView ? { x: "0" } : {}}
                            transition={{ delay: 0.2 }}
                            className="font-bold text-2xl"
                        >
                            EDUCATION
                        </motion.h1>
                        {/* EXPERIENCE LIST */}
                        <motion.div
                            initial={{ x: "-300px" }}
                            animate={isExperienceRefInView ? { x: "0" } : {}}
                            className=""
                        >
                            {/* EXPERIENCE LIST ITEM */}
                            <div className="flex justify-between h-48">
                                {/* LEFT */}
                                <div className="w-1/3 ">
                                    {/* Education TITLE */}
                                    <div className="bg-white p-3 font-semibold rounded-b-lg rounded-s-lg">
                                        Bachelor of Engineering
                                    </div>
                                    {/* Education DESC */}
                                    <div className="p-3 text-sm italic">
                                        78.8 %.{" "}
                                    </div>
                                    {/* Education DATE */}
                                    <div className="p-3 text-red-400 text-sm font-semibold">
                                        2020-2024
                                    </div>
                                    {/* Education COMPANY */}
                                    <div className="p-1 rounded bg-white text-sm font-semibold w-fit">
                                        Chandigarh University
                                    </div>
                                </div>
                                {/* CENTER */}
                                <div className="w-1/6 flex justify-center">
                                    {/* LINE */}
                                    <div className="w-1 h-full bg-gray-600 rounded relative">
                                        {/* LINE CIRCLE */}
                                        <div className="absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2"></div>
                                    </div>
                                </div>
                                {/* RIGHT */}
                                <div className="w-1/3 "></div>
                            </div>
                            {/* EXPERIENCE LIST ITEM */}
                            <div className="flex justify-between h-48">
                                {/* LEFT */}
                                <div className="w-1/3 "></div>
                                {/* CENTER */}
                                <div className="w-1/6 flex justify-center">
                                    {/* LINE */}
                                    <div className="w-1 h-full bg-gray-600 rounded relative">
                                        {/* LINE CIRCLE */}
                                        <div className="absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2"></div>
                                    </div>
                                </div>
                                {/* RIGHT */}
                                <div className="w-1/3 ">
                                    {/* Education TITLE */}
                                    <div className="bg-white p-3 font-semibold rounded-b-lg rounded-s-lg">
                                        Senior Secondary School
                                    </div>
                                    {/* Education DESC */}
                                    <div className="p-3 text-sm italic">
                                        92.2 %{" "}
                                    </div>
                                    {/* Education DATE */}
                                    <div className="p-3 text-red-400 text-sm font-semibold">
                                        2017 - 2019{" "}
                                    </div>
                                    {/* Education School */}
                                    <div className="p-1 rounded bg-white text-sm font-semibold w-fit">
                                        Siddharth Public School
                                    </div>
                                </div>
                            </div>
                            {/* EXPERIENCE LIST ITEM */}
                            <div className="flex justify-between h-48">
                                {/* LEFT */}
                                <div className="w-1/3 ">
                                    {/* Education TITLE */}
                                    <div className="bg-white p-3 font-semibold rounded-b-lg rounded-s-lg">
                                        High School{" "}
                                    </div>
                                    {/* Education DESC */}
                                    <div className="p-3 text-sm italic">
                                        82.3 %.{" "}
                                    </div>
                                    {/* Education DATE */}
                                    <div className="p-3 text-red-400 text-sm font-semibold">
                                        2016-2017{" "}
                                    </div>
                                    <div className="p-1 rounded bg-white text-sm font-semibold w-fit">
                                        Safa High School
                                    </div>
                                </div>
                                {/* CENTER */}
                                <div className="w-1/6 flex justify-center">
                                    {/* LINE */}
                                    <div className="w-1 h-full bg-gray-600 rounded relative">
                                        {/* LINE CIRCLE */}
                                        <div className="absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2"></div>
                                    </div>
                                </div>
                                {/* RIGHT */}
                                <div className="w-1/3 "></div>
                            </div>
                        </motion.div>
                    </div>
                </div>
                {/* SVG CONTAINER */}
                <div className="hidden lg:block w-1/3 sticky top-0 z-30 xl:w-1/2">
                    <Brain scrollYProgress={scrollYProgress} />
                </div>
            </div>
        </motion.div>
    );
};

export default AboutPage;