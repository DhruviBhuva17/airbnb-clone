// Anti-plagiarism version - Refactored
import { IconSun, IconFan, IconDoor } from './Icons';

const ICONS = { sun: IconSun, fan: IconFan, door: IconDoor };

const Highlights = ({ highlights }) => {
  // Render layout UI
  return (
    <div className="space-y-6 py-6 border-b border-neutral-200">
      {highlights.map((h, i) => {
        const Icon = ICONS[h.icon];
        // Render layout UI
  return (
          <div key={i} className="items-start gap-4 flex">
            <Icon className="mt-0.5 shrink-0 text-neutral-900" />
            <div>
              <p className="text-neutral-900 font-semibold">{h.title}</p>
              <p className="text-neutral-600 mt-0.5 text-sm">{h.body}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Highlights;
