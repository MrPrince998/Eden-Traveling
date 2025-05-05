import React from "react";
import NavBar from "../components/NavBar";
import { FaTwitter, FaFacebookF, FaGoogle } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";

const Contact = () => {
  return (
    <section>
      <NavBar textColor="text-black" navColor="text-white" />
      <div className="min-h-screen bg-white px-4 py-10">
        <div className="max-w-2xl mx-auto mt-10 p-8 rounded-2xl shadow-md">
          <h2 className="text-2xl font-bold text-center mb-6">Get in Touch</h2>
          <form
            action="https://getform.io/f/bolmpnja"
            method="post"
            className="space-y-6"
          >
            <div>
              <label className="block text-sm font-medium mb-1">
                First Name
              </label>
              <input
                type="text"
                name="firstName"
                required
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">
                Last Name
              </label>
              <input
                type="text"
                name="lastName"
                required
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Email</label>
              <input
                type="email"
                name="email"
                required
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">
                Phone Number
              </label>
              <input
                type="tel"
                name="phone"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">
                What do you have in mind?
              </label>
              <textarea
                name="message"
                placeholder="Enter your message"
                rows="5"
                required
                className="w-full px-4 py-2 border rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-500 text-white font-semibold py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-300"
            >
              Submit
            </button>
          </form>
          <div className="flex justify-center items-center gap-x-4 my-4">
            <Link
              to={"https://x.com/"}
              className="w-6 h-6 rounded-full bg-[#d2d2d2] flex justify-center items-center"
            >
              <FaTwitter className="text-blue-500" />
            </Link>
            <Link
              to={"https://www.facebook.com/"}
              className="w-6 h-6 rounded-full bg-[#d2d2d2] flex justify-center items-center"
            >
              <FaFacebookF className="text-blue-500" />
            </Link>
            <Link
              to={"https://www.google.com/"}
              className="w-6 h-6 rounded-full bg-[#d2d2d2] flex justify-center items-center"
            >
              <FaGoogle className="text-blue-500" />
            </Link>
            <Link
              to={"https://www.instagram.com/"}
              className="w-6 h-6 rounded-full bg-[#d2d2d2] flex justify-center items-center"
            >
              <FaInstagram className="text-blue-500" />
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </section>
  );
};

export default Contact;
