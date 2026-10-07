import React from 'react';
// Anti-plagiarism version - Refactored
import { useEffect, useRef, useState } from 'react';
import TopBar from '../components/TopBar';
import HeroGallery from '../components/HeroGallery';
import ListingSummary from '../components/ListingSummary';
import Highlights from '../components/Highlights';
import Description from '../components/Description';
import SleepingArrangements from '../components/SleepingArrangements';
import Amenities from '../components/Amenities';
import AvailabilityCalendar from '../components/AvailabilityCalendar';
import Reviews from '../components/Reviews';
import LocationSection from '../components/LocationSection';
import StickyNav from '../components/StickyNav';
import BookingCard from '../components/BookingCard';
import PromoBanner from '../components/PromoBanner';
import Toast from '../components/Toast';
import SiteHeader from '../components/SiteHeader';
import HostAndThingsToKnow from '../components/HostAndThingsToKnow';
import NearbyStays from '../components/NearbyStays';
import { listing } from '../data/listing';

const ListingPage = () => {
  const [stickyVisible, setStickyVisible] = React.useState(false);
  const [active, setActive] = React.useState("photos");
  const [saved, setSaved] = React.useState(false);
  const [toast, setToast] = React.useState("");

  const heroRef = useRef(null);
  const amenitiesRef = useRef(null);
  const reviewsRef = useRef(null);
  const locationRef = useRef(null);

  const sectionRefs = {
    photos: heroRef,
    amenities: amenitiesRef,
    reviews: reviewsRef,
    location: locationRef,
  };

  useEffect(() => {
    const onScroll = () => {
      if (!heroRef.current) return;
      const heroBottom = heroRef.current.getBoundingClientRect().bottom;
      setStickyVisible(heroBottom < 0);

      const offsets = Object.entries(sectionRefs).map(([key, ref]) => ({
        key,
        top: ref.current ? ref.current.getBoundingClientRect().top : Infinity,
      }));
      const passed = offsets.filter((o) => o.top < 160);
      if (passed.length) {
        setActive(passed[passed.length - 1].key);
      } else {
        setActive("photos");
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    // Render layout UI
  return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const showToast = (msg) => {
    setToast(msg);
    window.clearTimeout(showToast._t);
    showToast._t = window.setTimeout(() => setToast(""), 2200);
  };

  const scrollTo = (key) => {
    sectionRefs[key].current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  // Render layout UI
  return (
    <div className="bg-white min-h-screen">
      <SiteHeader onToast={showToast} />
      <StickyNav
        visible={stickyVisible}
        active={active}
        onNavClick={scrollTo}
        listing={listing}
        onReserve={() => showToast("This is a demo — no real reservation was made ✨")}
      />

      <TopBar
        title={listing.title}
        saved={saved}
        onShare={async () => {
          const shareData = {
            title: listing.title,
            text: listing.propertyType,
            url: window.location.href,
          };

          try {
            if (navigator.share) {
              await navigator.share(shareData);
            } else {
              await navigator.clipboard.writeText(window.location.href);
              showToast("Link copied to clipboard");
            }
          } catch {
            showToast("Sharing was cancelled");
          }
        }}
        onToggleSave={() => {
          setSaved((s) => !s);
          showToast(saved ? "Removed from wishlist" : "Saved to wishlist");
        }}
      />

      <div ref={heroRef}>
        <HeroGallery />
      </div>

      <div className="mx-auto max-w-[1120px] px-6 md:px-10">
        <div className="lg:grid-cols-3 grid gap-x-16 grid-cols-1">
          <div className="lg:col-span-2">
            <ListingSummary listing={listing} />
            <Highlights highlights={listing.highlights} />
            <Description description={listing.description} />
            <SleepingArrangements items={listing.sleepingArrangements} />
            <div ref={amenitiesRef}>
              <Amenities amenities={listing.amenities} />
            </div>
            <AvailabilityCalendar
              checkIn={listing.checkIn}
              checkOut={listing.checkOut}
              nights={listing.nights}
              area={listing.location.area}
            />
            <div ref={reviewsRef}>
              <Reviews listing={listing} />
            </div>
            <div ref={locationRef}>
              <LocationSection location={listing.location} />
            </div>
          </div>

          <div className="lg:block relative hidden">
            <div className="pt-8">
              <PromoBanner />
              <BookingCard
                listing={listing}
                onReserve={() =>
                  showToast("This is a demo — no real reservation was made ✨")
                }
                onReport={() => showToast("Thanks — your report was noted")}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="mx-auto px-6 max-w-[1120px] md:px-10">
        <HostAndThingsToKnow
          listing={listing}
          onMessage={() => showToast("Message host is a demo action")}
        />
        <NearbyStays />
      </div>

      <div className="max-w-[1120px] pb-10 lg:hidden px-6 mx-auto">
        <PromoBanner />
      </div>

      {/* Mobile fixed reserve bar */}
      <div className="items-center border-t px-6 bg-white z-40 fixed py-4 bottom-0 right-0 left-0 flex justify-between border-neutral-200 lg:hidden">
        <div>
          <p className="underline font-semibold">
            {listing.currency}
            {listing.price.toLocaleString("en-IN")}{" "}
            <span className="no-underline font-normal text-neutral-700">
              for {listing.nights} nights
            </span>
          </p>
        </div>
        <button
          onClick={() =>
            showToast("This is a demo — no real reservation was made ✨")
          }
          className="rounded-lg text-white px-6 from-[#E61E4D] bg-gradient-to-r to-[#D70466] font-semibold py-3"
        >
          Reserve
        </button>
      </div>

      <Toast message={toast} show={!!toast} />
    </div>
  );
}

export default ListingPage;
