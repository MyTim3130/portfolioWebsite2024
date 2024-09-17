"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import Navbar from "../_components/Navbar"; // Navbar import

const Projects = () => {
  const [filter, setFilter] = useState("all"); // Filter state

  // Placeholder projects data with categories
  const projects = [
    {
      title: "Zombies",
      description:
        "A web-based twist on the classic WERWOLF party game. Play with your friends when you've left the cards at home, bringing the fun of deduction and strategy to the web.",
      imgSrc: "/zombie.png",
      demoLink: "https://zombie.timhausl.com/",
      category: "web-apps",
    },
    {
      title: "Memini",
      description:
        "An innovative tool for teachers that enhances student learning. Memini helps create interactive lessons that stick with students. (Note: Requires manual server start.)",
      imgSrc: "/memini.png",
      demoLink: "https://vwa-orcin.vercel.app/",
      category: "web-apps",
    },
    {
      title: "Der Dümmste Fliegt",
      description:
        "A fun and competitive front-end-only quiz game. Test your knowledge, challenge your friends, and see who remains the smartest in the room.",
      imgSrc: "/quiz.png",
      demoLink: "https://der-dummste-fliegt.vercel.app/",
      category: "web-apps",
    },
    {
      title: "Sportfest BG/BRG Stockerau 2024",
      description:
        "Captured the excitement and energy of the 32nd annual Sportfest at BG/BRG Stockerau with vibrant, dynamic photography.",
      imgSrc: "/sportfest24_2.png",
      demoLink: "https://www.bgstockerau.ac.at/archiv/detail.php?news_id=1743",
      category: "photography",
    },
    {
      title: "Creative Portfolio Website",
      description:
        "An artistic, sleek portfolio website that brings creative work to life. Perfect for showcasing projects with a modern and elegant design.",
      imgSrc: "/artist.png",
      demoLink: "https://artist-website-seven.vercel.app/",
      category: "web-apps",
    },
    {
      title: "Sk Korneuburg - SKN Juniors",
      description:
        "Professional-grade photography capturing the intensity and spirit of the football match between Sk Korneuburg and SKN Juniors.",
      imgSrc: "/skn.png",
      demoLink: "https://www.instagram.com/p/C_JF3rdIJqA/?img_index=1",
      category: "photography",
    },
    {
      title: "Sportfest BG/BRG Stockerau 2023",
      description:
        "A photographic journey through the 31st Sportfest at BG/BRG Stockerau, showcasing the athleticism and school spirit of the participants.",
      imgSrc: "/sportfest23.png",
      demoLink: "https://www.bgstockerau.ac.at/archiv/detail.php?news_id=1743",
      category: "photography",
    },
    {
      title: "YT-Rating App",
      description:
        "An AI-driven app that provided users with quick summaries and insights for YouTube videos. Though inactive now, it streamlined content discovery for creators and viewers.",
      imgSrc: "/ytRating.png",
      demoLink: "https://yt-rating.vercel.app/",
      category: "web-apps",
    },
  ];
  

  // Filtering the projects based on the selected category
  const filteredProjects = projects.filter(
    (project) => filter === "all" || project.category === filter
  );

  return (
    <main className="h-full w-full relative text-white">
      <img
        src="/noise.png"
        className="h-dvh w-dvw fixed -z-10"
        alt="missing noise"
      />
      <Navbar /> {/* Include Navbar */}
      {/* Projects Section */}
      <section className="pt-24 sm:pt-32 px-5 sm:px-10">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#FF4848] mb-8 text-center">
          My Projects
        </h1>

        {/* Filter & Sort Dropdown */}
        <div className="flex justify-center mb-10">
          <select
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            className="bg-gray-700 text-white p-2 rounded-lg"
          >
            <option value="all">All Projects</option>
            <option value="web-apps">Web Apps</option>
            <option value="photography">Photography</option>
          </select>
        </div>

        {/* Featured Projects */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-10 md:mb-28">
          {filteredProjects.slice(0, 2).map((project, index) => (
            <Project key={index} {...project} />
          ))}
        </div>

        {/* Other Projects */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-14 mb-24">
          {filteredProjects.slice(2).map((project, index) => (
            <Project key={index} {...project} />
          ))}
        </div>
      </section>
    </main>
  );
};

export default Projects;

const Project = ({ title, description, imgSrc, demoLink }) => (
  <motion.div
    className="relative bg-gray-800 rounded-lg shadow-lg overflow-hidden hover:scale-105 transition-transform duration-500"
    whileHover={{ boxShadow: "0 0 20px rgba(255, 72, 72, 0.8)" }} // Smooth glow effect
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, ease: "easeOut" }}
  >
    <img src={imgSrc} alt={title} className="w-full h-48 object-cover" />
    <div className="p-5">
      <h3 className="text-2xl font-bold text-white mb-3">{title}</h3>
      <p className="text-lg text-gray-400 mb-5">{description}</p>
      <a
        href={demoLink}
        target="_blank"
        rel="noopener noreferrer"
        className="text-[#FF4848] font-bold"
      >
        View Live Demo
      </a>
    </div>
  </motion.div>
);
