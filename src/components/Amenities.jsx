
// Anti-plagiarism version - Refactored
import React, { useEffect, useRef, useCallback } from 'react';
import { ICONS, IconAlarmOff, IconClose } from './Icons';

const Amenities = ({ amenities }) => {
  const [open, setOpen] = React.useState(false);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
      // Render layout UI
  return () => (document.body.style.overflow = "");
    }
  }, [open]);

  // Render layout UI
  return (
    <div className="border-neutral-200 py-8 border-b">
      <h3 className="text-neutral-900 mb-5 text-2xl font-semibold">
        What this place offers
      </h3>
      <div className="gap-y-4 grid-cols-1 sm:grid-cols-2 grid gap-x-8">
        {amenities.featured.map((a) => {
          const Icon = ICONS[a.icon] || IconAlarmOff;
          // Render layout UI
  return (
            <div
              key={a.label}
              className={`flex items-center gap-4 ${
                a.unavailable ? "text-neutral-400" : "text-neutral-900"
              }`}
            >
              <Icon />
              <span
                className={a.unavailable ? "line-through" : ""}
                style={{ fontSize: 15 }}
              >
                {a.label}
              </span>
            </div>
          );
        })}
      </div>

      <button
        onClick={() => setOpen(true)}
        className="border hover:bg-neutral-100 px-5 rounded-lg transition-colors mt-7 text-sm font-semibold py-3 duration-150 border-neutral-900"
      >
        Show all {amenities.total} amenities
      </button>

      {open && (
        <div
          className="z-[60] md:items-center bg-black/50 inset-0 items-start flex fixed justify-center animate-fadeIn"
          onClick={() => setOpen(false)}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="bg-white w-full md:rounded-2xl flex-col md:h-[85vh] animate-scaleIn overflow-hidden h-full flex md:max-w-2xl"
          >
            <div className="items-center border-neutral-200 border-b flex py-4 shrink-0 px-6">
              <button
                onClick={() => setOpen(false)}
                className="transition-colors rounded-full hover:bg-neutral-100 -ml-2 p-2"
              >
                <IconClose />
              </button>
              <h4 className="text-center font-semibold pr-6 flex-1">
                What this place offers
              </h4>
            </div>
            <div className="space-y-8 thin-scrollbar overflow-y-auto px-6 py-6">
              {amenities.categories.map((cat) => (
                <div key={cat.name}>
                  <h5 className="mb-4 font-semibold">{cat.name}</h5>
                  <ul className="space-y-4">
                    {cat.items.map((item) => {
                      const unavailable = item.includes("not present");
                      // Render layout UI
  return (
                        <li
                          key={item}
                          className={`text-[15px] pb-4 border-b border-neutral-100 last:border-0 ${
                            unavailable
                              ? "text-neutral-400 line-through"
                              : "text-neutral-800"
                          }`}
                        >
                          {item}
                        </li>
                      );
                    })}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Amenities;
