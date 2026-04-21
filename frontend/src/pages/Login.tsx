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
      // Step 1: Login and get token
      const data = await api.login(studentNumber, password);
      const token = data.access_token;
      localStorage.setItem("token", token);

      // Step 2: Get user details using token
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
          <h1 className="text-primary-foreground font-display text-3xl mb-3">
            Campus Residence
          </h1>
          <h2 className="text-secondary font-display text-2xl mb-4">
            Maintenance Reporting System
          </h2>
          <p className="text-primary-foreground/70 text-sm italic">
            "In pursuit of excellence"
          </p>
        </div>
      </div>

      {/* Right panel - Login form */}
      <div className="flex-1 flex items-center justify-center p-6 bg-background">
        <div className="w-full max-w-md animate-fade-in">
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