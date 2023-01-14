import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import { RiArrowDownSLine } from "react-icons/ri";
import { Link } from "react-router-dom";
import { TypeAnimation } from "react-type-animation";
import { fade, fadeIn, staggerContainer } from "../animation";
import { Text } from "../components/Text";
import Preloader from "../wrapper/Preloader";
import Nav from "./../components/Nav";
const Home = () => {
  const [preloader, setPreloader] = useState(true);
  useEffect(() => {
    const time = setTimeout(() => {
      setPreloader(false);
    }, 2500);

    return () => {
      clearInterval(time);
      setPreloader(false);
    };
  }, []);
  return (
    <Preloader loading={preloader}>
      <Nav transparent={"transparent"} />
      <div className='w-full '>
        <div className='w-full h-[90vh] bg ' />
      </div>
      <motion.section
        variants={staggerContainer}
        initial='hidden'
        whileInView='show'
        className='relative flex flex-col justify-center items-center min-h-screen  pt-3  px-12'
      >
        <Text
          text="Aloha I'm Nemanja Djordjevic"
          textStyles='lg:text-6xl text-2xl text-center text-blue-100 font-bold  leading-none lg:leading-snug'
        />
        <motion.div>
          <motion.p
            variants={fade}
            className='text-xl text-blue-100 italic  sans-serif my-5 '
          >
            {""}
            <TypeAnimation
              sequence={[
                "I'm a front-end developer", // Types 'One'
                1000, // Waits 1s
                "I love codings", // Deletes 'One' and types 'Two'
                2000, // Waits 2s
                "and to share", // Types 'Three' without deleting 'Two'
                2000,
                "Welcome to my blog",
                3000,
              ]}
              wrapper='span'
              cursor={true}
              repeat={Infinity}
            />
          </motion.p>
        </motion.div>
        <motion.div variants={fadeIn("up", "tween", 0.2, 1)}>
          <Link
            to='/about'
            className='p-2 mt-5 text-blue-100 flex justify-center gap-2 items-center border rounded-md uppercase'
          >
            More about me <RiArrowDownSLine />
          </Link>
        </motion.div>
      </motion.section>
    </Preloader>
  );
};

export default Home;
