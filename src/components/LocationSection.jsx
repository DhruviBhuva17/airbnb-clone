// Anti-plagiarism version - Refactored
const LocationSection = ({ location }) => {
  // Render layout UI
  return (
    <div className="py-10">
      <h3 className="font-semibold text-2xl mb-1 text-neutral-900">
        Where you'll be
      </h3>
      <p className="mb-6 text-neutral-600">{location.area}</p>

      <div className="h-[380px] relative overflow-hidden bg-[#e8eef0] rounded-2xl">
        <svg
          viewBox="0 0 800 380"
          className="w-full h-full"
          preserveAspectRatio="xMidYMid slice"
        >
          <rect width="800" height="380" fill="#e9edf0" />
          <path d="M0 260 C 200 220, 300 300, 500 250 S 700 200, 800 240 V380 H0 Z" fill="#d7e6df" />
          <path d="M0 60 C150 90 250 40 400 70 S 650 40 800 80" stroke="#c9d3d6" strokeWidth="6" fill="none" />
          <path d="M100 0 C 120 120 80 200 150 380" stroke="#c9d3d6" strokeWidth="6" fill="none" />
          <path d="M600 0 C 560 140 640 220 560 380" stroke="#c9d3d6" strokeWidth="6" fill="none" />
          <circle cx="400" cy="190" r="10" fill="#FF385C" />
          <circle cx="400" cy="190" r="24" fill="#FF385C" opacity="0.2" />
        </svg>
        <div className="items-center absolute flex pointer-events-none justify-center inset-0">
          <div className="border-2 w-4 h-4 bg-white shadow-md rounded-full border-rausch" />
        </div>
      </div>
      <p className="text-sm text-neutral-600 max-w-2xl mt-4">
        {location.description}
      </p>
    </div>
  );
}

export default LocationSection;
