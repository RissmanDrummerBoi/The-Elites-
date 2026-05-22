import { useEffect, useState } from "react";
import { api } from "@/services/api";
import Navbar from "@/components/Navbar";
import StatusBadge from "@/components/StatusBadge";
import LoadingSpinner from "@/components/LoadingSpinner";

interface Complaint {
  id: string;
  title: string;
  category: string;
  description: string;
  status: string;
  created_at: string;
  student_number?: string;
  image_url?: string;
}

const AdminPanel = () => {
  const [complaints, setComplaints] = useState<Complaint[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchAll();
  }, []);

  const fetchAll = async () => {
    try {
      const token = localStorage.getItem("token") || "";
      const data = await api.getAllComplaints(token);
      setComplaints(data);
    } catch {
      console.error("Failed to fetch complaints");
    } finally {
      setLoading(false);
    }
  };

  const handleStatusChange = async (id: string, status: string) => {
    try {
      const token = localStorage.getItem("token") || "";
      await api.updateComplaintStatus(id, status, token);
      setComplaints((prev) =>
        prev.map((c) => (c.id === id ? { ...c, status } : c))
      );
    } catch {
      alert("Failed to update status");
    }
  };

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
        <h1 className="text-3xl font-display text-foreground mb-2 animate-fade-in">Admin Panel</h1>
        <p className="text-muted-foreground mb-8 animate-fade-in">
          Manage all maintenance complaints ({complaints.length} total)
        </p>

        {loading ? (
          <LoadingSpinner text="Loading complaints..." />
        ) : (
          <div className="bg-card rounded-xl shadow-sm border border-border overflow-hidden animate-fade-in">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="wsu-gradient text-primary-foreground text-sm">
                    <th className="px-6 py-4 text-left font-medium">Title</th>
                    <th className="px-6 py-4 text-left font-medium">Category</th>
                    <th className="px-6 py-4 text-left font-medium hidden md:table-cell">Student</th>
                    <th className="px-6 py-4 text-left font-medium hidden md:table-cell">Photo</th>
                    <th className="px-6 py-4 text-left font-medium">Status</th>
                    <th className="px-6 py-4 text-left font-medium">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {complaints.map((c) => (
                    <tr key={c.id} className="border-t border-border hover:bg-muted/50 transition-colors">
                      <td className="px-6 py-4">
                        <p className="font-medium text-foreground text-sm">{c.title}</p>
                        <p className="text-muted-foreground text-xs mt-0.5 line-clamp-1">{c.description}</p>
                      </td>
                      <td className="px-6 py-4">
                        <span className="px-2.5 py-0.5 rounded-md bg-primary/10 text-primary text-xs font-medium">
                          {c.category}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-sm text-muted-foreground hidden md:table-cell">
                        {c.student_number || "—"}
                      </td>
                      <td className="px-6 py-4 hidden md:table-cell">
                        {c.image_url ? (
                          <a href={`http://127.0.0.1:8000${c.image_url}`} target="_blank" rel="noopener noreferrer">
                            <img
                              src={`http://127.0.0.1:8000${c.image_url}`}
                              alt="Issue"
                              className="w-16 h-16 rounded-lg object-cover border border-border hover:opacity-80 transition-opacity cursor-pointer"
                              title="Click to view full image"
                            />
                          </a>
                        ) : (
                          <span className="text-muted-foreground text-xs">No photo</span>
                        )}
                      </td>
                      <td className="px-6 py-4">
                        <StatusBadge status={c.status} />
                      </td>
                      <td className="px-6 py-4">
                        <select
                          value={c.status}
                          onChange={(e) => handleStatusChange(c.id, e.target.value)}
                          className="px-3 py-1.5 rounded-lg border border-input bg-background text-foreground text-sm focus:ring-2 focus:ring-secondary outline-none"
                        >
                          <option value="pending">Pending</option>
                          <option value="in_progress">In Progress</option>
                          <option value="resolved">Resolved</option>
                        </select>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminPanel;