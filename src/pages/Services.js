import React from "react";
import { motion } from "framer-motion";
import "./Services.css";

const servicesData = [
  { title: "Web Development", description: "Building modern and responsive websites.", icon: "🌐" },
  { title: "SEO Optimization", description: "Improve your website's ranking on search engines.", icon: "🚀" },
  { title: "Digital Marketing", description: "Boost your brand's online presence effectively.", icon: "📈" },
];

const Services = () => {
  return (
    <div className="services-container">
      {/* Animated Heading */}
      <motion.h1
        className="services-title"
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        Our Services
      </motion.h1>

      {/* Services List */}
      <div className="services-list">
        {servicesData.map((service, index) => (
          <motion.div
            className="service-card"
            key={index}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.3 }}
          >
            <div className="service-icon">{service.icon}</div>
            <h2>{service.title}</h2>
            <p>{service.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Services;
