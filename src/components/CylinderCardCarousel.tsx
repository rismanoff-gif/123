import { useState, useEffect, useRef } from 'react';
import { Hand } from 'lucide-react';

const CARDS_DATA = [
  {
    id: 'visa_gold',
    name: 'VISA GOLD',
    image: '/cards/visa_gold.png',
    videoSrc: 'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260506_030111_a9e15665-d379-4a7f-8116-695bbe452ad1.mp4',
    number: '4232 8908 1121 4892',
    holder: 'БАНК АЗИИ VIP',
    cvv: '382',
    color: '#DFBE6F'
  },
  {
    id: 'visa_infinite',
    name: 'VISA INFINITE',
    image: '/cards/visa_infinite.png',
    videoSrc: 'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260429_171347_f640c30d-ec21-426a-98bc-77e07c2c60cb.mp4',
    number: '4154 7831 9904 5124',
    holder: 'ЭЛЬДАР САМАТОВ',
    cvv: '109',
    color: '#404392'
  },
  {
    id: 'elcart',
    name: 'ЭЛКАРТ',
    image: '/cards/elcart.png',
    videoSrc: 'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260503_104800_bc43ae09-f494-43e3-97d7-2f8c1692cfd7.mp4',
    number: '9417 5520 8831 1004',
    holder: 'АЙЧУРЕК БЕКОВА',
    cvv: '764',
    color: '#AE2323'
  },
  {
    id: 'visa_platinum',
    name: 'VISA PLATINUM',
    image: '/cards/visa_platinum.jpg',
    videoSrc: 'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260423_161253_c72b1869-400f-45ed-ac0c-52f68c2ed5bd.mp4',
    number: '5375 8891 2234 7713',
    holder: 'ТИМУР АЛИЕВ',
    cvv: '255',
    color: '#D72426'
  },
  {
    id: 'visa_gold_2',
    name: 'VISA GOLD ПРЕМИУМ',
    image: '/cards/visa_gold.png',
    videoSrc: 'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260418_115655_b4d9cd77-feed-43cd-a198-af78ebdf1f7a.mp4',
    number: '4441 5567 1223 2468',
    holder: 'МАДИНА ОРОЗОВА',
    cvv: '491',
    color: '#DFBE6F'
  }
];

export const CylinderCardCarousel = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const cardCount = CARDS_DATA.length;
  const cardsRefs = useRef<(HTMLDivElement | null)[]>([]);
  const frameId = useRef<number>(0);
  
  const progress = useRef<number>(0);
  const mouse = useRef({ x: 0, y: 0, targetX: 0, targetY: 0 });

  // Touch gesture tracking
  const touchState = useRef({
    isDragging: false,
    startX: 0,
    startY: 0,
    startProgress: 0,
    lastX: 0,
    velocity: 0,
    lastTime: 0
  });

  const [metrics, setMetrics] = useState({
    cardW: 340,
    cardH: 215,
  });

  // Touch & Mouse event listeners
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    // Mouse handlers
    const handleMouseMove = (e: MouseEvent) => {
      if (touchState.current.isDragging) return;
      const rect = el.getBoundingClientRect();
      const rx = (e.clientX - (rect.left + rect.width / 2)) / (rect.width / 2);
      const ry = (e.clientY - (rect.top + rect.height / 2)) / (rect.height / 2);
      mouse.current.targetX = Math.max(-1, Math.min(1, rx));
      mouse.current.targetY = Math.max(-1, Math.min(1, ry));
    };

    const handleMouseLeave = () => {
      mouse.current.targetX = 0;
      mouse.current.targetY = 0;
    };

    // Touch handlers for mobile screen interaction
    const handleTouchStart = (e: TouchEvent) => {
      if (e.touches.length !== 1) return;
      const touch = e.touches[0];
      const rect = el.getBoundingClientRect();

      touchState.current.isDragging = true;
      touchState.current.startX = touch.clientX;
      touchState.current.startY = touch.clientY;
      touchState.current.lastX = touch.clientX;
      touchState.current.lastTime = performance.now();
      touchState.current.startProgress = progress.current;
      touchState.current.velocity = 0;

      const rx = (touch.clientX - (rect.left + rect.width / 2)) / (rect.width / 2);
      const ry = (touch.clientY - (rect.top + rect.height / 2)) / (rect.height / 2);
      mouse.current.targetX = Math.max(-1, Math.min(1, rx));
      mouse.current.targetY = Math.max(-1, Math.min(1, ry));
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (!touchState.current.isDragging || e.touches.length !== 1) return;
      const touch = e.touches[0];
      const deltaX = touch.clientX - touchState.current.startX;
      const deltaY = touch.clientY - touchState.current.startY;

      // Allow vertical page scrolling if swipe is mostly vertical
      if (Math.abs(deltaY) > Math.abs(deltaX) * 1.5 && Math.abs(deltaX) < 10) {
        return;
      }

      // Drag carousel progress based on finger movement
      const dragFactor = metrics.cardW * 1.1;
      progress.current = touchState.current.startProgress - (deltaX / dragFactor);

      // Track velocity for smooth swipe release inertia
      const now = performance.now();
      const dt = Math.max(1, now - touchState.current.lastTime);
      const moveDx = touch.clientX - touchState.current.lastX;
      touchState.current.velocity = -moveDx / dt;
      touchState.current.lastX = touch.clientX;
      touchState.current.lastTime = now;

      // Update 3D parallax tilt according to finger touch position
      const rect = el.getBoundingClientRect();
      const rx = (touch.clientX - (rect.left + rect.width / 2)) / (rect.width / 2);
      const ry = (touch.clientY - (rect.top + rect.height / 2)) / (rect.height / 2);
      mouse.current.targetX = Math.max(-1, Math.min(1, rx));
      mouse.current.targetY = Math.max(-1, Math.min(1, ry));
    };

    const handleTouchEnd = () => {
      touchState.current.isDragging = false;
      mouse.current.targetX = 0;
      mouse.current.targetY = 0;
    };

    el.addEventListener('mousemove', handleMouseMove);
    el.addEventListener('mouseleave', handleMouseLeave);
    el.addEventListener('touchstart', handleTouchStart, { passive: true });
    el.addEventListener('touchmove', handleTouchMove, { passive: true });
    el.addEventListener('touchend', handleTouchEnd);
    el.addEventListener('touchcancel', handleTouchEnd);

    return () => {
      el.removeEventListener('mousemove', handleMouseMove);
      el.removeEventListener('mouseleave', handleMouseLeave);
      el.removeEventListener('touchstart', handleTouchStart);
      el.removeEventListener('touchmove', handleTouchMove);
      el.removeEventListener('touchend', handleTouchEnd);
      el.removeEventListener('touchcancel', handleTouchEnd);
    };
  }, [metrics]);

  useEffect(() => {
    const handleResize = () => {
      const w = window.innerWidth;
      let cardW = Math.round(w * 0.16 + 140);
      if (w < 640) {
        cardW = Math.min(300, Math.max(195, Math.round(w * 0.62)));
      } else {
        cardW = Math.min(350, Math.max(210, cardW));
      }
      const cardH = Math.round(cardW / 1.5925);
      setMetrics({ cardW, cardH });
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const renderLoop = () => {
    // If not dragging with finger, apply auto slow scroll + velocity momentum decay
    if (!touchState.current.isDragging) {
      if (Math.abs(touchState.current.velocity) > 0.001) {
        progress.current += touchState.current.velocity * 0.6;
        touchState.current.velocity *= 0.92;
      } else {
        progress.current += 0.0016;
      }
    }

    mouse.current.x += (mouse.current.targetX - mouse.current.x) * 0.08;
    mouse.current.y += (mouse.current.targetY - mouse.current.y) * 0.08;

    const cards = cardsRefs.current;
    const h = containerRef.current ? containerRef.current.clientHeight : 480;
    const { cardH } = metrics;

    const continuousProgress = progress.current;
    const roundedIndex = Math.round(continuousProgress);
    const diffFromRound = continuousProgress - roundedIndex;
    
    const easedDiff = Math.sign(diffFromRound) * Math.pow(Math.abs(diffFromRound) * 2, 4.2) / 2;
    const virtualActiveIndex = roundedIndex + easedDiff;

    for (let i = 0; i < cardCount; i++) {
      const card = cards[i];
      if (!card) continue;

      let offset = i - virtualActiveIndex;
      const halfCount = cardCount / 2;
      while (offset > halfCount) offset -= cardCount;
      while (offset < -halfCount) offset += cardCount;

      const absOffset = Math.abs(offset);
      const sign = Math.sign(offset);

      if (absOffset > 3.0) {
        card.style.visibility = 'hidden';
        continue;
      } else {
        card.style.visibility = 'visible';
      }

      const gap = 36;
      const peekAmount = -55;
      const D = 1350;

      let y = 0;
      let z = 0;
      let rot = 0;

      if (absOffset <= 1) {
        const t = absOffset;
        const easedT = t * t * (3 - 2 * t);
        const targetY = cardH + gap;
        y = -sign * (easedT * targetY);
        z = 400 + easedT * (220 - 400);
        rot = easedT * 132;
      } else if (absOffset <= 2) {
        const t = absOffset - 1;
        const easedT = t * t * (3 - 2 * t);
        const yStart = cardH + gap;
        const zStart = 220;
        const rotStart = 132;
        const zEnd = -60;
        const rotEnd = 175;
        const sEnd = D / (D - zEnd);
        const yEnd = (h / 2 - peekAmount) / sEnd - (cardH / 2);
        const currentY = yStart + easedT * (yEnd - yStart);
        y = -sign * currentY;
        z = zStart + easedT * (zEnd - zStart);
        rot = rotStart + easedT * (rotEnd - rotStart);
      } else {
        const t = Math.min(absOffset - 2, 1);
        const easedT = t * t * (3 - 2 * t);
        const zStart = -60;
        const rotStart = 175;
        const zEnd3 = -250;
        const rotEnd3 = 195;
        const sEnd2 = D / (D - zStart);
        const yEnd2 = (h / 2 - peekAmount) / sEnd2 - (cardH / 2);
        const sEnd3 = D / (D - zEnd3);
        const yEnd3 = (h / 2 + 100) / sEnd3 + (cardH / 2);
        const currentY = yEnd2 + easedT * (yEnd3 - yEnd2);
        y = -sign * currentY;
        z = zStart + easedT * (zEnd3 - zStart);
        rot = rotStart + easedT * (rotEnd3 - rotStart);
      }

      const localCardRotation = -sign * rot;
      const centerFactor = Math.max(0, 1 - absOffset);

      const maxTiltY = 15;
      const maxTiltX = 12;

      const activeTiltX = -mouse.current.y * maxTiltX * centerFactor;
      const activeTiltY = mouse.current.x * maxTiltY * centerFactor;

      const totalRotX = localCardRotation + activeTiltX;
      const totalRotY = activeTiltY;

      card.style.zIndex = Math.round(z).toString();
      card.style.opacity = '1';

      card.style.transform = `translateY(${y.toFixed(2)}px) translateZ(${z.toFixed(2)}px) rotateX(${totalRotX.toFixed(2)}deg) rotateY(${totalRotY.toFixed(2)}deg) rotateZ(-3deg)`;
    }
  };

  useEffect(() => {
    const tick = () => {
      renderLoop();
      frameId.current = requestAnimationFrame(tick);
    };

    frameId.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frameId.current);
  }, [metrics]);

  const thicknessLayers = [-1.47, -0.73, 0, 0.73, 1.47];

  return (
    <div
      ref={containerRef}
      className="relative w-full h-[460px] sm:h-[540px] md:h-[600px] bg-[#00082C] rounded-3xl overflow-hidden shadow-2xl flex items-center justify-center select-none border border-white/10 my-6 sm:my-10 touch-pan-y cursor-grab active:cursor-grabbing"
    >
      {/* Background Ambient Glow */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#001A38] via-[#00082C] to-[#000418] pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[320px] sm:w-[600px] h-[220px] sm:h-[350px] bg-[#D72426]/15 blur-[90px] sm:blur-[120px] rounded-full pointer-events-none" />

      {/* Touch Swipe Hint Badge for Mobile Users */}
      <div className="absolute top-4 left-1/2 -translate-x-1/2 z-30 bg-white/10 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/15 flex items-center gap-2 text-white/80 text-[11px] font-semibold pointer-events-none shadow-md">
        <Hand className="w-3.5 h-3.5 text-[#D72426] animate-pulse" />
        <span>Смахните пальцем влево или вправо</span>
      </div>

      <div
        className="relative w-full h-full flex items-center justify-center pointer-events-none z-10"
        style={{
          perspective: '1350px',
        }}
      >
        <div
          className="absolute"
          style={{
            width: `${metrics.cardW}px`,
            height: `${metrics.cardH}px`,
            transformStyle: 'preserve-3d',
          }}
        >
          {CARDS_DATA.map((cardData, i) => (
            <div
              key={cardData.id + i}
              ref={(el) => { cardsRefs.current[i] = el; }}
              className="absolute inset-0"
              style={{
                width: `${metrics.cardW}px`,
                height: `${metrics.cardH}px`,
                transformStyle: 'preserve-3d',
                backfaceVisibility: 'visible',
              }}
            >
              {thicknessLayers.map((zOffset, layerIdx) => {
                const isFrontFace = layerIdx === thicknessLayers.length - 1;
                const isBackFace = layerIdx === 0;
                const baseBgColor = '#0f0f0f';

                if (!isFrontFace && !isBackFace) {
                  return (
                    <div
                      key={layerIdx}
                      className="absolute inset-0 rounded-[20px] border border-[#808080] pointer-events-none overflow-hidden"
                      style={{
                        backgroundColor: cardData.color || '#808080',
                        transform: `translateZ(${zOffset}px)`,
                      }}
                    ></div>
                  );
                }

                if (isFrontFace) {
                  const frontBorderStyle = "border border-white/20 shadow-2xl";
                  return (
                    <div
                      key={layerIdx}
                      className={`absolute inset-0 rounded-[20px] ${frontBorderStyle} pointer-events-none overflow-hidden bg-black`}
                      style={{
                        backgroundColor: baseBgColor,
                        transform: `translateZ(${zOffset}px)`,
                        backfaceVisibility: 'hidden',
                        boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.7), inset 0 1px 1px rgba(255,255,255,0.25)',
                      }}
                    >
                      {/* Ambient background video effect */}
                      <video
                        src={cardData.videoSrc}
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="absolute inset-0 w-full h-full object-cover rounded-[20px] opacity-40 mix-blend-screen"
                      />

                      {/* Official Bank Card Photo */}
                      <img
                        src={cardData.image}
                        alt={cardData.name}
                        className="absolute inset-0 w-full h-full object-cover rounded-[20px] z-10"
                      />

                      {/* Subtle high-gloss shimmer overlay */}
                      <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent pointer-events-none z-20" />
                    </div>
                  );
                }

                if (isBackFace) {
                  const backBorderStyle = "border border-white/15";
                  return (
                    <div
                      key={layerIdx}
                      className={`absolute inset-0 rounded-[20px] ${backBorderStyle} pointer-events-none overflow-hidden`}
                      style={{
                        backgroundColor: baseBgColor,
                        transform: `translateZ(${zOffset}px) rotateX(180deg)`,
                        backfaceVisibility: 'hidden',
                        boxShadow: 'inset 0 1px 1px rgba(255,255,255,0.15)',
                      }}
                    >
                      {/* Blurred ambient video background */}
                      <div className="absolute inset-0 pointer-events-none" style={{ filter: 'blur(16px)', transform: 'scale(1.15)' }}>
                        <video
                          src={cardData.videoSrc}
                          autoPlay
                          loop
                          muted
                          playsInline
                          className="absolute inset-0 w-full h-full object-cover"
                        />
                      </div>

                      {/* Magnetic stripe */}
                      <div className="absolute left-0 right-0 top-4 sm:top-5 h-7 sm:h-9 bg-black/85 backdrop-blur-md z-10" />

                      {/* Card holder info and details */}
                      <div 
                        className="absolute left-4 sm:left-6 bottom-4 sm:bottom-5 z-20 flex flex-col gap-0.5 sm:gap-1 text-left"
                        style={{ fontFamily: '"JetBrains Mono", monospace' }}
                      >
                        <div className="font-mono text-[10px] sm:text-[12px] font-medium tracking-[0.14em] text-white select-none">
                          {cardData.number}
                        </div>
                        <div className="font-mono text-[7px] sm:text-[9px] font-medium text-white/70 tracking-wide flex items-center gap-2 select-none">
                          <span className="uppercase">{cardData.holder}</span>
                          <span className="text-white/40 font-light">•</span>
                          <span>CVV: {cardData.cvv}</span>
                        </div>
                      </div>
                    </div>
                  );
                }

                return null;
              })}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
