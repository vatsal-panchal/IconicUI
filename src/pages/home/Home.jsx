import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import { Link } from "react-router-dom";

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
            <span className="text-xs sm:text-sm text-gray-300">
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

      <style>{`
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

        @keyframes pulse-slow {
          0%, 100% {
            opacity: 0.3;
            transform: scale(1);
          }
          50% {
            opacity: 0.5;
            transform: scale(1.1);
          }
        }

        @keyframes pulse-slower {
          0%, 100% {
            opacity: 0.2;
            transform: scale(1);
          }
          50% {
            opacity: 0.4;
            transform: scale(1.15);
          }
        }

        @keyframes twinkle {
          0%, 100% {
            opacity: 0;
            transform: scale(0);
          }
          50% {
            opacity: 1;
            transform: scale(1);
          }
        }

        /* Glitch Animation */
        @keyframes glitch-animation {
          2%, 64% {
            transform: translate(2px, 0) skew(0deg);
          }
          4%, 60% {
            transform: translate(-2px, 0) skew(0deg);
          }
          62% {
            transform: translate(0, 0) skew(5deg);
          }
        }

        @keyframes glitch-animation-top {
          2%, 64% {
            transform: translate(2px, -2px);
          }
          4%, 60% {
            transform: translate(-2px, 2px);
          }
          62% {
            transform: translate(13px, -1px) skew(-13deg);
          }
        }

        @keyframes glitch-animation-bottom {
          2%, 64% {
            transform: translate(-2px, 0);
          }
          4%, 60% {
            transform: translate(-2px, 0);
          }
          62% {
            transform: translate(-22px, 5px) skew(21deg);
          }
        }

        .glitch-text {
          position: relative;
          animation: glitch-animation 2s linear infinite;
        }

        .glitch-text:before,
        .glitch-text:after {
          content: attr(data-text);
          position: absolute;
          left: 0;
          top: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(to right, white, #d1d5db, #1f2937);
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .glitch-text:before {
          animation: glitch-animation-top 2s linear infinite;
          clip-path: polygon(0 0, 100% 0, 100% 33%, 0 33%);
          -webkit-clip-path: polygon(0 0, 100% 0, 100% 33%, 0 33%);
        }

        .glitch-text:after {
          animation: glitch-animation-bottom 2.5s linear infinite;
          clip-path: polygon(0 67%, 100% 67%, 100% 100%, 0 100%);
          -webkit-clip-path: polygon(0 67%, 100% 67%, 100% 100%, 0 100%);
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

        .animate-pulse-slow {
          animation: pulse-slow 8s ease-in-out infinite;
        }

        .animate-pulse-slower {
          animation: pulse-slower 10s ease-in-out infinite;
        }

        .animate-twinkle {
          animation: twinkle 3s ease-in-out infinite;
        }

        /* Button42 Animation */
        .button42 {
          position: relative;
          display: inline-block;
          color: #fff;
          width: 160px;
          height: 60px;
          outline: none;
          border: none;
          cursor: pointer;
          overflow: hidden;
          font-size: 16px;
          font-weight: bold;
          text-align: center;
          background-color: transparent;
          transition: 0.5s ease-in-out;
        }
        .button42::before,
        .button42::after {
          content: "";
          position: absolute;
          width: 100%;
          height: 2px;
          background: linear-gradient(90deg, transparent, #fff);
        }
        .button42::before {
          top: 0;
          left: -100%;
          animation: button42-animation1 3s linear infinite;
        }
        .button42::after {
          bottom: 0;
          right: -100%;
          animation: button42-animation1 3s linear infinite 0.75s;
        }
        @keyframes button42-animation1 {
          0% {
            left: -100%;
            right: 100%;
          }
          50% {
            left: 100%;
            right: -100%;
          }
          100% {
            left: -100%;
            right: 100%;
          }
        }
        @keyframes button42-animation2 {
          0% {
            top: -100%;
            bottom: 100%;
          }
          50% {
            top: 100%;
            bottom: -100%;
          }
          100% {
            top: -100%;
            bottom: 100%;
          }
        }
      `}</style>
    </div>
  );
};

export default Home;