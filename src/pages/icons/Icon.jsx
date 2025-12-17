import React, { useState, useEffect } from "react";
import { iconsData } from "../../data/icons";
import "./icon.css";
const Icon = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [copiedId, setCopiedId] = useState(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isDark, setIsDark] = useState(() => {
    const saved = localStorage.getItem("theme");
    return saved ? saved === "dark" : true;
  });
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  useEffect(() => {
    localStorage.setItem("theme", isDark ? "dark" : "light");
    document.documentElement.classList.toggle("dark", isDark);
  }, [isDark]);

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
    <div
      className={`relative min-h-screen overflow-hidden transition-colors duration-500 ${
        isDark ? "bg-black" : "bg-white"
      }`}
    >
      {isDark && (
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
      )}

      <div
        className={`absolute inset-0 overflow-hidden z-0 ${
          isDark ? "opacity-20" : "opacity-5"
        }`}
      >
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
              className={`w-16 h-16 blur-sm ${
                isDark ? "text-white/10" : "text-gray-900/10"
              }`}
              dangerouslySetInnerHTML={{ __html: icon.svg }}
            />
          </div>
        ))}
      </div>

      <div
        className={`absolute inset-0 z-0 ${
          isDark
            ? "bg-gradient-to-b from-black/60 via-black/80 to-black"
            : "bg-gradient-to-b from-white/60 via-white/80 to-white"
        }`}
      />

      <div
        className={`absolute w-96 h-96 rounded-full blur-3xl animate-pulse-slow transition-all duration-1000 ease-out pointer-events-none ${
          isDark ? "bg-blue-500/10" : "bg-blue-500/20"
        }`}
        style={{
          top: `${mousePosition.y / 20}px`,
          left: `${mousePosition.x / 20}px`,
        }}
      />
      <div
        className={`absolute bottom-0 right-1/4 w-96 h-96 rounded-full blur-3xl animate-pulse-slower ${
          isDark ? "bg-purple-500/10" : "bg-purple-500/20"
        }`}
      />
      <div
        className={`absolute top-1/3 right-1/3 w-64 h-64 rounded-full blur-3xl animate-pulse-slow ${
          isDark ? "bg-pink-500/10" : "bg-pink-500/20"
        }`}
        style={{ animationDelay: "2s" }}
      />

      <div className="relative z-20">
        <nav
          className={`relative z-20 backdrop-blur-md transition-colors duration-500 ${
            isDark ? "bg-black/20" : "bg-white/40 border-b border-gray-200/20"
          }`}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 sm:py-4">
            <div className="flex items-center justify-between">
              {/* Logo */}
              <div className="flex items-center gap-2 flex-1">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 70 70"
                  fill="none"
                  className={`w-4 h-4 sm:w-5 sm:h-5 transition-colors ${
                    isDark ? "text-white" : "text-gray-900"
                  }`}
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M65.5869 52.0195C59.6064 62.7446 48.1517 70 35 70C28.4081 70 22.2428 68.1761 16.9785 65.0078C24.0411 65.0505 30.5152 64.4499 36.8809 63.0947C46.275 61.0948 55.321 57.476 65.5869 52.0195Z"
                    fill="currentColor"
                  />
                  <path
                    d="M69.9023 37.6084C69.7246 40.0209 69.3033 42.3653 68.6611 44.6172C56.2627 51.6688 46.1988 55.9988 35.8398 58.2041C27.9699 59.8795 19.8406 60.3467 10.2822 59.7793C8.48159 57.9831 6.87607 55.9917 5.49902 53.8398C17.5379 55.0275 27.6247 54.6653 37.4609 52.3047C48.0044 49.7743 58.1043 44.9844 69.9023 37.6084Z"
                    fill="currentColor"
                  />
                  <path
                    d="M35 0C53.225 0 68.1937 13.9301 69.8457 31.7236C57.1262 39.9078 46.8552 44.9089 36.2949 47.4434C26.3045 49.841 15.895 50.0686 2.70117 48.5059C0.961337 44.35 0 39.7873 0 35C0 15.67 15.67 0 35 0Z"
                    fill="currentColor"
                  />
                </svg>
                <span
                  className={`text-base sm:text-xl font-semibold tracking-tight bg-clip-text text-transparent ${
                    isDark
                      ? "bg-gradient-to-r from-white via-gray-300 to-gray-500"
                      : "bg-gradient-to-r from-gray-900 via-gray-700 to-gray-500"
                  }`}
                >
                  IconWave
                </span>
              </div>

              <div className="flex items-center gap-2 sm:gap-3">
                <button
                  onClick={() => setIsDark(!isDark)}
                  className={`p-2 rounded-lg transition-all ${
                    isDark
                      ? "text-gray-400 hover:text-white hover:bg-white/5"
                      : "text-gray-600 hover:text-gray-900 hover:bg-gray-900/5"
                  }`}
                  aria-label="Toggle theme"
                >
                  {isDark ? (
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" />
                    </svg>
                  ) : (
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                    </svg>
                  )}
                </button>

                <a
                  href="https://github.com/vatsal-panchal"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-2 rounded-lg transition-all ${
                    isDark
                      ? "text-gray-400 hover:text-white hover:bg-white/5"
                      : "text-gray-600 hover:text-gray-900 hover:bg-gray-900/5"
                  }`}
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
                <a
                  href="https://x.com/Codewithvatsal"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-2 rounded-lg transition-all ${
                    isDark
                      ? "text-gray-400 hover:text-white hover:bg-white/5"
                      : "text-gray-600 hover:text-gray-900 hover:bg-gray-900/5"
                  }`}
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </nav>
      </div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 py-12 max-w-7xl">
        <div className="mb-16 text-center pt-8">
          <div
            className={`inline-flex items-center gap-2 px-4 py-2 rounded-full backdrop-blur-sm mb-8 animate-fade-in border ${
              isDark
                ? "bg-white/5 border-white/10"
                : "bg-gray-900/5 border-gray-900/10"
            }`}
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
            </span>
            <span
              className={`text-sm font-medium ${
                isDark ? "text-gray-300" : "text-gray-700"
              }`}
            >
              Now With {iconsData.length}+ Icons
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight animate-slide-up vatsal">
            <span
              className={`inline-block bg-clip-text text-transparent  ${
                isDark
                  ? "bg-gradient-to-r from-white via-gray-500 to-gray-900"
                  : "bg-gradient-to-r from-gray-900 via-gray-700 to-gray-500"
              }`}
            >
              Explore Icons
            </span>
          </h1>

          <p
            className={`text-sm sm:text-base md:text-lg animate-slide-up-delay-2 ${
              isDark ? "text-gray-500" : "text-gray-500"
            }`}
          >
            Click any icon to copy its SVG code
          </p>
        </div>

        {(hasResults || searchTerm) && (
          <div className="mb-12 flex flex-col items-center animate-slide-up-delay-3">
            <div className="relative w-full max-w-2xl group">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search for icons..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  autoCapitalize="none"
                  autoComplete="off"
                  autoCorrect="off"
                  spellCheck="false"
                  className={`w-full pl-10 pr-14 py-4 sm:py-5 text-base sm:text-lg rounded-2xl border backdrop-blur-sm focus:outline-none focus:ring-2 transition-all duration-300 ${
                    isDark
                      ? "bg-white/5 border-white/10 focus:border-blue-500/50 text-white placeholder-gray-600 focus:bg-white/10 focus:ring-blue-500/20"
                      : "bg-gray-900/5 border-gray-900/10 focus:border-blue-600/50 text-gray-900 placeholder-gray-400 focus:bg-gray-900/10 focus:ring-blue-600/20"
                  }`}
                />
                {searchTerm && (
                  <button
                    onClick={() => setSearchTerm("")}
                    className={`absolute right-5 top-1/2 -translate-y-1/2 w-8 h-8 flex items-center justify-center rounded-full transition-colors hover:bg-opacity-20 focus:outline-none ${
                      isDark
                        ? "text-gray-500 hover:bg-white/10"
                        : "text-gray-400 hover:bg-gray-900/10"
                    }`}
                  >
                    <span className="text-2xl leading-none">×</span>
                  </button>
                )}
              </div>
            </div>

            {hasResults && (
              <div
                className={`mt-6 text-sm font-medium ${
                  isDark ? "text-gray-500" : "text-gray-600"
                }`}
              >
                {filteredIcons.length}{" "}
                {filteredIcons.length === 1 ? "icon" : "icons"} found
              </div>
            )}
          </div>
        )}

        {hasResults ? (
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 xl:grid-cols-12 gap-2 sm:gap-3 justify-items-center">
            {filteredIcons.map((icon, index) => (
              <button
                key={icon.id}
                onClick={() => copyToClipboard(icon.svg, icon.id)}
                style={{ animationDelay: `${index * 0.02}s` }}
                className={`relative aspect-square w-full rounded-xl sm:rounded-2xl flex flex-col items-center justify-center p-3 sm:p-4 cursor-pointer transition-all duration-300 group animate-scale-in backdrop-blur-sm border hover:scale-105 ${
                  isDark
                    ? "bg-white/5 border-white/10 hover:bg-white/10 hover:border-white/20"
                    : "bg-gray-900/5 border-gray-900/10 hover:bg-gray-900/10 hover:border-gray-900/20"
                }`}
              >
                <div
                  className={`relative w-8 h-8 sm:w-10 sm:h-10 mb-1 sm:mb-2 transition-all duration-300 flex items-center justify-center group-hover:scale-110 ${
                    isDark
                      ? "text-gray-400 group-hover:text-white"
                      : "text-gray-600 group-hover:text-gray-900"
                  }`}
                  dangerouslySetInnerHTML={{ __html: icon.svg }}
                />

                <span
                  className={`relative text-[7px] sm:text-[8px] text-center truncate w-full font-medium transition-colors ${
                    isDark
                      ? "text-gray-500 group-hover:text-gray-300"
                      : "text-gray-500 group-hover:text-gray-700"
                  }`}
                >
                  {icon.name}
                </span>

                {copiedId === icon.id && (
                  <div
                    className={`absolute inset-0 rounded-xl sm:rounded-2xl flex flex-col gap-1 items-center justify-center animate-pop-in backdrop-blur-md border ${
                      isDark
                        ? "bg-black/90 border-green-500/50"
                        : "bg-white/95 border-green-500/50"
                    }`}
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-green-500/20 to-emerald-500/20 rounded-xl sm:rounded-2xl animate-pulse-fast"></div>
                    <svg
                      className="relative w-6 h-6 sm:w-8 sm:h-8 text-green-500 animate-check-draw drop-shadow-[0_0_8px_rgba(34,197,94,0.5)]"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2.5}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span className="relative text-green-500 text-[9px] sm:text-[10px] font-bold tracking-wide drop-shadow-[0_0_8px_rgba(34,197,94,0.3)]">
                      COPIED!
                    </span>
                  </div>
                )}
              </button>
            ))}
          </div>
        ) : (
          <div
            className={`text-center py-20 sm:py-32 rounded-2xl sm:rounded-3xl backdrop-blur-sm animate-fade-in border ${
              isDark
                ? "bg-white/5 border-white/10"
                : "bg-gray-900/5 border-gray-900/10"
            }`}
          >
            <div className="relative inline-block mb-8">
              <div
                className={`absolute inset-0 rounded-full blur-2xl animate-pulse ${
                  isDark
                    ? "bg-gradient-to-br from-blue-500/20 to-purple-500/20"
                    : "bg-gradient-to-br from-blue-500/30 to-purple-500/30"
                }`}
              />
              <svg
                className={`relative w-20 h-20 sm:w-24 sm:h-24 ${
                  isDark ? "text-gray-700" : "text-gray-400"
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
            </div>
            <h3
              className={`text-2xl sm:text-3xl font-bold mb-4 ${
                isDark ? "text-gray-200" : "text-gray-900"
              }`}
            >
              No icons found
            </h3>
            <p
              className={`mb-8 sm:mb-10 text-base sm:text-lg ${
                isDark ? "text-gray-500" : "text-gray-600"
              }`}
            >
              Try adjusting your search or explore all icons
            </p>
            <button
              onClick={() => setSearchTerm("")}
              className={`px-8 sm:px-10 py-3 sm:py-4 rounded-xl font-semibold transition-all duration-300 hover:scale-105 shadow-lg ${
                isDark
                  ? "bg-white text-black hover:shadow-white/20"
                  : "bg-gray-900 text-white hover:shadow-gray-900/20"
              }`}
            >
              Clear Search
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Icon;
