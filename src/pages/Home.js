import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import "./Home.css";

const Home = () => {
  return (
    <div className="home-container">
      {/* Animated Heading */}
      <motion.h1
        className="home-title"
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        Welcome to MyWebsite
      </motion.h1>

      {/* Animated Description */}
      <motion.p
        className="home-description"
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        Your one-stop solution for amazing services. Join us today!
      </motion.p>

      {/* Call to Action Button */}
      <motion.div
        initial={{ scale: 0.8 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5, delay: 1 }}
      >
        <Link to="/register" className="cta-button">
          Get Started
        </Link>
      </motion.div>
    </div>
  );
};

export default Home;
