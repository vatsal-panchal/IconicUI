import React from "react";

const Navbar = () => {
  return (
    <div>
      <nav className="relative z-20 backdrop-blur-md bg-black/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 sm:py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center gap-2">
              <svg
                width="28"
                height="28"
                viewBox="0 0 70 70"
                fill="none"
                className="w-5 h-5 sm:w-7 sm:h-7 text-white"
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
              <span className="text-base sm:text-lg font-bold text-white tracking-tight">
                IconHub
              </span>
            </div>

            {/* Links */}
            <div className="flex items-center gap-3 sm:gap-4">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors p-2 hover:bg-white/5 rounded-lg"
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
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors p-2 hover:bg-white/5 rounded-lg"
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
  );
};

export default Navbar;
