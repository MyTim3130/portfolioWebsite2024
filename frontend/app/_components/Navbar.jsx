'use client';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function Navbar() {
  const [isActive, setIsActive] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const controlNavbar = () => {
    if (typeof window !== 'undefined') {
      const isMobile = window.innerWidth < 768;
      if (!isMobile) {
        if (window.scrollY > lastScrollY) {
          setIsVisible(false); // Hide Navbar on scroll down for larger screens
        } else {
          setIsVisible(true); // Show Navbar on scroll up for larger screens
        }
      } else {
        setIsVisible(true); // Always show Navbar on mobile
      }
      setLastScrollY(window.scrollY);
    }
  };

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', controlNavbar);

      return () => {
        window.removeEventListener('scroll', controlNavbar);
      };
    }
  }, [lastScrollY]);

  useEffect(() => {
    if (isActive) {
      // Disable scrolling
      document.body.style.overflow = 'hidden';
    } else {
      // Enable scrolling
      document.body.style.overflow = 'auto';
    }

    // Clean up when the component is unmounted
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isActive]);

  const opacity = {
    initial: { opacity: 0 },
    open: { opacity: 1, transition: { duration: 0.35 } },
    closed: { opacity: 0, transition: { duration: 0.35 } },
  };

  return (
    <motion.div
      className="bg-[rgba(255,255,255,0.1)] backdrop-filter backdrop-blur-lg fixed w-full box-border p-2.5 md:p-5 z-[100] transition-transform duration-500 ease-in-out"
      initial={{ y: '-100%' }}
      animate={isVisible ? { y: 0 } : { y: '-100%' }}
      style={{ top: 0 }}
    >
      <div className="flex justify-between items-center text-xs md:text-sm font-normal uppercase relative p-2">
        <Link href="/" className="text-black no-underline font-bold text-lg md:text-xl">
          Tim
        </Link>
        <div
          className="flex items-center justify-center gap-2 cursor-pointer"
          onClick={() => setIsActive(!isActive)}
        >
          <div
            className={`w-[22.5px] relative transition-transform duration-300 transform ${
              isActive ? 'rotate-45' : ''
            }`}
          >
            <span className="block bg-black h-[1px] w-full relative before:absolute before:w-full before:h-[1px] before:bg-black before:top-[4px] before:transition-all after:absolute after:w-full after:h-[1px] after:bg-black after:top-[-4px] after:transition-all"></span>
          </div>
          <div className="relative flex items-center h-full mr-5 text-xl">
            <motion.p variants={opacity} animate={!isActive ? 'open' : 'closed'}>
              Menu
            </motion.p>
            <motion.p
              variants={opacity}
              animate={isActive ? 'open' : 'closed'}
              className="absolute opacity-0"
            >
              Close
            </motion.p>
          </div>
        </div>
      </div>

      <motion.div
        className={`fixed top-full left-0 w-full h-dvh bg-gray-900 text-white p-8 flex flex-col items-center justify-center transition-transform duration-500 ${
          isActive ? 'translate-x-0' : '-translate-x-full'
        }`}
        initial={false}
        animate={isActive ? 'open' : 'closed'}
      >
        <nav className="flex flex-col space-y-8 text-lg md:text-2xl font-light relative bottom-20">
          <Link href="/">
            <div className="hover:text-gray-400 cursor-pointer text-4xl">Home</div>
          </Link>
          <Link href="/shop">
            <div className="hover:text-gray-400 cursor-pointer text-4xl">Shop</div>
          </Link>
          <Link href="/about">
            <div className="hover:text-gray-400 cursor-pointer text-4xl">About Us</div>
          </Link>
          <Link href="/lookbook">
            <div className="hover:text-gray-400 cursor-pointer text-4xl">Lookbook</div>
          </Link>
          <Link href="/contact">
            <div className="hover:text-gray-400 cursor-pointer text-4xl">Contact</div>
          </Link>
        </nav>
      </motion.div>
    </motion.div>
  );
}
