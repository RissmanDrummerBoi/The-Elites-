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
    <div className="min-h-screen bg-muted/30">
      <Navbar />
      <div className="container mx-auto px-4 py-8">
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
