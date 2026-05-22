import Navbar from "@/components/Navbar";
import { Wrench, Zap, Hammer, Settings } from "lucide-react";
import { useNavigate } from "react-router-dom";

const categories = [
  { name: "Plumbing", icon: Wrench, desc: "Leaks, pipes, taps, toilets", color: "from-blue-500 to-blue-600" },
  { name: "Electrical", icon: Zap, desc: "Lights, sockets, wiring", color: "from-amber-500 to-orange-500" },
  { name: "Carpentry", icon: Hammer, desc: "Doors, windows, furniture", color: "from-green-500 to-emerald-600" },
  { name: "General", icon: Settings, desc: "Cleaning, pest control, other", color: "from-purple-500 to-violet-600" },
];

const Dashboard = () => {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user") || "{}");

  return (
    <div className="min-h-screen bg-muted/30 relative overflow-hidden">
      {/* Animated threads background */}
      <svg
        className="absolute inset-0 w-full h-full z-0"
        preserveAspectRatio="xMidYMid slice"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="threadGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="rgba(82,42,255,0.15)" />
            <stop offset="50%" stopColor="rgba(82,42,255,0.08)" />
            <stop offset="100%" stopColor="rgba(82,42,255,0.15)" />
          </linearGradient>
        </defs>
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
              values={`0,0; ${i % 2 === 0 ? 40 : -30},${i % 2 === 0 ? -20 : 20}; 0,0`}
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
              values={`0,0; ${i % 2 === 0 ? -25 : 35},${i % 2 === 0 ? 20 : -15}; 0,0`}
              dur={`${5 + i * 1.8}s`}
              repeatCount="indefinite"
            />
          </path>
        ))}
      </svg>

      <Navbar />
      <div className="container mx-auto px-4 py-8 relative z-10">
        <div className="mb-8 animate-fade-in">
          <h1 className="text-3xl font-display text-foreground">
            Welcome{user.full_name ? `, ${user.full_name}` : ""}
          </h1>
          <p className="text-muted-foreground mt-1">Select a category to submit a maintenance request</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((cat, i) => (
            <button
              key={cat.name}
              onClick={() => navigate(`/submit?category=${cat.name}`)}
              className="group bg-card rounded-xl shadow-md border border-border p-6 text-left card-hover animate-fade-in"
              style={{ animationDelay: `${i * 100}ms` }}
            >
              <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${cat.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                <cat.icon className="text-primary-foreground" size={28} />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-1">{cat.name}</h3>
              <p className="text-sm text-muted-foreground">{cat.desc}</p>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;