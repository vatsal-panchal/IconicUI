import React, { useState, useEffect } from "react";
import Navbar from "../../components/Navbar/Navbar";
import { iconsData } from "../../data/icons";

const Icon = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [copiedId, setCopiedId] = useState(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const filteredIcons = iconsData.filter((icon) => {
    const matchesSearch =
      icon.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      icon.tags.some((tag) =>
        tag.toLowerCase().includes(searchTerm.toLowerCase())
      );
    return matchesSearch;
  });

  const copyToClipboard = (svg, id) => {
    navigator.clipboard.writeText(svg);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const hasResults = filteredIcons.length > 0;

  const backgroundIcons = iconsData.slice(0, 15);

  return (
    <div className="relative min-h-screen bg-black overflow-hidden">
      <div className="absolute inset-0 overflow-hidden z-0">
        {[...Array(100)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full animate-twinkle"
            style={{
              width: `${Math.random() * 3 + 1}px`,
              height: `${Math.random() * 3 + 1}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              background:
                i % 3 === 0 ? "#60a5fa" : i % 3 === 1 ? "#a78bfa" : "#ffffff",
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 3}s`,
              boxShadow: `0 0 ${Math.random() * 10 + 5}px currentColor`,
            }}
          />
        ))}
      </div>

      <div className="absolute inset-0 overflow-hidden z-0 opacity-20">
        {backgroundIcons.map((icon, i) => (
          <div
            key={`bg-${icon.id}`}
            className="absolute animate-float-random"
            style={{
              top: `${(i * 17) % 100}%`,
              left: `${(i * 23) % 100}%`,
              animationDelay: `${i * 0.5}s`,
              animationDuration: `${15 + Math.random() * 10}s`,
            }}
          >
            <div
              className="w-16 h-16 text-white/10 blur-sm"
              dangerouslySetInnerHTML={{ __html: icon.svg }}
            />
          </div>
        ))}
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/80 to-black z-0" />
      <div
        className="absolute w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse-slow transition-all duration-1000 ease-out pointer-events-none"
        style={{
          top: `${mousePosition.y / 20}px`,
          left: `${mousePosition.x / 20}px`,
        }}
      />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse-slower" />
      <div
        className="absolute top-1/3 right-1/3 w-64 h-64 bg-pink-500/10 rounded-full blur-3xl animate-pulse-slow"
        style={{ animationDelay: "2s" }}
      />

      <Navbar />

      <div className="relative z-10 container mx-auto px-6 py-12 max-w-7xl">
        <div className="mb-16 text-center pt-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm mb-8 animate-fade-in">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
            </span>
            <span className="text-sm text-gray-300">
              Now With {iconsData.length}+ Icons
            </span>
          </div>
          <h1 className="text-3xl md:text-6xl lg:text-7xl font-semibold mb-6 leading-tight animate-slide-up">
            <span className="inline-block bg-gradient-to-r from-white via-gray-300 to-gray-800 bg-clip-text text-transparent">
              Discover Icons
            </span>
          </h1>

          <p className="text-[15px] md:text-2xl text-gray-400 mb-4 animate-slide-up-delay">
            Beautiful, Ready-To-Use Icons That Scale Perfectly.
          </p>
          <p className="text-lg text-gray-500 animate-slide-up-delay-2">
            Click any icon to copy its SVG code
          </p>
        </div>

        {(hasResults || searchTerm) && (
          <div className="mb-12 flex flex-col items-center animate-slide-up-delay-3">
            <div className="relative w-full max-w-2xl group">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative">
                <svg
                  className="absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500 transition-colors duration-300 group-focus-within:text-blue-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
                <input
                  type="text"
                  placeholder="Search for icons..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-14 pr-14 py-5 text-lg rounded-2xl border bg-white/5 border-white/10 focus:border-blue-500/50 text-white placeholder-gray-600 focus:bg-white/10 focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-all duration-300 backdrop-blur-sm"
                />
                {searchTerm && (
                  <button
                    onClick={() => setSearchTerm("")}
                    className="absolute right-5 top-1/2 -translate-y-1/2 w-8 h-8 flex items-center justify-center rounded-full text-gray-500 transition-colors focus:outline-none"
                  >
                    <span className="text-2xl leading-none">×</span>
                  </button>
                )}
              </div>
            </div>

            {hasResults && (
              <div className="mt-6 text-sm text-gray-500 font-medium">
                {filteredIcons.length}{" "}
                {filteredIcons.length === 1 ? "icon" : "icons"} found
              </div>
            )}
          </div>
        )}

        {hasResults ? (
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 xl:grid-cols-10 gap-3 justify-items-center">
            {filteredIcons.map((icon, index) => (
              <button
                key={icon.id}
                onClick={() => copyToClipboard(icon.svg, icon.id)}
                style={{ animationDelay: `${index * 0.02}s` }}
                className="relative aspect-square rounded-2xl flex flex-col items-center justify-center p-4 cursor-pointer transition-all duration-300 group animate-scale-in bg-white/5 border border-white/10"
              >
                <div
                  className="relative w-10 h-10 mb-2 transition-all duration-300 text-gray-400 flex items-center justify-center"
                  dangerouslySetInnerHTML={{ __html: icon.svg }}
                />

                <span className="relative text-[8px] text-center truncate w-full font-medium text-gray-500 transition-colors">
                  {icon.name}
                </span>

                {copiedId === icon.id && (
                  <div className="absolute inset-0 bg-gradient-to-br from-gray-700 to-gray-600 rounded-2xl flex items-center justify-center animate-pop-in backdrop-blur-sm">
                    <svg
                      className="w-7 h-7 text-white animate-check-draw"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={3}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                )}
              </button>
            ))}
          </div>
        ) : (
          <div className="text-center py-32 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-sm animate-fade-in">
            <div className="relative inline-block mb-8">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-full blur-2xl animate-pulse" />
              <svg
                className="relative w-24 h-24 text-gray-700"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <h3 className="text-3xl font-bold mb-4 text-gray-200">
              No icons found
            </h3>
            <p className="mb-10 text-lg text-gray-500">
              Try adjusting your search or explore all icons
            </p>
            <button
              onClick={() => setSearchTerm("")}
              className="px-10 py-4 rounded-xl font-semibold bg-white text-black transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-white/20"
            >
              Clear Search
            </button>
          </div>
        )}
      </div>

      <style>{`
        @keyframes twinkle {
          0%, 100% {
            opacity: 0.2;
            transform: scale(0.8);
          }
          50% {
            opacity: 1;
            transform: scale(1.2);
          }
        }

        @keyframes float-random {
          0%, 100% {
            transform: translate(0, 0) rotate(0deg);
          }
          25% {
            transform: translate(30px, -30px) rotate(90deg);
          }
          50% {
            transform: translate(-20px, 20px) rotate(180deg);
          }
          75% {
            transform: translate(40px, 10px) rotate(270deg);
          }
        }

        @keyframes pulse-slow {
          0%, 100% {
            opacity: 0.3;
            transform: scale(1);
          }
          50% {
            opacity: 0.6;
            transform: scale(1.2);
          }
        }

        @keyframes pulse-slower {
          0%, 100% {
            opacity: 0.2;
            transform: scale(1);
          }
          50% {
            opacity: 0.5;
            transform: scale(1.3);
          }
        }

        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slide-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes scale-in {
          from {
            opacity: 0;
            transform: scale(0.8) translateY(20px);
          }
          to {
            opacity: 1;
            transform: scale(1) translateY(0);
          }
        }

        @keyframes pop-in {
          0% {
            transform: scale(0.5);
            opacity: 0;
          }
          50% {
            transform: scale(1.15);
          }
          100% {
            transform: scale(1);
            opacity: 1;
          }
        }

        @keyframes check-draw {
          0% {
            stroke-dasharray: 0 100;
          }
          100% {
            stroke-dasharray: 100 0;
          }
        }

        .animate-twinkle {
          animation: twinkle ease-in-out infinite;
        }

        .animate-float-random {
          animation: float-random ease-in-out infinite;
        }

        .animate-pulse-slow {
          animation: pulse-slow 8s ease-in-out infinite;
        }

        .animate-pulse-slower {
          animation: pulse-slower 10s ease-in-out infinite;
        }

        .animate-fade-in {
          animation: fade-in 0.8s ease-out;
        }

        .animate-slide-up {
          animation: slide-up 0.8s ease-out;
        }

        .animate-slide-up-delay {
          animation: slide-up 0.8s ease-out 0.2s backwards;
        }

        .animate-slide-up-delay-2 {
          animation: slide-up 0.8s ease-out 0.4s backwards;
        }

        .animate-slide-up-delay-3 {
          animation: slide-up 0.8s ease-out 0.6s backwards;
        }

        .animate-scale-in {
          animation: scale-in 0.6s ease-out forwards;
          opacity: 0;
        }

        .animate-pop-in {
          animation: pop-in 0.4s cubic-bezier(0.68, -0.55, 0.265, 1.55);
        }

        .animate-check-draw {
          animation: check-draw 0.5s ease-out;
        }
      `}</style>
    </div>
  );
};

export default Icon;
