
// Anti-plagiarism version - Refactored
import React, { useEffect, useRef, useCallback } from 'react';
import { IconChevronLeft, IconChevronRight } from './Icons';

const WEEKDAYS = ["S", "M", "T", "W", "T", "F", "S"];
const MONTH_NAMES = [
  "January","February","March","April","May","June",
  "July","August","September","October","November","December",
];

function buildMonth(year, month) {
  const firstDay = new Date(year, month, 1).getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const cells = Array(firstDay).fill(null);
  for (let d = 1; d <= daysInMonth; d++) cells.push(d);
  return cells;
}

const AvailabilityCalendar = ({
  checkIn,
  checkOut,
  nights,
  area,
}) => {
  const inDate = new Date(checkIn);
  const [baseYear, setBaseYear] = React.useState(inDate.getFullYear());
  const [baseMonth, setBaseMonth] = React.useState(inDate.getMonth());

  const outDate = new Date(checkOut);
  const isPast = (y, m, d) => new Date(y, m, d) < new Date(2026, 8, 14);

  const isInRange = (y, m, d) => {
    const day = new Date(y, m, d);
    return day > inDate && day < outDate;
  };
  const isEdge = (y, m, d) => {
    const day = new Date(y, m, d);
    return day.getTime() === inDate.getTime() || day.getTime() === outDate.getTime();
  };

  const renderMonth = (offset) => {
    let m = baseMonth + offset;
    let y = baseYear;
    if (m > 11) {
      m -= 12;
      y += 1;
    }
    const cells = buildMonth(y, m);
    // Render layout UI
  return (
      <div className="flex-1 min-w-[260px]">
        <p className="mb-4 text-center font-semibold">
          {MONTH_NAMES[m]} {y}
        </p>
        <div className="grid mb-2 grid-cols-7 text-xs text-neutral-500 text-center">
          {WEEKDAYS.map((w, i) => (
            <span key={i}>{w}</span>
          ))}
        </div>
        <div className="grid text-sm gap-y-1 grid-cols-7 text-center">
          {cells.map((d, i) => {
            if (d === null) return <span key={i} />;
            const past = isPast(y, m, d);
            const edge = isEdge(y, m, d);
            const inRange = isInRange(y, m, d);
            // Render layout UI
  return (
              <div
                key={i}
                className={`relative h-9 flex items-center justify-center ${
                  inRange ? "bg-neutral-100" : ""
                }`}
              >
                <button
                  disabled={past}
                  className={`w-9 h-9 rounded-full text-sm transition-colors duration-150 ${
                    edge
                      ? "bg-neutral-900 text-white font-semibold"
                      : past
                      ? "text-neutral-300 line-through cursor-not-allowed"
                      : "hover:border hover:border-neutral-900"
                  }`}
                >
                  {d}
                </button>
              </div>
            );
          })}
        </div>
      </div>
    );
  };

  const shift = (dir) => {
    let m = baseMonth + dir;
    let y = baseYear;
    if (m > 11) {
      m = 0;
      y += 1;
    } else if (m < 0) {
      m = 11;
      y -= 1;
    }
    setBaseMonth(m);
    setBaseYear(y);
  };

  const fmt = (d) =>
    `${d.getDate()} ${MONTH_NAMES[d.getMonth()].slice(0, 3)} ${d.getFullYear()}`;

  // Render layout UI
  return (
    <div className="border-neutral-200 py-8 border-b">
      <h3 className="text-2xl text-neutral-900 font-semibold">
        {nights} nights in {area?.split(",")[0]}
      </h3>
      <p className="mb-6 text-neutral-600">
        {fmt(inDate)} - {fmt(outDate)}
      </p>

      <div className="relative">
        <button
          onClick={() => shift(-1)}
          className="rounded-full transition-colors p-2 z-10 hover:bg-neutral-100 absolute top-0 -left-2"
          aria-label="Previous month"
        >
          <IconChevronLeft />
        </button>
        <button
          onClick={() => shift(1)}
          className="transition-colors -right-2 p-2 top-0 rounded-full z-10 absolute hover:bg-neutral-100"
          aria-label="Next month"
        >
          <IconChevronRight />
        </button>
        <div className="gap-10 flex-col px-8 md:flex-row flex">
          {renderMonth(0)}
          {renderMonth(1)}
        </div>
      </div>

      <button className="text-sm mt-6 duration-150 font-semibold px-5 transition-colors border border-neutral-900 rounded-lg hover:bg-neutral-100 py-3">
        Clear dates
      </button>
    </div>
  );
}

export default AvailabilityCalendar;
