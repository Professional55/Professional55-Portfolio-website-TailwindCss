import React from 'react';
import { FaGithub, FaLinkedin, FaPhoneAlt } from 'react-icons/fa';
import { IoLogoFacebook } from 'react-icons/io5';
import { MdOutlineEmail } from 'react-icons/md';

const Contact = () => {
  return (
    <div id="contact" className="min-h-screen py-16 bg-gray-900">
      <div className="container mx-auto px-6 sm:px-10 lg:px-20">
        <h2 className="text-4xl sm:text-5xl font-bold text-center text-white mb-12">
          Contact Me
        </h2>
        <div className="grid gap-12 md:grid-cols-2">
          {/* Left Section */}
          <div>
            <p className="text-lg sm:text-xl text-gray-300 mb-6">
              Drop me a line, give me a call, or send me a message by submitting the form.
            </p>
            <div className="mb-6">
              <div className="flex items-center space-x-4 mb-4">
                <MdOutlineEmail size={24} className="text-blue-400" />
                <a
                  href="mailto:anusanus@706gmail.com"
                  className="text-gray-300 hover:text-blue-500 transition"
                >
                  anusanus@706gmail.com
                </a>
              </div>
              <div className="flex items-center space-x-4 mb-4">
                <FaPhoneAlt size={24} className="text-blue-400" />
                <p className="text-gray-300">03153192711</p>
              </div>
            </div>
            <div className="flex space-x-6 mt-6">
              <a
                href="https://www.facebook.com/anas.qureshi.56027281"
                className="text-gray-300 hover:text-blue-500 transition"
              >
                <IoLogoFacebook size={30} />
              </a>
              <a
                href="https://www.linkedin.com/in/muhammad-annus-9404432b7/"
                className="text-gray-300 hover:text-blue-500 transition"
              >
                <FaLinkedin size={30} />
              </a>
              <a
                href="https://github.com/Professional55"
                className="text-gray-300 hover:text-blue-500 transition"
              >
                <FaGithub size={30} />
              </a>
            </div>
          </div>

          {/* Right Section */}
          <div className="bg-slate-400 shadow-lg rounded-lg p-6 sm:p-8">
            <form className="flex flex-col space-y-4">
              <input
                type="text"
                placeholder="Enter your Name"
                className="p-3 border text-black border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
              <input
                type="email"
                placeholder="Enter E-mail Address"
                className="p-3 border text-black border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
              <textarea
                placeholder="Enter your Message"
                className="p-3 border text-black border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 h-32 resize-none"
              ></textarea>
              <button
                type="submit"
                className="bg-blue-500 text-white font-bold py-3 rounded-md hover:bg-blue-600 transition"
              >
                Send
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
