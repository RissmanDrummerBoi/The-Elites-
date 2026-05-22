import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { api } from "@/services/api";
import wsuLogo from "@/assets/wsu-logo.jpeg";

const Register = () => {
  const [form, setForm] = useState({
    full_name: "",
    student_number: "",
    email: "",
    residence: "",
    room_number: "",
    password: "",
    role: "student",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    try {
      await api.register(form);
      navigate("/login");
    } catch {
      setError("Registration failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const inputClass =
    "w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground focus:ring-2 focus:ring-secondary focus:border-transparent outline-none transition-all duration-200";

  const roles = [
    {
      value: "student",
      label: "Student",
      icon: "🎓",
      desc: "Report maintenance issues in your residence",
      badge: "Default",
    },
    {
      value: "admin",
      label: "Admin",
      icon: "🛡️",
      desc: "Manage and resolve maintenance complaints",
      badge: "Staff only",
    },
  ];

  return (
    <div className="min-h-screen flex">
      {/* Left branding */}
      <div className="hidden lg:flex lg:w-2/5 wsu-gradient flex-col items-center justify-center p-12 relative">
        <div className="relative z-10 text-center">
          <img src={wsuLogo} alt="WSU" className="w-64 mx-auto mb-8 rounded-xl shadow-2xl" />
          <h1 className="text-primary-foreground font-display text-2xl mb-3">Join CRMRS</h1>
          <p className="text-primary-foreground/70 text-sm italic">"In pursuit of excellence"</p>
        </div>
      </div>

      {/* Right form with threads background */}
      <div className="flex-1 flex items-center justify-center p-6 bg-background relative overflow-hidden">
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

        <div className="w-full max-w-lg animate-fade-in relative z-10">
          <div className="lg:hidden text-center mb-6">
            <img src={wsuLogo} alt="WSU" className="w-40 mx-auto mb-3 rounded-xl" />
          </div>

          <h2 className="text-3xl font-display text-foreground text-center mb-2">Create Account</h2>
          <p className="text-muted-foreground text-center mb-8">Register to start reporting maintenance issues</p>

          {error && (
            <div className="mb-6 p-4 rounded-lg bg-destructive/10 text-destructive text-sm border border-destructive/20">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-foreground mb-1.5">Full Name</label>
                <input name="full_name" value={form.full_name} onChange={handleChange} className={inputClass} placeholder=" " required />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-1.5">Student Number</label>
                <input name="student_number" value={form.student_number} onChange={handleChange} className={inputClass} placeholder=" " required />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-foreground mb-1.5">Email</label>
              <input name="email" type="email" value={form.email} onChange={handleChange} className={inputClass} placeholder=" " required />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-foreground mb-1.5">Residence</label>
                <input name="residence" value={form.residence} onChange={handleChange} className={inputClass} placeholder=" " required />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-1.5">Room Number</label>
                <input name="room_number" value={form.room_number} onChange={handleChange} className={inputClass} placeholder=" " required />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-foreground mb-1.5">Password</label>
              <input name="password" type="password" value={form.password} onChange={handleChange} className={inputClass} placeholder=" " required />
            </div>

            {/* Role Selector */}
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">Select your role</label>
              <div className="grid grid-cols-2 gap-3">
                {roles.map((role) => (
                  <button
                    key={role.value}
                    type="button"
                    onClick={() => setForm({ ...form, role: role.value })}
                    className={`relative flex flex-col gap-1.5 p-4 rounded-xl border-2 text-left transition-all duration-200 ${
                      form.role === role.value
                        ? "border-primary bg-primary/5"
                        : "border-input bg-background hover:border-primary/50"
                    }`}
                  >
                    <div
                      className={`absolute top-3 right-3 w-4 h-4 rounded-full border flex items-center justify-center transition-all ${
                        form.role === role.value
                          ? "bg-primary border-primary"
                          : "border-muted-foreground"
                      }`}
                    >
                      {form.role === role.value && (
                        <svg width="8" height="8" viewBox="0 0 8 8" fill="none">
                          <path d="M1 4l2 2 4-4" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
                        </svg>
                      )}
                    </div>
                    <span className="text-xl">{role.icon}</span>
                    <span className="text-sm font-semibold text-foreground">{role.label}</span>
                    <span className="text-xs text-muted-foreground leading-snug">{role.desc}</span>
                    <span
                      className={`text-xs px-2 py-0.5 rounded-full w-fit mt-1 ${
                        role.value === "student"
                          ? "bg-primary/10 text-primary"
                          : "bg-secondary/20 text-secondary-foreground"
                      }`}
                    >
                      {role.badge}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full py-3 rounded-lg gold-gradient text-secondary-foreground font-semibold hover:brightness-110 transition-all duration-200 disabled:opacity-50 shadow-lg mt-2"
            >
              {loading ? (
                <span className="flex items-center justify-center gap-2">
                  <span className="w-4 h-4 border-2 border-secondary-foreground/30 border-t-secondary-foreground rounded-full animate-spin-slow" />
                  Creating account...
                </span>
              ) : (
                "Register"
              )}
            </button>
          </form>

          <p className="text-center mt-6 text-sm text-muted-foreground">
            Already have an account?{" "}
            <Link to="/login" className="text-secondary font-semibold hover:underline">
              Sign in
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;