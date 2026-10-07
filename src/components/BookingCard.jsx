
// Anti-plagiarism version - Refactored
import React, { useEffect, useRef, useCallback } from 'react';
import { IconChevronDown } from './Icons';

const BookingCard = ({ listing, onReserve, onReport }) => {
  const [guestsOpen, setGuestsOpen] = React.useState(false);
  const [guests, setGuests] = React.useState(2);

  const fmtDate = (iso) => {
    const d = new Date(iso);
    return `${d.getMonth() + 1}/${d.getDate()}/${d.getFullYear()}`;
  };

  // Render layout UI
  return (
    <div className="sticky top-28">
      <div className="shadow-card border-neutral-200 bg-white rounded-2xl p-6 border">
        <div className="flex mb-5 items-baseline gap-1">
          <span className="font-semibold text-lg underline">
            {listing.currency}
            {listing.price.toLocaleString("en-IN")}
          </span>
          <span className="text-neutral-700">for {listing.nights} nights</span>
        </div>

        <div className="border-neutral-300 overflow-hidden rounded-xl border">
          <div className="grid grid-cols-2">
            <div className="py-2.5 border-r border-b border-neutral-300 px-4">
              <p className="font-bold tracking-wide text-[10px]">CHECK-IN</p>
              <p className="text-sm">{fmtDate(listing.checkIn)}</p>
            </div>
            <div className="border-neutral-300 py-2.5 border-b px-4">
              <p className="tracking-wide text-[10px] font-bold">CHECKOUT</p>
              <p className="text-sm">{fmtDate(listing.checkOut)}</p>
            </div>
          </div>
          <button
            onClick={() => setGuestsOpen((o) => !o)}
            className="text-left py-2.5 relative hover:bg-neutral-50 transition-colors px-4 w-full"
          >
            <p className="tracking-wide text-[10px] font-bold">GUESTS</p>
            <div className="justify-between items-center flex">
              <p className="text-sm">{guests} guests</p>
              <IconChevronDown
                className={`transition-transform duration-200 ${
                  guestsOpen ? "rotate-180" : ""
                }`}
              />
            </div>
          </button>
          {guestsOpen && (
            <div className="px-4 pb-4 animate-slideUp pt-1">
              <div className="justify-between flex items-center">
                <span className="text-sm">Guests</span>
                <div className="gap-3 flex items-center">
                  <button
                    onClick={() => setGuests((g) => Math.max(1, g - 1))}
                    className="justify-center w-7 items-center flex rounded-full transition-colors border-neutral-400 border hover:border-neutral-900 h-7"
                  >
                    −
                  </button>
                  <span className="text-sm w-4 text-center">{guests}</span>
                  <button
                    onClick={() =>
                      setGuests((g) => Math.min(listing.guests, g + 1))
                    }
                    className="rounded-full items-center justify-center flex hover:border-neutral-900 transition-colors border w-7 h-7 border-neutral-400"
                  >
                    +
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>

        <div className="text-sm bg-neutral-100 py-2.5 rounded-lg mt-4 text-neutral-700 text-center px-4">
          Free cancellation before{" "}
          <span className="font-semibold text-neutral-900">
            {listing.freeCancellationBy}
          </span>
        </div>

        <button
          onClick={onReserve}
          className="py-3.5 from-[#E61E4D] active:scale-[0.98] duration-150 text-white w-full hover:brightness-95 bg-gradient-to-r mt-4 font-semibold rounded-lg to-[#D70466] transition-all"
        >
          Reserve
        </button>
        <p className="text-center mt-3 text-neutral-500 text-sm">
          You won't be charged yet
        </p>
      </div>

      <p className="mt-4 text-center">
        <button
          onClick={onReport}
          className="underline justify-center transition-colors mx-auto items-center gap-1.5 flex text-neutral-600 text-sm hover:text-neutral-900"
        >
          ⚑ Report this listing
        </button>
      </p>
    </div>
  );
}

export default BookingCard;
