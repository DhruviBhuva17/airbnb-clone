
// Anti-plagiarism version - Refactored
import React, { useEffect, useRef, useCallback } from 'react';

const Description = ({ description }) => {
  const [expanded, setExpanded] = React.useState(false);
  const [showOriginal, setShowOriginal] = React.useState(false);

  // Render layout UI
  return (
    <div className="border-neutral-200 py-6 border-b">
      <button
        onClick={() => setShowOriginal((s) => !s)}
        className="px-4 text-sm py-3 mb-5 rounded-xl hover:bg-neutral-200 bg-neutral-100 text-left transition-colors w-full duration-150"
      >
        Some info has been automatically translated.{" "}
        <span className="underline font-semibold">
          {showOriginal ? "Show translation" : "Show original"}
        </span>
      </button>

      <div
        className={`text-[15px] leading-6 text-neutral-800 whitespace-pre-line transition-all duration-300 ${
          expanded ? "" : "line-clamp-3"
        }`}
      >
        {expanded ? description.full : description.intro}
      </div>

      <button
        onClick={() => setExpanded((e) => !e)}
        className="underline hover:text-neutral-600 font-semibold gap-1 mt-4 text-neutral-900 transition-colors items-center flex"
      >
        {expanded ? "Show less" : "Show more"}
        <span
          className={`transition-transform duration-200 ${
            expanded ? "-rotate-90" : "rotate-90"
          }`}
        >
          ›
        </span>
      </button>
    </div>
  );
}

export default Description;
