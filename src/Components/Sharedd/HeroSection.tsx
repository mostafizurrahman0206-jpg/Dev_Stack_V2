 import heroImg from "../../assets/banner-stack.png";

const HeroSection = () => {
  return (
    <section className="min-h-[calc(100vh-72px)] bg-white flex items-center">
      <div className="max-w-6xl w-full mx-auto px-6 py-20">

        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-12">

          {/* Left Content */}
          <div>
            <h1 className="text-5xl md:text-6xl font-extrabold leading-[1.05] tracking-tight text-[#111827]">
              Build Your Ideal
              <br />

              <span className="bg-gradient-to-r from-[#ff512f] via-[#e91e63] to-[#8b5cf6] bg-clip-text text-transparent">
                Development Stack
              </span>
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-7 text-[#36506f]">
              Explore frontend, backend, database, and tooling options,
              compare them side by side, and put together the stack that fits
              your next project.
            </p>

            {/* Buttons */}
            <div className="mt-10 flex flex-wrap gap-3">
              <a
                href="#technologies"
                className="rounded-lg bg-gradient-to-r from-[#ff642d] to-[#e91e63] px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:scale-[1.02]"
              >
                Explore Technologies
              </a>

              <a
                href="#about"
                className="rounded-lg border border-gray-200 bg-white px-10 py-3 text-sm font-medium text-[#253858] transition hover:bg-gray-50"
              >
                Learn More
              </a>
            </div>
          </div>

          {/* Right Image */}
          <div className="flex justify-center md:justify-end">
            <img
              src={heroImg}
              alt="Development Stack"
              className="w-[320px] md:w-[430px] lg:w-[480px] object-contain"
            />
          </div>

        </div>
      </div>
    </section>
  );
};

export default HeroSection;