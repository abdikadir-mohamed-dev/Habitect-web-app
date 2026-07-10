import { Link, NavLink } from "react-router-dom";
const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white mt-20">
      <div className="max-w-7xl mx-auto px-6 py-12 grid md:grid-cols-3 gap-10">

        <div>
          <h2 className="text-2xl font-bold text-amber-500">
            HABITECT
          </h2>
          <p className="mt-4 text-gray-300">
            Helping people find, book and manage properties with ease.
          </p>
        </div>

        <div>
          <h3 className="font-semibold text-lg mb-3">
            Quick Links
          </h3>

          <ul className="space-y-2 text-gray-300">
           <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/properties">Properties</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold text-lg mb-3">
            Contact
          </h3>

          <p className="text-gray-300">
            info@habitect.com
          </p>

          <p className="text-gray-300">
            +254 700 000 000
          </p>

          <p className="text-gray-300">
            Nairobi, Kenya
          </p>
        </div>

      </div>

      <div className="border-t border-gray-700 py-5 text-center text-gray-400">
        © 2026 Habitect. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;