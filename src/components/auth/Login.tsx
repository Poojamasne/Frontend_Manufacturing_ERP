import React, { useState } from "react";
import { Mail, Lock, Eye, EyeOff } from "lucide-react";

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
      <div className="w-full max-w-6xl bg-white rounded-3xl shadow-xl border border-gray-200 overflow-hidden flex">

        {/* LEFT IMAGE */}
        <div className="hidden md:block flex-1 border border-black rounded-l-3xl overflow-hidden">
          <img
            src="https://img.freepik.com/free-photo/engineer-working-with-robot-modern-industrial-facility_23-2151962519.jpg"
            className="w-full h-full object-cover"
          />
        </div>

        {/* RIGHT PANEL */}
        <div className="flex-1 p-14 py-6 flex items-center border border-black rounded-r-3xl">          <div className="w-full max-w-md mx-auto px-6">

          {/* LOGO */}
          <div className="flex justify-center mb-4">
            <img
              src="https://www.zonixtec.com/Assets/Logo.svg"
              alt="Logo"
              className="w-16 h-16 rounded-full border border-gray-200 shadow-sm p-2 bg-black"
            />
          </div>

          {/* HEADINGS */}
          <h2 className="text-xl font-bold text-center mb-1 text-gray-800">
            Welcome Back to Manufacturing ERP
          </h2>

          <h2 className="text-md font-semibold text-center mb-6 text-gray-600">
            Sign in to your account
          </h2>

          <form onSubmit={handleSubmit} className="space-y-5">

            {/* EMAIL */}
            <div className="flex flex-col items-center w-full">
              <div className="relative w-full max-w-sm">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />

                <input
                  type="email"
                  placeholder="Email address"
                  className={`w-full pl-10 pr-3 py-3 text-sm rounded-md border bg-white
                    transition-all duration-200 hover:shadow-sm focus:outline-none
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
                <p className="text-red-500 text-xs mt-1 w-full max-w-sm text-left">
                  {emailError}
                </p>
              )}
            </div>

            {/* PASSWORD */}
            <div className="flex flex-col items-center w-full">
              <div className="relative w-full max-w-sm">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />

                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Password"
                  className={`w-full pl-10 pr-10 py-3 text-sm rounded-md border bg-white
                    transition-all duration-200 hover:shadow-sm focus:outline-none
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
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                >
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>

              {passwordError && (
                <p className="text-red-500 text-xs mt-1 w-full max-w-sm text-left">
                  {passwordError}
                </p>
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
              className="w-full max-w-sm mx-auto block py-3 mt-2 text-sm rounded-md text-white font-medium
                bg-slate-900 hover:bg-slate-800 transition disabled:opacity-50"
            >
              {loading ? "Signing in..." : "Sign In"}
            </button>
          </form>
          <p className="text-xs text-gray-400 text-center mt-5">
            ©{new Date().getFullYear()} Manufacturing ERP
          </p>
        </div>
        </div>
      </div>
    </div>
  );
};