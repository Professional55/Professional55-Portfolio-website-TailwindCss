import Image from "next/image";

const Hero = () => {
  return (
    <div
      id="hero"
      className="min-h-screen flex flex-col-reverse lg:flex-row items-center bg-gray-900 text-white px-6 md:px-12"
    >
      {/* Text Content */}
      <div className="w-full lg:w-1/2 text-center lg:text-left py-8 lg:py-0">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold">
          I'm Muhammad Annus
        </h1>
        <p className="text-lg md:text-xl lg:text-2xl font-semibold mt-4">
          Software Engineer / Web Developer
        </p>
        <p className="mt-6 text-gray-300 leading-relaxed max-w-lg mx-auto lg:mx-0">
          I build responsive, user-friendly websites and applications while staying updated with modern technologies.
        </p>
      </div>

      {/* Image Section */}
      <div className="w-full lg:w-1/2 flex justify-center items-center h-64 lg:h-full relative">
        <div className="relative w-48 h-48 md:w-60 md:h-60 lg:w-72 lg:h-72">
          <Image
            src="/image(1).png" // Adjust path as needed
            alt="Hero Image"
            fill
            className="object-cover rounded-full"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
