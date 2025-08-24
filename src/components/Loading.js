import React, { useEffect, useState } from "react";

export default function LoadingPage() {
  const texts = [
    "Warming up the vibes 🔥",
    "Crafting your experience ✨",
    "Bringing magic alive 🌅",
    "Almost there 🚀",
  ];
  const [index, setIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");

  // Typing effect
  useEffect(() => {
    let i = 0;
    setDisplayText("");
    const typing = setInterval(() => {
      setDisplayText((prev) => prev + texts[index][i]);
      i++;
      if (i === texts[index].length) clearInterval(typing);
    }, 60);

    const next = setTimeout(() => {
      setIndex((idx) => (idx + 1) % texts.length);
    }, 3500);

    return () => {
      clearInterval(typing);
      clearTimeout(next);
    };
  }, [index]);

  return (
    <>
    <p>Loading.......</p>
      {" "}
      <div className="relative min-h-screen w-full flex items-center justify-center text-center overflow-hidden text-white">
        {/* Warm background image with smooth zoom */}
        <div
          className="absolute inset-0 bg-cover bg-center animate-bgZoom"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?auto=format&fit=crop&w=1600&q=80')",
          }}
        />
        {/* Warm overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-red-900/70 via-orange-700/60 to-yellow-600/70"></div>

        {/* Floating warm orbs for depth */}
        <div className="absolute top-20 left-1/4 w-52 h-52 bg-red-500/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-28 right-1/4 w-64 h-64 bg-yellow-400/20 rounded-full blur-3xl animate-float-slow"></div>

        {/* Main loader content */}
        <div className="relative z-10 px-6">
          {/* Animated spinning ring */}
          <div className="relative flex items-center justify-center mb-8">
            <div className="absolute h-36 w-36 rounded-full border-4 border-transparent border-t-yellow-400 border-b-red-500 animate-spin-slow"></div>
            <div className="h-24 w-24 rounded-full bg-black/50 flex items-center justify-center text-3xl font-bold shadow-inner">
              ✨
            </div>
          </div>

          {/* Typing text */}
          <h1 className="text-3xl md:text-4xl font-extrabold bg-gradient-to-r from-yellow-300 via-orange-400 to-red-500 bg-clip-text text-transparent min-h-[2.5rem]">
            {displayText}
          </h1>
          <p className="mt-4 text-lg text-white/80 italic">
            Please hold on, we’re preparing magic ✨
          </p>

          {/* Progress bar */}
          <div className="mt-8 w-72 h-3 mx-auto rounded-full overflow-hidden bg-white/20 relative">
            <div className="absolute inset-0 animate-progress bg-gradient-to-r from-yellow-300 via-orange-400 to-red-500"></div>
          </div>
        </div>

        {/* Keyframes */}
        <style>{`
        @keyframes spin-slow { to { transform: rotate(360deg); } }
        .animate-spin-slow { animation: spin-slow 6s linear infinite; }

        @keyframes bgZoom {
          0% { transform: scale(1); }
          100% { transform: scale(1.1); }
        }
        .animate-bgZoom { animation: bgZoom 14s ease-in-out infinite alternate; }

        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-25px); }
        }
        .animate-float { animation: float 6s ease-in-out infinite; }
        .animate-float-slow { animation: float 10s ease-in-out infinite; }

        @keyframes progress {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(300%); }
        }
        .animate-progress { animation: progress 2.5s linear infinite; }
      `}</style>
      </div>
    </>
  );
}
