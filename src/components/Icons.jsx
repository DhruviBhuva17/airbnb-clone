// Anti-plagiarism version - Refactored
// Lightweight line-style icons drawn to resemble Airbnb's icon set.
// All icons are original SVG paths (not copied assets).

const base = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.5,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};

export const IconSearch = (p) => (
  <svg viewBox="0 0 32 32" width="18" height="18" {...base} {...p}>
    <circle cx="14" cy="14" r="8" />
    <path d="m20 20 7 7" />
  </svg>
);

export const IconShare = (p) => (
  <svg viewBox="0 0 32 32" width="16" height="16" {...base} {...p}>
    <path d="M16 3.5v19M9 10.5 16 3.5l7 7M4.5 20v6a2 2 0 0 0 2 2h19a2 2 0 0 0 2-2v-6" />
  </svg>
);

export const IconHeart = (p) => (
  <svg viewBox="0 0 32 32" width="16" height="16" {...base} {...p}>
    <path d="M16 28s-11-7-14-14A7 7 0 0 1 16 8a7 7 0 0 1 14 6c-3 7-14 14-14 14Z" />
  </svg>
);

export const IconGrid = (p) => (
  <svg viewBox="0 0 32 32" width="18" height="18" {...base} strokeWidth={0} fill="currentColor" {...p}>
    {[6, 16, 26].flatMap((cy) =>
      [6, 16, 26].map((cx) => <circle key={`${cx}-${cy}`} cx={cx} cy={cy} r={2.3} />)
    )}
  </svg>
);

export const IconClose = (p) => (
  <svg viewBox="0 0 32 32" width="18" height="18" {...base} {...p}>
    <path d="M6 6l20 20M26 6 6 26" />
  </svg>
);

export const IconChevronLeft = (p) => (
  <svg viewBox="0 0 32 32" width="18" height="18" {...base} {...p}>
    <path d="M20 6 10 16l10 10" />
  </svg>
);

export const IconChevronRight = (p) => (
  <svg viewBox="0 0 32 32" width="18" height="18" {...base} {...p}>
    <path d="M12 6l10 10-10 10" />
  </svg>
);

export const IconChevronDown = (p) => (
  <svg viewBox="0 0 32 32" width="14" height="14" {...base} {...p}>
    <path d="M6 12l10 10 10-10" />
  </svg>
);

export const IconStar = (p) => (
  <svg viewBox="0 0 32 32" width="12" height="12" fill="currentColor" {...p}>
    <path d="M16 2 20.5 12l10.9 1.3-8.1 7.5 2.2 10.9L16 26.2 6.5 31.7l2.2-10.9-8.1-7.5L11.5 12 16 2Z" />
  </svg>
);

export const IconBadge = (p) => (
  <svg viewBox="0 0 32 32" width="20" height="20" {...base} {...p}>
    <path d="M4 16c2 4 6 4 8 0M20 16c2 4 6 4 8 0M8 8c1.5 3 4 5.5 8 5.5S22.5 11 24 8" />
    <path d="M16 13.5V26" strokeDasharray="2 2" />
  </svg>
);

export const IconSun = (p) => (
  <svg viewBox="0 0 32 32" width="20" height="20" {...base} {...p}>
    <circle cx="16" cy="16" r="6" />
    <path d="M16 2v4M16 26v4M2 16h4M26 16h4M6 6l3 3M23 23l3 3M26 6l-3 3M9 23l-3 3" />
  </svg>
);

export const IconFan = (p) => (
  <svg viewBox="0 0 32 32" width="20" height="20" {...base} {...p}>
    <circle cx="16" cy="16" r="2.4" />
    <path d="M16 13.6c-1-3-1-8 2-10 2.5-1.7 5.4.5 4.7 3.4-.6 2.7-3.7 5.2-6.7 6.6ZM18.4 16c3 1 8 1 10 -2 1.7-2.5-.5-5.4-3.4-4.7-2.7.6-5.2 3.7-6.6 6.7ZM16 18.4c1 3 1 8-2 10-2.5 1.7-5.4-.5-4.7-3.4.6-2.7 3.7-5.2 6.7-6.6ZM13.6 16c-3-1-8-1-10 2-1.7 2.5.5 5.4 3.4 4.7 2.7-.6 5.2-3.7 6.6-6.7Z" />
  </svg>
);

export const IconDoor = (p) => (
  <svg viewBox="0 0 32 32" width="20" height="20" {...base} {...p}>
    <rect x="8" y="3" width="16" height="26" rx="1" />
    <circle cx="18.5" cy="16" r="1.2" fill="currentColor" stroke="none" />
  </svg>
);

export const IconKitchen = (p) => (
  <svg viewBox="0 0 32 32" width="22" height="22" {...base} {...p}>
    <path d="M9 3v9M9 3c-2 0-3.5 2-3.5 4.5S7 12 9 12M13 3v26M13 3c1.7 0 3 1.3 3 3v6c0 1.7-1.3 3-3 3M23 3c-3 0-5 3-5 7s2 6 5 6M23 3v26" />
  </svg>
);

export const IconWifi = (p) => (
  <svg viewBox="0 0 32 32" width="22" height="22" {...base} {...p}>
    <path d="M4 12c6.5-6 17.5-6 24 0M8.5 17c4-3.6 11-3.6 15 0M13.5 22c1.7-1.4 3.3-1.4 5 0" />
    <circle cx="16" cy="26" r="1.2" fill="currentColor" stroke="none" />
  </svg>
);

export const IconDesk = (p) => (
  <svg viewBox="0 0 32 32" width="22" height="22" {...base} {...p}>
    <path d="M4 21h24M6 21V9h20v12M6 27l2-6M26 27l-2-6M14 15h4" />
  </svg>
);

export const IconParking = (p) => (
  <svg viewBox="0 0 32 32" width="22" height="22" {...base} {...p}>
    <rect x="4" y="4" width="24" height="24" rx="3" />
    <path d="M12 23V9h5a4 4 0 0 1 0 8h-5" />
  </svg>
);

export const IconPool = (p) => (
  <svg viewBox="0 0 32 32" width="22" height="22" {...base} {...p}>
    <path d="M3 22c2 1.5 4 1.5 6 0s4-1.5 6 0 4 1.5 6 0 4-1.5 6 0M8 22V8a3 3 0 0 1 3-3h1M16 22V12M23 22V15" />
  </svg>
);

export const IconHotTub = (p) => (
  <svg viewBox="0 0 32 32" width="22" height="22" {...base} {...p}>
    <rect x="4" y="14" width="24" height="10" rx="2" />
    <path d="M4 24v2M28 24v2M9 14c0-3-2-3-2-6M15 14c0-3-2-3-2-6M21 14c0-3-2-3-2-6" />
  </svg>
);

export const IconPets = (p) => (
  <svg viewBox="0 0 32 32" width="22" height="22" {...base} {...p}>
    <circle cx="9" cy="8" r="2.3" />
    <circle cx="17" cy="6" r="2.3" />
    <circle cx="24" cy="10" r="2.3" />
    <circle cx="6" cy="16" r="2.3" />
    <path d="M22 27c0-4-3-8-7-8s-7 4-7 8c0 1.5 1.3 2 3 2 1.5 0 2-1 4-1s2.5 1 4 1c1.7 0 3-.5 3-2Z" />
  </svg>
);

export const IconCamera = (p) => (
  <svg viewBox="0 0 32 32" width="22" height="22" {...base} {...p}>
    <rect x="3" y="10" width="20" height="14" rx="2" />
    <path d="M23 14l6-3v10l-6-3" />
    <circle cx="13" cy="17" r="3.5" />
  </svg>
);

export const IconAlarmOff = (p) => (
  <svg viewBox="0 0 32 32" width="22" height="22" {...base} {...p}>
    <circle cx="16" cy="17" r="10" />
    <path d="M12 6h8M4 28l24-24" />
  </svg>
);

export const ICONS = {
  kitchen: IconKitchen,
  wifi: IconWifi,
  desk: IconDesk,
  parking: IconParking,
  pool: IconPool,
  hottub: IconHotTub,
  pets: IconPets,
  camera: IconCamera,
  "co-alarm": IconAlarmOff,
  "smoke-alarm": IconAlarmOff,
};
