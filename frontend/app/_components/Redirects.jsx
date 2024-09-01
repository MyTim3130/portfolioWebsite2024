'use client'
import React from "react";
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

const Redirects = () => {
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
        transition: { duration: 0.8, ease: "easeOut" },
      });
    }
    if (inView2) {
      controls2.start({
        opacity: 1,
        scale: 1,
        transition: { duration: 0.8, ease: "easeOut" },
      });
    }
    if (inView3) {
      controls3.start({
        opacity: 1,
        scale: 1,
        transition: { duration: 0.8, ease: "easeOut" },
      });
    }
  }, [inView1, inView2, inView3, controls1, controls2, controls3]);

  return (
    <main className="p-10 mt-36 flex flex-col gap-10 ">
      <motion.div
        ref={ref1}
        initial={{ opacity: 0, scale: 0.8 }} // Initial state with smaller scale and 0 opacity
        animate={controls1}
        className="rounded-2xl overflow-hidden flex h-fit items-end shadow-xl border-2 border-gray-300 backdrop-filter backdrop-blur-md bg-opacity-10 bg-gray-400"
      >
        <img className="relative right-2/4" src="/figur_laptop.png" alt="missing me" />
        <div className="absolute right-1/4">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-5xl text-white mb-5"
          >
            - Projects
          </motion.p>
        </div>
      </motion.div>

      <motion.div
        ref={ref2}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={controls2}
        className="rounded-2xl overflow-hidden flex h-fit items-end shadow-xl border-2 border-gray-300 backdrop-filter backdrop-blur-md bg-opacity-10 bg-gray-400"
      >
        <img className="relative right-[45%]" src="/figur_tennis.png" alt="missing me" />
        <div className="absolute right-1/4">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-5xl text-white mb-5"
          >
            - About
          </motion.p>
        </div>
      </motion.div>

      <motion.div
        ref={ref3}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={controls3}
        className="rounded-2xl overflow-hidden flex h-fit items-end shadow-xl border-2 border-gray-300 backdrop-filter backdrop-blur-md bg-opacity-10 bg-gray-400"
      >
        <img className="relative right-2/4" src="/figur_contact.png" alt="missing me" />
        <div className="absolute right-1/4">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-5xl text-white mb-5"
          >
            - Contact
          </motion.p>
        </div>
      </motion.div>
    </main>
  );
};

export default Redirects;
