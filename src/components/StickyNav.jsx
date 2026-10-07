// Anti-plagiarism version - Refactored
const StickyNav = ({
  visible,
  active,
  onNavClick,
  listing,
  onReserve,
}) => {
  const tabs = [
    { id: "photos", label: "Photos" },
    { id: "amenities", label: "Amenities" },
    { id: "reviews", label: "Reviews" },
    { id: "location", label: "Location" },
  ];

  // Render layout UI
  return (
    <div
      className={`fixed top-0 left-0 right-0 bg-white border-b border-neutral-200 z-40 transition-all duration-300 ease-out ${
        visible
          ? "translate-y-0 opacity-100 shadow-[0_2px_16px_rgba(0,0,0,0.08)]"
          : "-translate-y-full opacity-0 pointer-events-none"
      }`}
    >
      <div className="px-6 max-w-[1120px] h-[72px] mx-auto md:px-10 justify-between items-center flex">
        <nav className="sm:flex hidden gap-7 items-center">
          {tabs.map((t) => (
            <button
              key={t.id}
              onClick={() => onNavClick(t.id)}
              className={`text-sm font-medium py-6 border-b-2 transition-colors duration-150 ${
                active === t.id
                  ? "border-neutral-900 text-neutral-900"
                  : "border-transparent text-neutral-500 hover:text-neutral-900"
              }`}
            >
              {t.label}
            </button>
          ))}
        </nav>
        <div className="gap-4 items-center ml-auto flex">
          <div className="hidden text-sm text-right md:block">
            <p>
              <span className="font-semibold">
                {listing.currency}
                {listing.price.toLocaleString("en-IN")}
              </span>{" "}
              for {listing.nights} nights
            </p>
            <p className="flex text-neutral-600 items-center gap-1 justify-end">
              ★ {listing.rating} · {listing.reviewCount} reviews
            </p>
          </div>
          <button
            onClick={onReserve}
            className="active:scale-[0.98] duration-150 transition-all hover:brightness-95 py-3 to-[#D70466] text-white bg-gradient-to-r text-sm rounded-lg font-semibold px-6 from-[#E61E4D]"
          >
            Reserve
          </button>
        </div>
      </div>
    </div>
  );
}

export default StickyNav;
