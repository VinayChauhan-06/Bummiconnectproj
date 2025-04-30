import React, { useState, useEffect } from 'react';
import { FaLeaf, FaTractor, FaWater, FaRoad, FaUserShield, FaChartLine, FaHandsHelping, FaClipboardList, FaSearch, FaBullhorn, FaUsers, FaGlobe } from "react-icons/fa";
import { motion } from 'framer-motion';
import Carousel from './Carousel';
import Footer from './Footer';

const Home = () => {
  const [activeRole, setActiveRole] = useState(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const dashboardStyles = {
    farmer: {
      background: "#2E7D32",
      textColor: "#FFFFFF",
      hoverColor: "#1B5E20",
      borderColor: "#4CAF50",
    },
    citizen: {
      background: "#1976D2",
      textColor: "#FFFFFF",
      hoverColor: "#1565C0",
      borderColor: "#2196F3",
    },
    expert: {
      background: "#7B1FA2",
      textColor: "#FFFFFF",
      hoverColor: "#6A1B9A",
      borderColor: "#9C27B0",
    },
    admin: {
      background: "#D32F2F",
      textColor: "#FFFFFF",
      hoverColor: "#C62828",
      borderColor: "#F44336",
    },
  };

  const roles = [
    {
      name: "FARMER",
      style: dashboardStyles.farmer,
      icon: "https://cdn-icons-png.flaticon.com/512/2329/2329167.png",
      alt: "Farmer Icon",
      href: "/farmer-dashboard",
    },
    {
      name: "CITIZEN",
      style: dashboardStyles.citizen,
      icon: "https://cdn-icons-png.flaticon.com/512/2329/2329167.png",
      alt: "Citizen Icon",
      href: "/citizen-dashboard",
    },
    {
      name: "EXPERT",
      style: dashboardStyles.expert,
      icon: "https://cdn-icons-png.flaticon.com/512/2329/2329167.png",
      alt: "Expert Icon",
      href: "/expert-dashboard",
    },
    {
      name: "ADMIN",
      style: dashboardStyles.admin,
      icon: "https://cdn-icons-png.flaticon.com/512/2329/2329167.png",
      alt: "Admin Icon",
      href: "/admin-dashboard",
    },
  ];

  const farmerFeatures = [
    { icon: <FaLeaf />, title: "Crop Advisory", desc: "Get expert advice on crop selection and management." },
    { icon: <FaTractor />, title: "Farm Equipment", desc: "Find and rent modern farming equipment." },
    { icon: <FaWater />, title: "Irrigation Solutions", desc: "Smart irrigation techniques and water management." },
    { icon: <FaChartLine />, title: "Market Prices", desc: "Real-time market prices and trends." },
  ];

  const citizenFeatures = [
    { icon: <FaRoad />, title: "Road Issues", desc: "Report potholes and road maintenance problems." },
    { icon: <FaWater />, title: "Water Issues", desc: "Report water leaks and supply problems." },
    { icon: <FaUserShield />, title: "Corruption", desc: "Report corruption and malpractice." },
    { icon: <FaHandsHelping />, title: "Community Help", desc: "Request and offer community assistance." },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-900 to-blue-900 text-white">
      {/* Hero Section with Carousel */}
      <div className="relative">
        <Carousel />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center px-4"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-4">Empowering Farmers & Citizens</h1>
            <p className="text-xl md:text-2xl mb-8">Join us in building a better community through technology</p>
            <div className="flex flex-col md:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-8 rounded-full shadow-lg"
              >
                Farmer Portal
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full shadow-lg"
              >
                Citizen Portal
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-6xl mx-auto bg-white/10 backdrop-blur-lg rounded-2xl p-10 mt-10 mb-10"
      >
        <motion.h2 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="text-5xl font-bold mb-10 text-center tracking-wide text-white"
        >
          Welcome to Bhumi Connect
        </motion.h2>
        
        <motion.section 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="mb-12 text-lg leading-relaxed text-center font-semibold text-gray-200"
        >
          <p>
            Our platform connects farmers with agricultural experts and empowers citizens to report and resolve community issues. Together, we can build a better future for everyone.
          </p>
        </motion.section>

        {/* Role Selection Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mb-12"
        >
          {roles.map((role, index) => (
            <motion.a
              key={index}
              href={role.href}
              className="flex flex-col items-center justify-center text-center rounded-lg shadow-xl transition-all duration-300 p-6 hover:scale-105"
              style={{
                backgroundColor: role.style.background,
                color: role.style.textColor,
                border: activeRole === index ? `2px solid ${role.style.borderColor}` : 'none',
              }}
              onMouseEnter={() => setActiveRole(index)}
              onMouseLeave={() => setActiveRole(null)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <img
                src={role.icon}
                alt={role.alt}
                className="mb-4 w-16 h-16 rounded-full object-cover"
              />
              <span className="text-lg font-semibold">{role.name}</span>
            </motion.a>
          ))}
        </motion.div>

        {/* Farmer Features Section */}
        <motion.section 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="mb-12"
        >
          <h2 className="text-3xl font-bold text-center mb-8 text-white">Farmer Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {farmerFeatures.map((feature, index) => (
              <motion.div
                key={index}
                className="bg-white/10 backdrop-blur-sm p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="text-4xl text-white mx-auto justify-items-center mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-white">{feature.title}</h3>
                <p className="mt-2 text-gray-200">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Citizen Features Section */}
        <motion.section 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="mb-12"
        >
          <h2 className="text-3xl font-bold text-center mb-8 text-white">Citizen Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {citizenFeatures.map((feature, index) => (
              <motion.div
                key={index}
                className="bg-white/10 backdrop-blur-sm p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="text-4xl text-white mx-auto justify-items-center mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-white">{feature.title}</h3>
                <p className="mt-2 text-gray-200">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>
        
        {/* Testimonials Section */}
        <motion.section 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="mt-14"
        >
          <h2 className="text-3xl font-semibold text-center mb-8 text-white">Success Stories</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { quote: "The crop advisory helped me increase my yield by 30%!", author: "Rajesh Kumar, Farmer" },
              { quote: "Reported a water leak and it was fixed within 24 hours.", author: "Priya Sharma, Citizen" },
              { quote: "The community support is amazing. We're solving problems together.", author: "Amit Patel, Community Leader" },
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                className="bg-white/10 backdrop-blur-sm p-6 rounded-lg shadow-lg text-center"
                whileHover={{ scale: 1.02 }}
              >
                <p className="italic text-gray-200">{testimonial.quote}</p>
                <h4 className="font-bold mt-4 text-white">- {testimonial.author}</h4>
              </motion.div>
            ))}
          </div>
        </motion.section>
      </motion.div>

      {/* Add Footer */}
      <Footer />
    </div>
  );
};

export default Home; 