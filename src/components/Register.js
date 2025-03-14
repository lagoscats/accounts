import React, { useState } from "react";
import { motion } from "framer-motion";
import axios from "axios";
import "./Register.css";

const Register = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const [message, setMessage] = useState("");
  const [messageType, setMessageType] = useState(""); // 'success' or 'error'

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Send registration request
      const response = await axios.post("http://127.0.0.1:8000/api/register/", formData);
      
      // If registration is successful, set the success message
      setMessage("Registration Successful!");
      setMessageType("success");
      
      // Clear form data
      setFormData({ username: "", email: "", password: "" });

      // Clear the success message after 5 seconds
      setTimeout(() => {
        setMessage("");
        setMessageType("");
      }, 5000);
    } catch (error) {
      // Check for specific error messages in the API response (if any)
      const errorMessage = error.response?.data?.detail || "Registration Failed. Try again.";

      setMessage(errorMessage);
      setMessageType("error");

      // Clear the error message after 5 seconds
      setTimeout(() => {
        setMessage("");
        setMessageType("");
      }, 5000);

      console.error("Error:", error);
    }
  };

  return (
    <div className="register-container">
      {/* Animated Heading */}
      <motion.h1
        className="register-title"
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        Register
      </motion.h1>

      {/* Animated Registration Form */}
      <motion.form
        className="register-form"
        onSubmit={handleSubmit}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        <input
          type="text"
          name="username"
          placeholder="Username"
          value={formData.username}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          required
        />
        <button type="submit">Sign Up</button>
      </motion.form>

      {/* Display Message */}
      {message && (
        <p className={`register-message ${messageType}`}>{message}</p>
      )}
    </div>
  );
};

export default Register;
