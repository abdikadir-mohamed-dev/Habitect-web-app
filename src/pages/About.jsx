
import { Link } from "react-router-dom";
import {
  FaHome,
  FaUsers,
  FaShieldAlt,
  FaHandshake,
  FaBullseye,
  FaEye,
} from "react-icons/fa";

const About = () => {
  return (
    <section className="bg-[#F5E6D3]">

      {/* Hero */}
      <div
        className="relative h-[450px] bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1600&q=80')",
        }}
      >
        <div className="absolute inset-0 bg-black/60"></div>

        <div className="relative z-10 flex h-full items-center justify-center text-center px-6">
          <div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
              About Habitect
            </h1>

            <p className="text-xl text-gray-200 max-w-3xl mx-auto">
              Your trusted digital real estate platform for buying,
              selling and managing properties with confidence.
            </p>
          </div>
        </div>
      </div>

      {/* About Section */}
      <div className="max-w-7xl mx-auto px-6 py-20">

        <div className="grid md:grid-cols-2 gap-12 items-center">

          <img
            src="https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=900&q=80"
            alt="Modern Home"
            className="rounded-2xl shadow-xl"
          />

          <div>

            <h2 className="text-4xl font-bold text-gray-800 mb-6">
              About Habitect
            </h2>

            <p className="text-gray-600 leading-8 mb-8">
              Habitect is a modern real estate platform built to simplify
              property discovery, management, and investment.
              We connect buyers, sellers, landlords, tenants,
              and trusted agents through one easy-to-use platform.
            </p>

            <div className="space-y-4">

              <div className="flex items-center gap-4">
                <FaShieldAlt className="text-orange-500 text-2xl" />
                <span className="text-gray-700">
                  Verified Property Listings
                </span>
              </div>

              <div className="flex items-center gap-4">
                <FaUsers className="text-orange-500 text-2xl" />
                <span className="text-gray-700">
                  Trusted Professional Agents
                </span>
              </div>

              <div className="flex items-center gap-4">
                <FaHandshake className="text-orange-500 text-2xl" />
                <span className="text-gray-700">
                  Secure Property Transactions
                </span>
              </div>

            </div>

          </div>

        </div>

        {/* Mission & Vision */}

        <div className="grid md:grid-cols-2 gap-8 mt-20">

          <div className="bg-white rounded-2xl shadow-lg p-8 hover:scale-105 transition">

            <FaBullseye className="text-orange-500 text-5xl mb-5" />

            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Our Mission
            </h2>

            <p className="text-gray-600">
              To make buying, selling and managing properties
              simple, transparent and accessible through
              innovative technology.
            </p>

          </div>

          <div className="bg-white rounded-2xl shadow-lg p-8 hover:scale-105 transition">

            <FaEye className="text-orange-500 text-5xl mb-5" />

            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Our Vision
            </h2>

            <p className="text-gray-600">
              To become Africa's most trusted digital real estate
              platform connecting buyers, sellers,
              landlords and tenants.
            </p>

          </div>

        </div>

        {/* Statistics */}

        <div className="bg-gray-900 rounded-2xl text-white mt-20 p-10">

          <div className="grid grid-cols-2 md:grid-cols-4 text-center gap-8">

            <div>
              <h2 className="text-4xl font-bold text-orange-500">
                1200+
              </h2>
              <p>Properties</p>
            </div>

            <div>
              <h2 className="text-4xl font-bold text-orange-500">
                850+
              </h2>
              <p>Happy Clients</p>
            </div>

            <div>
              <h2 className="text-4xl font-bold text-orange-500">
                120+
              </h2>
              <p>Agents</p>
            </div>

            <div>
              <h2 className="text-4xl font-bold text-orange-500">
                4.9/5
              </h2>
              <p>Customer Rating</p>
            </div>

          </div>

        </div>

        {/* Why Choose Us */}

        <div className="mt-20">

          <h2 className="text-4xl text-center font-bold text-gray-800 mb-12">
            Why Choose Habitect?
          </h2>

          <div className="grid md:grid-cols-4 gap-8">

            <div className="bg-white rounded-xl shadow-lg p-8 text-center">

              <FaHome className="text-5xl text-orange-500 mx-auto mb-4" />

              <h3 className="font-bold mb-3">
                Verified Listings
              </h3>

              <p className="text-gray-600 text-sm">
                Quality checked properties from trusted sellers.
              </p>

            </div>

            <div className="bg-white rounded-xl shadow-lg p-8 text-center">

              <FaUsers className="text-5xl text-orange-500 mx-auto mb-4" />

              <h3 className="font-bold mb-3">
                Trusted Agents
              </h3>

              <p className="text-gray-600 text-sm">
                Work with experienced real estate professionals.
              </p>

            </div>

            <div className="bg-white rounded-xl shadow-lg p-8 text-center">

              <FaShieldAlt className="text-5xl text-orange-500 mx-auto mb-4" />

              <h3 className="font-bold mb-3">
                Secure Deals
              </h3>

              <p className="text-gray-600 text-sm">
                Safe and transparent property transactions.
              </p>

            </div>

            <div className="bg-white rounded-xl shadow-lg p-8 text-center">

              <FaHandshake className="text-5xl text-orange-500 mx-auto mb-4" />

              <h3 className="font-bold mb-3">
                Great Support
              </h3>

              <p className="text-gray-600 text-sm">
                Friendly support whenever you need assistance.
              </p>

            </div>

          </div>

        </div>

        {/* CTA */}

        <div className="text-center mt-20">

          <h2 className="text-4xl font-bold text-gray-800 mb-5">
            Ready to Find Your Dream Home?
          </h2>

          <p className="text-gray-600 mb-8">
            Browse hundreds of premium properties across Kenya.
          </p>

          <Link to="/properties" className="bg-orange-500 text-white px-6 py-3 rounded-lg hover:bg-orange-600">

         Explore Properties

           </Link>

        </div>

      </div>

    </section>
  );
};

export default About;