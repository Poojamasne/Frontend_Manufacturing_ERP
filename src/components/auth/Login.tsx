import React, { useState } from "react";
import {
  Mail,
  Lock,
  Eye,
  EyeOff,
  LayoutDashboard,
  Factory,
  Boxes,
  Users,
  ShieldCheck,
} from "lucide-react";

interface User {
  id: string;
  email: string;
  password: string;
  fullName: string;
  role: string;
  module: string;
  department: string;
}

interface LoginProps {
  onLoginSuccess: (user: User) => void;
}

const USERS: User[] = [
  { id: "1", email: "admin@erp.com", password: "admin123", fullName: "Rajesh Sharma", role: "super_admin", module: "admin", department: "IT Administration" },
  { id: "2", email: "salesmanager@erp.com", password: "sales123", fullName: "Priya Mehta", role: "sales_manager", module: "sales", department: "Sales" },
];

export const Login: React.FC<LoginProps> = ({ onLoginSuccess }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [error, setError] = useState("");

  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  // EMAIL VALIDATION
  const validateEmail = (email: string) => {
    if (!email) return "Email is required";
    if (email.includes(" ")) return "No spaces allowed";

    const atCount = (email.match(/@/g) || []).length;
    if (atCount === 0) return "Missing @";
    if (atCount > 1) return "Multiple @ not allowed";

    const [localPart, domainPart] = email.split("@");
    if (!localPart) return "Missing username";
    if (!domainPart) return "Missing domain";

    if (email.includes("..")) return "No consecutive dots";
    if (email.startsWith(".") || email.endsWith(".")) return "Invalid dot";

    if (!domainPart.includes(".")) return "Domain must contain extension";

    const ext = domainPart.split(".").pop();
    const allowed = ["com", "in", "org", "co"];
    if (!allowed.includes(ext || "")) return "Invalid domain";

    return "";
  };

  // PASSWORD VALIDATION
  const validatePassword = (password: string) => {
    if (!password) return "Password required";
    if (password.length < 6) return "Minimum 6 characters";
    return "";
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const eErr = validateEmail(email);
    const pErr = validatePassword(password);

    setEmailError(eErr);
    setPasswordError(pErr);

    if (eErr || pErr) return;

    setLoading(true);
    setError("");

    setTimeout(() => {
      const user = USERS.find(
        (u) => u.email === email && u.password === password
      );

      if (user) onLoginSuccess(user);
      else setError("Invalid credentials");

      setLoading(false);
    }, 500);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">

      {/* MAIN BLOCK BIGGER */}
      <div className="w-full max-w-6xl bg-white rounded-xl shadow-xl border border-gray-200 overflow-hidden flex">

        {/* LEFT PANEL */}
        <div className="hidden md:flex flex-1 bg-slate-900 text-white p-12 flex-col justify-center">

          {/* BIG LOGO */}
          <img
            src="https://www.zonixtec.com/Assets/Logo.svg"
            className="w-24 h-24 mb-6 rounded-lg bg-white/10 p-3"
          />

          <h1 className="text-xl font-semibold">Manufacturing ERP</h1>

          <p className="text-sm text-gray-400 mt-2">
            Production • Inventory • HRMS • Finance
          </p>

          <div className="mt-8 space-y-3 text-sm text-gray-400">
            <p className="flex items-center gap-2"><LayoutDashboard size={16} /> Dashboard</p>
            <p className="flex items-center gap-2"><Factory size={16} /> Production</p>
            <p className="flex items-center gap-2"><Boxes size={16} /> Inventory</p>
            <p className="flex items-center gap-2"><Users size={16} /> Employees</p>
            <p className="flex items-center gap-2"><ShieldCheck size={16} /> Security</p>
          </div>
        </div>

        {/* RIGHT PANEL */}
        <div className="flex-1 p-10 flex items-center">
          <div className="w-full max-w-lg mx-auto">

            <h2 className="text-xl font-semibold text-center text-gray-800">
              Sign in
            </h2>

            <p className="text-sm text-gray-500 text-center mb-6">
              Enter your credentials to continue
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">

              {/* EMAIL */}
              <div>
                <div className="relative">
                  <Mail className="absolute left-3 top-3 text-gray-400" size={18} />

                  <input
                    type="email"
                    placeholder="Email address"
                    className={`w-full pl-10 pr-3 py-3 text-sm rounded-md border bg-white
                  transition-all duration-200
hover:shadow-sm
focus:outline-none
                    ${emailError
                        ? "border-red-400 focus:ring-1 focus:ring-red-400"
                        : "border-gray-300 focus:ring-1 focus:ring-slate-800"
                      }`}
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                      setEmailError(validateEmail(e.target.value));
                    }}
                  />
                </div>

                {emailError && (
                  <p className="text-red-500 text-xs mt-1">{emailError}</p>
                )}
              </div>

              {/* PASSWORD */}
              <div>
                <div className="relative">
                  <Lock className="absolute left-3 top-3 text-gray-400" size={18} />

                  <input
                    type={showPassword ? "text" : "password"}
                    placeholder="Password"
                    className={`w-full pl-10 pr-10 py-3 text-sm rounded-md border bg-white
                          transition-all duration-200
                          hover:shadow-sm
                          focus:outline-none
                    ${passwordError
                        ? "border-red-400 focus:ring-1 focus:ring-red-400"
                        : "border-gray-300 focus:ring-1 focus:ring-slate-800"
                      }`}
                    value={password}
                    onChange={(e) => {
                      setPassword(e.target.value);
                      setPasswordError(validatePassword(e.target.value));
                    }}
                  />

                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-3 text-gray-400 hover:text-gray-600"
                  >
                    {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                  </button>
                </div>

                {passwordError && (
                  <p className="text-red-500 text-xs mt-1">{passwordError}</p>
                )}
              </div>

              {/* ERROR */}
              {error && (
                <div className="text-red-500 text-sm text-center">{error}</div>
              )}

              {/* BUTTON */}
              <button
                type="submit"
                disabled={loading}
                className="w-full py-3 text-sm rounded-md text-white font-medium
                bg-slate-900 hover:bg-slate-800 transition disabled:opacity-50"
              >
                {loading ? "Signing in..." : "Sign In"}
              </button>

            </form>

            <p className="text-xs text-gray-400 text-center mt-8">
              © 2026 Manufacturing ERP
            </p>

          </div>
        </div>

      </div>
    </div>
  );
};