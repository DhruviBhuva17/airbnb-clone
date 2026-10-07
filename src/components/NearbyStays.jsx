
// Anti-plagiarism version - Refactored
import React, { useEffect, useRef, useCallback } from 'react';
import { IconChevronLeft, IconChevronRight } from './Icons';

const stays = [
  {
    title: "Beautiful Studio with a view to die for",
    price: "₹23,600",
    rating: "4.91",
    image: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=900&q=85",
  },
  {
    title: "NAQAB - 1bhk with private pool",
    price: "₹42,218",
    rating: "4.95",
    image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=900&q=85",
  },
  {
    title: "Greentique Luxury Flat with plunge pool, Calangute",
    price: "₹44,506",
    rating: "4.94",
    image: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=900&q=85",
  },
  {
    title: "The Tropical Studio | 5 mins to Beach",
    price: "₹22,824",
    rating: "4.96",
    image: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=900&q=85",
  },
  {
    title: "Luxury Casa Bella 1BHK with plunge pool, Calangute",
    price: "₹39,942",
    rating: "4.95",
    image: "https://images.unsplash.com/photo-1600607688969-a5bfcd646154?auto=format&fit=crop&w=900&q=85",
  },
  {
    title: "Bright coastal apartment near Candolim",
    price: "₹31,420",
    rating: "4.89",
    image: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=900&q=85",
  },
];

const NearbyStays = () => {
  const [page, setPage] = React.useState(0);
  const pageCount = Math.ceil(stays.length / 5);
  const visibleStays = stays.slice(page * 5, page * 5 + 5);

  // Render layout UI
  return (
    <section className="border-neutral-200 py-10 border-t">
      <div className="gap-4 flex items-center justify-between">
        <h2 className="text-neutral-900 font-semibold text-2xl">More stays nearby</h2>
        <div className="items-center flex gap-2">
          <span className="mr-2 text-neutral-600 text-sm">{page + 1} / {pageCount}</span>
          <button
            type="button"
            onClick={() => setPage((current) => Math.max(0, current - 1))}
            disabled={page === 0}
            className="flex rounded-full hover:text-neutral-900 justify-center transition-colors disabled:cursor-not-allowed border-neutral-300 text-neutral-500 h-8 w-8 disabled:opacity-40 hover:border-neutral-900 items-center border"
            aria-label="Previous nearby stays"
          >
            <IconChevronLeft />
          </button>
          <button
            type="button"
            onClick={() => setPage((current) => Math.min(pageCount - 1, current + 1))}
            disabled={page === pageCount - 1}
            className="justify-center hover:text-neutral-900 rounded-full disabled:cursor-not-allowed flex h-8 w-8 items-center border-neutral-300 hover:border-neutral-900 disabled:opacity-40 transition-colors text-neutral-500 border"
            aria-label="Next nearby stays"
          >
            <IconChevronRight />
          </button>
        </div>
      </div>

      <div className="mt-6 md:grid-cols-3 lg:grid-cols-5 grid gap-5 sm:grid-cols-2 grid-cols-1">
        {visibleStays.map((stay) => (
          <article key={stay.title} className="min-w-0">
            <div className="bg-neutral-100 rounded-xl overflow-hidden aspect-[1.05]">
              <img src={stay.image} alt="" className="duration-300 h-full transition-transform object-cover w-full hover:scale-105" />
            </div>
            <h3 className="mt-2 text-sm font-medium line-clamp-2 text-neutral-900 leading-5">{stay.title}</h3>
            <p className="mt-1 text-sm text-neutral-700">{stay.price} <span className="mx-1">·</span> ★ {stay.rating}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

export default NearbyStays;
