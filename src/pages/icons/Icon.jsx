import React, { useState, useEffect } from "react";
import Navbar from "../../components/Navbar/Navbar";
import { iconsData, categories } from "../../data/icons";

const Icon = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const [copiedId, setCopiedId] = useState(null);
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
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

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div
      className={`min-h-screen transition-colors duration-500 ${
        isDarkMode ? "bg-black" : "bg-white"
      }`}
    >
      <Navbar />

      {/* Subtle background gradient */}
      {isDarkMode && (
        <>
          <div className="fixed top-0 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />
          <div className="fixed bottom-0 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl pointer-events-none" />
        </>
      )}

      <div
        className={`container mx-auto px-6 py-12 max-w-7xl relative transition-opacity duration-700 ${
          isVisible ? "opacity-100" : "opacity-0"
        }`}
      >
        {/* Header Section */}
        <div className="mb-16 flex flex-col md:flex-row md:items-center md:justify-between gap-8">
          <div>
            <h1
              className={`text-6xl md:text-7xl lg:text-5xl font-bold mb-4 tracking-tight transition-colors ${
                isDarkMode ? "text-white" : "text-black"
              }`}
            >
              Browse Icons
            </h1>
            <p
              className={`text-xl transition-colors ${
                isDarkMode ? "text-neutral-500" : "text-neutral-600"
              }`}
            >
              {iconsData.length}+ meticulously crafted icons
            </p>
          </div>
        </div>

        {/* Search & Filter Section */}
        <div className="mb-8 space-y-4">
          <div className="flex gap-3 max-w-xl">
            {/* Compact Search Bar */}
            <div className="relative group flex-1">
              <svg
                className={`absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 transition-colors duration-300 ${
                  isDarkMode
                    ? "text-neutral-600 group-focus-within:text-blue-400"
                    : "text-neutral-400 group-focus-within:text-blue-600"
                }`}
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
                placeholder="Search icons..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className={`w-full pl-9 pr-4 py-2 text-sm rounded-lg border transition-all duration-300 ${
                  isDarkMode
                    ? "bg-white/5 border-white/10 focus:border-blue-500/50 text-white placeholder-neutral-600 focus:bg-white/10"
                    : "bg-white border-neutral-200 focus:border-blue-500 text-black placeholder-neutral-400 shadow-sm focus:shadow-md"
                } focus:outline-none focus:ring-2 ${
                  isDarkMode ? "focus:ring-blue-500/20" : "focus:ring-blue-500/30"
                }`}
              />
              {searchTerm && (
                <button
                  onClick={() => setSearchTerm("")}
                  className={`absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 flex items-center justify-center rounded-full transition-colors ${
                    isDarkMode
                      ? "text-neutral-600 hover:text-white hover:bg-white/10"
                      : "text-neutral-400 hover:text-black hover:bg-black/5"
                  }`}
                >
                  <span className="text-lg leading-none">×</span>
                </button>
              )}
            </div>
          </div>

          {/* Active Filters */}
          {searchTerm && (
            <div className="flex items-center gap-2 animate-slide-in">
              <span
                className={`text-xs font-medium ${
                  isDarkMode ? "text-neutral-600" : "text-neutral-500"
                }`}
              >
                Searching:
              </span>
              <span
                className={`px-2 py-1 rounded text-xs font-medium ${
                  isDarkMode
                    ? "bg-white/5 text-neutral-400 border border-white/10"
                    : "bg-black/5 text-neutral-700 border border-black/10"
                }`}
              >
                {searchTerm}
              </span>
            </div>
          )}
        </div>

        {/* Results Count */}
        <div
          className={`mb-8 text-sm font-semibold ${
            isDarkMode ? "text-neutral-600" : "text-neutral-500"
          }`}
        >
          {filteredIcons.length} {filteredIcons.length === 1 ? "icon" : "icons"}
        </div>

        {/* Icons Grid */}
        {filteredIcons.length > 0 ? (
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 xl:grid-cols-10 gap-3">
            {filteredIcons.map((icon, index) => (
              <button
                key={icon.id}
                onClick={() => copyToClipboard(icon.svg, icon.id)}
                style={{ animationDelay: `${index * 0.02}s` }}
                className={`relative aspect-square rounded-xl flex flex-col items-center justify-center p-4 cursor-pointer transition-all duration-300 group animate-fade-in-up ${
                  isDarkMode
                    ? "bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20"
                    : "bg-black/5 hover:bg-black/10 border border-black/10 hover:border-black/20"
                }`}
              >
                <div
                  className={`w-8 h-8 mb-2 transition-all duration-300 group-hover:scale-125 ${
                    isDarkMode
                      ? "text-neutral-400 group-hover:text-white"
                      : "text-neutral-600 group-hover:text-black"
                  }`}
                  dangerouslySetInnerHTML={{ __html: icon.svg }}
                />

                <span
                  className={`text-[10px] text-center truncate w-full font-medium transition-colors ${
                    isDarkMode
                      ? "text-neutral-600 group-hover:text-neutral-400"
                      : "text-neutral-500 group-hover:text-neutral-700"
                  }`}
                >
                  {icon.name}
                </span>

                {/* Copied State */}
                {copiedId === icon.id && (
                  <div className="absolute inset-0 bg-gradient-to-br from-gray-500 to-gray-900 rounded-xl flex items-center justify-center animate-scale-in">
                    <svg
                      className="w-7 h-7 text-white animate-check"
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
          <div
            className={`text-center py-32 rounded-2xl transition-colors ${
              isDarkMode
                ? "bg-white/5 border border-white/10"
                : "bg-black/5 border border-black/10"
            }`}
          >
            <svg
              className={`w-20 h-20 mx-auto mb-6 transition-colors ${
                isDarkMode ? "text-neutral-800" : "text-neutral-300"
              }`}
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
            <p
              className={`text-2xl font-bold mb-3 transition-colors ${
                isDarkMode ? "text-neutral-300" : "text-neutral-700"
              }`}
            >
              No icons found
            </p>
            <p
              className={`mb-8 text-lg transition-colors ${
                isDarkMode ? "text-neutral-600" : "text-neutral-500"
              }`}
            >
              Try adjusting your search or filters
            </p>
            <button
              onClick={() => {
                setSearchTerm("");
              }}
              className={`px-8 py-4 rounded-xl font-semibold transition-all duration-300 hover:scale-105 ${
                isDarkMode
                  ? "bg-white text-black hover:bg-white/90"
                  : "bg-black text-white hover:bg-black/90"
              }`}
            >
              Clear All Filters
            </button>
          </div>
        )}
      </div>

      <style>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slide-in {
          from {
            opacity: 0;
            transform: translateX(-20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes scale-in {
          from {
            transform: scale(0.8);
            opacity: 0;
          }
          to {
            transform: scale(1);
            opacity: 1;
          }
        }

        @keyframes check {
          0% {
            stroke-dasharray: 0 100;
          }
          100% {
            stroke-dasharray: 100 0;
          }
        }

        .animate-fade-in-up {
          animation: fade-in-up 0.5s ease-out forwards;
          opacity: 0;
        }

        .animate-slide-in {
          animation: slide-in 0.4s ease-out;
        }

        .animate-scale-in {
          animation: scale-in 0.3s ease-out;
        }

        .animate-check {
          animation: check 0.5s ease-out;
        }
      `}</style>
    </div>
  );
};

export default Icon;