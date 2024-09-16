'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const WhatICanDo = () => {
  const [openSections, setOpenSections] = useState({
    website: false,
    webApp: false,
    photography: false,
  });

  const toggleSection = (section) => {
    setOpenSections((prevState) => ({
      ...prevState,
      [section]: !prevState[section],
    }));
  };

  return (
    <main className="mt-56">
      <div className="md:container md:mx-auto md:px-5 md:flex md:w-screen md:justify-evenly">
        <div className="flex flex-col md:flex-row md:justify-between md:items-start">
          <div className="mb-10 md:mb-0 md:w-1/2">
            <h2 className="text-5xl font-medium md:w-2/5">
              WHAT I CAN OFFER <span className='text-[#FF4848]'>YOU</span>
            </h2>
          </div>
          <div className="flex flex-col gap-7 md:w-1/2">
            {/* Website Section */}
            <div>
              <div
                className="flex items-center gap-2 cursor-pointer"
                onClick={() => toggleSection('website')}
              >
                <motion.img
                  className={`h-5 transition-transform duration-500 ${openSections.website ? 'rotate-180' : ''}`}
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
                      className="mt-3 text-xl max-w-xl"  // Set a max-width to prevent text from expanding too wide
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.1, duration: 0.5 }}
                    >
                      <p className='w-full'>
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
                  className={`h-5 transition-transform duration-500 ${openSections.webApp ? 'rotate-180' : ''}`}
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
                      className="mt-3 text-xl max-w-xl"  // Set max-width to prevent text from pushing layout
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.1, duration: 0.5 }}
                    >
                      <p className='w-full'>
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
                  className={`h-5 transition-transform duration-500 ${openSections.photography ? 'rotate-180' : ''}`}
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
                      className="mt-3 text-xl"  // Set max-width to prevent text from pushing layout
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.1, duration: 0.5 }}
                    >
                      <p className='w-full'>
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
