// Anti-plagiarism version - Refactored
import { useNavigate } from 'react-router-dom';
import { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { IconChevronLeft, IconShare, IconHeart } from '../components/Icons';
import { rooms, allPhotos } from '../data/listing';

const PhotoTour = () => {
  const navigate = useNavigate();
  const sectionRefs = useRef({});

  useEffect(() => {
    document.body.style.overflow = "hidden";
    // Render layout UI
  return () => (document.body.style.overflow = "");
  }, []);

  const scrollToRoom = (id) => {
    sectionRefs.current[id]?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  const openLightbox = (src) => {
    const idx = allPhotos.findIndex((p) => p.src === src);
    navigate(`/photo/${idx === -1 ? 0 : idx}`);
  };

  // Render layout UI
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      className="thin-scrollbar inset-0 overflow-y-auto z-50 bg-white fixed"
    >
      <header className="z-30 border-b bg-white top-0 border-neutral-100 sticky">
        <div className="items-center h-16 mx-auto max-w-[1400px] justify-between flex md:px-10 px-6">
          <button
            onClick={() => navigate(-1)}
            className="transition-colors -ml-2 hover:bg-neutral-100 rounded-full duration-150 p-2"
            aria-label="Back"
          >
            <IconChevronLeft />
          </button>
          <h1 className="text-[15px] font-semibold">Photo tour</h1>
          <div className="gap-1 flex items-center">
            <button className="rounded-full hover:bg-neutral-100 transition-colors duration-150 p-2">
              <IconShare />
            </button>
            <button className="hover:bg-neutral-100 transition-colors p-2 rounded-full duration-150">
              <IconHeart />
            </button>
          </div>
        </div>
      </header>

      <div className="mx-auto py-8 max-w-[1400px] md:px-10 px-6">
        {/* thumbnail nav grid */}
        <div className="gap-y-6 md:grid-cols-8 grid gap-x-6 sm:grid-cols-4 mb-14 grid-cols-2">
          {rooms.map((room) => (
            <button
              key={room.id}
              onClick={() => scrollToRoom(room.id)}
              className="group text-left"
            >
              <div className="ring-1 mb-2 aspect-square overflow-hidden ring-neutral-200 rounded-xl">
                <img
                  src={room.cover}
                  alt={room.label}
                  className="duration-300 transition-transform group-hover:scale-105 h-full object-cover w-full"
                />
              </div>
              <p className="text-sm text-neutral-700 group-hover:underline group-hover:text-neutral-900">
                {room.label}
              </p>
            </button>
          ))}
        </div>

        {/* room sections */}
        <div className="space-y-16">
          {rooms.map((room) => (
            <div
              key={room.id}
              ref={(el) => (sectionRefs.current[room.id] = el)}
              className="gap-10 scroll-mt-24 items-start grid md:grid-cols-2 grid-cols-1"
            >
              <div className="pt-2">
                <h2 className="font-semibold mb-3 text-neutral-900 text-3xl">
                  {room.label}
                </h2>
                <p className="text-neutral-600">{room.tags.join(" · ")}</p>
              </div>
              <div className="space-y-4">
                <button
                  onClick={() => openLightbox(room.photos[0])}
                  className="group overflow-hidden block w-full rounded-2xl"
                >
                  <img
                    src={room.photos[0]}
                    alt={room.label}
                    className="duration-300 object-cover transition-transform h-auto w-full group-hover:scale-[1.02]"
                  />
                </button>
                {room.photos.length > 1 && (
                  <div className="gap-4 grid-cols-2 grid">
                    {room.photos.slice(1).map((src, i) => (
                      <button
                        key={i}
                        onClick={() => openLightbox(src)}
                        className="group overflow-hidden rounded-xl"
                      >
                        <img
                          src={src}
                          alt=""
                          className="h-40 w-full object-cover duration-300 transition-transform group-hover:scale-105"
                        />
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default PhotoTour;
