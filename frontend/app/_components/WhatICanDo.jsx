'use client';

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const WhatICanDo = () => {
  const [openSections, setOpenSections] = useState({
    website: false,
    webApp: false,
    photography: false,
  });
  const [isSectionInView, setIsSectionInView] = useState(false);
  const sectionRef = useRef(null);

  const toggleSection = (section) => {
    setOpenSections((prevState) => ({
      ...prevState,
      [section]: !prevState[section],
    }));
  };

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;

      const sectionTop = sectionRef.current.getBoundingClientRect().top;
      const sectionBottom = sectionRef.current.getBoundingClientRect().bottom;

      if (sectionTop <= window.innerHeight / 2 && sectionBottom >= window.innerHeight / 2) {
        setIsSectionInView(true);
      } else {
        setIsSectionInView(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    if (isSectionInView) {
      document.body.style.backgroundColor = 'white';
      document.body.style.transition = 'background-color 0.5s ease';
    } else {
      document.body.style.backgroundColor = '#24232D';
      document.body.style.transition = 'background-color 0.5s ease';
    }
  }, [isSectionInView]);

  return (
    <main
      className={isSectionInView ? 'text-black' : 'text-white'}
      style={{ transition: 'color 0.5s ease' }}
    >
      <div ref={sectionRef} className={ isSectionInView ? "mt-28 h-[70dvh] flex flex-col justify-around" : "mt-28 h-[70dvh]  flex flex-col justify-around"}>
        <div className="pl-5">
          <div>
            <h2 className="text-5xl w-4/6 font-medium">
              WHAT I CAN OFFER <span className='text-[#FF4848]'>YOU</span>
            </h2>
          </div>
          <div className="mt-5 flex flex-col gap-7">
            {/* Website Section */}
            <div>
              <div
                className="flex items-center gap-2 cursor-pointer"
                onClick={() => toggleSection('website')}
              >
                <motion.img
                  className={`h-5 transition-transform duration-500 ${
                    openSections.website ? 'rotate-180' : ''
                  }`}
                  src="/plus.png"
                  alt="missing plus"
                  initial={{ rotate: 0 }}
                  animate={{ rotate: openSections.website ? 180 : 0 }}
                />
                <motion.h3
                  className="text-4xl font-medium"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  Website
                </motion.h3>
              </div>
              <AnimatePresence>
                {openSections.website && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.5, ease: 'easeInOut' }}
                    className="overflow-hidden"
                  >
                    <motion.div
                      className="mt-3 pl-8 text-xl"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.1, duration: 0.5 }}
                    >
                      <p>
                        I can create modern, responsive websites that are tailored
                        to your needs. Whether you need a personal blog, a business
                        site, or a portfolio, I can deliver a high-quality website
                        that looks great on any device.
                      </p>
                    </motion.div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Web Application Section */}
            <div>
              <div
                className="flex items-center gap-2 cursor-pointer"
                onClick={() => toggleSection('webApp')}
              >
                <motion.img
                  className={`h-5 transition-transform duration-500 ${
                    openSections.webApp ? 'rotate-180' : ''
                  }`}
                  src="/plus.png"
                  alt="missing plus"
                  initial={{ rotate: 0 }}
                  animate={{ rotate: openSections.webApp ? 180 : 0 }}
                />
                <motion.h3
                  className="text-4xl font-medium"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  Web Application
                </motion.h3>
              </div>
              <AnimatePresence>
                {openSections.webApp && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.5, ease: 'easeInOut' }}
                    className="overflow-hidden"
                  >
                    <motion.div
                      className="mt-3 pl-8 text-xl"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.1, duration: 0.5 }}
                    >
                      <p>
                        I specialize in building web applications that are robust,
                        scalable, and efficient. From single-page applications to
                        complex multi-user systems, I can develop solutions that
                        meet your specific business requirements.
                      </p>
                    </motion.div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Photography Section */}
            <div>
              <div
                className="flex items-center gap-2 cursor-pointer"
                onClick={() => toggleSection('photography')}
              >
                <motion.img
                  className={`h-5 transition-transform duration-500 ${
                    openSections.photography ? 'rotate-180' : ''
                  }`}
                  src="/plus.png"
                  alt="missing plus"
                  initial={{ rotate: 0 }}
                  animate={{ rotate: openSections.photography ? 180 : 0 }}
                />
                <motion.h3
                  className="text-4xl font-medium"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  Photography
                </motion.h3>
              </div>
              <AnimatePresence>
                {openSections.photography && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.5, ease: 'easeInOut' }}
                    className="overflow-hidden"
                  >
                    <motion.div
                      className="mt-3 pl-8 text-xl"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.1, duration: 0.5 }}
                    >
                      <p>
                        With a passion for photography, I can offer high-quality
                        photo services. Whether you need portraits, product
                        photography, or event coverage, I can provide images that
                        capture the essence of the moment.
                      </p>
                    </motion.div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default WhatICanDo;
