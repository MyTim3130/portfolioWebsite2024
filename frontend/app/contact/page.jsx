'use client';
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import emailjs from 'emailjs-com';
import Navbar from '../_components/Navbar'; // Include the Navbar

const Contact = () => {
  const { ref: sectionRef, inView: sectionInView } = useInView({ triggerOnce: true });
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSending, setIsSending] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [feedbackMessage, setFeedbackMessage] = useState('');

  // Form handling
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setIsSending(true);

    const templateParams = {
      from_name: formData.name,
      to_name: 'Tim',
      message: formData.message,
      reply_to: formData.email
    };

    // Send the email with EmailJS
    emailjs.send(
      'service_l85ryws', // Replace with your EmailJS service ID
      'template_3j57keb', // Replace with your EmailJS template ID
      templateParams,
      'qvNWw6w5kWtvkospS' // Replace with your EmailJS user ID
    )
    .then((result) => {
      setFeedbackMessage('Message sent successfully!');
      setFormData({ name: '', email: '', message: '' }); // Reset the form
      setShowSuccess(true); // Show success screen
      setTimeout(() => setShowSuccess(false), 3000); // Hide after 3 seconds
    })
    .catch((error) => {
      setFeedbackMessage('Oops! Something went wrong. Please try again.');
    })
    .finally(() => {
      setIsSending(false);
    });
  };

  return (
    <main className="h-dvh w-full relative text-white ">
      <img src="/noise.png" className="h-dvh w-dvw fixed -z-10" alt="missing noise" />
      <Navbar /> {/* Include the Navbar */}

      {/* Success Screen Animation */}
      <AnimatePresence>
        {showSuccess && (
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-[#24232D] flex justify-center items-center z-50"
          >
            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              transition={{ duration: 0.5 }}
              className="text-center"
            >
              <h1 className="text-5xl sm:text-6xl font-bold text-[#FF4848] mb-5">
                Message Sent!
              </h1>
              <p className="text-xl sm:text-2xl text-gray-200">Thank you for reaching out. I will get back to you soon!</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

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
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Gmail_icon_%282020%29.svg/1200px-Gmail_icon_%282020%29.svg.png"
                alt="Email Icon"
                className="h-8"
              />
              <a href="mailto:mail@timhausl.com" className="text-lg sm:text-xl lg:text-2xl">
                mail@timhausl.com
              </a>
            </div>

            <div className="flex items-center gap-3">
              <img src="/phone.svg" alt="Phone Icon" className="h-8 w-8" />
              <a href="tel:+436601330906" className="text-lg sm:text-xl lg:text-2xl">
                +43 660 1330906
              </a>
            </div>

            <div className="flex items-center gap-3">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/132px-Instagram_logo_2016.svg.png"
                alt="Instagram Icon"
                className="h-8 w-8"
              />
              <a href="https://www.instagram.com/my__tim_/" target="_blank" rel="noopener noreferrer" className="text-lg sm:text-xl lg:text-2xl">
                Instagram
              </a>
            </div>

            <div className="flex items-center gap-3">
              <img src="https://upload.wikimedia.org/wikipedia/commons/8/81/LinkedIn_icon.svg" alt="LinkedIn Icon" className="h-8 w-8" />
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
              className="w-full p-3 rounded-lg bg-[#FF4848] text-lg sm:text-xl font-bold hover:bg-[#e04343] transition-all mb-24"
              disabled={isSending}
            >
              {isSending ? 'Sending...' : 'Send Message'}
            </button>
          </form>
          
          {feedbackMessage && (
            <p className="mt-5 text-lg">{feedbackMessage}</p>
          )}
        </motion.div>
      </section>
    </main>
  );
};

export default Contact;
