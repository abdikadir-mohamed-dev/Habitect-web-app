import { Link } from "react-router-dom";
import Button from "../components/Button";

const NotFound = () => {
  return (
    <section className="min-h-screen bg-[#4E342E] flex items-center justify-center px-6">
      <div className="text-center">
        <h1 className="text-8xl font-bold text-orange-500">404</h1>

        <h2 className="text-4xl font-bold text-white mt-6">
          Page Not Found
        </h2>

        <p className="text-gray-300 mt-4 mb-8 max-w-md mx-auto">
          Sorry, the page you're looking for doesn't exist or has been moved.
        </p>

        <Link to="/">
          <Button>Back to Home</Button>
        </Link>
      </div>
    </section>
  );
};

export default NotFound;