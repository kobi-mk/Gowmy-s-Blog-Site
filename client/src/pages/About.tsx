import React from 'react';
import { motion } from 'framer-motion';

const About: React.FC = () => {
  return (
    <div className="container mx-auto p-4">
      <h2 className="text-4xl font-bold text-center mt-4 mb-12">About Us</h2>
      <p className="mt-6 mb-14 text-center">
        This is our Blog-Post website. You can post your valuable content, kindly after login.<br /> Love you all.
      </p>
      
      <div className="flex flex-col md:flex-row md:justify-between gap-8">
        {/* Google Map */}
        <motion.div
          className="w-full md:w-1/2 h-80"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <iframe
            width="100%"
            height="100%"
            frameBorder="0"
            style={{ border: 0 }}
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d48246.08067374376!2d80.14869206293554!3d9.653488440816187!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3afc55c0a0a7d89f%3A0xa8baf92f8459d4d!2sUnicom%20TIC!5e0!3m2!1sen!2slk!4v1680074144253!5m2!1sen!2slk"
            allowFullScreen
            aria-hidden="false"
            tabIndex={0}
            title="Google Map showing Mountain View, CA"
          ></iframe>
        </motion.div>

        {/* Contact Form */}
        <motion.div
          className="w-full md:w-1/2 bg-white p-6 rounded-lg shadow-lg"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <h3 className="text-2xl font-semibold mb-4">Contact Us</h3>
          <form>
            <div className="mb-4">
              <label className="block text-gray-700 mb-2" htmlFor="name">Name:</label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 mb-2" htmlFor="email">Email:</label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 mb-2" htmlFor="message">Message:</label>
              <textarea
                id="message"
                name="message"
                rows={4}
                className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              ></textarea>
            </div>
            <motion.button
              type="submit"
              className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600 transition-colors duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Send Message
            </motion.button>
          </form>
        </motion.div>
      </div>
      
    </div>
  );
};

export default About;
