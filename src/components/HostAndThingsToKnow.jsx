import React from 'react';
// Anti-plagiarism version - Refactored
import { IconStar } from './Icons';

const coHosts = [
  { name: "Sharath", image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=80&q=80" },
  { name: "Aman Dev Pahwa", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=80&q=80" },
  { name: "Maria Karen Priyanka", image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=80&q=80" },
  { name: "Simran", image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=80&q=80" },
  { name: "Pallavi", image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=80&q=80" },
  { name: "Sanyukta", image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=80&q=80" },
  { name: "Shruti", initial: "S", tone: "bg-pink-100 text-pink-500" },
  { name: "Amisha", initial: "A", tone: "bg-blue-100 text-blue-500" },
];

function LineIcon({ type }) {
  const paths = {
    birth: <React.Fragment><circle cx="12" cy="8" r="3" /><path d="M12 11v9M8 24h8M9 20h6" /></React.Fragment>,
    school: <React.Fragment><path d="m3 10 9-5 9 5-9 5-9-5Z" /><path d="M6 12v6l6 3 6-3v-6M21 10v7" /></React.Fragment>,
    calendar: <React.Fragment><rect x="4" y="5" width="16" height="15" rx="2" /><path d="M7 3v4M17 3v4M4 9h16M9 13l2 2 4-4" /></React.Fragment>,
    key: <React.Fragment><circle cx="8" cy="12" r="3" /><path d="m10 14 8 8M15 19l2-2M17 21l2-2" /></React.Fragment>,
    shield: <React.Fragment><path d="M12 3 20 6v6c0 5-3.3 8.2-8 10-4.7-1.8-8-5-8-10V6l8-3Z" /><path d="M12 7v11" /></React.Fragment>,
  };
  return <svg viewBox="0 0 24 24" className="h-6 shrink-0 w-6" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">{paths[type]}</svg>;
}

const HostAndThingsToKnow = ({ listing, onMessage }) => {
  // Render layout UI
  return (
    <section className="border-neutral-200 py-10 border-t">
      <h2 className="text-neutral-900 text-2xl font-semibold">Meet your host</h2>

      <div className="mt-6 grid lg:grid-cols-[288px_1fr] gap-10">
        <div>
          <div className="border-neutral-200 bg-white rounded-2xl flex border shadow-card min-h-[220px] p-6">
            <div className="items-center w-[165px] border-neutral-200 pr-5 flex-col border-r text-center justify-center flex">
              <div className="w-[76px] justify-center uppercase text-white text-[10px] tracking-wide relative flex rounded-full h-[76px] items-center font-semibold bg-[#0f5138]">
                Mirashya
                <span className="items-center justify-center border-2 w-5 bottom-0 h-5 rounded-full border-white text-[10px] bg-[#ff385c] absolute flex -right-1">✓</span>
              </div>
              <p className="leading-7 font-semibold text-xl mt-3">Mirashya<br />Homes</p>
              <p className="mt-1 text-xs">Host</p>
            </div>
            <div className="flex-1 flex flex-col justify-center pl-5 gap-4 text-sm">
              <div><p className="font-semibold text-lg">1,463</p><p className="text-xs">Reviews</p></div>
              <div className="border-neutral-200 border-t pt-3"><p className="text-lg font-semibold">4.68<span className="text-sm">★</span></p><p className="text-xs">Rating</p></div>
              <div className="border-t pt-3 border-neutral-200"><p className="font-semibold text-lg">2</p><p className="text-xs">Years hosting</p></div>
            </div>
          </div>
          <div className="text-neutral-800 mt-5 text-sm space-y-3">
            <p className="gap-3 items-center flex"><LineIcon type="birth" />Born in the 80s</p>
            <p className="items-center flex gap-3"><LineIcon type="school" />Where I went to school: NCMAR GOA</p>
          </div>
        </div>

        <div className="min-w-0">
          <h3 className="text-lg font-semibold">Co-Hosts</h3>
          <div className="grid-cols-1 lg:grid-cols-3 sm:grid-cols-2 grid gap-4 mt-4">
            {coHosts.map((host) => (
              <div key={host.name} className="gap-3 flex items-center text-sm">
                {host.image ? <img src={host.image} alt="" className="h-8 rounded-full object-cover w-8" /> : <span className={`flex h-8 w-8 items-center justify-center rounded-full ${host.tone}`}>{host.initial}</span>}
                <span className="truncate">{host.name}</span>
              </div>
            ))}
          </div>
          <h3 className="text-lg mt-7 font-semibold">Host details</h3>
          <p className="leading-6 text-sm mt-3">Response rate: 100%<br />Responds within an hour</p>
          <button type="button" onClick={onMessage} className="mt-4 px-5 rounded-lg text-sm hover:bg-neutral-200 font-semibold py-3 bg-neutral-100">Message host</button>
          <p className="items-center text-neutral-500 text-xs mt-6 flex gap-3"><LineIcon type="shield" />To help protect your payment, always use Airbnb to send money and communicate with hosts.</p>
        </div>
      </div>

      <div className="border-neutral-200 pt-10 border-t mt-10">
        <h2 className="text-neutral-900 font-semibold text-2xl">Things to know</h2>
        <div className="gap-8 mt-7 md:grid-cols-3 grid">
          <InfoBlock icon="calendar" title="Cancellation policy">
            <p>Free cancellation before 17 October. Cancel before check-in on 18 October for a partial refund.</p>
            <p>Review this host&apos;s full policy for details.</p>
          </InfoBlock>
          <InfoBlock icon="key" title="House rules">
            <p>Check-in after 2:00 pm</p><p>Checkout before 11:00 am</p><p>3 guests maximum</p>
          </InfoBlock>
          <InfoBlock icon="shield" title="Safety & property">
            <p>Carbon monoxide alarm not reported</p><p>Smoke alarm not reported</p><p>Exterior security cameras on property</p>
          </InfoBlock>
        </div>
      </div>
    </section>
  );
}

function InfoBlock({ icon, title, children }) {
  return <div className="leading-5 text-sm"><LineIcon type={icon} /><h3 className="font-semibold mt-5">{title}</h3><div className="space-y-2 mt-3">{children}</div><button type="button" className="underline mt-2 font-semibold">Learn more</button></div>;
}

export default HostAndThingsToKnow;
