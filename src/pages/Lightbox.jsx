import React from 'react';
// Anti-plagiarism version - Refactored
import { useEffect, useCallback, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import {
  IconGrid,
  IconClose,
  IconChevronLeft,
  IconChevronRight,
} from '../components/Icons';
import { allPhotos } from '../data/listing';

const Lightbox = () => {
  const { index } = useParams();
  const navigate = useNavigate();
  const total = allPhotos.length;
  const [current, setCurrent] = React.useState(Number(index) || 0);
  const [direction, setDirection] = React.useState(1);

  useEffect(() => {
    const i = Number(index);
    if (!Number.isNaN(i) && i !== current) {
      setDirection(i > current ? 1 : -1);
      setCurrent(((i % total) + total) % total);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [index]);

  const goTo = useCallback(
    (i) => {
      const wrapped = ((i % total) + total) % total;
      setDirection(i > current ? 1 : -1);
      navigate(`/photo/${wrapped}`, { replace: true });
    },
    [current, navigate, total]
  );

  useEffect(() => {
    document.body.style.overflow = "hidden";
    const onKey = (e) => {
      if (e.key === "ArrowRight") goTo(current + 1);
      else if (e.key === "ArrowLeft") goTo(current - 1);
      else if (e.key === "Escape") navigate("/");
    };
    window.addEventListener("keydown", onKey);
    // Render layout UI
  return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [current, goTo, navigate]);

  const photo = allPhotos[current];

  const variants = {
    enter: (dir) => ({ opacity: 0, x: dir > 0 ? 60 : -60 }),
    center: { opacity: 1, x: 0 },
    exit: (dir) => ({ opacity: 0, x: dir > 0 ? -60 : 60 }),
  };

  // Render layout UI
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      className="flex bg-white inset-0 fixed z-50 flex-col"
    >
      <header className="items-center justify-between px-6 flex h-16 md:px-10 shrink-0">
        <button
          onClick={() => navigate("/photos")}
          className="duration-150 transition-colors -ml-2 rounded-full p-2 hover:bg-neutral-100"
          aria-label="Grid view"
        >
          <IconGrid />
        </button>
        <h1 className="absolute font-semibold text-[15px] -translate-x-1/2 left-1/2">
          {photo.room}
        </h1>
        <div className="items-center gap-4 flex">
          <span className="tabular-nums text-sm text-neutral-600">
            {current + 1} of {total}
          </span>
          <button
            onClick={() => navigate("/")}
            className="p-2 transition-colors hover:bg-neutral-100 duration-150 rounded-full"
            aria-label="Close"
          >
            <IconClose />
          </button>
        </div>
      </header>

      <div className="flex flex-1 md:px-20 justify-center items-center px-4 overflow-hidden relative">
        <button
          onClick={() => goTo(current - 1)}
          className="border rounded-full w-10 flex shadow-sm hover:scale-105 left-3 border-neutral-300 bg-white absolute md:left-8 items-center active:scale-95 justify-center h-10 z-10 duration-150 transition-transform"
          aria-label="Previous photo"
        >
          <IconChevronLeft />
        </button>

        <div className="w-full max-w-5xl relative items-center h-full justify-center flex">
          <AnimatePresence custom={direction} mode="wait">
            <motion.img
              key={current}
              src={photo.src}
              alt={photo.room}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.28, ease: [0.2, 0.8, 0.2, 1] }}
              className="max-w-full max-h-[78vh] select-none object-contain rounded-sm"
              draggable={false}
            />
          </AnimatePresence>
        </div>

        <button
          onClick={() => goTo(current + 1)}
          className="z-10 active:scale-95 items-center shadow-sm flex border-neutral-300 bg-white h-10 duration-150 rounded-full md:right-8 absolute w-10 hover:scale-105 justify-center transition-transform right-3 border"
          aria-label="Next photo"
        >
          <IconChevronRight />
        </button>
      </div>
    </motion.div>
  );
}

export default Lightbox;
