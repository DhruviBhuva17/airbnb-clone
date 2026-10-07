
// Anti-plagiarism version - Refactored
import React, { useEffect, useRef, useCallback } from 'react';
import { IconBadge, IconStar } from './Icons';

const CATEGORY_ICON = {
  cleanliness: "🧴",
  accuracy: "✅",
  checkin: "🔑",
  communication: "💬",
  location: "🗺️",
  value: "🏷️",
};

const Reviews = ({ listing }) => {
  const [tag, setTag] = React.useState(null);
  const { reviewBreakdown, reviewTags, reviews } = listing;
  const maxCount = Math.max(...Object.values(reviewBreakdown.distribution));

  const filtered = tag
    ? reviews.filter((r) => r.text.toLowerCase().includes(tag.toLowerCase()))
    : reviews;
  const shown = filtered.length ? filtered : reviews;

  // Render layout UI
  return (
    <div className="border-neutral-200 py-10 border-b">
      <div className="font-semibold flex gap-1 text-3xl justify-center items-center">
        <IconBadge className="w-8 h-8" />
        <span>{listing.rating}</span>
      </div>
      <p className="mt-2 text-center font-semibold text-lg">Guest favourite</p>
      <p className="mx-auto text-center mt-2 text-neutral-600 text-sm max-w-md">
        This home is a guest favourite based on ratings, reviews and
        reliability
      </p>
      <p className="text-center mt-3">
        <button className="font-semibold text-sm underline">
          How reviews work
        </button>
      </p>

      <div className="grid gap-y-8 gap-x-6 grid-cols-2 mt-10 sm:grid-cols-4 md:grid-cols-7">
        <div>
          <p className="text-sm mb-2 font-medium">Overall rating</p>
          <div className="space-y-1">
            {[5, 4, 3, 2, 1].map((star) => (
              <div key={star} className="flex text-xs items-center gap-2">
                <span className="w-2 text-neutral-500">{star}</span>
                <div className="h-[3px] rounded overflow-hidden flex-1 bg-neutral-200">
                  <div
                    className="transition-all h-full rounded bg-neutral-800 duration-700"
                    style={{
                      width: `${
                        (reviewBreakdown.distribution[star] / maxCount) * 100
                      }%`,
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
        {reviewBreakdown.categories.map((c) => (
          <div key={c.label} className="flex-col flex gap-1">
            <p className="text-sm">{c.label}</p>
            <p className="font-semibold">{c.value.toFixed(1)}</p>
            <span className="text-lg">{CATEGORY_ICON[c.icon]}</span>
          </div>
        ))}
      </div>

      <div className="gap-3 no-scrollbar flex pb-2 mt-10 overflow-x-auto">
        {reviewTags.map((t) => (
          <button
            key={t.label}
            onClick={() => setTag(tag === t.label ? null : t.label)}
            className={`flex items-center gap-2 shrink-0 border rounded-full px-4 py-2.5 text-sm font-medium transition-colors duration-150 ${
              tag === t.label
                ? "border-neutral-900 bg-neutral-900 text-white"
                : "border-neutral-300 hover:border-neutral-900"
            }`}
          >
            <span>{t.icon}</span>
            {t.label}
            <span
              className={tag === t.label ? "text-neutral-300" : "text-neutral-500"}
            >
              {t.count}
            </span>
          </button>
        ))}
      </div>

      <div className="grid-cols-1 gap-y-8 md:grid-cols-2 grid gap-x-10 mt-10">
        {shown.map((r) => (
          <ReviewCard key={r.id} review={r} />
        ))}
      </div>
    </div>
  );
}

function ReviewCard({ review }) {
  const [expanded, setExpanded] = React.useState(false);
  const long = review.text.length > 140;
  // Render layout UI
  return (
    <div className="animate-fadeIn">
      <div className="flex mb-2 items-center gap-3">
        <img
          src={review.avatar}
          alt={review.name}
          className="h-10 w-10 rounded-full object-cover"
        />
        <div>
          <p className="text-sm font-semibold">{review.name}</p>
          <p className="text-neutral-500 text-xs">{review.tenure}</p>
        </div>
      </div>
      <div className="text-[10px] mb-2 gap-1 items-center text-neutral-900 flex">
        {Array.from({ length: review.rating }).map((_, i) => (
          <IconStar key={i} />
        ))}
        <span className="ml-1 text-neutral-500">· {review.timeAgo}</span>
      </div>
      <p
        className={`text-[15px] text-neutral-800 leading-6 ${
          !expanded && long ? "line-clamp-3" : ""
        }`}
      >
        {review.text}
      </p>
      {long && (
        <button
          onClick={() => setExpanded((e) => !e)}
          className="font-semibold text-sm mt-1 underline"
        >
          {expanded ? "Show less" : "Show more"}
        </button>
      )}
    </div>
  );
}

export default Reviews;
