import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { Menu, X, LogOut, Home, FileText, PlusCircle, Shield } from "lucide-react";

const Navbar = () => {
  const navigate = useNavigate();
  const role = localStorage.getItem("role");
  const user = localStorage.getItem("user");
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("role");
    localStorage.removeItem("user");
    navigate("/login");
  };

  const studentLinks = [
    { to: "/dashboard", label: "Dashboard", icon: Home },
    { to: "/my-complaints", label: "My Complaints", icon: FileText },
    { to: "/submit", label: "Submit", icon: PlusCircle },
  ];

  const adminLinks = [
    { to: "/dashboard", label: "Dashboard", icon: Home },
    { to: "/admin", label: "Admin Panel", icon: Shield },
  ];

  const links = role === "admin" ? adminLinks : studentLinks;

  return (
    <nav className="wsu-gradient sticky top-0 z-50 shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/dashboard" className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full gold-gradient flex items-center justify-center font-display font-bold text-foreground text-sm">
              W
            </div>
            <span className="text-primary-foreground font-semibold hidden sm:block">
              WSU CRMRS
            </span>
          </Link>

          {/* Desktop */}
          <div className="hidden md:flex items-center gap-1">
            {links.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className="flex items-center gap-2 px-4 py-2 rounded-lg text-primary-foreground/80 hover:text-primary-foreground hover:bg-primary-foreground/10 transition-all duration-200 text-sm font-medium"
              >
                <link.icon size={16} />
                {link.label}
              </Link>
            ))}
            <button
              onClick={handleLogout}
              className="flex items-center gap-2 px-4 py-2 ml-2 rounded-lg bg-secondary text-secondary-foreground hover:brightness-110 transition-all duration-200 text-sm font-medium"
            >
              <LogOut size={16} />
              Logout
            </button>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden text-primary-foreground p-2"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div className="md:hidden pb-4 animate-fade-in">
            {links.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                onClick={() => setMobileOpen(false)}
                className="flex items-center gap-3 px-4 py-3 text-primary-foreground/80 hover:text-primary-foreground hover:bg-primary-foreground/10 rounded-lg transition-all duration-200"
              >
                <link.icon size={18} />
                {link.label}
              </Link>
            ))}
            <button
              onClick={handleLogout}
              className="flex items-center gap-3 px-4 py-3 w-full text-left text-secondary font-medium"
            >
              <LogOut size={18} />
              Logout
            </button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
