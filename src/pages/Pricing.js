import React from "react";
import { motion } from "framer-motion";
import "./Pricing.css";

const pricingPlans = [
  { title: "Basic", price: "$19/mo", features: ["1 Website", "Basic Support", "Limited Features"] },
  { title: "Pro", price: "$49/mo", features: ["5 Websites", "Priority Support", "Advanced Features"] },
  { title: "Enterprise", price: "$99/mo", features: ["Unlimited Websites", "24/7 Support", "All Features"] },
];

const Pricing = () => {
  return (
    <div className="pricing-container">
      {/* Animated Heading */}
      <motion.h1
        className="pricing-title"
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        Pricing Plans
      </motion.h1>

      {/* Pricing Plans */}
      <div className="pricing-list">
        {pricingPlans.map((plan, index) => (
          <motion.div
            className="pricing-card"
            key={index}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.3 }}
          >
            <h2>{plan.title}</h2>
            <p className="pricing-price">{plan.price}</p>
            <ul className="pricing-features">
              {plan.features.map((feature, i) => (
                <li key={i}>{feature}</li>
              ))}
            </ul>
            <button className="pricing-button">Choose Plan</button>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Pricing;
