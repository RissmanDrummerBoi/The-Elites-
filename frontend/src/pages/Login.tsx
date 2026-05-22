import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { api } from "@/services/api";
import { Eye, EyeOff } from "lucide-react";
import wsuLogo from "@/assets/wsu-logo.jpeg";

const Login = () => {
  const [studentNumber, setStudentNumber] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    try {
      const data = await api.login(studentNumber, password);
      const token = data.access_token;
      localStorage.setItem("token", token);

      const user = await api.getMe(token);
      localStorage.setItem("role", user.role);
      localStorage.setItem("user", JSON.stringify(user));

      navigate("/dashboard");
    } catch {
      setError("Invalid credentials. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex">
      {/* Left panel - WSU branding */}
      <div className="hidden lg:flex lg:w-1/2 wsu-gradient flex-col items-center justify-center p-12 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-20 w-64 h-64 border border-primary-foreground/20 rounded-full" />
          <div className="absolute bottom-32 right-16 w-96 h-96 border border-primary-foreground/20 rounded-full" />
        </div>
        <div className="relative z-10 text-center">
          <img src={wsuLogo} alt="Walter Sisulu University" className="w-72 mx-auto mb-8 rounded-xl shadow-2xl" />
          <h1 className="text-primary-foreground font-display text-3xl mb-3">Campus Residence</h1>
          <h2 className="text-secondary font-display text-2xl mb-4">Maintenance Reporting System</h2>
          <p className="text-primary-foreground/70 text-sm italic">"In pursuit of excellence"</p>
        </div>
      </div>

      {/* Right panel - Login form with threads background */}
      <div className="flex-1 flex items-center justify-center p-6 bg-background relative overflow-hidden">
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

        <div className="w-full max-w-md animate-fade-in relative z-10">
          {/* Mobile logo */}
          <div className="lg:hidden text-center mb-8">
            <img src={wsuLogo} alt="WSU" className="w-48 mx-auto mb-4 rounded-xl" />
            <p className="text-muted-foreground text-sm italic">"In pursuit of excellence"</p>
          </div>

          <div className="text-center mb-8">
            <h2 className="text-3xl font-display text-foreground">Welcome Back</h2>
            <p className="text-muted-foreground mt-2">Sign in to report maintenance issues</p>
          </div>

          {error && (
            <div className="mb-6 p-4 rounded-lg bg-destructive/10 text-destructive text-sm border border-destructive/20">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">Student Number</label>
              <input
                type="text"
                value={studentNumber}
                onChange={(e) => setStudentNumber(e.target.value)}
                className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground focus:ring-2 focus:ring-secondary focus:border-transparent outline-none transition-all duration-200"
                placeholder="Enter your student number"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-foreground mb-2">Password</label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground focus:ring-2 focus:ring-secondary focus:border-transparent outline-none transition-all duration-200 pr-12"
                  placeholder="Enter your password"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
                >
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full py-3 rounded-lg gold-gradient text-secondary-foreground font-semibold hover:brightness-110 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg hover:shadow-xl"
            >
              {loading ? (
                <span className="flex items-center justify-center gap-2">
                  <span className="w-4 h-4 border-2 border-secondary-foreground/30 border-t-secondary-foreground rounded-full animate-spin-slow" />
                  Signing in...
                </span>
              ) : (
                "Sign In"
              )}
            </button>
          </form>

          <p className="text-center mt-6 text-sm text-muted-foreground">
            Don't have an account?{" "}
            <Link to="/register" className="text-secondary font-semibold hover:underline">
              Register here
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;