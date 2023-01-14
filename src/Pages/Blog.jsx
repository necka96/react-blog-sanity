import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import Nav from "../components/Nav";
import Preloader from "../wrapper/Preloader";
import { fadeIn, staggerContainer } from "./../animation";
import { client, urlFor } from "./../client";
import { Text } from "./../components/Text";
const Blog = () => {
  const [postData, setPost] = useState([]);
  const [preloader, setPreloader] = useState(true);
  useEffect(() => {
    const query = '*[_type == "post"]';
    client.fetch(query).then((data) => {
      setPost(data);
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
      <main className='bg-green-100 min-h-screen md:p-12 p-5 '>
        <motion.section
          className='container mx-auto'
          variants={staggerContainer}
          initial='hidden'
          whileInView='show'
          viewport={{ once: false, amount: 0.25 }}
        >
          <Text text='Blog Post Page' textStyles='text-3xl md:text-5xl' />
          <motion.h2
            className='text-lg text-gray-600 flex justify-center mb-12 text-center my-2'
            variants={fadeIn("up", "tween", 0.2, 1)}
          >
            Welcome to my page of blog post
          </motion.h2>
          <motion.div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
            {postData &&
              postData.map((post, index) => (
                <motion.article>
                  <Link
                    to={"/blog/" + post.slug.current}
                    key={post.slug.current}
                  >
                    <motion.div
                      variants={staggerContainer}
                      initial='hidden'
                      whileInView='show'
                      viewport={{ once: false, amount: 0.25 }}
                    >
                      <motion.span
                        className='block h-64 relative rounded shadow leading-snug bg-white border-l-8 border-green-400'
                        key={index}
                        variants={fadeIn("right", "tween", 0.2, 1)}
                      >
                        <img
                          src={urlFor(post.mainImage)}
                          alt={post.mainImage.alt}
                          className='w-full h-full rounded-r object-cover absolute'
                        />
                        <span className='relative h-full flex justify-end items-end pr-4 pb-4'>
                          <h3 className='text-gray-800 text-lg font-blog px-3 py-4 bg-green-400  bg-opacity-75 rounded'>
                            {post.title}
                          </h3>
                        </span>
                      </motion.span>
                    </motion.div>
                  </Link>
                </motion.article>
              ))}
          </motion.div>
        </motion.section>
      </main>
      <Footer />
    </Preloader>
  );
};

export default Blog;
