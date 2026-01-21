import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  ClipboardList, 
  LayoutDashboard, 
  Mail, 
  Menu, 
  PhoneCall, 
  X, 
  TrendingUp, 
  Users,
  Activity,
  Clock,
  Calendar,
  ExternalLink,
  Eye,
  BarChart3,
  Bell,
  ChevronRight,
  Download,
  MessageSquare,
  AlertCircle,
  FileText
} from "lucide-react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";

const sidebarItems = [
  { id: "dashboard", label: "Dashboard", icon: LayoutDashboard, path: "/portal/facility" },
  { id: "demo-requests", label: "Demo Requests", icon: ClipboardList, path: "/portal/facility/demo-requests" },
  { id: "contact-forms", label: "Contact Forms", icon: Mail, path: "/portal/facility/contact-forms" },
  { id: "rfp-requests", label: "RFP Requests", icon: FileText, path: "/portal/facility/rfp-requests" },
];

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { type: "spring", stiffness: 100, damping: 15 }
  },
  hover: { 
    scale: 1.05, 
    x: 5,
    transition: { type: "spring", stiffness: 400, damping: 15 }
  }
};

const cardVariants = {
  hidden: { scale: 0.9, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: { type: "spring", stiffness: 100, damping: 15 }
  },
  hover: {
    y: -8,
    scale: 1.02,
    boxShadow: "0 20px 40px rgba(239, 68, 68, 0.2)",
    transition: { type: "spring", stiffness: 300, damping: 15 }
  }
};

const graphBarVariants = {
  hidden: { height: 0 },
  visible: (custom: number) => ({
    height: `${custom}%`,
    transition: { 
      type: "spring", 
      stiffness: 100, 
      damping: 20,
      delay: custom * 0.01 
    }
  })
};

const slideInVariants = {
  hidden: { x: -50, opacity: 0 },
  visible: { 
    x: 0, 
    opacity: 1,
    transition: { type: "spring", stiffness: 100, damping: 20 }
  }
};

// Layout component that holds sidebar + topbar and renders nested routes
const FacilityLayout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  // Handle scroll effect for topbar
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close sidebar when route changes (mobile)
  useEffect(() => {
    setSidebarOpen(false);
  }, [location.pathname]);

  // Close sidebar on escape key press
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && sidebarOpen) {
        setSidebarOpen(false);
      }
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [sidebarOpen]);

  const getActiveId = () => {
    if (location.pathname.startsWith("/portal/facility/demo-requests")) return "demo-requests";
    if (location.pathname.startsWith("/portal/facility/contact-forms")) return "contact-forms";
    if (location.pathname.startsWith("/portal/facility/rfp-requests")) return "rfp-requests";
    return "dashboard";
  };

  const activeId = getActiveId();

  const handleNavigate = (path: string) => {
    navigate(path);
    setSidebarOpen(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white flex overflow-hidden">
      {/* Mobile Overlay - Only shows when sidebar is open on mobile */}
      <AnimatePresence>
        {sidebarOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 md:hidden"
            onClick={() => setSidebarOpen(false)}
          />
        )}
      </AnimatePresence>

      {/* Mobile Sidebar */}
      <AnimatePresence>
        {sidebarOpen && (
          <motion.aside
            initial={{ x: -280 }}
            animate={{ x: 0 }}
            exit={{ x: -280 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="fixed inset-y-0 left-0 z-50 w-72 bg-gradient-to-b from-slate-900/95 to-slate-950/95 border-r border-white/10 backdrop-blur-2xl p-5 flex flex-col gap-6 md:hidden"
          >
            {/* Mobile Sidebar Header */}
            <motion.div 
              className="flex items-center justify-between mb-6"
              variants={itemVariants}
              initial="hidden"
              animate="visible"
            >
              <div className="flex items-center gap-3 group cursor-pointer" onClick={() => handleNavigate("/")}>
                <motion.div 
                  className="relative w-10 h-10 rounded-xl bg-gradient-to-br from-red-600 to-red-500 flex items-center justify-center shadow-lg shadow-red-500/20"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <span className="text-sm font-bold text-white">FT</span>
                  <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-white/20 to-transparent" />
                </motion.div>
                <div>
                  <p className="text-sm font-bold tracking-wide">FreedomTek</p>
                  <p className="text-[10px] text-white/50 uppercase tracking-widest">Portal</p>
                </div>
              </div>
              <button
                className="p-2 rounded-xl hover:bg-white/10 transition-all"
                onClick={() => setSidebarOpen(false)}
              >
                <X className="w-4 h-4" />
              </button>
            </motion.div>

            {/* Mobile Navigation */}
            <nav className="space-y-2 flex-1">
              {sidebarItems.map((item, index) => {
                const Icon = item.icon;
                const isActive = activeId === item.id;
                return (
                  <motion.button
                    key={item.id}
                    variants={itemVariants}
                    initial="hidden"
                    animate="visible"
                    custom={index * 0.1}
                    whileHover="hover"
                    onClick={() => handleNavigate(item.path)}
                    className={`w-full flex items-center justify-between px-4 py-3 rounded-xl text-sm font-medium transition-all duration-300
                      ${isActive 
                        ? 'bg-gradient-to-r from-red-600/90 to-red-500/90 text-white shadow-lg shadow-red-500/20' 
                        : 'text-white/70 hover:text-white hover:bg-white/10'
                      }`}
                  >
                    <div className="flex items-center gap-3">
                      <div className={`p-2 rounded-lg ${isActive ? 'bg-white/20' : 'bg-white/5'}`}>
                        <Icon className="w-4 h-4" />
                      </div>
                      <span>{item.label}</span>
                    </div>
                    {isActive && (
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ type: "spring", stiffness: 200 }}
                      >
                        <ChevronRight className="w-4 h-4" />
                      </motion.div>
                    )}
                  </motion.button>
                );
              })}
            </nav>

            {/* Mobile Status */}
            <motion.div 
              className="mt-auto"
              variants={itemVariants}
              initial="hidden"
              animate="visible"
            >
              <div className="relative rounded-xl bg-gradient-to-r from-slate-800/50 to-slate-900/50 border border-white/10 p-3">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-medium text-white/80">Status</span>
                  <div className="flex items-center gap-1">
                    <motion.div
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                      className="w-2 h-2 rounded-full bg-emerald-400"
                    />
                    <span className="text-[10px] text-emerald-300 font-medium">Live</span>
                  </div>
                </div>
                <div className="text-[10px] text-white/40">
                  <div>Demo environment</div>
                  <div>v2.4.1</div>
                </div>
              </div>
            </motion.div>
          </motion.aside>
        )}
      </AnimatePresence>

      {/* Desktop Sidebar - Always visible on desktop */}
      <motion.aside
        initial={{ x: -80, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        exit={{ x: -80, opacity: 0 }}
        transition={{ 
          type: "spring", 
          stiffness: 100, 
          damping: 20,
          duration: 0.5 
        }}
        className="hidden md:flex flex-col w-72 bg-gradient-to-b from-slate-900/95 to-slate-950/95 border-r border-white/10 backdrop-blur-2xl p-5 gap-6 z-30"
      >
        {/* Desktop Logo & Branding */}
        <motion.div 
          className="flex items-center justify-between mb-6"
          variants={itemVariants}
          initial="hidden"
          animate="visible"
        >
          <div className="flex items-center gap-3 group cursor-pointer" onClick={() => navigate("/")}>
            <motion.div 
              className="relative w-11 h-11 rounded-xl bg-gradient-to-br from-red-600 to-red-500 flex items-center justify-center shadow-lg shadow-red-500/20"
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-sm font-bold text-white">FT</span>
              <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-white/20 to-transparent" />
            </motion.div>
            <div>
              <p className="text-sm font-bold tracking-wide">FreedomTek</p>
              <p className="text-[10px] text-white/50 uppercase tracking-widest">Facility Portal</p>
            </div>
          </div>
        </motion.div>

        {/* Desktop Navigation */}
        <nav className="space-y-2 flex-1">
          {sidebarItems.map((item, index) => {
            const Icon = item.icon;
            const isActive = activeId === item.id;
            return (
              <motion.button
                key={item.id}
                variants={itemVariants}
                initial="hidden"
                animate="visible"
                custom={index * 0.1}
                whileHover="hover"
                onClick={() => navigate(item.path)}
                className={`w-full flex items-center justify-between px-4 py-3.5 rounded-xl text-sm font-medium transition-all duration-300
                  ${isActive 
                    ? 'bg-gradient-to-r from-red-600/90 to-red-500/90 text-white shadow-lg shadow-red-500/20' 
                    : 'text-white/70 hover:text-white hover:bg-white/10'
                  }`}
              >
                <div className="flex items-center gap-3">
                  <div className={`p-2 rounded-lg ${isActive ? 'bg-white/20' : 'bg-white/5'}`}>
                    <Icon className="w-4 h-4" />
                  </div>
                  <span>{item.label}</span>
                </div>
                {isActive && (
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 200 }}
                  >
                    <ChevronRight className="w-4 h-4" />
                  </motion.div>
                )}
              </motion.button>
            );
          })}
        </nav>

        {/* Desktop Status & Footer */}
        <motion.div 
          className="mt-auto"
          variants={itemVariants}
          initial="hidden"
          animate="visible"
        >
          <div className="relative rounded-xl bg-gradient-to-r from-slate-800/50 to-slate-900/50 border border-white/10 p-4">
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs font-medium text-white/80">System Status</span>
              <div className="flex items-center gap-1">
                <motion.div
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="w-2 h-2 rounded-full bg-emerald-400"
                />
                <span className="text-[10px] text-emerald-300 font-medium">Live</span>
              </div>
            </div>
            <div className="flex items-center justify-between text-[10px] text-white/40">
              <span>Demo environment</span>
              <span>v2.4.1</span>
            </div>
          </div>
        </motion.div>
      </motion.aside>

      {/* Main content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Top bar */}
        <motion.header 
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className={`sticky top-0 z-40 h-16 border-b border-white/10 bg-gradient-to-r from-slate-950/90 to-slate-900/90 backdrop-blur-2xl flex items-center justify-between px-4 md:px-6 transition-all duration-300
            ${scrolled ? 'shadow-2xl shadow-black/20' : ''}`}
        >
          <div className="flex items-center gap-3">
            {/* Hamburger Menu Button - Only on mobile */}
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="md:hidden p-2 rounded-xl hover:bg-white/10 transition-all"
              onClick={() => setSidebarOpen(true)}
            >
              <Menu className="w-5 h-5" />
            </motion.button>
            
            <div className="flex items-center gap-3">
              <motion.div
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity, repeatDelay: 5 }}
                className="hidden md:block"
              >
                <Activity className="w-5 h-5 text-red-400" />
              </motion.div>
              <div>
                <h1 className="text-base font-bold tracking-tight">Facility Portal</h1>
                <p className="text-xs text-white/50 hidden md:block">Real-time monitoring & management</p>
                <p className="text-xs text-white/50 md:hidden">
                  {activeId === "dashboard" && "Dashboard"}
                  {activeId === "demo-requests" && "Demo Requests"}
                  {activeId === "contact-forms" && "Contact Forms"}
                  {activeId === "rfp-requests" && "RFP Requests"}
                </p>
              </div>
            </div>
          </div>
          
          <div className="flex items-center gap-4">
            <motion.div 
              className="hidden sm:flex items-center gap-2 px-3 py-2 rounded-xl bg-white/5 hover:bg-white/10 transition-all cursor-pointer"
              whileHover={{ scale: 1.05 }}
            >
              <PhoneCall className="w-4 h-4 text-emerald-400" />
              <span className="text-xs font-medium hidden lg:inline">Support 24/7</span>
              <span className="text-xs font-medium lg:hidden">Support</span>
            </motion.div>
            <motion.div 
              className="relative cursor-pointer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <Bell className="w-5 h-5 text-white/70" />
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                className="absolute -top-1 -right-1 w-2 h-2 rounded-full bg-red-500"
              />
            </motion.div>
            <motion.div 
              className="hidden md:flex items-center gap-2 px-3 py-2 rounded-xl bg-gradient-to-r from-red-600/20 to-red-500/20 border border-red-500/20"
              whileHover={{ scale: 1.05 }}
            >
              <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-xs font-medium text-emerald-300">Live Session</span>
            </motion.div>
          </div>
        </motion.header>

        <main className="flex-1 p-4 md:p-6 lg:p-8 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 overflow-y-auto">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

// Individual screens (same as before but with responsive improvements)
export const FacilityDashboardHome = () => {
  const [demoRequests, setDemoRequests] = useState<any[]>([]);
  const [contactMessages, setContactMessages] = useState<any[]>([]);
  const [rfpRequests, setRfpRequests] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAll = async () => {
      try {
        const [demoRes, contactRes, rfpRes] = await Promise.all([
          fetch("http://localhost:4000/api/demo-requests"),
          fetch("http://localhost:4000/api/contact-messages"),
          fetch("http://localhost:4000/api/rfp-requests"),
        ]);

        if (demoRes.ok) {
          const data = await demoRes.json();
          setDemoRequests(Array.isArray(data?.data) ? data.data : []);
        }
        if (contactRes.ok) {
          const data = await contactRes.json();
          setContactMessages(Array.isArray(data?.data) ? data.data : []);
        }
        if (rfpRes.ok) {
          const data = await rfpRes.json();
          setRfpRequests(Array.isArray(data?.data) ? data.data : []);
        }
      } catch (err) {
        // keep empty on error
      } finally {
        setLoading(false);
      }
    };

    fetchAll();
  }, []);

  const tiles = [
    {
      label: "Demo Requests",
      value: demoRequests.length,
      icon: ClipboardList,
      color: "from-emerald-500 to-emerald-400",
    },
    {
      label: "Contact Messages",
      value: contactMessages.length,
      icon: Mail,
      color: "from-blue-500 to-cyan-400",
    },
    {
      label: "RFP Requests",
      value: rfpRequests.length,
      icon: FileText,
      color: "from-purple-500 to-pink-400",
    },
  ];

  const formatDateTime = (value?: string) => {
    if (!value) return "";
    try {
      return new Date(value).toLocaleString();
    } catch {
      return value;
    }
  };

  const recentDemo = demoRequests.slice().reverse().slice(0, 5);
  const recentContacts = contactMessages.slice().reverse().slice(0, 5);
  const recentRfps = rfpRequests.slice().reverse().slice(0, 5);

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="space-y-6"
    >
      {/* Header */}
      <motion.div variants={itemVariants}>
        <div className="flex items-center justify-between mb-2">
          <div>
            <h1 className="text-2xl md:text-4xl font-bold tracking-tight bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">
              Facility Dashboard
            </h1>
            <p className="text-sm text-white/70 max-w-2xl mt-2">
              High-level overview of activity across the FreedomTek platform for your facility.
            </p>
          </div>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="hidden md:flex items-center gap-2 px-4 py-2.5 rounded-xl bg-gradient-to-r from-red-600/20 to-red-500/20 border border-red-500/30 text-sm font-medium hover:border-red-500/50 transition-all"
          >
            <Download className="w-4 h-4" />
            Export Report
          </motion.button>
        </div>
      </motion.div>

      {/* Summary cards */}
      <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {tiles.map((card, index) => (
          <motion.div
            key={card.label}
            variants={cardVariants}
            custom={index}
            whileHover="hover"
            className={`relative rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-transparent p-5 flex flex-col gap-3 backdrop-blur-sm overflow-hidden`}
          >
            {/* Animated background gradient */}
            <div className={`absolute inset-0 bg-gradient-to-br ${card.color} opacity-0 group-hover:opacity-10 transition-opacity`} />
            
            <div className="flex items-center justify-between">
              <div className="p-2.5 rounded-xl bg-white/5">
                <card.icon className="w-5 h-5" />
              </div>
              <motion.div
                className="text-xs font-medium px-2 py-1 rounded-full bg-white/10"
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 2, repeat: Infinity, delay: index * 0.2 }}
              >
                {loading ? "Loading" : "Live"}
              </motion.div>
            </div>
            
            <div className="space-y-1">
              <span className="text-xs uppercase tracking-wide text-white/60 font-medium">{card.label}</span>
              <div className="flex items-baseline gap-2">
                <span className="text-2xl font-bold text-white">{card.value}</span>
                <span className="text-[10px] text-white/40">total</span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Recent tables row 1: Demo + Contacts */}
      <div className="grid gap-6 lg:grid-cols-2 items-start">
        {/* Recent Demo Requests */}
        <motion.div
          variants={cardVariants}
          className="relative rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-transparent overflow-hidden backdrop-blur-sm"
          whileHover="hover"
        >
          <div className="px-4 md:px-5 py-4 border-b border-white/10 flex items-center justify-between bg-gradient-to-r from-white/5 to-transparent">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-xl bg-gradient-to-r from-emerald-600/20 to-emerald-500/20">
                <ClipboardList className="w-4 h-4 md:w-5 md:h-5 text-emerald-400" />
              </div>
              <h2 className="text-sm md:text-base font-semibold text-white/90">Recent Demo Requests</h2>
            </div>
            <span className="text-xs text-white/60 hidden sm:inline">Last {recentDemo.length} submissions</span>
            <span className="text-xs text-white/60 sm:hidden">{recentDemo.length}</span>
          </div>

          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-white/10">
              <thead className="bg-gradient-to-r from-white/5 to-transparent">
                <tr>
                  {['Facility', 'Contact', 'Type', 'Received'].map((header, index) => (
                    <th
                      key={header}
                      className="px-4 md:px-5 py-3 text-left text-xs font-medium text-white/70 uppercase tracking-wider"
                    >
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.05 }}
                      >
                        {header}
                      </motion.div>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                {recentDemo.map((req, index) => {
                  const facility = req.agency || req.facility || 'Unknown facility';
                  const contact = req.name || req.contact || 'Unknown contact';
                  const type = req.role || req.type || 'Demo';
                  const received = formatDateTime(req.createdAt || req.submitted);

                  return (
                    <motion.tr
                      key={req.id || index}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.05 }}
                      className="hover:bg-white/5 transition-colors"
                    >
                      <td className="px-4 md:px-5 py-3 whitespace-nowrap text-sm text-white/90">{facility}</td>
                      <td className="px-4 md:px-5 py-3 whitespace-nowrap text-sm text-white/80">{contact}</td>
                      <td className="px-4 md:px-5 py-3 whitespace-nowrap text-xs text-white/60">{type}</td>
                      <td className="px-4 md:px-5 py-3 whitespace-nowrap text-xs text-white/60">{received}</td>
                    </motion.tr>
                  );
                })}
                {recentDemo.length === 0 && (
                  <tr>
                    <td
                      colSpan={4}
                      className="px-4 md:px-5 py-6 text-center text-xs text-white/50"
                    >
                      No demo requests yet.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </motion.div>

        {/* Recent Contact Messages */}
        <motion.div
          variants={cardVariants}
          className="relative rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-transparent overflow-hidden backdrop-blur-sm"
          whileHover="hover"
        >
          <div className="px-4 md:px-5 py-4 border-b border-white/10 flex items-center justify-between bg-gradient-to-r from-white/5 to-transparent">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-xl bg-gradient-to-r from-blue-600/20 to-blue-500/20">
                <Mail className="w-4 h-4 md:w-5 md:h-5 text-blue-400" />
              </div>
              <h2 className="text-sm md:text-base font-semibold text-white/90">Recent Contact Forms</h2>
            </div>
            <span className="text-xs text-white/60 hidden sm:inline">Last {recentContacts.length} submissions</span>
            <span className="text-xs text-white/60 sm:hidden">{recentContacts.length}</span>
          </div>

          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-white/10">
              <thead className="bg-gradient-to-r from-white/5 to-transparent">
                <tr>
                  {['Name', 'Organization', 'Topic', 'Received'].map((header, index) => (
                    <th
                      key={header}
                      className="px-4 md:px-5 py-3 text-left text-xs font-medium text-white/70 uppercase tracking-wider"
                    >
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.05 }}
                      >
                        {header}
                      </motion.div>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                {recentContacts.map((form, index) => {
                  const organization = form.organization || form.agency || '';
                  const topic = form.subject || form.topic || 'General inquiry';
                  const received = formatDateTime(form.createdAt || form.received);

                  return (
                    <motion.tr
                      key={form.id || index}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.05 }}
                      className="hover:bg-white/5 transition-colors"
                    >
                      <td className="px-4 md:px-5 py-3 whitespace-nowrap text-sm text-white/90">
                        {form.name || 'Unknown contact'}
                      </td>
                      <td className="px-4 md:px-5 py-3 whitespace-nowrap text-sm text-white/80">
                        {organization || '—'}
                      </td>
                      <td className="px-4 md:px-5 py-3 whitespace-nowrap text-xs text-white/60">{topic}</td>
                      <td className="px-4 md:px-5 py-3 whitespace-nowrap text-xs text-white/60">{received}</td>
                    </motion.tr>
                  );
                })}
                {recentContacts.length === 0 && (
                  <tr>
                    <td
                      colSpan={4}
                      className="px-4 md:px-5 py-6 text-center text-xs text-white/50"
                    >
                      No contact submissions yet.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </motion.div>
      </div>

      {/* Recent tables row 2: RFPs */}
      <motion.div
        variants={cardVariants}
        className="relative rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-transparent overflow-hidden backdrop-blur-sm"
        whileHover="hover"
      >
        <div className="px-4 md:px-5 py-4 border-b border-white/10 flex items-center justify-between bg-gradient-to-r from-white/5 to-transparent">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-xl bg-gradient-to-r from-purple-600/20 to-pink-500/20">
              <FileText className="w-4 h-4 md:w-5 md:h-5 text-pink-300" />
            </div>
            <h2 className="text-sm md:text-base font-semibold text-white/90">Recent RFP Requests</h2>
          </div>
          <span className="text-xs text-white/60 hidden sm:inline">Last {recentRfps.length} submissions</span>
          <span className="text-xs text-white/60 sm:hidden">{recentRfps.length}</span>
        </div>

        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-white/10">
            <thead className="bg-gradient-to-r from-white/5 to-transparent">
              <tr>
                {['Agency', 'Contact', 'Docs Requested', 'Received'].map((header, index) => (
                  <th
                    key={header}
                    className="px-4 md:px-5 py-3 text-left text-xs font-medium text-white/70 uppercase tracking-wider"
                  >
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.05 }}
                    >
                      {header}
                    </motion.div>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              {recentRfps.map((req, index) => {
                const agency = req.agency || 'Unknown agency';
                const docs = Array.isArray(req.requestedDocs)
                  ? req.requestedDocs.join(', ')
                  : req.requestedDocs || 'RFP packet';
                const received = formatDateTime(req.createdAt);

                return (
                  <motion.tr
                    key={req.id || index}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.05 }}
                    className="hover:bg-white/5 transition-colors"
                  >
                    <td className="px-4 md:px-5 py-3 whitespace-nowrap text-sm text-white/90">{agency}</td>
                    <td className="px-4 md:px-5 py-3 whitespace-nowrap text-sm text-white/80">{req.name || req.contact || 'Unknown contact'}</td>
                    <td className="px-4 md:px-5 py-3 whitespace-nowrap text-xs text-white/60">{docs}</td>
                    <td className="px-4 md:px-5 py-3 whitespace-nowrap text-xs text-white/60">{received}</td>
                  </motion.tr>
                );
              })}
              {recentRfps.length === 0 && (
                <tr>
                  <td
                    colSpan={4}
                    className="px-4 md:px-5 py-6 text-center text-xs text-white/50"
                  >
                    No RFP requests yet.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </motion.div>
    </motion.div>
  );
};

// Keep the other screen components (FacilityDemoRequests, FacilityContactForms, FacilityRfpRequests) exactly as they were in the previous response
// They already have the responsive improvements

export const FacilityDemoRequests = () => {
  const [requests, setRequests] = useState<any[]>([]);
  const [selectedId, setSelectedId] = useState<number | null>(null);

  useEffect(() => {
    const fetchRequests = async () => {
      try {
        const res = await fetch("http://localhost:4000/api/demo-requests");
        if (!res.ok) return;
        const data = await res.json();
        const list = Array.isArray(data?.data) ? data.data : [];
        setRequests(list);
        if (list.length > 0) {
          setSelectedId(list[0].id);
        }
      } catch (err) {
        // keep demo data empty on error
      }
    };
    fetchRequests();
  }, []);

  const selected =
    requests.find((r) => r.id === selectedId) ||
    (requests.length > 0 ? requests[0] : null);

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="space-y-6"
    >
      {/* Header */}
      <motion.div variants={itemVariants}>
        <div className="flex items-center justify-between mb-2">
          <div>
            <h1 className="text-2xl md:text-4xl font-bold tracking-tight bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">
              Demo Requests
            </h1>
            <p className="text-sm text-white/70 max-w-2xl mt-2">
              Review recent demo requests from facilities and see key details before scheduling.
            </p>
          </div>
          <motion.div
            className="hidden md:flex items-center gap-2 text-xs text-white/60"
            whileHover={{ scale: 1.05 }}
          >
            <Calendar className="w-4 h-4" />
            <span>Updated just now</span>
          </motion.div>
        </div>
      </motion.div>

      <div className="grid gap-6 lg:grid-cols-3 items-start">
        {/* Requests list */}
        <motion.div 
          variants={cardVariants}
          className="relative rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-transparent overflow-hidden backdrop-blur-sm lg:col-span-2"
          whileHover="hover"
        >
          <div className="px-4 md:px-5 py-4 border-b border-white/10 flex items-center justify-between bg-gradient-to-r from-white/5 to-transparent">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-xl bg-gradient-to-r from-amber-600/20 to-amber-500/20">
                <ClipboardList className="w-4 h-4 md:w-5 md:h-5 text-amber-400" />
              </div>
              <h2 className="text-sm md:text-base font-semibold text-white/90">Active Requests</h2>
            </div>
            <span className="text-xs px-3 py-1.5 rounded-full bg-white/10">
              {requests.length} pending
            </span>
          </div>
          
          <div className="divide-y divide-white/5">
            {requests.map((req, index) => {
              const facility = req.agency || req.facility || "Unknown facility";
              const contact = req.name || req.contact || "Unknown contact";
              const size = req.inmateCount ? `${req.inmateCount} population` : req.size || "";
              const type = req.role || req.type || "Demo request";
              const submittedRaw = req.createdAt || req.submitted;
              const submitted = submittedRaw
                ? new Date(submittedRaw).toLocaleString()
                : "";
              const priority = req.priority || "medium";

              return (
                <motion.button
                  key={req.id}
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: index * 0.1 }}
                  onClick={() => setSelectedId(req.id)}
                  className={`w-full text-left px-4 md:px-5 py-4 flex flex-col gap-2 hover:bg-white/5 transition-all relative overflow-hidden
                    ${selectedId === req.id ? 'bg-gradient-to-r from-red-600/10 to-transparent border-l-4 border-red-500' : ''}`}
                >
                  {/* Priority indicator */}
                  <div className={`absolute left-0 top-0 bottom-0 w-1 ${
                    req.priority === 'high' ? 'bg-red-500' :
                    req.priority === 'medium' ? 'bg-amber-500' : 'bg-emerald-500'
                  }`} />
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 md:w-10 md:h-10 rounded-xl bg-gradient-to-br from-slate-700 to-slate-800 flex items-center justify-center text-xs font-bold">
                        {facility.charAt(0)}
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="font-semibold text-white/90 truncate">{facility}</p>
                        <div className="flex items-center gap-2 mt-1 flex-wrap">
                          <span className="text-xs text-white/60 truncate">{size}</span>
                          <span className={`text-[10px] px-2 py-0.5 rounded-full ${
                            priority === 'high' ? 'bg-red-500/20 text-red-300' :
                            priority === 'medium' ? 'bg-amber-500/20 text-amber-300' :
                            'bg-emerald-500/20 text-emerald-300'
                          }`}>
                            {priority} priority
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-xs text-white/60 whitespace-nowrap hidden sm:inline">{submitted}</span>
                      <span className="text-xs text-white/60 whitespace-nowrap sm:hidden">
                        {submittedRaw ? new Date(submittedRaw).toLocaleDateString() : ""}
                      </span>
                      <motion.div
                        whileHover={{ scale: 1.2 }}
                        className={`p-1.5 rounded-lg ${selectedId === req.id ? 'bg-red-500/20' : 'bg-white/5'}`}
                      >
                        <Eye className="w-3 h-3" />
                      </motion.div>
                    </div>
                  </div>
                  
                  <div className="pl-10 md:pl-12">
                    <p className="text-sm text-white/70">Contact: {contact}</p>
                    <p className="text-xs text-white/50 truncate">{type}</p>
                  </div>
                </motion.button>
              );
            })}
          </div>
        </motion.div>

        {/* Detail panel */}
        <motion.div 
          variants={cardVariants}
          className="relative rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-transparent p-4 md:p-5 space-y-4 backdrop-blur-sm"
          whileHover="hover"
        >
          <div className="flex items-center justify-between mb-2">
            <h2 className="text-base font-semibold text-white/90">Request Details</h2>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="text-xs px-3 py-1.5 rounded-lg bg-gradient-to-r from-red-600/20 to-red-500/20 border border-red-500/30 hover:border-red-500/50 transition-all"
            >
              Schedule Demo
            </motion.button>
          </div>
          
          {selected ? (
            <motion.div
              key={selected.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="space-y-5"
            >
              <div>
                <p className="text-xs uppercase tracking-wide text-white/60 mb-2">Facility</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-gradient-to-br from-slate-700 to-slate-800 flex items-center justify-center text-sm font-bold">
                    {(selected.agency || selected.facility || "?").charAt(0)}
                  </div>
                  <div>
                    <p className="text-lg font-bold text-white">{selected.agency || selected.facility || 'Unknown facility'}</p>
                    <p className="text-sm text-white/60">{selected.inmateCount ? `${selected.inmateCount} population` : selected.size}</p>
                  </div>
                </div>
              </div>
              
              <div className="grid grid-cols-1 gap-4">
                <div>
                  <p className="text-xs uppercase tracking-wide text-white/60 mb-2">Primary Contact</p>
                  <p className="text-sm font-medium text-white">{selected.name || selected.contact}</p>
                  <motion.a 
                    href={`mailto:${selected.email}`}
                    className="text-xs text-emerald-300 hover:text-emerald-200 transition-colors"
                    whileHover={{ x: 5 }}
                  >
                    {selected.email}
                  </motion.a>
                </div>
                
                <div>
                  <p className="text-xs uppercase tracking-wide text-white/60 mb-2">Request Type</p>
                  <motion.div 
                    className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/10"
                    whileHover={{ scale: 1.05 }}
                  >
                    <span className="text-sm text-white">{selected.role || selected.type || 'Demo request'}</span>
                  </motion.div>
                </div>
              </div>
              
              <div>
                <p className="text-xs uppercase tracking-wide text-white/60 mb-2">Notes</p>
                <p className="text-sm text-white/80 leading-relaxed bg-white/5 p-3 rounded-lg border border-white/10">
                  {selected.notes}
                </p>
              </div>
              
              <div className="pt-4 border-t border-white/10">
                <p className="text-xs uppercase tracking-wide text-white/60 mb-2">Submitted</p>
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-white/60" />
                  <span className="text-sm text-white/70">
                    {selected.createdAt ? new Date(selected.createdAt).toLocaleString() : selected.submitted}
                  </span>
                </div>
              </div>
            </motion.div>
          ) : (
            <motion.div 
              className="text-center py-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              <ClipboardList className="w-12 h-12 text-white/20 mx-auto mb-3" />
              <p className="text-sm text-white/70">Select a request from the list to view details.</p>
            </motion.div>
          )}
        </motion.div>
      </div>
    </motion.div>
  );
};

export const FacilityContactForms = () => {
  const [forms, setForms] = useState<any[]>([]);
  const [selectedId, setSelectedId] = useState<number | null>(null);

  useEffect(() => {
    const fetchForms = async () => {
      try {
        const res = await fetch("http://localhost:4000/api/contact-messages");
        if (!res.ok) return;
        const data = await res.json();
        const list = Array.isArray(data?.data) ? data.data : [];
        setForms(list);
        if (list.length > 0) {
          setSelectedId(list[0].id);
        }
      } catch (err) {
        // keep demo data empty on error
      }
    };
    fetchForms();
  }, []);

  const selected =
    forms.find((f) => f.id === selectedId) ||
    (forms.length > 0 ? forms[0] : null);

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="space-y-6"
    >
      {/* Header */}
      <motion.div variants={itemVariants}>
        <div className="flex items-center justify-between mb-2">
          <div>
            <h1 className="text-2xl md:text-4xl font-bold tracking-tight bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">
              Contact Forms
            </h1>
            <p className="text-sm text-white/70 max-w-2xl mt-2">
              View inbound contact forms from facilities, partners, and oversight bodies.
            </p>
          </div>
          <motion.div
            className="hidden md:flex items-center gap-2 text-xs text-emerald-300"
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <div className="w-2 h-2 rounded-full bg-emerald-400" />
            <span>Real-time updates</span>
          </motion.div>
        </div>
      </motion.div>

      <div className="grid gap-6 lg:grid-cols-3 items-start">
        {/* Forms list */}
        <motion.div 
          variants={cardVariants}
          className="relative rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-transparent overflow-hidden backdrop-blur-sm lg:col-span-2"
          whileHover="hover"
        >
          <div className="px-4 md:px-5 py-4 border-b border-white/10 flex items-center justify-between bg-gradient-to-r from-white/5 to-transparent">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-xl bg-gradient-to-r from-blue-600/20 to-blue-500/20">
                <Mail className="w-4 h-4 md:w-5 md:h-5 text-blue-400" />
              </div>
              <h2 className="text-sm md:text-base font-semibold text-white/90">Inbound Submissions</h2>
            </div>
            <span className="text-xs px-3 py-1.5 rounded-full bg-white/10">{forms.length} unread</span>
          </div>
          
          <div className="divide-y divide-white/5">
            {forms.map((form, index) => {
              const initials = form.name
                ? form.name.split(" ").map((n: string) => n[0]).join("")
                : "?";
              const organization = form.organization || form.agency || "";
              const topic = form.subject || form.topic || "General inquiry";
              const received = form.createdAt
                ? new Date(form.createdAt).toLocaleString()
                : form.received;
              const status = form.status || "new";

              return (
                <motion.button
                  key={form.id}
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: index * 0.1 }}
                  onClick={() => setSelectedId(form.id)}
                  className={`w-full text-left px-4 md:px-5 py-4 flex flex-col gap-2 hover:bg-white/5 transition-all relative overflow-hidden
                    ${selectedId === form.id ? 'bg-gradient-to-r from-blue-600/10 to-transparent border-l-4 border-blue-500' : ''}`}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 md:w-10 md:h-10 rounded-xl bg-gradient-to-br from-slate-700 to-slate-800 flex items-center justify-center text-xs font-bold">
                        {initials}
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="font-semibold text-white/90 truncate">{form.name || 'Unknown contact'}</p>
                        <div className="flex items-center gap-2 mt-1 flex-wrap">
                          <span className="text-xs text-white/60 truncate">{organization}</span>
                          <span className={`text-[10px] px-2 py-0.5 rounded-full ${
                            status === 'new' ? 'bg-blue-500/20 text-blue-300' :
                            status === 'in-review' ? 'bg-amber-500/20 text-amber-300' :
                            'bg-emerald-500/20 text-emerald-300'
                          }`}>
                            {status}
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-xs text-white/60 whitespace-nowrap hidden sm:inline">{received}</span>
                      <span className="text-xs text-white/60 whitespace-nowrap sm:hidden">
                        {form.createdAt ? new Date(form.createdAt).toLocaleDateString() : form.received}
                      </span>
                      {status === 'new' && (
                        <motion.div
                          animate={{ scale: [1, 1.2, 1] }}
                          transition={{ duration: 1.5, repeat: Infinity }}
                          className="w-2 h-2 rounded-full bg-blue-500"
                        />
                      )}
                    </div>
                  </div>
                  
                  <div className="pl-10 md:pl-12">
                    <p className="text-sm text-white/70 truncate">{topic}</p>
                    <p className="text-xs text-white/50 truncate">{(form.message || '').substring(0, 60)}...</p>
                  </div>
                </motion.button>
              );
            })}
          </div>
        </motion.div>

        {/* Detail panel */}
        <motion.div 
          variants={cardVariants}
          className="relative rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-transparent p-4 md:p-5 space-y-4 backdrop-blur-sm"
          whileHover="hover"
        >
          <div className="flex items-center justify-between mb-2">
            <h2 className="text-base font-semibold text-white/90">Submission Details</h2>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="text-xs px-3 py-1.5 rounded-lg bg-gradient-to-r from-blue-600/20 to-blue-500/20 border border-blue-500/30 hover:border-blue-500/50 transition-all"
            >
              Mark as Read
            </motion.button>
          </div>
          
          {selected ? (
            <motion.div
              key={selected.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="space-y-5"
            >
              <div>
                <p className="text-xs uppercase tracking-wide text-white/60 mb-2">From</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-gradient-to-br from-slate-700 to-slate-800 flex items-center justify-center text-sm font-bold">
                    {selected.name
                      ? selected.name.split(' ').map((n: string) => n[0]).join('')
                      : '?'}
                  </div>
                  <div>
                    <p className="text-lg font-bold text-white">{selected.name || 'Unknown contact'}</p>
                    <p className="text-sm text-white/60">{selected.organization || selected.agency}</p>
                  </div>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <div>
                  <p className="text-xs uppercase tracking-wide text-white/60 mb-2">Email</p>
                  <motion.a 
                    href={`mailto:${selected.email}`}
                    className="text-sm text-emerald-300 hover:text-emerald-200 transition-colors truncate block"
                    whileHover={{ x: 5 }}
                  >
                    {selected.email}
                  </motion.a>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-wide text-white/60 mb-2">Phone</p>
                  <p className="text-sm text-white/80">{selected.phone || 'N/A'}</p>
                </div>
              </div>
              
              <div>
                <p className="text-xs uppercase tracking-wide text-white/60 mb-2">Topic</p>
                <motion.div 
                  className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/10"
                  whileHover={{ scale: 1.05 }}
                >
                  <span className="text-sm text-white">{selected.subject || selected.topic || 'General inquiry'}</span>
                </motion.div>
              </div>
              
              <div>
                <p className="text-xs uppercase tracking-wide text-white/60 mb-2">Message</p>
                <div className="bg-white/5 p-4 rounded-lg border border-white/10 max-h-40 overflow-y-auto">
                  <p className="text-sm text-white/80 leading-relaxed">{selected.message}</p>
                </div>
              </div>
              
              <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                <div>
                  <p className="text-xs uppercase tracking-wide text-white/60 mb-2">Received</p>
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-white/60" />
                    <span className="text-sm text-white/70">
                      {selected.createdAt ? new Date(selected.createdAt).toLocaleString() : selected.received}
                    </span>
                  </div>
                </div>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="text-xs px-3 py-1.5 rounded-lg bg-white/10 hover:bg-white/20 transition-all"
                >
                  Reply
                </motion.button>
              </div>
            </motion.div>
          ) : (
            <motion.div 
              className="text-center py-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              <Mail className="w-12 h-12 text-white/20 mx-auto mb-3" />
              <p className="text-sm text-white/70">Select a submission from the list to view details.</p>
            </motion.div>
          )}
        </motion.div>
      </div>
    </motion.div>
  );
};

export const FacilityRfpRequests = () => {
  const [requests, setRequests] = useState<any[]>([]);
  const [selectedId, setSelectedId] = useState<number | null>(null);

  useEffect(() => {
    const fetchRequests = async () => {
      try {
        const res = await fetch("http://localhost:4000/api/rfp-requests");
        if (!res.ok) return;
        const data = await res.json();
        const list = Array.isArray(data?.data) ? data.data : [];
        setRequests(list);
        if (list.length > 0) {
          setSelectedId(list[0].id);
        }
      } catch (err) {
        // keep demo data empty on error
      }
    };
    fetchRequests();
  }, []);

  const selected =
    requests.find((r) => r.id === selectedId) ||
    (requests.length > 0 ? requests[0] : null);

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="space-y-6"
    >
      {/* Header */}
      <motion.div variants={itemVariants}>
        <div className="flex items-center justify-between mb-2">
          <div>
            <h1 className="text-2xl md:text-4xl font-bold tracking-tight bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">
              RFP Requests
            </h1>
            <p className="text-sm text-white/70 max-w-2xl mt-2">
              Review RFP requests and manage documentation for facility procurement processes.
            </p>
          </div>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="hidden md:flex items-center gap-2 px-4 py-2.5 rounded-xl bg-gradient-to-r from-purple-600/20 to-pink-500/20 border border-purple-500/30 text-sm font-medium hover:border-purple-500/50 transition-all"
          >
            <Download className="w-4 h-4" />
            Export RFP Data
          </motion.button>
        </div>
      </motion.div>

      <div className="grid gap-6 lg:grid-cols-3 items-start">
        {/* Requests list */}
        <motion.div 
          variants={cardVariants}
          className="relative rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-transparent overflow-hidden backdrop-blur-sm lg:col-span-2"
          whileHover="hover"
        >
          <div className="px-4 md:px-5 py-4 border-b border-white/10 flex items-center justify-between bg-gradient-to-r from-white/5 to-transparent">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-xl bg-gradient-to-r from-purple-600/20 to-pink-500/20">
                <FileText className="w-4 h-4 md:w-5 md:h-5 text-pink-300" />
              </div>
              <h2 className="text-sm md:text-base font-semibold text-white/90">Active RFP Requests</h2>
            </div>
            <span className="text-xs px-3 py-1.5 rounded-full bg-white/10">
              {requests.length} pending
            </span>
          </div>
          
          <div className="divide-y divide-white/5">
            {requests.map((req, index) => {
              const agency = req.agency || 'Unknown agency';
              const requestedDocs = Array.isArray(req.requestedDocs)
                ? req.requestedDocs.join(', ')
                : req.requestedDocs || 'RFP packet';
              const created = req.createdAt
                ? new Date(req.createdAt).toLocaleString()
                : '';
              const status = req.status || 'new';

              return (
                <motion.button
                  key={req.id}
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: index * 0.1 }}
                  onClick={() => setSelectedId(req.id)}
                  className={`w-full text-left px-4 md:px-5 py-4 flex flex-col gap-2 hover:bg-white/5 transition-all relative overflow-hidden
                    ${selectedId === req.id ? 'bg-gradient-to-r from-purple-600/10 to-transparent border-l-4 border-purple-500' : ''}`}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 md:w-10 md:h-10 rounded-xl bg-gradient-to-br from-slate-700 to-slate-800 flex items-center justify-center text-xs font-bold">
                        {agency.charAt(0)}
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="font-semibold text-white/90 truncate">{agency}</p>
                        <div className="flex items-center gap-2 mt-1 flex-wrap">
                          <span className="text-xs text-white/60">RFP Submission</span>
                          <span className={`text-[10px] px-2 py-0.5 rounded-full ${
                            status === 'new' ? 'bg-blue-500/20 text-blue-300' :
                            status === 'in-review' ? 'bg-amber-500/20 text-amber-300' :
                            'bg-emerald-500/20 text-emerald-300'
                          }`}>
                            {status}
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-xs text-white/60 whitespace-nowrap hidden sm:inline">{created}</span>
                      <span className="text-xs text-white/60 whitespace-nowrap sm:hidden">
                        {req.createdAt ? new Date(req.createdAt).toLocaleDateString() : ''}
                      </span>
                      <motion.div
                        whileHover={{ scale: 1.2 }}
                        className={`p-1.5 rounded-lg ${selectedId === req.id ? 'bg-purple-500/20' : 'bg-white/5'}`}
                      >
                        <Eye className="w-3 h-3" />
                      </motion.div>
                    </div>
                  </div>
                  
                  <div className="pl-10 md:pl-12">
                    <p className="text-sm text-white/70">Requested docs: {requestedDocs}</p>
                    <p className="text-xs text-white/50 truncate">Contact: {req.name} ({req.email})</p>
                  </div>
                </motion.button>
              );
            })}
          </div>
        </motion.div>

        {/* Detail panel */}
        <motion.div
          variants={cardVariants}
          className="relative rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-transparent p-4 md:p-5 space-y-4 backdrop-blur-sm"
          whileHover="hover"
        >
          <div className="flex items-center justify-between mb-2">
            <h2 className="text-base font-semibold text-white/90">Request Details</h2>
          </div>
          
          {selected ? (
            <motion.div
              key={selected.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="space-y-5"
            >
              <div>
                <p className="text-xs uppercase tracking-wide text-white/60 mb-2">From</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-gradient-to-br from-slate-700 to-slate-800 flex items-center justify-center text-sm font-bold">
                    {selected.name
                      ? selected.name.split(' ').map((n: string) => n[0]).join('')
                      : '?'}
                  </div>
                  <div>
                    <p className="text-lg font-bold text-white">{selected.name || 'Unknown contact'}</p>
                    <p className="text-sm text-white/60">{selected.agency || 'Unknown agency'}</p>
                  </div>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <div>
                  <p className="text-xs uppercase tracking-wide text-white/60 mb-2">Email</p>
                  <motion.a 
                    href={`mailto:${selected.email}`}
                    className="text-sm text-emerald-300 hover:text-emerald-200 transition-colors truncate block"
                    whileHover={{ x: 5 }}
                  >
                    {selected.email}
                  </motion.a>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-wide text-white/60 mb-2">Facility Size</p>
                  <p className="text-sm text-white/80">{selected.facilitySize || 'N/A'}</p>
                </div>
              </div>
              
              <div>
                <p className="text-xs uppercase tracking-wide text-white/60 mb-2">Requested Documents</p>
                <div className="bg-white/5 p-3 rounded-lg border border-white/10">
                  <p className="text-sm text-white/80 leading-relaxed">
                    {Array.isArray(selected.requestedDocs)
                      ? selected.requestedDocs.join(', ')
                      : selected.requestedDocs || 'RFP response packet'}
                  </p>
                </div>
              </div>
              
              <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                <div>
                  <p className="text-xs uppercase tracking-wide text-white/60 mb-2">Received</p>
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-white/60" />
                    <span className="text-sm text-white/70">
                      {selected.createdAt ? new Date(selected.createdAt).toLocaleString() : ''}
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          ) : (
            <motion.div 
              className="text-center py-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              <FileText className="w-12 h-12 text-white/20 mx-auto mb-3" />
              <p className="text-sm text-white/70">Select an RFP request from the list to view details.</p>
            </motion.div>
          )}
        </motion.div>
      </div>
    </motion.div>
  );
};

export default FacilityLayout;