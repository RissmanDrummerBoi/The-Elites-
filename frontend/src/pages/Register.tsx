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

      {/* Right form */}
      <div className="flex-1 flex items-center justify-center p-6 bg-background">
        <div className="w-full max-w-lg animate-fade-in">
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
                <input name="full_name" value={form.full_name} onChange={handleChange} className={inputClass} placeholder="John Doe" required />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-1.5">Student Number</label>
                <input name="student_number" value={form.student_number} onChange={handleChange} className={inputClass} placeholder="220012345" required />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-foreground mb-1.5">Email</label>
              <input name="email" type="email" value={form.email} onChange={handleChange} className={inputClass} placeholder="student@wsu.ac.za" required />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-foreground mb-1.5">Residence</label>
                <input name="residence" value={form.residence} onChange={handleChange} className={inputClass} placeholder="e.g. Mandela Hall" required />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-1.5">Room Number</label>
                <input name="room_number" value={form.room_number} onChange={handleChange} className={inputClass} placeholder="e.g. A204" required />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-foreground mb-1.5">Password</label>
              <input name="password" type="password" value={form.password} onChange={handleChange} className={inputClass} placeholder="Create a strong password" required />
            </div>
            <div>
              <label className="block text-sm font-medium text-foreground mb-1.5">Role</label>
              <select name="role" value={form.role} onChange={handleChange} className={inputClass}>
                <option value="student">Student</option>
                <option value="admin">Admin</option>
              </select>
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
