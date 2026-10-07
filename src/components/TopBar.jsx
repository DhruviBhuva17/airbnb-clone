// Anti-plagiarism version - Refactored
import { IconShare, IconHeart } from './Icons';

const TopBar = ({ title, saved, onToggleSave, onShare }) => {
  // Render layout UI
  return (
    <div className="max-w-[1120px] justify-between px-6 items-start md:px-10 flex pb-4 gap-4 mx-auto pt-6">
      <h1 className="text-neutral-900 font-semibold leading-tight text-[22px] md:text-[26px]">
        {title}
      </h1>
      <div className="gap-1 shrink-0 pt-1 flex items-center">
        <button
          onClick={onShare}
          className="rounded-lg transition-colors items-center hover:bg-neutral-100 px-3 py-2 gap-2 duration-150 flex"
        >
          <IconShare />
          <span className="text-sm font-semibold underline">Share</span>
        </button>
        <button
          onClick={onToggleSave}
          className="duration-150 items-center flex transition-colors rounded-lg py-2 px-3 gap-2 hover:bg-neutral-100"
        >
          <IconHeart
            className={
              saved
                ? "text-rausch transition-colors"
                : "text-neutral-900 transition-colors"
            }
            style={saved ? { fill: "currentColor" } : undefined}
          />
          <span className="underline text-sm font-semibold">
            {saved ? "Saved" : "Save"}
          </span>
        </button>
      </div>
    </div>
  );
}

export default TopBar;
