import React from "react";
import { motion } from "framer-motion";
import "./About.css";

const About = () => {
  return (
    <div className="about-container">
      {/* Animated Heading */}
      <motion.h1
        className="about-title"
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        About Us
      </motion.h1>

      {/* Animated Description */}
      <motion.p
        className="about-description"
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        We are a passionate team dedicated to providing top-notch services to our clients. 
        Our mission is to deliver excellence and innovation in everything we do.
      </motion.p>

      {/* Animated Image Section */}
      <motion.div
        className="about-image-container"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
      >
        <img src="https://source.unsplash.com/600x400/?team,work" alt="Teamwork" className="about-image" />
      </motion.div>
    </div>
  );
};

export default About;
