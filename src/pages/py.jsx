import smileyImg from "../assets/frame-bl.png"; // The left large smiley image
import smallSmileyImg from "../assets/frame-brd.png"; // The top right progress meter image
import progressMeterImg from "../assets/frame-bru.png"; // The bottom right small smiley image

export default function AboutPyHack() {
  return (
    <div className="bg-white py-12 px-6 lg:px-24">
      {/* Heading and description */}
      <div className="lg:flex lg:justify-between lg:items-center mb-8">
        <div className="lg:w-1/2 mb-6 lg:mb-0">
          <h2 className="text-3xl font-bold text-gray-900">About PyHack</h2>
          <p className="text-lg text-gray-600 mt-4">
            PyHack is a dynamic, community-driven workshop designed to teach
            game development using Python.
          </p>
          <button className="mt-4 text-blue-500 hover:underline">
            Learn More →
          </button>
        </div>
      </div>

      {/* Grid Section for Images */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-8">
        {/* Left large image */}
        <div className="relative rounded-lg overflow-hidden bg-gray-100 h-64 lg:h-80">
          <img
            src={smileyImg}
            alt="Smiley face with circles"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Right section with two smaller images */}
        <div className="grid grid-rows-2 gap-4">
          {/* Progress meter image */}
          <div className="relative rounded-lg overflow-hidden bg-gray-100 h-40">
            <img
              src={progressMeterImg}
              alt="Progress meter"
              className="w-full h-full object-cover"
            />
            <div className="absolute top-2 left-6 text-gray-900 text-base ">
              101% Boost in Python game dev skills
            </div>
          </div>

          {/* Small smiley image */}
          <div className="relative rounded-lg overflow-hidden bg-gray-100 h-40">
            <img
              src={smallSmileyImg}
              alt="Small smiley face"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
