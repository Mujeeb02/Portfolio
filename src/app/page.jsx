  "use client";

  import Image from "next/image";
  import { motion } from "framer-motion";

  const Homepage = () => {
    return (
      <motion.div
        className="h-full"
        initial={{ y: "-200vh" }}
        animate={{ y: "0%" }}
        transition={{ duration: 1 }}
      >
        <div className="h-full flex flex-col lg:flex-row px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48">
          {/* IMAGE CONTAINER */}
          <div className="h-1/3 lg:h-full lg:w-1/2 relative">
            <Image src="/mujeeb.png" alt="" fill className="object-contain" />
          </div>
          {/* TEXT CONTAINER */}
          <div className="pt-[40%] md:pt-[15%] lg:pt-[3%] lg:pl-8 h-1/2 lg:h-full lg:w-1/2 flex flex-col gap-8 items-center justify-center">
            {/* TITLE */}
            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
              Crafting <span className="text-blue-500">Digital Experiences</span>:
              <br/>
              Full Stack Web Development by
              <span className="text-green-500">Mujeeburrahman</span>.
            </h1>

            {/* DESC */}
            <p className="text-lg md:text-xl text-gray-700 mt-4">a software engineer and full stack developer. I turn ideas into seamless digital experiences, blending creativity and technical expertise. Let's build a more connected and vibrant digital world together.</p>

            {/* BUTTONS */}
            <div className="w-full flex gap-4">
              <button className="p-4 rounded-lg ring-1 ring-black bg-black text-white">
                View My Work
              </button>
              <button className="p-4 rounded-lg ring-1 ring-black">
                Contact Me
              </button>
            </div>
          </div>
        </div>
      </motion.div>
    );
  };

  export default Homepage;