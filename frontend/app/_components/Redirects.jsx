'use client';
import { useRouter } from 'next/navigation'; // Import useRouter from next/navigation
import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Redirects = () => {
  const router = useRouter(); // Initialize the router instance for navigation
  const { ref: ref1, inView: inView1 } = useInView({ triggerOnce: true });
  const { ref: ref2, inView: inView2 } = useInView({ triggerOnce: true });
  const { ref: ref3, inView: inView3 } = useInView({ triggerOnce: true });

  const controls1 = useAnimation();
  const controls2 = useAnimation();
  const controls3 = useAnimation();

  useEffect(() => {
    if (inView1) {
      controls1.start({
        opacity: 1,
        scale: 1,
        transition: { duration: 0.8, ease: 'easeOut' },
      });
    }
    if (inView2) {
      controls2.start({
        opacity: 1,
        scale: 1,
        transition: { duration: 0.8, ease: 'easeOut' },
      });
    }
    if (inView3) {
      controls3.start({
        opacity: 1,
        scale: 1,
        transition: { duration: 0.8, ease: 'easeOut' },
      });
    }
  }, [inView1, inView2, inView3, controls1, controls2, controls3]);

  // Function to handle navigation on click
  const handleNavigation = (path) => {
    router.push(path); // Navigate to the specified path
  };

  return (
    <main className="p-10 mt-36">
      <div className="flex flex-col gap-16 md:flex-row md:justify-center md:gap-16 md:px-16">
        {/* Card 1: Projects */}
        <motion.div
          ref={ref1}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={controls1}
          className="relative rounded-2xl overflow-hidden w-full h-96 md:h-[350px] md:w-[250px] flex items-end shadow-xl border-2 border-gray-300 backdrop-filter backdrop-blur-md bg-opacity-10 bg-gray-400 transition-transform cursor-pointer"
          onClick={() => handleNavigation('/projects')} // Navigate to /projects
        >
          <img
            className="absolute -left-1/2 h-fit bottom-10"
            src="/figur_laptop.png"
            alt="Laptop figure"
          />
          <div className="absolute right-1/4">
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="text-4xl text-white mb-5"
            >
              - Projects
            </motion.p>
          </div>
        </motion.div>

        {/* Card 2: About */}
        <motion.div
          ref={ref2}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={controls2}
          className="relative rounded-2xl overflow-hidden w-full h-96 md:h-[350px] md:w-[250px] flex items-end shadow-xl border-2 border-gray-300 backdrop-filter backdrop-blur-md bg-opacity-10 bg-gray-400 transition-transform cursor-pointer"
          onClick={() => handleNavigation('/about')} // Navigate to /about
        >
          <img
            className="absolute -left-1/2 h-fit bottom-10"
            src="/figur_tennis.png"
            alt="Tennis figure"
          />
          <div className="absolute right-1/4">
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="text-4xl text-white mb-5"
            >
              - About
            </motion.p>
          </div>
        </motion.div>

        {/* Card 3: Contact */}
        <motion.div
          ref={ref3}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={controls3}
          className="relative rounded-2xl overflow-hidden w-full h-96 md:h-[350px] md:w-[250px] flex items-end shadow-xl border-2 border-gray-300 backdrop-filter backdrop-blur-md bg-opacity-10 bg-gray-400 transition-transform cursor-pointer"
          onClick={() => handleNavigation('/contact')} // Navigate to /contact
        >
          <img
            className="absolute -left-1/2 h-fit bottom-10"
            src="/figur_contact.png"
            alt="Contact figure"
          />
          <div className="absolute right-1/4">
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="text-4xl text-white mb-5"
            >
              - Contact
            </motion.p>
          </div>
        </motion.div>
      </div>
    </main>
  );
};

export default Redirects;
