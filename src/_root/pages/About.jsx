import React from 'react';
import { motion } from 'framer-motion';
import { AiFillGithub, AiFillLinkedin, AiOutlineMail } from 'react-icons/ai';
import { FaBriefcase } from 'react-icons/fa';
import { BiCameraMovie } from 'react-icons/bi';
import { RiMovie2Line } from 'react-icons/ri';
import { moviesLogo } from '../../assets';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1, delay: 0.5 }}
      className="flex flex-col justify-center items-center min-h-screen bg-slate-900 pt-16 px-4 sm:px-8 lg:px-16 xl:px-32"
    >
      <Link to="/" className="flex gap-1 h-24 cursor-pointer my-6 ">
                        <motion.img
                            src={moviesLogo}
                            className="h-20 object-contain"
                            alt="Movies Logo"
                            initial={{ y: -100, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ duration: 1, delay: 0.5 }}
                        />
                        <motion.span
                            className="text-babyblue flex self-center text-3xl font-semibold"
                            initial={{ x: -100, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ duration: 1, delay: 0.7 }}
                        >
                            Movie
                        </motion.span>
                    </Link>
      <motion.h1
        className="text-4xl font-bold mb-8 text-blue"
        whileHover={{ scale: 1.1 }}
      >
        About Movies
      </motion.h1>
      <div className="max-w-3xl text-center">
        <motion.p
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1 }}
          className="text-lg text-babyblue mb-4"
        >
          Cinema has been a significant part of our lives for decades. It
          entertains, educates, and inspires us. From classic films to the
          latest blockbusters, cinema offers something for everyone.
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="text-lg text-babyblue mb-4"
        >
          Whether you enjoy action-packed thrillers, heartwarming dramas, or
          hilarious comedies, there's a movie or TV show out there for you.
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 2 }}
          className="text-lg text-babyblue mb-4"
        >
          In this digital age, streaming platforms have revolutionized the way
          we consume content. From Netflix to Disney+, there's no shortage of
          options to explore.
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 2.5 }}
          className="text-lg text-babyblue mb-4"
        >
          Connect with me:
        </motion.p>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 3 }}
          className="flex justify-center mt-4 space-x-8"
        >
          <motion.a
            whileHover={{ scale: 1.2 }}
            className="text-blue text-4xl"
            href="https://github.com/hamzamohamed1911"
            target="_blank"
            rel="noopener noreferrer"
          >
            <AiFillGithub />
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.2 }}
            className="text-blue text-4xl"
            href="https://www.linkedin.com/in/hamza-m-417ab2105"
            target="_blank"
            rel="noopener noreferrer"
          >
            <AiFillLinkedin />
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.2 }}
            className="text-blue text-4xl"
            href="mailto:hamza.mohamed3737@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <AiOutlineMail />
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.2 }}
            className="text-blue text-4xl"
            href="https://hamzaportfolio-delta.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaBriefcase />
          </motion.a>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 3.5 }}
          className="flex justify-center mt-8 space-x-8"
        >
          <motion.a
            whileHover={{ scale: 1.1 }}
            className="text-blue text-3xl flex items-center"
            href="/movie"
          >
            <BiCameraMovie />
            <span className="ml-2">Movies</span>
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.1 }}
            className="text-blue text-3xl flex items-center"
            href="/tv"
          >
            <RiMovie2Line />
            <span className="ml-2">TV Shows</span>
          </motion.a>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default About;
