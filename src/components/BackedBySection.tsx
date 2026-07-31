import React from 'react';

interface BackerBrand {
  name: string;
  style: React.CSSProperties;
}

const BACKERS: BackerBrand[] = [
  {
    name: 'Национальный Банк КР',
    style: { fontFamily: "'Times New Roman', serif", fontWeight: 700, letterSpacing: '0.02em', fontSize: '15px' },
  },
  {
    name: 'VISA International',
    style: { fontFamily: "'Arial Black', sans-serif", fontWeight: 900, letterSpacing: '0.08em', fontSize: '15px' },
  },
  {
    name: 'Межбанкплат Сплат',
    style: { fontFamily: 'Impact, sans-serif', fontWeight: 700, letterSpacing: '0.05em', fontSize: '16px' },
  },
  {
    name: 'Элкарт Кыргызстан',
    style: { fontFamily: 'Georgia, serif', fontWeight: 600, letterSpacing: '-0.02em', fontSize: '16px' },
  },
  {
    name: 'Asia Online Security',
    style: { fontFamily: 'Helvetica, sans-serif', fontWeight: 700, letterSpacing: '-0.01em', fontSize: '15px' },
  },
  {
    name: 'SWIFT International',
    style: { fontFamily: 'Verdana, sans-serif', fontWeight: 700, letterSpacing: '0.06em', fontSize: '14px', textTransform: 'uppercase' },
  },
];

export const BackedBySection: React.FC = () => {
  return (
    <section className="bg-[#F5F5F5] px-6 py-16 border-t border-[#002650]/10">
      <div className="max-w-[88rem] mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 items-center">
        {/* Left Column (1/4) */}
        <div className="md:col-span-1">
          <p className="text-black/70 text-base font-semibold leading-relaxed whitespace-pre-line">
            {'Институциональная поддержка\nи ведущие финансовые лидеры.'}
          </p>
        </div>

        {/* Right Column (3/4) */}
        <div className="md:col-span-3 overflow-hidden">
          <style>{`
            @keyframes backers-marquee {
              0% { transform: translateX(0%); }
              100% { transform: translateX(-50%); }
            }
            .backers-track {
              display: flex;
              width: max-content;
              animation: backers-marquee 30s linear infinite;
            }
          `}</style>
          <div className="backers-track">
            {/* First render */}
            {BACKERS.map((backer, index) => (
              <span
                key={`backer-1-${index}`}
                className="mx-10 shrink-0 text-black/70 font-semibold whitespace-nowrap"
                style={backer.style}
              >
                {backer.name}
              </span>
            ))}
            {/* Second render for seamless loop */}
            {BACKERS.map((backer, index) => (
              <span
                key={`backer-2-${index}`}
                className="mx-10 shrink-0 text-black/70 font-semibold whitespace-nowrap"
                style={backer.style}
              >
                {backer.name}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
