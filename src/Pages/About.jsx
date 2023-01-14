import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import SkillBar from "react-skillbars";
import { fadeIn, image, staggerContainer } from "../animation";
import cv from "../assets/cv-nemanja-djordjevic.pdf";
import Nav from "../components/Nav";
import { Text } from "../components/Text";
import Preloader from "../wrapper/Preloader";
import { client, urlFor } from "./../client";
import Footer from "./../components/Footer";
import TimeLine from "./../components/TimeLine";
const About = () => {
  const [aboutData, setAboutData] = useState([]);
  useEffect(() => {
    const query = '*[_type == "about"]';
    client.fetch(query).then((data) => {
      setAboutData(data);
    });
    const time = setTimeout(() => {
      setPreloader(false);
    }, 2500);

    return () => {
      clearInterval(time);
      setPreloader(false);
    };
  }, []);
  const skills = [
    { type: "Html", level: 90 },
    { type: "Css", level: 80 },
    { type: "Tailwind", level: 60 },
    { type: "Bootstrap", level: 50 },
    { type: "JS", level: 70 },
    { type: "Jquery", level: 40 },
    { type: "React", level: 60 },
    { type: "Java", level: 25 },
    { type: "Wordpress", level: 35 },
  ];
  const [preloader, setPreloader] = useState(true);

  return (
    <Preloader loading={preloader}>
      <Nav />
      <main className='bg-green-100 min-h-screen md:p-12 p-5'>
        <motion.section
          className='container mx-auto'
          variants={staggerContainer}
          initial='hidden'
          whileInView='show'
          viewport={{ once: false }}
        >
          <Text text='About' textStyles='text-3xl md:text-5xl' />
          <motion.h2
            className='text-lg text-gray-600 flex justify-center  text-center '
            variants={fadeIn("right", "tween", 0.2, 1)}
          >
            Let me introduce myself.
          </motion.h2>
          <div>
            {aboutData.map((about) => (
              <motion.div
                key={Math.random()}
                variants={staggerContainer}
                initial='hidden'
                whileInView='show'
                viewport={{ once: false, amount: 0.25 }}
                className='flex flex-col md:flex-row w-full max-w-3xl mx-auto p-5 gap-5 justify-center items-center'
              >
                <motion.img
                  variants={image("left")}
                  src={urlFor(about.img)}
                  alt='me'
                  className='w-52 h-52 rounded-full object-cover border-l-8 border-green-400'
                />

                <motion.p
                  className='text-gray-600 text-base text-justify'
                  variants={fadeIn("down", "tween", 0.2, 1)}
                >
                  {about.info}
                </motion.p>
              </motion.div>
            ))}
          </div>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-5 p-5 w-full max-w-4xl mx-auto my-5'>
            <div>
              {aboutData.map((about) => (
                <motion.div
                  key={Math.random()}
                  className='flex flex-col gap-4'
                  variants={staggerContainer}
                  viewport={{ once: false, amount: 0.25 }}
                  initial='hidden'
                  whileInView='show'
                >
                  <motion.div
                    className='flex flex-col '
                    variants={fadeIn("right", "tween", 0.5, 1)}
                  >
                    <h3 className='text-lg  font-bold uppercase  sans-serif tracking-wider'>
                      Profile
                    </h3>
                    <p className='text-gray-600 text-base text-justify'>
                      I am creative, persistent and communicative. I am ready to
                      work in a team and i want to be a FullStack programmer and
                      finish the college I started.
                    </p>
                  </motion.div>
                  <motion.div
                    className='flex flex-col '
                    variants={fadeIn("right", "tween", 0.6, 1)}
                  >
                    <h3 className='text-lg  font-bold uppercase  sans-serif tracking-wider'>
                      Full name:
                    </h3>
                    <p className='text-gray-600 text-base text-justify'>
                      {" "}
                      {about.fullName}
                    </p>
                  </motion.div>
                  <motion.div variants={fadeIn("right", "tween", 0.7, 1)}>
                    <h3 className='tracking-wider font-bold uppercase text-lg'>
                      Birth date:
                    </h3>
                    <p className='text-gray-600 text-base text-justify'>
                      {" "}
                      {about.birthDate}
                    </p>
                  </motion.div>
                  <motion.div variants={fadeIn("right", "tween", 0.8, 1)}>
                    <h3 className='tracking-wider font-bold uppercase text-lg'>
                      Job:
                    </h3>
                    <p className='text-gray-600 text-base text-justify'>
                      {" "}
                      {about.jobs}
                    </p>
                  </motion.div>
                  <motion.div variants={fadeIn("right", "tween", 0.9, 1)}>
                    <h3 className='tracking-wider font-bold uppercase text-lg'>
                      Website:
                    </h3>
                    <a
                      className='text-gray-600 text-base text-justify'
                      href={about.website}
                    >
                      {" "}
                      My portfolio
                    </a>
                  </motion.div>
                  <motion.div variants={fadeIn("right", "tween", 1, 1)}>
                    <h3 className='tracking-wider font-bold uppercase text-lg'>
                      Email:
                    </h3>
                    <a
                      className='text-gray-600 text-base text-justify'
                      href={`mailto:${about.email}`}
                    >
                      {" "}
                      {about.email}
                    </a>
                  </motion.div>
                  <motion.div variants={fadeIn("right", "tween", 1.1, 1)}>
                    <a
                      href={cv}
                      target='_blank'
                      rel='noopener noreferrer'
                      className='w-[70%] py-2 block text-center text-[#4ade80] hover:bg-[#4ade80] rounded bg-[#242132] hover:text-[#242132] cursor-pointer transition-all duration-500 ease-in-out'
                    >
                      Download cv
                    </a>
                  </motion.div>
                </motion.div>
              ))}
            </div>
            <motion.div
              className='flex flex-col gap-4'
              variants={staggerContainer}
              initial='hidden'
              whileInView='show'
              viewport={{ once: false, amount: 0.25 }}
            >
              <motion.div
                className='flex flex-col '
                variants={fadeIn("left", "tween", 0.5, 1)}
              >
                <h3 className='text-lg  font-bold uppercase  sans-serif tracking-wider'>
                  Skills
                </h3>
                <p className='text-gray-600 text-base text-justify'>
                  I like to learn, expand and improve my knowledge. There is
                  always room for improvement. I went to a web and java course,
                  but I just constantly learned these skills on platforms such
                  as udemy, scrimba, freeCodeCamp. Of course I also followed a
                  lot of tutorials on YouTube
                </p>
              </motion.div>
              <motion.div variants={fadeIn("up", "tween", 0.8, 1)}>
                <SkillBar
                  height={23}
                  skills={skills}
                  colors={{
                    bar: "#4ade80",
                    title: {
                      text: "#4ade80",
                      background: "#242132",
                    },
                  }}
                />
              </motion.div>
            </motion.div>
          </div>
          <TimeLine />
        </motion.section>
      </main>
      <Footer />
    </Preloader>
  );
};

export default About;
