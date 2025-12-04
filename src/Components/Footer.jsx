import React from "react";
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react"; // npm i lucide-react

const Footer = () => {
  return (
    <footer className="bg-linear-to-r from-[#034602] via-[#1d8e0a] to-[#7ed957] text-gray-300 px-6 py-10">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h2 className="text-xl font-semibold text-white mb-3">
            Contact Info
          </h2>
          <p>Email: support@talenttrade.com</p>
          <p>Phone: +880 1234-567890</p>
          <p>Address: Dhaka, Bangladesh</p>
        </div>
        <div>
          <h2 className="text-xl font-semibold text-white mb-3">Follow Us</h2>
          <div className="flex space-x-5">
            <a
              href="https://www.facebook.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#FCCD2A] transition"
            >
              <Facebook size={22} />
            </a>
            <a
              href="https://twitter.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#FCCD2A] transition"
            >
              <Twitter size={22} />
            </a>
            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#FCCD2A] transition"
            >
              <Instagram size={22} />
            </a>
            <a
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#FCCD2A] transition"
            >
              <Linkedin size={22} />
            </a>
          </div>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-white mb-3">Legal</h2>
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:text-[#FCCD2A] transition">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-[#FCCD2A] transition">
                Terms & Conditions
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="text-center text-[#FCCD2A] text-sm border-t border-[#FCCD2A] mt-8 pt-4">
        © {new Date().getFullYear()} TalentTrade. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
