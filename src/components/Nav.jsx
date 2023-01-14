import { motion } from "framer-motion";
import React from "react";
import { NavLink } from "react-router-dom";
import { SocialIcon } from "react-social-icons";
import { navVariants } from "../animation";
const Nav = ({ transparent }) => {
  return (
    <header
      className={`${
        transparent ? "bg-none absolute " : "bg-[#242132] sticky top-0"
      } z-10  w-full `}
    >
      <motion.div
        className='container mx-auto flex justify-between items-center  md:items-stretch flex-col md:flex-row md:px-20'
        variants={navVariants}
        initial='hidden'
        whileInView='show'
      >
        <nav className='flex'>
          <NavLink
            to='/'
            exact
            className={({ isActive }) =>
              isActive
                ? "text-green-400   md:text-5xl inline-flex items-center py-3 px-3 md:my-6  text-2xl  font-bold sans-serif tracking-widest  transition-all "
                : "inline-flex items-center py-3 px-3 md:my-6  text-blue-100 hover:text-green-400 text-lg  font-bold sans-serif tracking-widest transition-all"
            }
          >
            Home
          </NavLink>
          <NavLink
            to='/about'
            className={({ isActive }) =>
              isActive
                ? "text-green-400 md:text-5xl inline-flex items-center py-3 px-3 md:my-6  text-2xl   font-bold sans-serif tracking-widest  transition-all "
                : "inline-flex items-center py-3 px-3 md:my-6  text-blue-100 hover:text-green-400 text-lg  font-bold sans-serif tracking-widest transition-all"
            }
          >
            About
          </NavLink>
          <NavLink
            to='/blog'
            className={({ isActive }) =>
              isActive
                ? "text-green-400 md:text-5xl inline-flex items-center py-3 px-3 md:my-6  text-2xl  font-bold sans-serif tracking-widest  transition-all "
                : "inline-flex items-center py-3 px-3 md:my-6  text-blue-100 hover:text-green-400 text-lg  font-bold sans-serif tracking-widest transition-all"
            }
          >
            Blog
          </NavLink>
          <NavLink
            to='/project'
            className={({ isActive }) =>
              isActive
                ? "text-green-400 md:text-5xl inline-flex items-center py-3 px-3 md:my-6  text-2xl   font-bold sans-serif tracking-widest  transition-all "
                : "inline-flex items-center py-3 px-3 md:my-6  text-blue-100 hover:text-green-400 text-lg  font-bold sans-serif tracking-widest transition-all"
            }
          >
            Projects
          </NavLink>
        </nav>
        <div className='inline-flex py-3  md:my-6'>
          <SocialIcon
            url='https://www.facebook.com/GreenArrowSpectre/'
            className='mr-4'
            target='_blank'
            fgColor='#fff'
            style={{ height: 35, width: 35 }}
          />
          <SocialIcon
            url='https://www.instagram.com/necka96/'
            className='mr-4'
            target='_blank'
            fgColor='#fff'
            style={{ height: 35, width: 35 }}
          />
          <SocialIcon
            url='https://www.linkedin.com/in/nemanja-djordjevic-26194b19b/'
            className='mr-4'
            target='_blank'
            fgColor='#fff'
            style={{ height: 35, width: 35 }}
          />
          <SocialIcon
            url='https://github.com/necka96'
            className='mr-4'
            target='_blank'
            fgColor='#fff'
            style={{ height: 35, width: 35 }}
          />
          <SocialIcon
            url='https://nemanjadjordjevicportfolio.netlify.app/'
            className='mr-4'
            target='_blank'
            fgColor='#fff'
            style={{ height: 35, width: 35 }}
          />
        </div>
      </motion.div>
    </header>
  );
};

export default Nav;
