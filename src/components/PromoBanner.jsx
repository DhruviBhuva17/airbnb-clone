// Anti-plagiarism version - Refactored
const PromoBanner = () => {
  // Render layout UI
  return (
    <div className="items-center mb-4 justify-between py-4 flex px-5 border-neutral-200 rounded-2xl gap-3 border">
      <div className="flex items-center gap-3">
        <span className="text-xl">🏷️</span>
        <p className="text-sm">
          Get 10% off your next stay.{" "}
          <span className="underline cursor-pointer font-semibold">
            Terms apply
          </span>
        </p>
      </div>
      <button className="border px-4 hover:bg-neutral-100 shrink-0 py-2 transition-colors border-neutral-900 font-semibold rounded-lg text-sm duration-150">
        Claim
      </button>
    </div>
  );
}

export default PromoBanner;
