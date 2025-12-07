import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 text-gray-300 pt-12 pb-6 shadow-inner border-t border-slate-700">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12">

        {/* Branding */}
        <div>
          <h2 className="text-3xl font-extrabold text-white flex items-center gap-2">
            💰 <span>FinEase</span>
          </h2>
          <p className="mt-4 text-gray-400 leading-relaxed text-sm">
            Simplify your financial life. Track expenses, manage income, and build a secure future with FinEase.
          </p>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4 border-b border-gray-600 inline-block pb-1">
            Contact Information
          </h3>
          <ul className="space-y-3 text-sm">
            <li className="flex items-center gap-2 hover:text-white transition">
              📍 <span>Dhaka, Bangladesh</span>
            </li>
            <li className="flex items-center gap-2 hover:text-white transition">
              📞 <span>+880 1234-567890</span>
            </li>
            <li className="flex items-center gap-2 hover:text-white transition">
              ✉️ <span>support@finease.com</span>
            </li>
          </ul>
        </div>

        {/* Social Links + Policies */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4 border-b border-gray-600 inline-block pb-1">
            Stay Connected
          </h3>

          <div className="flex space-x-4 mb-5">
            <a
              href="#"
              className="w-10 h-10 flex items-center justify-center rounded-full 
              bg-slate-700 text-white hover:bg-blue-600 transition"
            >
              <FaFacebookF size={18} />
            </a>

            <a
              href="#"
              className="w-10 h-10 flex items-center justify-center rounded-full 
              bg-slate-700 text-white hover:bg-sky-500 transition"
            >
              <FaTwitter size={18} />
            </a>

            <a
              href="#"
              className="w-10 h-10 flex items-center justify-center rounded-full 
              bg-slate-700 text-white hover:bg-pink-600 transition"
            >
              <FaInstagram size={18} />
            </a>

            <a
              href="#"
              className="w-10 h-10 flex items-center justify-center rounded-full 
              bg-slate-700 text-white hover:bg-red-600 transition"
            >
              <FaYoutube size={18} />
            </a>
          </div>

          <div className="text-sm text-gray-400 space-y-1">
            <a href="#" className="block hover:text-blue-400 transition">
              Privacy Policy
            </a>
            <a href="#" className="block hover:text-blue-400 transition">
              Terms & Conditions
            </a>
          </div>
        </div>

      </div>

      {/* Bottom Text */}
      <div className="text-center text-gray-500 text-sm mt-10 border-t border-slate-700 pt-5">
        © {new Date().getFullYear()}{" "}
        <span className="text-white font-semibold">FinEase</span> – All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
