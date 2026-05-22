export const CATEGORY_CONFIG: Record<
  string,
  { label: string; icon: string; color: string; gradient: string }
> = {
  "python-fundamentals": {
    label: "Python Fondamental",
    icon: "🐍",
    color: "#00f5ff",
    gradient: "from-cyan-500 to-blue-600",
  },
  "ai-ml": {
    label: "IA & Machine Learning",
    icon: "🤖",
    color: "#bf5af2",
    gradient: "from-purple-500 to-pink-600",
  },
  cybersecurity: {
    label: "Cybersécurité",
    icon: "🛡️",
    color: "#ff375f",
    gradient: "from-red-500 to-rose-600",
  },
  networks: {
    label: "Réseaux",
    icon: "🌐",
    color: "#30d158",
    gradient: "from-green-500 to-emerald-600",
  },
  "data-science": {
    label: "Data Science",
    icon: "📊",
    color: "#ff9f0a",
    gradient: "from-orange-500 to-amber-600",
  },
  automation: {
    label: "Automatisation",
    icon: "⚡",
    color: "#ffd60a",
    gradient: "from-yellow-500 to-orange-600",
  },
  "web-dev": {
    label: "Web Development",
    icon: "🌍",
    color: "#0a84ff",
    gradient: "from-blue-500 to-indigo-600",
  },
  "iot-robotics": {
    label: "IoT & Robotique",
    icon: "🤖",
    color: "#64d2ff",
    gradient: "from-sky-500 to-cyan-600",
  },
  tools: {
    label: "Outils Python",
    icon: "🧰",
    color: "#ac8e68",
    gradient: "from-amber-600 to-yellow-700",
  },
};

export const LEVEL_CONFIG: Record<
  string,
  { label: string; color: string; badge: string }
> = {
  beginner: {
    label: "Débutant",
    color: "text-green-400",
    badge: "bg-green-400/10 text-green-400 border-green-400/20",
  },
  intermediate: {
    label: "Intermédiaire",
    color: "text-yellow-400",
    badge: "bg-yellow-400/10 text-yellow-400 border-yellow-400/20",
  },
  advanced: {
    label: "Avancé",
    color: "text-orange-400",
    badge: "bg-orange-400/10 text-orange-400 border-orange-400/20",
  },
  expert: {
    label: "Expert",
    color: "text-red-400",
    badge: "bg-red-400/10 text-red-400 border-red-400/20",
  },
};

export const NAV_ITEMS = [
  { href: "/", label: "Accueil", icon: "Home" },
  { href: "/dashboard", label: "Dashboard", icon: "BarChart3" },
  { href: "/courses", label: "Cours", icon: "BookOpen" },
  { href: "/playground", label: "Playground", icon: "Code" },
  { href: "/labs/ai", label: "AI Lab", icon: "Brain" },
  { href: "/labs/cyber", label: "Cyber Lab", icon: "Shield" },
  { href: "/labs/data", label: "Data Lab", icon: "Database" },
  { href: "/labs/network", label: "Network Lab", icon: "Network" },
  { href: "/tools", label: "Outils", icon: "Wrench" },
  { href: "/roadmap", label: "Roadmap", icon: "Map" },
  { href: "/assistant", label: "Assistant IA", icon: "Bot" },
  { href: "/notes", label: "Notes", icon: "StickyNote" },
  { href: "/search", label: "Recherche", icon: "Search" },
];
