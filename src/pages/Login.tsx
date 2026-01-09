import { useState } from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { LogIn, Shield, Mail, Lock, ArrowRight, Eye, EyeOff, Sparkles, Users, Building2, Key, Fingerprint, AlertCircle, CheckCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    role: "facility",
    rememberDevice: false
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    // Show message that login is inactive
    alert("Login functionality is currently inactive. This is a demo interface.");
    
    setIsSubmitting(false);
  };

  const handleChange = (field: string, value: string | boolean) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const portalTypes = [
    { value: "facility", label: "Facility Portal", icon: Building2, color: "from-blue-500/20 to-blue-600/20" },
    { value: "family", label: "Family Portal", icon: Users, color: "from-accent/20 to-pink-600/20" },
    { value: "admin", label: "Admin Portal", icon: Shield, color: "from-purple-500/20 to-purple-600/20" },
  ];

  const securityFeatures = [
    "End-to-end encryption",
    "Multi-factor authentication",
    "Zero-trust architecture",
    "24/7 security monitoring",
  ];

  return (
    <div className="min-h-screen bg-background text-foreground overflow-hidden">
      <Header />
      
      {/* Animated Background Elements */}
      <div className="fixed inset-0 z-[-1] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-background via-black/95 to-secondary/5" />
        {/* Floating security icons */}
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              rotate: [0, 360],
              opacity: [0.1, 0.3, 0.1],
            }}
            transition={{
              duration: Math.random() * 5 + 5,
              repeat: Infinity,
              delay: Math.random() * 2,
              ease: "easeInOut",
            }}
          >
            <Shield className="w-6 h-6 text-accent/10" />
          </motion.div>
        ))}
      </div>

      <main className="pt-24 pb-16 relative z-10">
        <section className="py-10">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start max-w-6xl mx-auto">
              {/* Left Column - Information */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="order-2 lg:order-1"
              >
                <motion.div 
                  className="inline-flex items-center gap-2 rounded-full border border-[color:var(--separator)] bg-gradient-to-r from-[color:var(--tile-blue)]/30 to-accent/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.16em] text-[color:var(--tile-label)] mb-6"
                  whileHover={{ scale: 1.05 }}
                >
                  <Shield className="w-3.5 h-3.5" />
                  <span>Secure Portal</span>
                  <Sparkles className="w-3 h-3 ml-1" />
                </motion.div>

                <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
                  <span className="text-foreground">Sign in to </span>
                  <br className="sm:hidden" />
                  <span className="text-accent relative inline-block mt-1">
                    FreedomTek®
                    <motion.div
                      className="absolute -bottom-2 left-0 h-1 bg-accent rounded-full"
                      initial={{ width: 0 }}
                      animate={{ width: "100%" }}
                      transition={{ delay: 0.5, duration: 0.6 }}
                    />
                  </span>
                </h1>
                
                <p className="text-base md:text-lg text-[color:var(--foreground-muted)] max-w-xl mb-8 leading-relaxed">
                  Centralized access for facility staff, families, and administrators. 
                  Encrypted by default, audited by design.
                </p>

                {/* Security Features */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="mb-10"
                >
                  <h3 className="text-sm font-semibold uppercase tracking-[0.16em] text-[color:var(--tile-label)] mb-4">
                    Enterprise Security
                  </h3>
                  <div className="grid sm:grid-cols-2 gap-3">
                    {securityFeatures.map((feature, index) => (
                      <motion.div
                        key={feature}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.4 + index * 0.1 }}
                        className="flex items-center gap-2 text-sm text-[color:var(--foreground-muted)]"
                      >
                        <div className="w-5 h-5 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0">
                          <CheckCircle className="w-3 h-3 text-accent" />
                        </div>
                        <span>{feature}</span>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>

                {/* Portal Cards */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className="grid sm:grid-cols-3 gap-4 mb-10"
                >
                  {portalTypes.map((portal, index) => (
                    <motion.div
                      key={portal.value}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.6 + index * 0.1 }}
                      whileHover={{ y: -5, scale: 1.02 }}
                      className={`rounded-2xl p-4 border border-[color:var(--border-subtle)]/50 backdrop-blur-sm bg-gradient-to-br ${portal.color} cursor-pointer transition-all duration-300 ${
                        formData.role === portal.value ? 'ring-2 ring-accent/50' : ''
                      }`}
                      onClick={() => handleChange("role", portal.value)}
                    >
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center">
                          <portal.icon className="w-5 h-5 text-white" />
                        </div>
                        <div className="text-xs font-semibold uppercase tracking-[0.16em]">
                          {portal.label}
                        </div>
                      </div>
                      <p className="text-xs text-[color:var(--foreground-muted)] leading-relaxed">
                        {portal.value === "facility" && "Staff tools, monitoring, and controls in one place."}
                        {portal.value === "family" && "Messaging, calls, and deposits with clear pricing."}
                        {portal.value === "admin" && "Configurability, reporting, and audit-ready exports."}
                      </p>
                    </motion.div>
                  ))}
                </motion.div>

                {/* Info Alert */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 }}
                  className="rounded-2xl bg-gradient-to-r from-primary/10 to-primary/5 border border-primary/20 p-4"
                >
                  <div className="flex items-start gap-3">
                    <AlertCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-sm font-medium mb-1">Login Functionality</p>
                      <p className="text-xs text-[color:var(--foreground-muted)]">
                        This login interface is for demonstration purposes only. 
                        Actual authentication functionality is currently inactive.
                      </p>
                    </div>
                  </div>
                </motion.div>
              </motion.div>

              {/* Right Column - Login Form */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="order-1 lg:order-2 sticky top-24"
              >
                <div className="rounded-3xl bg-gradient-to-br from-[color:var(--background-elevated)] to-black/40 border border-[color:var(--border-subtle)]/50 shadow-2xl shadow-black/20 p-6 sm:p-8 backdrop-blur-sm">
                  {/* Form Header */}
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="flex items-center justify-between mb-8"
                  >
                    <div>
                      <h2 className="text-xl sm:text-2xl font-bold mb-1">Secure Login</h2>
                      <p className="text-sm text-[color:var(--foreground-muted)]">
                        Enter your credentials to access your portal
                      </p>
                    </div>
                    <motion.div
                      className="w-12 h-12 rounded-2xl bg-gradient-to-br from-accent/20 to-accent/10 border border-accent/30 flex items-center justify-center"
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                    >
                      <Key className="w-6 h-6 text-accent" />
                    </motion.div>
                  </motion.div>

                  {/* Login Form */}
                  <form onSubmit={handleSubmit} className="space-y-5">
                    {/* Email Field */}
                    <motion.div
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.4 }}
                      className="space-y-2"
                    >
                      <label htmlFor="email" className="text-xs font-medium text-[color:var(--foreground-muted)] uppercase tracking-[0.16em] flex items-center gap-2">
                        <Mail className="w-3.5 h-3.5" />
                        Email Address
                      </label>
                      <div className="relative">
                        <input
                          id="email"
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => handleChange("email", e.target.value)}
                          className="w-full rounded-2xl bg-background/80 border border-[color:var(--border-subtle)] px-4 py-3.5 text-sm text-foreground placeholder:text-[color:var(--foreground-muted)] focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-transparent transition-all duration-300"
                          placeholder="name@facility.gov"
                          disabled={isSubmitting}
                        />
                        <motion.div
                          className="absolute right-3 top-1/2 -translate-y-1/2"
                          whileHover={{ scale: 1.1 }}
                        >
                          <Fingerprint className="w-4 h-4 text-[color:var(--foreground-muted)]" />
                        </motion.div>
                      </div>
                    </motion.div>

                    {/* Password Field */}
                    <motion.div
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.5 }}
                      className="space-y-2"
                    >
                      <label htmlFor="password" className="text-xs font-medium text-[color:var(--foreground-muted)] uppercase tracking-[0.16em] flex items-center gap-2">
                        <Lock className="w-3.5 h-3.5" />
                        Password
                      </label>
                      <div className="relative">
                        <input
                          id="password"
                          type={showPassword ? "text" : "password"}
                          required
                          value={formData.password}
                          onChange={(e) => handleChange("password", e.target.value)}
                          className="w-full rounded-2xl bg-background/80 border border-[color:var(--border-subtle)] px-4 py-3.5 text-sm text-foreground placeholder:text-[color:var(--foreground-muted)] focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-transparent transition-all duration-300 pr-12"
                          placeholder="••••••••"
                          disabled={isSubmitting}
                        />
                        <button
                          type="button"
                          onClick={() => setShowPassword(!showPassword)}
                          className="absolute right-3 top-1/2 -translate-y-1/2 text-[color:var(--foreground-muted)] hover:text-foreground transition-colors"
                          disabled={isSubmitting}
                        >
                          {showPassword ? (
                            <EyeOff className="w-4.5 h-4.5" />
                          ) : (
                            <Eye className="w-4.5 h-4.5" />
                          )}
                        </button>
                      </div>
                    </motion.div>

                    {/* Role Selection */}
                    <motion.div
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.6 }}
                      className="space-y-2"
                    >
                      <label htmlFor="role" className="text-xs font-medium text-[color:var(--foreground-muted)] uppercase tracking-[0.16em]">
                        Portal Type
                      </label>
                      <div className="relative">
                        <select
                          id="role"
                          value={formData.role}
                          onChange={(e) => handleChange("role", e.target.value)}
                          className="w-full rounded-2xl bg-background/80 border border-[color:var(--border-subtle)] px-4 py-3.5 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-transparent transition-all duration-300 appearance-none"
                          disabled={isSubmitting}
                        >
                          {portalTypes.map((portal) => (
                            <option key={portal.value} value={portal.value}>
                              {portal.label}
                            </option>
                          ))}
                        </select>
                        <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none">
                          <ArrowRight className="w-4 h-4 text-[color:var(--foreground-muted)] rotate-90" />
                        </div>
                      </div>
                    </motion.div>

                    {/* Remember & Forgot */}
                    <motion.div
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.7 }}
                      className="flex items-center justify-between pt-2"
                    >
                      <label className="flex items-center gap-2 cursor-pointer select-none text-sm text-[color:var(--foreground-muted)]">
                        <input
                          type="checkbox"
                          checked={formData.rememberDevice}
                          onChange={(e) => handleChange("rememberDevice", e.target.checked)}
                          className="h-4 w-4 rounded border-[color:var(--border-subtle)] bg-background/80 text-accent focus:ring-accent/50 transition-colors"
                          disabled={isSubmitting}
                        />
                        <span>Remember this device</span>
                      </label>
                      <button
                        type="button"
                        className="text-sm text-[color:var(--tile-blue)] hover:text-[color:var(--tile-blue)]/80 hover:underline transition-colors"
                        disabled={isSubmitting}
                      >
                        Forgot password?
                      </button>
                    </motion.div>

                    {/* Submit Button - INACTIVE */}
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.8 }}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <Button
                        type="submit"
                        disabled={isSubmitting || true} // Always disabled as requested
                        className="w-full rounded-2xl bg-gradient-to-r from-accent/60 to-accent/40 text-accent-foreground hover:from-accent/70 hover:to-accent/50 h-12 text-base font-medium relative overflow-hidden cursor-not-allowed opacity-70"
                      >
                        {isSubmitting ? (
                          <>
                            <motion.div
                              animate={{ rotate: 360 }}
                              transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                              className="w-5 h-5 mr-2"
                            >
                              <Lock className="w-5 h-5" />
                            </motion.div>
                            Authenticating...
                          </>
                        ) : (
                          <>
                            <div className="flex items-center gap-2">
                              <LogIn className="w-5 h-5" />
                              Login Inactive (Demo)
                            </div>
                          </>
                        )}
                        <motion.div
                          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
                          initial={{ x: "-100%" }}
                          whileHover={{ x: "100%" }}
                          transition={{ duration: 0.8 }}
                        />
                      </Button>
                      <p className="text-xs text-center text-[color:var(--foreground-muted)] mt-2">
                        Login functionality is disabled for this demo interface
                      </p>
                    </motion.div>

                    {/* Terms */}
                    <motion.p
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.9 }}
                      className="pt-4 text-xs leading-relaxed text-[color:var(--foreground-muted)] border-t border-[color:var(--border-subtle)]/50"
                    >
                      By continuing you agree to FreedomTek®'s Terms, Privacy Policy, 
                      and facility-specific communication rules. All access is logged 
                      and monitored for security purposes.
                    </motion.p>
                  </form>

                  {/* Support Links */}
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1 }}
                    className="mt-8 pt-6 border-t border-[color:var(--border-subtle)]/50"
                  >
                    <p className="text-sm text-center text-[color:var(--foreground-muted)] mb-4">
                      Need assistance with your account?
                    </p>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-3 text-sm">
                      <a
                        href="mailto:support@freedomtek.com"
                        className="flex items-center gap-2 text-accent hover:text-accent/80 hover:underline transition-colors"
                      >
                        <Mail className="w-4 h-4" />
                        support@freedomtek.com
                      </a>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Login;