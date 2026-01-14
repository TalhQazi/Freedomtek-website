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
  AlertCircle
} from "lucide-react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";

const sidebarItems = [
  { id: "dashboard", label: "Dashboard", icon: LayoutDashboard, path: "/portal/facility" },
  { id: "demo-requests", label: "Demo Requests", icon: ClipboardList, path: "/portal/facility/demo-requests" },
  { id: "contact-forms", label: "Contact Forms", icon: Mail, path: "/portal/facility/contact-forms" },
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

  const getActiveId = () => {
    if (location.pathname.startsWith("/portal/facility/demo-requests")) return "demo-requests";
    if (location.pathname.startsWith("/portal/facility/contact-forms")) return "contact-forms";
    return "dashboard";
  };

  const activeId = getActiveId();

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white flex overflow-hidden">
      {/* Sidebar */}
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
        className={`fixed inset-y-0 left-0 z-50 w-72 bg-gradient-to-b from-slate-900/95 to-slate-950/95 border-r border-white/10 backdrop-blur-2xl p-5 flex flex-col gap-6
          ${sidebarOpen ? "translate-x-0" : "-translate-x-full"} 
          md:static md:translate-x-0 md:w-72 md:z-30`}
      >
        {/* Logo & Branding */}
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
          <button
            className="md:hidden p-2 rounded-xl hover:bg-white/10 transition-all"
            onClick={() => setSidebarOpen(false)}
          >
            <X className="w-4 h-4" />
          </button>
        </motion.div>

        {/* Navigation */}
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
                onClick={() => {
                  navigate(item.path);
                  setSidebarOpen(false);
                }}
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

        {/* Status & Footer */}
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
              >
                <Activity className="w-5 h-5 text-red-400" />
              </motion.div>
              <div>
                <h1 className="text-base font-bold tracking-tight">Facility Portal</h1>
                <p className="text-xs text-white/50">Real-time monitoring & management</p>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <motion.div 
              className="hidden sm:flex items-center gap-2 px-3 py-2 rounded-xl bg-white/5 hover:bg-white/10 transition-all cursor-pointer"
              whileHover={{ scale: 1.05 }}
            >
              <PhoneCall className="w-4 h-4 text-emerald-400" />
              <span className="text-xs font-medium">Support 24/7</span>
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
              className="flex items-center gap-2 px-3 py-2 rounded-xl bg-gradient-to-r from-red-600/20 to-red-500/20 border border-red-500/20"
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

// Individual screens
export const FacilityDashboardHome = () => {
  const [stats, setStats] = useState([
    { label: "Active Tablets", value: "128", trend: "+4.2%", icon: TrendingUp, color: "from-emerald-500 to-emerald-400" },
    { label: "Open Tickets", value: "6", trend: "-2", icon: AlertCircle, color: "from-amber-500 to-amber-400" },
    { label: "Today's Calls", value: "482", trend: "+12%", icon: MessageSquare, color: "from-blue-500 to-blue-400" },
    { label: "Staff Online", value: "18", trend: "+3", icon: Users, color: "from-purple-500 to-purple-400" },
  ]);

  const graphData = [
    { hour: "08", value: 20 },
    { hour: "10", value: 35 },
    { hour: "12", value: 50 },
    { hour: "14", value: 46 },
    { hour: "16", value: 60 },
    { hour: "18", value: 72 },
    { hour: "20", value: 55 },
  ];

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
            <h1 className="text-3xl md:text-4xl font-bold tracking-tight bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">
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
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {stats.map((card, index) => (
          <motion.div
            key={card.label}
            variants={cardVariants}
            custom={index}
            whileHover="hover"
            className={`relative rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-transparent p-5 flex flex-col gap-3 backdrop-blur-sm overflow-hidden`}
          >
            {/* Animated background gradient */}
            <div className={`absolute inset-0 bg-gradient-to-br ${card.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
            
            <div className="flex items-center justify-between">
              <div className="p-2.5 rounded-xl bg-white/5">
                <card.icon className="w-5 h-5" />
              </div>
              <motion.div
                className="text-xs font-medium px-2 py-1 rounded-full bg-white/10"
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 2, repeat: Infinity, delay: index * 0.2 }}
              >
                {card.trend}
              </motion.div>
            </div>
            
            <div className="space-y-1">
              <span className="text-xs uppercase tracking-wide text-white/60 font-medium">{card.label}</span>
              <div className="flex items-baseline gap-2">
                <span className="text-2xl font-bold text-white">{card.value}</span>
                <span className="text-[10px] text-white/40">units</span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Analytics row: graph + table */}
      <div className="grid gap-6 lg:grid-cols-3 items-start">
        {/* Calls graph */}
        <motion.div 
          variants={cardVariants}
          className="relative rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-transparent p-5 lg:col-span-2 backdrop-blur-sm overflow-hidden"
          whileHover="hover"
        >
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-xl bg-gradient-to-r from-red-600/20 to-red-500/20">
                <BarChart3 className="w-5 h-5 text-red-400" />
              </div>
              <div>
                <h2 className="text-base font-semibold text-white/90">Calls by Hour (Today)</h2>
                <p className="text-xs text-white/60">Real-time activity monitoring</p>
              </div>
            </div>
            <motion.div
              className="flex items-center gap-2 text-xs px-3 py-1.5 rounded-full bg-white/10 border border-white/10 cursor-pointer"
              whileHover={{ scale: 1.05 }}
            >
              <Clock className="w-3 h-3" />
              <span>Live updates</span>
            </motion.div>
          </div>

          <div className="h-48 flex items-end gap-3 mt-6">
            {graphData.map((point, index) => (
              <div key={point.hour} className="flex-1 flex flex-col items-center justify-end">
                <motion.div
                  custom={Math.max(point.value, 8)}
                  variants={graphBarVariants}
                  initial="hidden"
                  animate="visible"
                  className="w-full rounded-t-md bg-gradient-to-t from-red-600 to-red-400 shadow-lg shadow-red-500/20 relative group"
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                </motion.div>
                <span className="mt-2 text-xs text-white/60">{point.hour}h</span>
                <div className="absolute -top-8 opacity-0 group-hover:opacity-100 transition-opacity bg-slate-900 border border-white/10 px-2 py-1 rounded-lg text-xs">
                  {point.value} calls
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Recent logins */}
        <motion.div 
          variants={cardVariants}
          className="relative rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-transparent p-5 space-y-4 backdrop-blur-sm"
          whileHover="hover"
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-xl bg-gradient-to-r from-emerald-600/20 to-emerald-500/20">
                <Users className="w-5 h-5 text-emerald-400" />
              </div>
              <h2 className="text-base font-semibold text-white/90">Staff Logins</h2>
            </div>
            <div className="flex items-center gap-1 text-emerald-300 text-xs">
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="w-2 h-2 rounded-full bg-emerald-400"
              />
              <span>Active now</span>
            </div>
          </div>
          
          <div className="space-y-3">
            {[
              { name: "Lt. Carter", unit: "C-Block", time: "2 min ago", avatar: "CC" },
              { name: "Sgt. Nguyen", unit: "Control", time: "14 min ago", avatar: "SN" },
              { name: "Ofc. Rivera", unit: "Intake", time: "27 min ago", avatar: "OR" },
              { name: "Ofc. Patel", unit: "Seg", time: "43 min ago", avatar: "OP" },
            ].map((user, index) => (
              <motion.div
                key={user.name}
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: index * 0.1 }}
                className="flex items-center justify-between rounded-xl bg-white/5 px-4 py-3 hover:bg-white/10 transition-all group"
              >
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-slate-700 to-slate-800 flex items-center justify-center text-xs font-bold">
                    {user.avatar}
                  </div>
                  <div>
                    <p className="text-sm font-medium text-white">{user.name}</p>
                    <p className="text-xs text-white/50">{user.unit}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-xs text-white/60">{user.time}</span>
                  <motion.div
                    whileHover={{ x: 5 }}
                    className="opacity-0 group-hover:opacity-100 transition-opacity"
                  >
                    <ExternalLink className="w-3 h-3" />
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Activity table */}
      <motion.div 
        variants={cardVariants}
        className="relative rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-transparent overflow-hidden backdrop-blur-sm"
        whileHover="hover"
      >
        <div className="px-5 py-4 border-b border-white/10 flex items-center justify-between bg-gradient-to-r from-white/5 to-transparent">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-xl bg-gradient-to-r from-blue-600/20 to-blue-500/20">
              <Activity className="w-5 h-5 text-blue-400" />
            </div>
            <h2 className="text-base font-semibold text-white/90">Recent Activity</h2>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-xs text-white/60">Last 24 hours</span>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="text-xs px-3 py-1.5 rounded-lg bg-white/10 hover:bg-white/20 transition-all"
            >
              Filter
            </motion.button>
          </div>
        </div>
        
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-white/10">
            <thead className="bg-gradient-to-r from-white/5 to-transparent">
              <tr>
                {["Time", "Type", "Unit", "Details", "Status"].map((header, index) => (
                  <th key={header} className="px-5 py-3 text-left text-xs font-medium text-white/70 uppercase tracking-wider">
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
              {[
                {
                  time: "09:14",
                  type: "Call started",
                  unit: "C-Block",
                  details: "Tablet 23 → Approved family number",
                  status: "Completed"
                },
                {
                  time: "09:32",
                  type: "Message flagged",
                  unit: "Monitoring",
                  details: "Keyword match: legal review queue",
                  status: "Pending"
                },
                {
                  time: "10:05",
                  type: "Grievance submitted",
                  unit: "D-Block",
                  details: "Routing to supervisor for triage",
                  status: "In Progress"
                },
                {
                  time: "10:27",
                  type: "Lockdown updated",
                  unit: "Control",
                  details: "Dayroom access reduced for B-Unit",
                  status: "Completed"
                },
              ].map((row, index) => (
                <motion.tr 
                  key={row.time} 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="hover:bg-white/5 transition-colors"
                >
                  <td className="px-5 py-3 whitespace-nowrap">
                    <div className="flex items-center gap-2">
                      <Clock className="w-3 h-3 text-white/60" />
                      <span className="text-sm font-medium text-white/90">{row.time}</span>
                    </div>
                  </td>
                  <td className="px-5 py-3 whitespace-nowrap">
                    <span className="text-sm text-white/80">{row.type}</span>
                  </td>
                  <td className="px-5 py-3 whitespace-nowrap">
                    <span className="text-sm text-white/60">{row.unit}</span>
                  </td>
                  <td className="px-5 py-3">
                    <span className="text-sm text-white/80">{row.details}</span>
                  </td>
                  <td className="px-5 py-3 whitespace-nowrap">
                    <motion.span 
                      className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium ${
                        row.status === 'Completed' 
                          ? 'bg-emerald-500/20 text-emerald-300' 
                          : row.status === 'In Progress'
                          ? 'bg-amber-500/20 text-amber-300'
                          : 'bg-red-500/20 text-red-300'
                      }`}
                      whileHover={{ scale: 1.1 }}
                    >
                      {row.status}
                    </motion.span>
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>
      </motion.div>
    </motion.div>
  );
};

export const FacilityDemoRequests = () => {
  const requests = [
    {
      id: 1,
      facility: "Hillside County Jail",
      contact: "Captain Morales",
      email: "cmorales@hillside.gov",
      size: "450 beds",
      type: "Full platform demo",
      submitted: "Today • 09:18",
      notes: "Interested in messaging + voice first, commissary later phase.",
      priority: "high"
    },
    {
      id: 2,
      facility: "Riverbend DOC",
      contact: "Director Chen",
      email: "director.chen@riverbend.state.us",
      size: "1,200 beds",
      type: "Pilot in one housing unit",
      submitted: "Yesterday • 15:42",
      notes: "Needs side-by-side comparison with incumbent vendor pricing.",
      priority: "medium"
    },
    {
      id: 3,
      facility: "Northshore Detention Center",
      contact: "Major Ellis",
      email: "m.ellis@northshore.gov",
      size: "320 beds",
      type: "RFP support only",
      submitted: "2 days ago",
      notes: "Already issued RFP, wants technical appendix and security overview.",
      priority: "low"
    },
  ];

  const [selectedId, setSelectedId] = useState<number>(requests[0]?.id ?? 1);
  const selected = requests.find((r) => r.id === selectedId) ?? requests[0];

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
            <h1 className="text-3xl md:text-4xl font-bold tracking-tight bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">
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
          <div className="px-5 py-4 border-b border-white/10 flex items-center justify-between bg-gradient-to-r from-white/5 to-transparent">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-xl bg-gradient-to-r from-amber-600/20 to-amber-500/20">
                <ClipboardList className="w-5 h-5 text-amber-400" />
              </div>
              <h2 className="text-base font-semibold text-white/90">Active Requests</h2>
            </div>
            <span className="text-xs px-3 py-1.5 rounded-full bg-white/10">3 pending</span>
          </div>
          
          <div className="divide-y divide-white/5">
            {requests.map((req, index) => (
              <motion.button
                key={req.id}
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: index * 0.1 }}
                onClick={() => setSelectedId(req.id)}
                className={`w-full text-left px-5 py-4 flex flex-col gap-2 hover:bg-white/5 transition-all relative overflow-hidden
                  ${selectedId === req.id ? 'bg-gradient-to-r from-red-600/10 to-transparent border-l-4 border-red-500' : ''}`}
              >
                {/* Priority indicator */}
                <div className={`absolute left-0 top-0 bottom-0 w-1 ${
                  req.priority === 'high' ? 'bg-red-500' :
                  req.priority === 'medium' ? 'bg-amber-500' : 'bg-emerald-500'
                }`} />
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-slate-700 to-slate-800 flex items-center justify-center text-xs font-bold">
                      {req.facility.charAt(0)}
                    </div>
                    <div>
                      <p className="font-semibold text-white/90 truncate">{req.facility}</p>
                      <div className="flex items-center gap-2 mt-1">
                        <span className="text-xs text-white/60">{req.size}</span>
                        <span className={`text-[10px] px-2 py-0.5 rounded-full ${
                          req.priority === 'high' ? 'bg-red-500/20 text-red-300' :
                          req.priority === 'medium' ? 'bg-amber-500/20 text-amber-300' :
                          'bg-emerald-500/20 text-emerald-300'
                        }`}>
                          {req.priority} priority
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-xs text-white/60 whitespace-nowrap">{req.submitted}</span>
                    <motion.div
                      whileHover={{ scale: 1.2 }}
                      className={`p-1.5 rounded-lg ${selectedId === req.id ? 'bg-red-500/20' : 'bg-white/5'}`}
                    >
                      <Eye className="w-3 h-3" />
                    </motion.div>
                  </div>
                </div>
                
                <div className="pl-12">
                  <p className="text-sm text-white/70">Contact: {req.contact}</p>
                  <p className="text-xs text-white/50 truncate">{req.type}</p>
                </div>
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Detail panel */}
        <motion.div 
          variants={cardVariants}
          className="relative rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-transparent p-5 space-y-4 backdrop-blur-sm"
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
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-slate-700 to-slate-800 flex items-center justify-center text-sm font-bold">
                    {selected.facility.charAt(0)}
                  </div>
                  <div>
                    <p className="text-lg font-bold text-white">{selected.facility}</p>
                    <p className="text-sm text-white/60">{selected.size}</p>
                  </div>
                </div>
              </div>
              
              <div className="grid grid-cols-1 gap-4">
                <div>
                  <p className="text-xs uppercase tracking-wide text-white/60 mb-2">Primary Contact</p>
                  <p className="text-sm font-medium text-white">{selected.contact}</p>
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
                    <span className="text-sm text-white">{selected.type}</span>
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
                  <span className="text-sm text-white/70">{selected.submitted}</span>
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
  const forms = [
    {
      id: 1,
      name: "Warden Blake",
      email: "warden.blake@oakridge.gov",
      phone: "(207) 555-0142",
      organization: "Oakridge Correctional Center",
      topic: "RFP timeline clarification",
      received: "Today • 08:57",
      message: "We are updating our communications RFP and would like to confirm FreedomTek's implementation timelines for medium-size facilities.",
      status: "new"
    },
    {
      id: 2,
      name: "Inspector Hale",
      email: "hale@oversight-commission.us",
      phone: "(617) 555-9821",
      organization: "State Oversight Commission",
      topic: "Reporting & audit exports",
      received: "Yesterday • 16:23",
      message: "Requesting sample audit export formats and retention policies for communication logs and financial transactions.",
      status: "in-review"
    },
    {
      id: 3,
      name: "IT Director Ramos",
      email: "it.ramos@metrocorr.gov",
      phone: "(312) 555-4489",
      organization: "Metro Corrections",
      topic: "Network & security review",
      received: "3 days ago",
      message: "We'd like to schedule a technical review focused on network topology, firewall rules, and API integrations.",
      status: "responded"
    },
  ];

  const [selectedId, setSelectedId] = useState<number>(forms[0]?.id ?? 1);
  const selected = forms.find((f) => f.id === selectedId) ?? forms[0];

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
            <h1 className="text-3xl md:text-4xl font-bold tracking-tight bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">
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
          <div className="px-5 py-4 border-b border-white/10 flex items-center justify-between bg-gradient-to-r from-white/5 to-transparent">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-xl bg-gradient-to-r from-blue-600/20 to-blue-500/20">
                <Mail className="w-5 h-5 text-blue-400" />
              </div>
              <h2 className="text-base font-semibold text-white/90">Inbound Submissions</h2>
            </div>
            <span className="text-xs px-3 py-1.5 rounded-full bg-white/10">3 unread</span>
          </div>
          
          <div className="divide-y divide-white/5">
            {forms.map((form, index) => (
              <motion.button
                key={form.id}
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: index * 0.1 }}
                onClick={() => setSelectedId(form.id)}
                className={`w-full text-left px-5 py-4 flex flex-col gap-2 hover:bg-white/5 transition-all relative overflow-hidden
                  ${selectedId === form.id ? 'bg-gradient-to-r from-blue-600/10 to-transparent border-l-4 border-blue-500' : ''}`}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-slate-700 to-slate-800 flex items-center justify-center text-xs font-bold">
                      {form.name.split(' ').map(n => n[0]).join('')}
                    </div>
                    <div>
                      <p className="font-semibold text-white/90 truncate">{form.name}</p>
                      <div className="flex items-center gap-2 mt-1">
                        <span className="text-xs text-white/60">{form.organization}</span>
                        <span className={`text-[10px] px-2 py-0.5 rounded-full ${
                          form.status === 'new' ? 'bg-blue-500/20 text-blue-300' :
                          form.status === 'in-review' ? 'bg-amber-500/20 text-amber-300' :
                          'bg-emerald-500/20 text-emerald-300'
                        }`}>
                          {form.status}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-xs text-white/60 whitespace-nowrap">{form.received}</span>
                    {form.status === 'new' && (
                      <motion.div
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                        className="w-2 h-2 rounded-full bg-blue-500"
                      />
                    )}
                  </div>
                </div>
                
                <div className="pl-12">
                  <p className="text-sm text-white/70 truncate">{form.topic}</p>
                  <p className="text-xs text-white/50 truncate">{form.message.substring(0, 60)}...</p>
                </div>
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Detail panel */}
        <motion.div 
          variants={cardVariants}
          className="relative rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-transparent p-5 space-y-4 backdrop-blur-sm"
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
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-slate-700 to-slate-800 flex items-center justify-center text-sm font-bold">
                    {selected.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div>
                    <p className="text-lg font-bold text-white">{selected.name}</p>
                    <p className="text-sm text-white/60">{selected.organization}</p>
                  </div>
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-3">
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
                  <p className="text-sm text-white/80">{selected.phone}</p>
                </div>
              </div>
              
              <div>
                <p className="text-xs uppercase tracking-wide text-white/60 mb-2">Topic</p>
                <motion.div 
                  className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/10"
                  whileHover={{ scale: 1.05 }}
                >
                  <span className="text-sm text-white">{selected.topic}</span>
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
                    <span className="text-sm text-white/70">{selected.received}</span>
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

export default FacilityLayout;