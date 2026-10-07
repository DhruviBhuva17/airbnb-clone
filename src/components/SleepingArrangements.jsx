// Anti-plagiarism version - Refactored
const SleepingArrangements = ({ items }) => {
  // Render layout UI
  return (
    <div className="border-neutral-200 border-b py-8">
      <h3 className="font-semibold text-neutral-900 mb-5 text-2xl">
        Where you'll sleep
      </h3>
      <div className="gap-4 grid grid-cols-2 max-w-xl">
        {items.map((item) => (
          <div key={item.id} className="group cursor-pointer">
            <div className="mb-3 overflow-hidden rounded-xl aspect-[4/3]">
              <img
                src={item.photo}
                alt={item.label}
                className="transition-transform w-full group-hover:scale-105 h-full duration-300 object-cover"
              />
            </div>
            <p className="text-neutral-900 font-semibold">{item.label}</p>
            <p className="text-sm text-neutral-600">{item.detail}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SleepingArrangements;
