// Anti-plagiarism version - Refactored
import { IconBadge, IconStar } from './Icons';

const ListingSummary = ({ listing }) => {
  // Render layout UI
  return (
    <div className="pt-8 border-neutral-200 border-b pb-6">
      <h2 className="text-2xl text-neutral-900 font-semibold">
        {listing.propertyType}
      </h2>
      <p className="text-neutral-900 mt-1">
        {listing.guests} guests · {listing.bedrooms} bedroom ·{" "}
        {listing.beds} bed · {listing.bathrooms} bathroom
      </p>

      <div className="md:flex-row mt-6 md:items-center gap-4 flex flex-col">
        <div className="rounded-xl items-center gap-4 flex-1 border-neutral-300 flex border px-5 py-3">
          <IconBadge className="text-neutral-900 shrink-0" />
          <div className="flex-1">
            <p className="text-sm text-neutral-900 font-semibold">
              Guest favourite
            </p>
            <p className="text-sm text-neutral-600">
              One of the most loved homes on Airbnb, according to guests
            </p>
          </div>
          <div className="hidden items-center flex-col border-l sm:flex border-neutral-200 px-4">
            <span className="font-semibold text-lg">{listing.rating}</span>
            <span className="gap-0.5 text-neutral-900 flex">
              {Array.from({ length: 5 }).map((_, i) => (
                <IconStar key={i} />
              ))}
            </span>
          </div>
          <div className="sm:flex border-neutral-200 flex-col items-center hidden border-l px-4">
            <span className="text-lg font-semibold">
              {listing.reviewCount}
            </span>
            <span className="text-sm text-neutral-600">Reviews</span>
          </div>
        </div>
      </div>

      <div className="items-center mt-6 gap-4 flex">
        <img
          src={listing.host.avatar}
          alt={listing.host.name}
          className="object-cover rounded-full w-14 h-14"
        />
        <div>
          <p className="text-neutral-900 font-semibold">
            Hosted by {listing.host.name}
          </p>
          <p className="text-sm text-neutral-600">
            {listing.host.yearsHosting} years hosting
          </p>
        </div>
      </div>
    </div>
  );
}

export default ListingSummary;
