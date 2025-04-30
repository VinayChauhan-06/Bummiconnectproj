import React from 'react';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About Section */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold">Report Issue</h3>
            <p className="text-gray-400">
              Empowering communities by providing a platform to report and resolve local issues efficiently.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <FaFacebook className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <FaTwitter className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <FaInstagram className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <FaLinkedin className="w-6 h-6" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="/" className="text-gray-400 hover:text-white transition-colors">Home</a></li>
              <li><a href="/report" className="text-gray-400 hover:text-white transition-colors">Report Issue</a></li>
              <li><a href="/track-my-report" className="text-gray-400 hover:text-white transition-colors">My Reports</a></li>
              <li><a href="/about" className="text-gray-400 hover:text-white transition-colors">About Us</a></li>
              <li><a href="/contact" className="text-gray-400 hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-bold mb-4">Services</h3>
            <ul className="space-y-2">
              <li><a href="/report" className="text-gray-400 hover:text-white transition-colors">Issue Reporting</a></li>
              <li><a href="/track-my-report" className="text-gray-400 hover:text-white transition-colors">Issue Tracking</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Community Updates</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Issue Resolution</a></li>
              <li><a href="/contact" className="text-gray-400 hover:text-white transition-colors">Support</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <FaPhone className="text-green-500 mt-1" />
                <div>
                  <p className="text-gray-400">Phone</p>
                  <p className="text-white">+91 7078247468</p>
                </div>
              </li>
              <li className="flex items-start space-x-3">
                <FaEnvelope className="text-green-500 mt-1" />
                <div>
                  <p className="text-gray-400">Email</p>
                  <p className="text-white">vinaycahuhan1352002@gmail.com</p>
                </div>
              </li>
              <li className="flex items-start space-x-3">
                <FaMapMarkerAlt className="text-green-500 mt-1" />
                <div>
                  <p className="text-gray-400">Address</p>
                  <p className="text-white">THDC IHEET</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 mt-12 pt-8 text-center">
          <p className="text-gray-400">
            © {new Date().getFullYear()} Report Issue. All rights reserved.
          </p>
          <div className="mt-4 space-x-4">
            <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">Privacy Policy</a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">Terms of Service</a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 