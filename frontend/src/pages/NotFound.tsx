import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import wsuLogo from "@/assets/wsu-logo.jpeg";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex">
      {/* Left branding panel (unchanged) */}
      <div className="hidden lg:flex lg:w-2/5 wsu-gradient flex-col items-center justify-center p-12 relative">
        <div className="relative z-10 text-center">
          <img src={wsuLogo} alt="WSU" className="w-64 mx-auto mb-8 rounded-xl shadow-2xl" />
          <h1 className="text-primary-foreground font-display text-2xl mb-3">Page Not Found</h1>
          <p className="text-primary-foreground/70 text-sm italic">"In pursuit of excellence"</p>
        </div>
      </div>

      {/* Right content area with custom animated threads background */}
      <div className="flex-1 flex items-center justify-center p-6 bg-background relative overflow-hidden">
        {/* Animated threads – pure SVG, no external component */}
        <svg
          className="absolute inset-0 w-full h-full z-0"
          preserveAspectRatio="xMidYMid slice"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Define a gradient similar to Threads color [0.32, 0.15, 1] -> approx #522aff */}
          <defs>
            <linearGradient id="threadGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="rgba(82,42,255,0.15)" />
              <stop offset="50%" stopColor="rgba(82,42,255,0.08)" />
              <stop offset="100%" stopColor="rgba(82,42,255,0.15)" />
            </linearGradient>
          </defs>

          {/* Multiple animated lines */}
          {[...Array(6)].map((_, i) => (
            <path
              key={i}
              d={`M-100,${100 + i * 150} Q${300 + i * 50},${50 - i * 20} ${1100},${200 + i * 100}`}
              stroke="url(#threadGrad)"
              strokeWidth="2"
              fill="none"
              strokeLinecap="round"
            >
              <animateTransform
                attributeName="transform"
                type="translate"
                values={`0,0; ${(i % 2 === 0 ? 40 : -30)},${(i % 2 === 0 ? -20 : 20)}; 0,0`}
                dur={`${6 + i * 1.5}s`}
                repeatCount="indefinite"
              />
            </path>
          ))}
          {[...Array(6)].map((_, i) => (
            <path
              key={`v-${i}`}
              d={`M${150 + i * 200},-100 Q${250 + i * 30},${400 - i * 40} ${100 + i * 180},${1200}`}
              stroke="url(#threadGrad)"
              strokeWidth="1.5"
              fill="none"
              strokeLinecap="round"
            >
              <animateTransform
                attributeName="transform"
                type="translate"
                values={`0,0; ${(i % 2 === 0 ? -25 : 35)},${(i % 2 === 0 ? 20 : -15)}; 0,0`}
                dur={`${5 + i * 1.8}s`}
                repeatCount="indefinite"
              />
            </path>
          ))}
        </svg>

        {/* Foreground content */}
        <div className="w-full max-w-lg text-center relative z-10 animate-fade-in">
          {/* Mobile logo */}
          <div className="lg:hidden text-center mb-6">
            <img src={wsuLogo} alt="WSU" className="w-40 mx-auto mb-3 rounded-xl" />
          </div>

          {/* Robot with disconnected cord (same as before) */}
          <div className="mb-6">
            <svg
              width="200"
              height="200"
              viewBox="0 0 200 200"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="mx-auto"
            >
              <rect x="70" y="80" width="60" height="70" rx="10" fill="#B0C4DE" stroke="#4A5568" strokeWidth="3" />
              <rect x="75" y="40" width="50" height="40" rx="8" fill="#B0C4DE" stroke="#4A5568" strokeWidth="3" />
              <circle cx="90" cy="55" r="5" fill="#4A5568">
                <animate attributeName="r" values="5;0;5" dur="3s" repeatCount="indefinite" />
              </circle>
              <circle cx="110" cy="55" r="5" fill="#4A5568">
                <animate attributeName="r" values="5;0;5" dur="3s" repeatCount="indefinite" />
              </circle>
              <path d="M90 68 Q100 72 110 68" stroke="#4A5568" strokeWidth="2" fill="none" />
              <line x1="100" y1="40" x2="100" y2="25" stroke="#4A5568" strokeWidth="3" />
              <circle cx="100" cy="22" r="4" fill="#FFD700" />
              <rect x="55" y="85" width="15" height="10" rx="3" fill="#B0C4DE" stroke="#4A5568" strokeWidth="2" />
              <rect x="130" y="85" width="15" height="10" rx="3" fill="#B0C4DE" stroke="#4A5568" strokeWidth="2" />
              <rect x="145" y="82" width="15" height="16" rx="2" fill="#4A5568" />
              <rect x="148" y="85" width="9" height="10" rx="1" fill="#E2E8F0" />
              <line x1="150" y1="82" x2="150" y2="78" stroke="#A0AEC0" strokeWidth="2" />
              <line x1="155" y1="82" x2="155" y2="78" stroke="#A0AEC0" strokeWidth="2" />
              <path
                d="M 160 90 Q 170 100 165 115 T 155 135"
                stroke="#4A5568"
                strokeWidth="3"
                fill="none"
                strokeLinecap="round"
              >
                <animateTransform
                  attributeName="transform"
                  type="rotate"
                  values="0 160 90; 8 160 90; -5 160 90; 0 160 90"
                  dur="2s"
                  repeatCount="indefinite"
                />
              </path>
              <rect x="80" y="150" width="12" height="20" rx="4" fill="#4A5568" />
              <rect x="108" y="150" width="12" height="20" rx="4" fill="#4A5568" />
            </svg>
          </div>

          <h1 className="text-7xl font-bold text-foreground mb-4">404</h1>
          <p className="text-xl text-muted-foreground mb-8">
            Oops! This page seems to have lost connection.
          </p>

          <a
            href="/"
            className="inline-block px-8 py-4 rounded-lg gold-gradient text-secondary-foreground font-semibold text-lg hover:brightness-110 transition-all duration-200 shadow-lg"
          >
            Return to Home
          </a>
        </div>
      </div>
    </div>
  );
};

export default NotFound;