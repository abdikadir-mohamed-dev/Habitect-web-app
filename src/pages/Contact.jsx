import Button from "../components/Button";

const Contact = () => {
  return (
    <section className="min-h-screen bg-gradient-to-br from-[#F5E6D3] via-[#E8C9A8] to-[#D6A77A] py-20">
      <div className="max-w-6xl mx-auto px-6">

        <div className="text-center mb-14">
          <h1 className="text-5xl font-bold text-[#4A2E1F]">
            Get In Touch
          </h1>

          <p className="mt-4 text-lg text-[#6B4E3D] max-w-2xl mx-auto">
            Have questions about a property or need assistance?
            We'd love to hear from you.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10 items-center">

          {/* Left Side */}
          <div className="space-y-8">

            <div>
              <h2 className="text-3xl font-bold text-[#4A2E1F]">
                Let's Talk
              </h2>

              <p className="mt-4 text-[#6B4E3D] leading-8">
                Whether you're looking for your dream home or simply
                need more information, our team is ready to help.
              </p>
            </div>

            <div className="space-y-5">

              <div className="bg-white/60 backdrop-blur-md rounded-xl p-5 shadow">
                <h3 className="font-semibold text-[#4A2E1F]">
                   Address
                </h3>
                <p className="text-[#6B4E3D]">
                  Nairobi, Kenya
                </p>
              </div>

              <div className="bg-white/60 backdrop-blur-md rounded-xl p-5 shadow">
                <h3 className="font-semibold text-[#4A2E1F]">
                   Email
                </h3>
                <p className="text-[#6B4E3D]">
                  info@habitect.com
                </p>
              </div>

              <div className="bg-white/60 backdrop-blur-md rounded-xl p-5 shadow">
                <h3 className="font-semibold text-[#4A2E1F]">
                   Phone
                </h3>
                <p className="text-[#6B4E3D]">
                  +254 700 000 000
                </p>
              </div>

            </div>

          </div>

          {/* Right Side Form */}
          <div className="bg-white/70 backdrop-blur-xl rounded-3xl shadow-2xl p-10">

            <form className="space-y-6">

              <input
                type="text"
                placeholder="Full Name"
                className="w-full rounded-xl border border-gray-300 bg-white px-5 py-4 focus:border-orange-500 focus:ring-2 focus:ring-orange-300 outline-none"
              />

              <input
                type="email"
                placeholder="Email Address"
                className="w-full rounded-xl border border-gray-300 bg-white px-5 py-4 focus:border-orange-500 focus:ring-2 focus:ring-orange-300 outline-none"
              />

              <input
                type="text"
                placeholder="Subject"
                className="w-full rounded-xl border border-gray-300 bg-white px-5 py-4 focus:border-orange-500 focus:ring-2 focus:ring-orange-300 outline-none"
              />

              <textarea
                rows="6"
                placeholder="Write your message..."
                className="w-full rounded-xl border border-gray-300 bg-white px-5 py-4 focus:border-orange-500 focus:ring-2 focus:ring-orange-300 outline-none"
              />

              <Button>
                Send Message
              </Button>

            </form>

          </div>

        </div>

      </div>
    </section>
  );
};

export default Contact;