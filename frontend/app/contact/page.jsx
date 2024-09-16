'use client';
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Navbar from '../_components/Navbar'; // Include the Navbar

const Contact = () => {
  const { ref: sectionRef, inView: sectionInView } = useInView({ triggerOnce: true });
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  // Form handling
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic (e.g., sending email via API)
    alert('Message sent!');
  };

  return (
    <main className="h-dvh w-full relative text-white ">
         <img
        src="/noise.png"
        className="h-dvh w-dvw fixed -z-10"
        alt="missing noise"
      />
      <Navbar /> {/* Include the Navbar */}

      {/* Add padding-top to ensure the content doesn't overlap with the Navbar */}
      <section
        ref={sectionRef}
        className="min-h-screen flex flex-col justify-center items-center text-center px-5 sm:px-10 pt-24 sm:pt-32"
      >
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={sectionInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="max-w-5xl"
        >
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#FF4848] mb-8">
            Let&apos;s Connect!
          </h1>
          <p className="text-lg sm:text-xl lg:text-2xl mb-10">
            Feel free to get in touch using the contact details below or by filling out the form.
          </p>

          {/* Contact Information */}
          <div className="flex flex-col items-center gap-5">
            <div className="flex items-center gap-3">
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Gmail_icon_%282020%29.svg/1200px-Gmail_icon_%282020%29.svg.png" alt="Email Icon" className="h-8" /> {/* Placeholder */}
              <a href="mailto:mail@timhausl.com" className="text-lg sm:text-xl lg:text-2xl">
                mail@timhausl.com
              </a>
            </div>

            <div className="flex items-center gap-3">
              <img src="/phone.svg" alt="Phone Icon" className="h-8 w-8" /> {/* Placeholder */}
              <a href="tel:+436601330906" className="text-lg sm:text-xl lg:text-2xl">
                +43 660 1330906
              </a>
            </div>

            <div className="flex items-center gap-3">
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/132px-Instagram_logo_2016.svg.png" alt="Instagram Icon" className="h-8 w-8" /> {/* Placeholder */}
              <a href="https://www.instagram.com/my__tim_/" target="_blank" rel="noopener noreferrer" className="text-lg sm:text-xl lg:text-2xl">
                Instagram
              </a>
            </div>

            <div className="flex items-center gap-3">
              <img src="https://upload.wikimedia.org/wikipedia/commons/8/81/LinkedIn_icon.svg" alt="LinkedIn Icon" className="h-8 w-8" /> {/* Placeholder */}
              <a href="https://www.linkedin.com/in/tim-hausl-kramper-5084802b8/" target="_blank" rel="noopener noreferrer" className="text-lg sm:text-xl lg:text-2xl">
                LinkedIn
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="mt-16 w-full max-w-lg mx-auto">
            <div className="mb-5">
              <label htmlFor="name" className="block text-left mb-2 text-lg sm:text-xl">
                Name:
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full p-3 rounded-lg bg-gray-800 text-white"
                value={formData.name}
                onChange={handleInputChange}
                required
              />
            </div>

            <div className="mb-5">
              <label htmlFor="email" className="block text-left mb-2 text-lg sm:text-xl">
                Email:
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full p-3 rounded-lg bg-gray-800 text-white"
                value={formData.email}
                onChange={handleInputChange}
                required
              />
            </div>

            <div className="mb-5">
              <label htmlFor="message" className="block text-left mb-2 text-lg sm:text-xl">
                Message:
              </label>
              <textarea
                id="message"
                name="message"
                className="w-full p-3 rounded-lg bg-gray-800 text-white"
                rows="5"
                value={formData.message}
                onChange={handleInputChange}
                required
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full p-3 rounded-lg bg-[#FF4848] text-lg sm:text-xl font-bold hover:bg-[#e04343] transition-all mb-20"
            >
              Send Message
            </button>
          </form>
        </motion.div>
      </section>
    </main>
  );
};

export default Contact;
