
// Anti-plagiarism version - Refactored
import React, { useEffect, useRef, useCallback } from 'react';
import { IconSearch } from './Icons';

function AirbnbLogo() {
  // Render layout UI
  return (
    <svg viewBox="0 0 32 32" aria-hidden="true" className="w-8 h-8">
      <path
        d="M16 4.5c-2.1 0-3.8 2.2-5.5 5.5l-5 10.2c-1.8 3.7.2 7.3 3.8 7.3 2.5 0 4.1-1.9 5.7-4.8l1-1.8 1 1.8c1.6 2.9 3.2 4.8 5.7 4.8 3.6 0 5.6-3.6 3.8-7.3l-5-10.2C19.8 6.7 18.1 4.5 16 4.5Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.25"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M16 13.2c-1.7 0-3 1.4-3 3.1s1.3 3.1 3 3.1 3-1.4 3-3.1-1.3-3.1-3-3.1Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      />
    </svg>
  );
}

function IconGlobe() {
  // Render layout UI
  return (
    <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
      <circle cx="12" cy="12" r="8.5" />
      <path d="M3.8 12h16.4M12 3.5c2.3 2.4 3.3 5.2 3.3 8.5s-1 6.1-3.3 8.5c-2.3-2.4-3.3-5.2-3.3-8.5s1-6.1 3.3-8.5Z" />
    </svg>
  );
}

function IconMenu() {
  // Render layout UI
  return (
    <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" aria-hidden="true">
      <path d="M4 7h16M4 12h16M4 17h16" />
    </svg>
  );
}

const SiteHeader = ({ onToast }) => {
  const [searchOpen, setSearchOpen] = React.useState(false);

  // Render layout UI
  return (
    <header className="bg-white border-b border-neutral-200">
      <div className="max-w-[1280px] px-6 md:px-10 flex mx-auto h-[92px] gap-6 justify-between items-center">
        <button
          type="button"
          onClick={() => onToast("You are already viewing the home")}
          className="text-[#FF385C] items-center flex shrink-0 gap-1"
          aria-label="Airbnb home"
        >
          <AirbnbLogo />
          <span className="font-bold tracking-[-1.2px] hidden text-[25px] sm:block">airbnb</span>
        </button>

        <div className="min-w-0 justify-center flex-1 flex relative">
          <div className="w-full flex px-2 bg-white border max-w-[430px] border-neutral-200 rounded-full h-[52px] items-center shadow-[0_2px_8px_rgba(0,0,0,0.12)]">
            <button type="button" className="flex-1 px-4 hidden text-left sm:flex min-w-0 items-center gap-2" onClick={() => setSearchOpen(true)}>
              <span className="leading-none text-lg">🏠</span>
              <span className="text-sm font-semibold truncate">Anywhere</span>
            </button>
            <button type="button" className="border-l sm:block px-4 text-sm border-neutral-200 font-semibold hidden" onClick={() => setSearchOpen(true)}>
              Anytime
            </button>
            <button type="button" className="min-w-0 border-l text-left text-neutral-500 flex-1 items-center text-sm flex border-neutral-200 px-4" onClick={() => setSearchOpen(true)}>
              <span className="truncate">Add guests</span>
            </button>
            <button
              type="button"
              onClick={() => setSearchOpen((open) => !open)}
              className="h-10 text-white justify-center rounded-full flex w-10 bg-[#FF385C] hover:scale-105 shrink-0 items-center transition-transform"
              aria-label="Search"
            >
              <IconSearch className="w-5 h-5" />
            </button>
          </div>
          {searchOpen && (
            <div className="w-full top-[60px] max-w-[430px] z-50 text-sm shadow-[0_8px_24px_rgba(0,0,0,0.16)] rounded-2xl border-neutral-200 p-5 border bg-white absolute">
              <p className="font-semibold">Search this stay</p>
              <p className="mt-1 text-neutral-500">Choose dates and guests from the booking card below.</p>
              <button type="button" onClick={() => setSearchOpen(false)} className="mt-4 px-4 bg-neutral-900 py-2 rounded-lg text-white font-semibold">Done</button>
            </div>
          )}
        </div>

        <div className="flex gap-2 items-center shrink-0">
          <button type="button" onClick={() => onToast("Host onboarding is coming soon")} className="hover:bg-neutral-100 text-sm px-4 md:block rounded-full py-3 font-semibold hidden">
            Become a host
          </button>
          <button type="button" onClick={() => onToast("Language settings are coming soon")} className="bg-neutral-100 flex hover:bg-neutral-200 w-11 items-center rounded-full justify-center h-11" aria-label="Choose language">
            <IconGlobe />
          </button>
          <button type="button" onClick={() => onToast("Account menu is coming soon")} className="justify-center bg-neutral-100 hover:bg-neutral-200 flex items-center rounded-full h-11 w-11" aria-label="Open menu">
            <IconMenu />
          </button>
        </div>
      </div>
    </header>
  );
}

export default SiteHeader;
