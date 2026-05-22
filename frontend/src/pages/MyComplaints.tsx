import { useEffect, useState } from "react";
import { api } from "@/services/api";
import Navbar from "@/components/Navbar";
import StatusBadge from "@/components/StatusBadge";
import LoadingSpinner from "@/components/LoadingSpinner";
import { FileText } from "lucide-react";

interface Complaint {
  id: string;
  title: string;
  category: string;
  description: string;
  status: string;
  created_at: string;
  image_url?: string;
}

const MyComplaints = () => {
  const [complaints, setComplaints] = useState<Complaint[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchComplaints = async () => {
      try {
        const token = localStorage.getItem("token") || "";
        const data = await api.getMyComplaints(token);
        setComplaints(data);
      } catch {
        console.error("Failed to fetch complaints");
      } finally {
        setLoading(false);
      }
    };
    fetchComplaints();
  }, []);

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
        <h1 className="text-3xl font-display text-foreground mb-2 animate-fade-in">My Complaints</h1>
        <p className="text-muted-foreground mb-8 animate-fade-in">Track the status of your maintenance requests</p>

        {loading ? (
          <LoadingSpinner text="Loading your complaints..." />
        ) : complaints.length === 0 ? (
          <div className="text-center py-20 animate-fade-in">
            <FileText className="mx-auto text-muted-foreground/40" size={56} />
            <p className="text-muted-foreground mt-4">No complaints submitted yet</p>
          </div>
        ) : (
          <div className="grid gap-4">
            {complaints.map((c, i) => (
              <div
                key={c.id}
                className="bg-card rounded-xl shadow-sm border border-border p-6 card-hover animate-fade-in"
                style={{ animationDelay: `${i * 80}ms` }}
              >
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-lg font-semibold text-foreground">{c.title}</h3>
                      <StatusBadge status={c.status} />
                    </div>
                    <span className="inline-block px-2.5 py-0.5 rounded-md bg-primary/10 text-primary text-xs font-medium mb-2">
                      {c.category}
                    </span>
                    <p className="text-muted-foreground text-sm mt-1">{c.description}</p>
                    <p className="text-muted-foreground/60 text-xs mt-3">
                      {new Date(c.created_at).toLocaleDateString("en-ZA", {
                        year: "numeric", month: "long", day: "numeric",
                      })}
                    </p>
                  </div>
                  {c.image_url && (
                    <a href={`http://127.0.0.1:8000${c.image_url}`} target="_blank" rel="noopener noreferrer">
                      <img
                        src={`http://127.0.0.1:8000${c.image_url}`}
                        alt="Issue"
                        className="w-24 h-24 rounded-lg object-cover border border-border hover:opacity-80 transition-opacity cursor-pointer"
                        title="Click to view full image"
                      />
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default MyComplaints;