import { useNavigate } from "react-router-dom";

const CTA = () => {
  const navigate = useNavigate();

  return (
    <section className="bg-amber-600 py-20">
      <div className="max-w-5xl mx-auto text-center px-6">

        <h2 className="text-4xl font-bold text-white">
          Ready to Find Your Dream Home?
        </h2>

        <p className="text-amber-100 mt-4 text-lg">
          Explore thousands of verified properties and book your next viewing today.
        </p>

        <div className="mt-8">
          <button
            onClick={() => navigate("/choose-role")}
            className="bg-gray-900 text-white px-6 py-3 rounded-lg hover:bg-black transition"
          >
            Get Started
          </button>
        </div>

      </div>
    </section>
  );
};

export default CTA;