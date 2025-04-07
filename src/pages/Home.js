// src/pages/Home.js
import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import './Home.css'; // Link the CSS for styling

const Home = () => {
  return (
    <div className="home-container">
      <div className="hero-section">
        {/* Animated Heading */}
        <motion.h1
          className="home-title"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
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

      {/* Features Section */}
      <div className="features-section">
        <div className="feature-item">
          <h3>Quality Service</h3>
          <p>We provide top-notch services to our customers.</p>
        </div>
        <div className="feature-item">
          <h3>Fast Delivery</h3>
          <p>Get your services delivered quickly and efficiently.</p>
        </div>
        <div className="feature-item">
          <h3>24/7 Support</h3>
          <p>Our support team is available round the clock to assist you.</p>
        </div>
      </div>
    </div>
  );
};

export default Home;
