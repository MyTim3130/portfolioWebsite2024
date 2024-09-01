'use client';
import { motion, useAnimation } from "framer-motion";
import { useEffect, useState, useRef } from "react";
import { useInView } from "react-intersection-observer";
import Image from "next/image";
import WhatICanDo from "./_components/WhatICanDo";
import Redirects from "./_components/Redirects";
import Navbar from "./_components/Navbar";
import Testaments from "./_components/Testaments";

export default function Home() {
  const { ref: textRef1, inView: inView1 } = useInView({ triggerOnce: true });
  const { ref: textRef2, inView: inView2 } = useInView({ triggerOnce: true });
  const { ref: textRef3, inView: inView3 } = useInView({ triggerOnce: true });
  const { ref: imageRef1, inView: inViewImage1 } = useInView({ triggerOnce: true });
  const { ref: imageRef2, inView: inViewImage2 } = useInView({ triggerOnce: true });

  const controls1 = useAnimation();
  const controls2 = useAnimation();
  const controls3 = useAnimation();
  const imageControls1 = useAnimation();
  const imageControls2 = useAnimation();

  const whatICanDoRef = useRef(null);
  const testamentsRef = useRef(null);
  const [isBackgroundWhite, setIsBackgroundWhite] = useState(false);

  useEffect(() => {
    if (inView1) {
      controls1.start({
        opacity: 1,
        x: 0,
        transition: { duration: 0.8, ease: "easeOut" },
      });
    }
    if (inView2) {
      controls2.start({
        opacity: 1,
        y: 0,
        transition: { 
          duration: 0.8, 
          ease: "easeOut",
          staggerChildren: 0.2 
        },
      });
    }
    if (inView3) {
      controls3.start({
        opacity: 1,
        y: 0,
        transition: { 
          duration: 0.8, 
          ease: "easeOut",
          staggerChildren: 0.2 
        },
      });
    }
    if (inViewImage1) {
      imageControls1.start({
        opacity: 1,
        scale: 1,
        transition: { duration: 0.8, ease: "easeOut" },
      });
    }
    if (inViewImage2) {
      imageControls2.start({
        opacity: 1,
        scale: 1,
        transition: { duration: 0.8, ease: "easeOut" },
      });
    }
  }, [inView1, inView2, inView3, inViewImage1, inViewImage2, controls1, controls2, controls3, imageControls1, imageControls2]);

  useEffect(() => {
    const handleScroll = () => {
      if (!whatICanDoRef.current || !testamentsRef.current) return;

      const whatICanDoTop = whatICanDoRef.current.getBoundingClientRect().top;
      const whatICanDoBottom = whatICanDoRef.current.getBoundingClientRect().bottom;

      const testamentsTop = testamentsRef.current.getBoundingClientRect().top;
      const testamentsBottom = testamentsRef.current.getBoundingClientRect().bottom;

      const isWhatICanDoInView = 
        whatICanDoTop <= window.innerHeight / 2 && whatICanDoBottom >= window.innerHeight / 2;

      const isTestamentsInView = 
        testamentsTop <= window.innerHeight / 2 && testamentsBottom >= window.innerHeight / 2;

      if (isWhatICanDoInView || isTestamentsInView) {
        setIsBackgroundWhite(true);
      } else {
        setIsBackgroundWhite(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    if (isBackgroundWhite) {
      document.body.style.backgroundColor = 'white';
      document.body.style.transition = 'background-color 0.5s ease';
    } else {
      document.body.style.backgroundColor = '#24232D';
      document.body.style.transition = 'background-color 0.5s ease';
    }
  }, [isBackgroundWhite]);

  return (
    <main className="h-dvh w-dvw">
      <img
        src="/noise.png"
        className="h-dvh w-dvw fixed -z-10"
        alt="missing noise"
      />
      <Navbar />

      <section className={isBackgroundWhite ? 'text-black' : 'text-white'} style={{ transition: 'color 0.5s ease' }}>
        <motion.div
          ref={imageRef1}
          initial={{ opacity: 0, scale: 0.8 }} // Start with smaller scale and 0 opacity
          animate={imageControls1}
          className="w-full flex justify-center items-center"
        >
          <img src="/figur.png" className="w-3/6" alt="missing figure" />
        </motion.div>
        <motion.div 
          ref={textRef1} 
          initial={{ opacity: 0, x: -100 }} // Comes in from the left
          animate={controls1} 
          className="w-full flex flex-col justify-center pl-5"
        >
          <motion.h2
            className="text-2xl font-bold opacity-75"
            transition={{ delay: 0 }} // No delay for the first text
          >
            HI, I&apos;M TIM, I WILL MAKE
          </motion.h2>
          <motion.h1
            className="text-6xl font-bold"
            transition={{ delay: 0.3 }} // Delay for the second text
          >
            YOUR <span className="text-[#FF4848]">VISION</span>
          </motion.h1>
          <motion.h2
            className="text-2xl font-bold opacity-75"
            transition={{ delay: 0.6 }} // More delay for the third text
          >
            COME TO LIFE
          </motion.h2>
        </motion.div>

        <motion.div
          ref={imageRef2}
          initial={{ opacity: 0, scale: 0.8 }} // Start with smaller scale and 0 opacity
          animate={imageControls2}
          className="w-dvw flex justify-center mt-28"
        >
          <div className="w-4/6 rounded-full overflow-hidden">
            <img
              className="scale-150 relative top-16"
              src="/me.png"
              alt="missing me"
            />
          </div>
        </motion.div>

        <motion.div 
          ref={textRef2} 
          initial={{ opacity: 0, y: 50 }} 
          animate={controls2} 
          className="pl-5 mt-5"
        >
          <motion.h3
            className="text-2xl font-bold opacity-75"
          >
            I&apos;M A SELFTOUGHT
          </motion.h3>
          <motion.h2
            className="text-5xl font-bold"
          >
            PROGRAMMER
          </motion.h2>
          <motion.p
            className="text-md mt-3 w-5/6"
          >
            ,who has a passion for creating cool web applications. I&apos;ve honed my
            skills through hands-on learning and I&apos;m excited to bring your ideas
            to life. Let&apos;s work together to build something awesome!
          </motion.p>
        </motion.div>
        <motion.div 
          ref={textRef3} 
          initial={{ opacity: 0, y: 50 }} 
          animate={controls3} 
          className="flex flex-col mt-20 pl-5 gap-3"
        >
          <motion.h3
            className="text-2xl font-bold opacity-75 flex"
          >
            AND A&nbsp;<span className="text-[#FF4848]"> PASSIONATE</span>
          </motion.h3>
          <motion.h2
            className="text-5xl font-bold"
          >
            PHOTOGRAPHER
          </motion.h2>
          <motion.h2
            className="text-5xl font-bold"
          >
            VIDEOGRAPHER
          </motion.h2>
          <motion.h2
            className="text-5xl font-bold"
          >
            DESIGNER
          </motion.h2>
        </motion.div>

        <div ref={whatICanDoRef}>
          <WhatICanDo />
        </div>
        <div ref={testamentsRef}>
          <Testaments isBackgroundWhite={isBackgroundWhite} />
        </div>
        <Redirects />
      </section>
    </main>
  );
}
