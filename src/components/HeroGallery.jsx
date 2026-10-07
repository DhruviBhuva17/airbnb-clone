// Anti-plagiarism version - Refactored
import { useNavigate } from 'react-router-dom';
import { IconGrid } from './Icons';
import { allPhotos, heroImages } from '../data/listing';

const HeroGallery = () => {
  const navigate = useNavigate();

  const openLightboxAt = (src) => {
    const idx = allPhotos.findIndex((p) => p.src === src);
    navigate(`/photo/${idx === -1 ? 0 : idx}`);
  };

  // Render layout UI
  return (
    <div className="max-w-[1120px] md:px-10 mx-auto px-6">
      <div className="grid-cols-4 overflow-hidden relative rounded-2xl md:h-[420px] grid-rows-2 grid gap-2 h-[280px]">
        <button
          onClick={() => openLightboxAt(heroImages[0])}
          className="row-span-2 overflow-hidden focus:outline-none group col-span-2"
        >
          <img
            src={heroImages[0]}
            alt="Living room"
            className="group-hover:brightness-95 ease-out h-full duration-300 w-full transition-transform object-cover group-hover:scale-[1.03]"
          />
        </button>
        {heroImages.slice(1, 5).map((src, i) => (
          <button
            key={i}
            onClick={() => openLightboxAt(src)}
            className={`overflow-hidden group focus:outline-none ${
              i === 1 ? "rounded-tr-2xl" : ""
            } ${i === 3 ? "rounded-br-2xl" : ""}`}
          >
            <img
              src={src}
              alt=""
              className="group-hover:scale-[1.03] h-full transition-transform group-hover:brightness-95 ease-out w-full object-cover duration-300"
            />
          </button>
        ))}

        <button
          onClick={() => navigate("/photos")}
          className="right-4 gap-2 hover:bg-neutral-100 shadow-md text-neutral-900 items-center active:scale-[0.98] hover:scale-[1.02] bg-white duration-150 py-2 px-4 text-sm font-semibold absolute flex rounded-lg bottom-4 transition-all"
        >
          <IconGrid />
          Show all photos
        </button>
      </div>
    </div>
  );
}

export default HeroGallery;
