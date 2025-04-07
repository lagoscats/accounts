import React from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom"; // Import useLocation here
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Pricing from "./pages/Pricing";
import Contact from "./pages/Contact";
import Register from "./components/Register";
import RegisterUser from "./components/RegisterUser";
import Missing from "./components/Missing"; 
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";


const App = () => {
  return (
    <Router>
      <AppRoutes />
    </Router>
  );
};

const AppRoutes = () => {
  const location = useLocation(); // Now `useLocation` is inside the Router context

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/register" element={<Register />} />
        <Route path="/register-user" element={<RegisterUser />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<Missing />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>

      {/* Only show Footer on the homepage */}
      {location.pathname === "/" && <Footer />}
    </>
  );
};

export default App;
