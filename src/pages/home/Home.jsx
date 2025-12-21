
import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import { Link } from "react-router-dom";
import './Home.css'

const Home = () => {
  return (
    <div className="relative min-h-screen bg-black overflow-hidden">
      <div className="absolute inset-0 overflow-hidden z-0">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full animate-twinkle"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 3}s`,
            }}
          />
        ))}
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/80 to-black z-0" />
      <div className="absolute top-0 left-1/4 w-64 h-64 sm:w-96 sm:h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse-slow" />
      <div className="absolute bottom-0 right-1/4 w-64 h-64 sm:w-96 sm:h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse-slower" />

      <Navbar />

      <main className="relative z-10">
        <section className="max-w-5xl mx-auto px-4 sm:px-6 pt-16 sm:pt-24 md:pt-32 pb-12 sm:pb-20 text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm mb-6 sm:mb-8 animate-fade-in">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
            </span>
            <span className="text-xs sm:text-sm text-gray-300 ">
              Now with 300+ icons
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl xl:text-[5vw] font-semibold mb-4 sm:mb-5 leading-tight animate-slide-up px-4">
            <span className="glitch-text inline-block bg-gradient-to-r from-white via-gray-300 to-gray-800 bg-clip-text text-transparent" data-text="Build Beautiful UI Faster">
              Build Beautiful UI Faster
            </span>
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-gray-400 mb-2 sm:mb-4 max-w-3xl mx-auto animate-slide-up-delay px-4">
            Beautiful, ready-to-use icons that scale perfectly.
          </p>
          <p className="text-sm sm:text-base md:text-lg text-gray-500 mb-6 sm:mb-7 animate-slide-up-delay-2 px-4">
            No signup, no hassle, completely free.
          </p>

          <div className="flex items-center justify-center animate-slide-up-delay-3 px-4">
            <Link to="/Icons">
              <button className="button42">
                Explore Icons
              </button>
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Home;
