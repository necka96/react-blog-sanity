import { PortableText } from "@portabletext/react";
import { getImageDimensions } from "@sanity/asset-utils";
import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { slideIn, staggerContainer } from "../animation";
import { client, urlFor } from "../client";
import Footer from "../components/Footer";
import Nav from "../components/Nav";
import { fadeIn } from "./../animation";
import Preloader from "./../wrapper/Preloader";

const SampleImageComponent = ({ value, isInline }) => {
  const { width, height } = getImageDimensions(value);
  return (
    <img
      src={urlFor()
        .image(value)
        .width(isInline ? 100 : 800)
        .fit("max")
        .auto("format")
        .url()}
      alt={value.alt || " "}
      loading='lazy'
      className='rounded-lg shadow-lg'
      style={{
        // Display alongside text if image appears inside a block text span
        display: isInline ? "inline-block " : "block",

        // Avoid jumping around with aspect-ratio CSS property
        aspectRatio: width / height,
        margin: "1rem auto",
        height: "25rem",
        mixBlendMode: "difference",
      }}
    />
  );
};

const SingleBlog = () => {
  const components = {
    types: {
      image: SampleImageComponent,
      // Any other custom types you have in your content
      // Examples: mapLocation, contactForm, code, featuredProjects, latestNews, etc.
    },
    block: {
      // Ex. 1: customizing common block types
      h1: ({ children }) => (
        <h1 className='text-4xl mb-6 text-center'>{children}</h1>
      ),

      // Ex. 2: rendering custom styles
      h2: ({ children }) => <h2 className='text-2xl my-6 '>{children}</h2>,
    },
    list: {
      // Ex. 1: customizing common list types
      bullet: ({ children }) => (
        <ul className='my-5 mx-auto w-[80%] max-w-3xl'>{children}</ul>
      ),
      number: ({ children }) => <ol className='my-5'>{children}</ol>,

      // Ex. 2: rendering custom lists
      checkmarks: ({ children }) => (
        <ol className='mx-auto text-lg'>{children}</ol>
      ),
    },
    listItem: {
      // Ex. 1: customizing common list types
      bullet: ({ children }) => (
        <li style={{ listStyleType: "disclosure-closed" }}>{children}</li>
      ),

      // Ex. 2: rendering custom list items
      checkmarks: ({ children }) => <li>✅ {children}</li>,
    },
  };
  const [singlePost, setSinglePost] = useState([]);
  const { slug } = useParams();
  const [preloader, setPreloader] = useState(true);
  useEffect(() => {
    const query = `*[slug.current == "${slug}"]{
   title,
   _id,
   slug,
   mainImage{
    asset->{
     _id,
     url
    }
   },
   body,
   "name": author->name,
   "authorImage": author->image,
   
   
  }`;
    client.fetch(query).then((data) => {
      setSinglePost(data);
    });
    const time = setTimeout(() => {
      setPreloader(false);
    }, 2500);

    return () => {
      clearInterval(time);
      setPreloader(false);
    };
  }, [slug]);

  return (
    <Preloader loading={preloader}>
      <Nav />
      <motion.main
        className='bg-gray-200 min-h-screen p-5 md:p-12'
        variants={staggerContainer}
        initial='hidden'
        whileInView='show'
        viewport={{ once: false }}
      >
        <motion.article
          className='w-full max-w-4xl mx-auto shadow-lg bg-green-100 rounded-lg'
          variants={slideIn("left", "tween", 0.2, 1)}
        >
          {singlePost.map((item) => (
            <motion.header
              className='realtive'
              key={item.slug.current}
              variants={staggerContainer}
              initial='hidden'
              whileInView='show'
              viewport={{ once: false, amount: 0.25 }}
            >
              {/**  <div className='absolute w-[90%] mx-auto top-1/2 flex items-center justify-center p-8 '>
                <div className='bg-white bg-opacity-75 rounded p-12'>
                  <h1 className='sans-serif text-3xl lg:text-6xl mb-4'>
                    {item.title}
                  </h1>
                  <div className='flex justify-center text-gray-800'>
                    <img
                      src={urlFor(item.authorImage).url()}
                      alt={item.name}
                      className='w-20 h-20 rounded-full object-cover'
                    />
                  </div> 
                </div>
              </div>*/}
              <motion.img
                src={urlFor(item.mainImage.asset.url)}
                alt={item.title}
                className='w-full max-h-[35rem] object-cover object-center rounded-lg'
                variants={slideIn("left", "tween", 0.7, 1)}
              />
            </motion.header>
          ))}
        </motion.article>
        {singlePost.map((item, index) => (
          <motion.div
            className='md:px-16 lg:px-48 py-12 lg:py-28 prose lg:prose-xl max-w-full'
            key={index}
            variants={staggerContainer}
            initial='hidden'
            whileInView='show'
            viewport={{ once: false, amount: 0.2 }}
          >
            <motion.div variants={fadeIn("left", "tween", 0.6, 1)}>
              <PortableText value={item.body} components={components} />
            </motion.div>
          </motion.div>
        ))}
      </motion.main>
      <Footer />
    </Preloader>
  );
};

export default SingleBlog;
