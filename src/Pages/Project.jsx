import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import { fadeIn, staggerContainer } from "../animation";
import Footer from "../components/Footer";
import Nav from "../components/Nav";
import { Text } from "../components/Text";
import Preloader from "../wrapper/Preloader";
import { client, urlFor } from "./../client";

const Project = () => {
  // const [prjectData, setProjectData] = useState([]);
  // useEffect(() => {
  //   const query = '*[_type == "project"]';
  //   client.fetch(query).then((data) => {
  //     setProjectData(data);
  //   });
  // }, []);

  const [workData, setWorkData] = useState([]);
  const [preloader, setPreloader] = useState(true);
  useEffect(() => {
    const query = '*[_type == "work"]';
    client.fetch(query).then((data) => {
      setWorkData(data);
    });
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
      <Nav />
      <main className='bg-green-100 min-h-screen p-12'>
        <motion.section
          className='container mx-auto'
          variants={staggerContainer}
          initial='hidden'
          whileInView='show'
          viewport={{ once: false }}
        >
          <Text text=' My Project' textStyles='text-3xl md:text-5xl' />
          <motion.h2
            className='text-lg text-gray-600 flex justify-center mb-12 my-2 '
            variants={fadeIn("right", "tween", 0.2, 1)}
          >
            Welcome to page of my project
          </motion.h2>
          <section className='grid md:grid-cols-3 lg:grid-cols-5 gap-8'>
            {/** prjectData &&
              prjectData.map((project, index) => (
                <article className='realativ rounded-lg shadow-xl bg-white p-16'>
                  <h3 className='text-gray-800 text-xl md:text-3xl mb-3 font-bold  hover:text-red-700'>
                    <a
                      href={project.Link}
                      alt={project.title}
                      target='_blank'
                      rel='noopener noreferrer'
                    >
                      {project.title}
                    </a>
                  </h3>
                  <div className='text-gray-500 text-xs '>
                    <div className='grid md:grid-cols-3 lg:grid-cols-4 gap-4'>
                      <span>
                        <strong className='font-bold'>Finished on</strong>:{" "}
                        <br />
                        {new Date(project.date).toLocaleDateString()}
                      </span>
                      <span>
                        <strong className='font-bold'>Company</strong>: <br />
                        {project.place}
                      </span>
                      <span>
                        <strong className='font-bold'>Type</strong>:<br />
                        {project.projectType}
                      </span>
                      <span>
                        <strong className='font-bold'>Tags</strong>:<br />
                        {project.tags}
                      </span>
                    </div>
                    <p className='my-6 text-lh text-gray-700 leading-relaxed'>
                      {project.description}
                    </p>

                    <a
                      href={project.Link}
                      rel='noopener noreferrer'
                      target='_blank'
                      className='text-red-500 font-bold hover:underline hover:text-red-400'
                    >
                      <span role='img' aria-label='right-pointer'>
                        👉
                      </span>{" "}
                      View The Project
                    </a>
                  </div>
                </article>
              ))*/}
            {workData.map((work) => (
              <motion.div
                key={Math.random()}
                variants={staggerContainer}
                initial='hidden'
                whileInView='show'
                viewport={{ once: false, amount: 0.25 }}
              >
                <motion.a
                  href={work.website}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='app__work-img '
                  style={{
                    backgroundImage: `url(${urlFor(work.img)})`,
                  }}
                  loading='eager'
                  variants={fadeIn("up", "tween", 0.2, 1)}
                ></motion.a>
              </motion.div>
            ))}
          </section>
        </motion.section>
      </main>
      <Footer />
    </Preloader>
  );
};

export default Project;
