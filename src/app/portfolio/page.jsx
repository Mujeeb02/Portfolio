"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";

const items = [
  {
    id: 1,
    color: "from-red-300 to-blue-300",
    title: "Hotel Booking",
    desc:"A comprehensive hotel booking platform using the MERN stack with TypeScript. Features include secure user authentication (JWT and cookies), hotel search, filter, and sort, booking management, and Stripe payments. Integrates Cloudinary for image uploads. Technologies: React.js, Context API, Node.js, Express.js, MongoDB.",
    img: "/hotel.png",
    link: "https://mern-booking-app-1-2frx.onrender.com/",
  },
  {
    id: 2,
    color: "from-blue-300 to-violet-300",
    title: "QuickX Ecommerce",
    desc:"An ecommerce platform using the MERN stack, Redux Toolkit, and TypeScript. Features include Google authentication via Firebase, user/admin views, and Stripe for payments. Users can search, view orders, and make purchases; admins manage products and users. Technologies: React.js, Node.js, Express.js, MongoDB, SCSS, Multer.",
    img: "/quickx.png",
    link: "https://shop-next-omega-woad.vercel.app/",
  },
  {
    id: 3,
    color: "from-purple-300 to-red-300",
    title: "Umedia Movie App",
    desc:"The Movie Recommendation and Search project is designed to provide users with a seamless experience in discovering and exploring movies and web series. Leveraging React and Tailwind CSS, this application fetches data from the TMDB database using Axios for API requests. The project is divided into three main categories: movies, web series, and actions.",
    img: "/umedia.png",
    link: "https://movie-app-lake-nu.vercel.app/",
  },
  {
    id: 4,
    color: "from-purple-300 to-red-300",
    title: "Umedia Movie App",
    desc:"The Movie Recommendation and Search project is designed to provide users with a seamless experience in discovering and exploring movies and web series. Leveraging React and Tailwind CSS, this application fetches data from the TMDB database using Axios for API requests. The project is divided into three main categories: movies, web series, and actions.",
    img: "/umedia.png",
    link: "https://movie-app-lake-nu.vercel.app/",
  },
];

const Portfolio = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({ target: ref });
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-80%"]);

  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      <div className="h-[600vh] relative" ref={ref}>
        <div className="w-screen h-[calc(100vh-6rem)] flex items-center justify-center text-8xl text-center">
          My Works
        </div>
        <div className="sticky top-0 flex h-screen gap-4 items-center overflow-hidden">
          <motion.div style={{ x }} className="flex">
            <div className="h-screen w-screen flex items-center justify-center bg-gradient-to-r from-purple-300 to-red-300" />
            {items.map((item) => (
              <div
                className={`h-screen w-screen flex items-center justify-center bg-gradient-to-r ${item.color}`}
                key={item.id}
              >
                <div className="flex flex-col gap-8 text-white">
                  <h1 className="text-xl font-bold md:text-2xl lg:text-4xl xl:text-6xl">
                    {item.title}
                  </h1>
                  <div className="relative w-80 h-56 md:w-96 md:h-64 lg:w-[500px] lg:h-[350px] xl:w-[400px] xl:h-[300px] rounded-md">
                    <Image src={item.img} alt="" fill />
                  </div>
                  <p className="w-80 md:w96 lg:w-[500px] lg:text-lg xl:w-[600px]">
                    {item.desc}
                  </p>
                  <Link href={item.link} className="flex justify-end">
                    <button className="p-2 text-sm md:p-4 md:text-md lg:p-8 lg:text-lg bg-white text-gray-600 font-semibold m-4 rounded">See Demo</button>
                  </Link>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
      <div className="w-screen h-screen flex flex-col gap-16 items-center justify-center text-center">
        <h1 className="text-8xl">Do you have a project?</h1>
        <div className="relative">
          <motion.svg
            animate={{ rotate: 360 }}
            transition={{ duration: 8, ease: "linear", repeat: Infinity }}
            viewBox="0 0 300 300"
            className="w-64 h-64 md:w-[500px] md:h-[500px] "
          >
            <defs>
              <path
                id="circlePath"
                d="M 150, 150 m -60, 0 a 60,60 0 0,1 120,0 a 60,60 0 0,1 -120,0 "
              />
            </defs>
            <text fill="#000">
              <textPath xlinkHref="#circlePath" className="text-xl">
                Front-end Developer and UI Designer
              </textPath>
            </text>
          </motion.svg>
          <Link
            href="/contact"
            className="w-16 h-16 md:w-28 md:h-28 absolute top-0 left-0 right-0 bottom-0 m-auto bg-black text-white rounded-full flex items-center justify-center"
          >
            Hire Me
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default Portfolio;