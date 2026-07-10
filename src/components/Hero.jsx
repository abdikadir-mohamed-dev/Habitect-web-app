import Button from "./Button";
import SearchBar from "./SearchBar";

const Hero = () => {
  return (
    <>
    <section
      className="relative h-[90vh] bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://img.freepik.com/premium-photo/luxury-villa-night-tropical-haven_961875-87240.jpg?w=996')",
      }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Hero Content */}
      <div className="relative z-10 flex h-full items-center">
        <div className="max-w-7xl  px-6">
          <div className="max-w-2xl text-white ,ml-32">
            <h1 className="flex text-5xl md:text-7xl font-bold leading-tight">
              Find Your <br></br> Dream Home
            </h1>

            <p className="mt-6 text-lg text-gray-200">
              Discover modern properties that perfectly match your lifestyle.
              Browse listings, schedule visits, and find your next home with
              Habitect.
            </p>

            <div className="mt-8">
              <Button>Explore Properties</Button>
            </div>
          </div>
        </div>
      </div>
    </section>
    
    </>
  );
};

export default Hero;