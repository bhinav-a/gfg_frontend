import herogrpbg1 from "../assets/work1.png";
import herogrpbg2 from "../assets/work2.png";
import herogrpbg3 from "../assets/work3.png";
import herogrpbg4 from "../assets/work4.png";

export default function Work() {
  return (
    <div className="py-10 bg-white font-Inter">
      <h2 className="text-4xl font-bold text-center mb-12">
        Workshop Features
      </h2>
      <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-2 px-4 lg:ml-48 lg:mr-48">
        {/* Game Mechanics Card */}
        <div className="relative overflow-hidden rounded-lg shadow transition hover:shadow-lg p-4 bg-white flex flex-col justify-between h-64">
          <div className="absolute inset-0">
            <img
              src={herogrpbg1}
              alt="Background"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="relative z-10 mt-auto">
            <h3 className="text-3xl font-semibold text-gray-900 pb-3">
              Game Mechanics
            </h3>
            <p className="text-sm text-gray-600">
              Master physics, collision detection, AI, and game loops.
            </p>
          </div>
        </div>

        {/* Visual Effects Card */}
        <div className="relative overflow-hidden rounded-lg shadow transition hover:shadow-lg p-4 bg-white flex flex-col justify-between h-64">
          <div className="absolute inset-0">
            <img
              src={herogrpbg2}
              alt="Background"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="relative z-10 mt-auto">
            <h3 className="text-3xl font-semibold text-gray-900 pb-3">
              Visual Effects
            </h3>
            <p className="text-sm text-gray-600">
              Create 2D/3D graphics and animations.
            </p>
          </div>
        </div>

        {/* Game Balancing Card */}
        <div className="relative overflow-hidden rounded-lg shadow transition hover:shadow-lg p-4 bg-white flex flex-col justify-between h-64">
          <div className="absolute inset-0">
            <img
              src={herogrpbg3}
              alt="Background"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="relative z-10 mt-auto">
            <h3 className="text-3xl font-semibold text-gray-900 pb-3">
              Game Balancing
            </h3>
            <p className="text-sm text-gray-600">
              Balance difficulty and progression.
            </p>
          </div>
        </div>

        {/* Cross-Platform Dev Card */}
        <div className="relative overflow-hidden rounded-lg shadow transition hover:shadow-lg p-4 bg-white flex flex-col justify-between h-64">
          <div className="absolute inset-0">
            <img
              src={herogrpbg4}
              alt="Background"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="relative z-10 mt-auto">
            <h3 className="text-3xl font-semibold text-gray-900 pb-3">
              Cross-Platform Dev
            </h3>
            <p className="text-sm text-gray-600">
              Deploy games on PC, web, and mobile.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
