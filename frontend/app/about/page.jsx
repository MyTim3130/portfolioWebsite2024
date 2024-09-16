'use client';
import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Navbar from '../_components/Navbar'; // Import the Navbar

const About = () => {
  const { ref: sectionRef, inView: sectionInView } = useInView({ triggerOnce: true });
  const { ref: skillsRef, inView: skillsInView } = useInView({ triggerOnce: true });
  const { ref: beliefsRef, inView: beliefsInView } = useInView({ triggerOnce: true });

  return (
    <main className="h-dvh w-full relative text-white">
      <Navbar /> {/* Include the Navbar */}

      {/* Add noise.png background */}
      <img
        src="/noise.png" // The noise texture you've used on other pages
        className="fixed h-dvh w-dvw top-0 left-0 -z-10"
        alt="grainy background"
      />

      {/* Main Intro Section */}
      <section ref={sectionRef} className="min-h-screen flex flex-col justify-center items-center text-center px-5 sm:px-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={sectionInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="max-w-5xl"
        >
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#FF4848]">
            Hi, I'm Tim
          </h1>
          <p className="text-lg sm:text-xl lg:text-2xl mt-4">
            A self-taught developer and photographer who’s passionate about bringing ideas to life, whether it’s through coding or capturing moments.
          </p>

          {/* Scaling and Centering of Image */}
          <motion.div
            className="w-full flex justify-center mt-10"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={sectionInView ? { scale: 1, opacity: 1 } : {}}
            transition={{ duration: 1, ease: 'easeOut' }}
          >
            <img
              src="/me.png" // Replace with your actual image
              alt="Tim Hausl-Kramper"
              className="w-2/3 sm:w-1/2 md:w-1/3 lg:w-1/4 rounded-full border-4 border-[#FF4848]"
            />
          </motion.div>
        </motion.div>
      </section>

      {/* Skills Section */}
      <section ref={skillsRef} className="min-h-screen bg-[#1E1D24] py-16 sm:py-20 px-5 sm:px-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={skillsInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: 'easeOut', staggerChildren: 0.2 }}
          className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 text-center"
        >
          <div className="flex flex-col items-center">
            <motion.img
              src="/webdev.svg" // Updated with your renamed icon
              alt="Web Development"
              className="h-28 w-28 sm:h-36 sm:w-36 lg:h-64 lg:w-64"
              whileHover={{ scale: 1.1 }}
            />
            <h3 className="text-2xl sm:text-3xl font-bold mt-4">Web Development</h3>
            <p className="mt-2 text-md sm:text-lg">
              Creating responsive websites, web apps, and games tailored to your needs.
            </p>
          </div>

          <div className="flex flex-col items-center">
            <motion.img
              src="/photography.svg" // Updated with your renamed icon
              alt="Photography"
              className="h-28 w-28 sm:h-36 sm:w-36 lg:h-64 lg:w-64"
              whileHover={{ scale: 1.1 }}
            />
            <h3 className="text-2xl sm:text-3xl font-bold mt-4">Photography</h3>
            <p className="mt-2 text-md sm:text-lg">
              Capturing moments, portraits, and product photography with precision.
            </p>
          </div>

          <div className="flex flex-col items-center">
            <motion.img
              src="/videoEditing.svg" // Updated with your renamed icon
              alt="Video Editing"
              className="h-28 w-28 sm:h-36 sm:w-36 lg:h-64 lg:w-64"
              whileHover={{ scale: 1.1 }}
            />
            <h3 className="text-2xl sm:text-3xl font-bold mt-4">Video Editing</h3>
            <p className="mt-2 text-md sm:text-lg">
              Professional video editing with attention to detail using Adobe Premiere and After Effects.
            </p>
          </div>
        </motion.div>
      </section>

      {/* Hobbies Section */}
      <section className="min-h-screen bg-[#24232D] py-16 sm:py-20 px-5 sm:px-10 flex flex-col items-center justify-center">
        <motion.h2
          className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#FF4848] mb-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          My Hobbies
        </motion.h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-16 max-w-6xl">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <img src="/sport.svg" alt="Tennis" className="h-28 w-28 sm:h-36 sm:w-36 lg:h-64 lg:w-64 mx-auto" /> {/* Tennis icon */}
            <h3 className="text-2xl sm:text-3xl font-bold mt-4">Tennis</h3>
            <p className="mt-2 text-md sm:text-lg">
              Staying active and competitive on the court.
            </p>
          </motion.div>

          <motion.div
            className="text-center"
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <img src="/programming.svg" alt="Programming" className="h-28 w-28 sm:h-36 sm:w-36 lg:h-64 lg:w-64 mx-auto" /> {/* Programming icon */}
            <h3 className="text-2xl sm:text-3xl font-bold mt-4">Programming</h3>
            <p className="mt-2 text-md sm:text-lg">
              Making my passion for coding my profession and always learning more.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Values Section */}
      <section ref={beliefsRef} className="min-h-screen bg-[#1E1D24] py-16 sm:py-20 px-5 sm:px-10 flex flex-col items-center justify-center">
        <motion.div
          initial={{ opacity: 0 }}
          animate={beliefsInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="max-w-4xl text-center"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#FF4848] mb-6">
            What I Believe In
          </h2>
          <p className="text-lg sm:text-xl lg:text-2xl">
            I value loyalty above all else — loyalty to my craft, my clients, and the vision that drives every project I work on.
          </p>
        </motion.div>
      </section>
    </main>
  );
};

export default About;
