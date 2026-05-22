import { Course } from "@/types";

export const courses: Course[] = [
  // ========================
  // PYTHON FONDAMENTAL
  // ========================
  {
    id: "python-basics",
    title: "Python : Les Fondamentaux Absolus",
    description:
      "Maîtrisez Python de zéro à héros. Variables, types, structures de contrôle, fonctions, et bien plus. Le point de départ indispensable.",
    icon: "🐍",
    category: "python-fundamentals",
    level: "beginner",
    duration: 1200,
    tags: ["python", "basics", "variables", "functions", "loops"],
    color: "#00f5ff",
    progress: 45,
    totalLessons: 25,
    completedLessons: 11,
    lessons: [
      {
        id: "py-basics-1",
        title: "Introduction à Python & Installation",
        description: "Découvrez Python, son histoire, et configurez votre environnement de développement complet.",
        duration: 45,
        type: "theory",
        completed: true,
        order: 1,
        content: `# Introduction à Python

Python est un langage de programmation de haut niveau, interprété et polyvalent, créé par Guido van Rossum en 1991.

## Pourquoi Python ?

- **Simplicité** : Syntaxe claire et lisible
- **Polyvalence** : Web, Data Science, IA, Automatisation, Cybersécurité
- **Communauté** : L'une des plus grandes communautés au monde
- **Bibliothèques** : Plus de 400 000 packages sur PyPI

## Installation

### Sur Linux/macOS
\`\`\`bash
# Vérifier si Python est installé
python3 --version

# Installation via pyenv (recommandé)
curl https://pyenv.run | bash
pyenv install 3.12
pyenv global 3.12
\`\`\`

### Environnement virtuel
\`\`\`bash
python -m venv mon_projet
source mon_projet/bin/activate  # Linux/macOS
\`\`\`

## Premier programme
\`\`\`python
print("Hello, Python Mastery! 🐍")
\`\`\`

## L'interpréteur interactif
\`\`\`python
>>> 2 + 2
4
>>> "Python" * 3
'PythonPythonPython'
>>> import this  # Le Zen de Python
\`\`\``,
        codeExamples: [
          {
            id: "ex1",
            title: "Hello World",
            code: 'print("Hello, Python Mastery! 🐍")\nprint(f"Python version: {__import__(\'sys\').version}")',
            language: "python",
            explanation: "Le programme le plus simple en Python",
          },
        ],
        exercises: [
          {
            id: "ex-py-1",
            title: "Premier Script",
            description: "Créez un script qui affiche votre nom et la version de Python.",
            difficulty: "beginner",
            starterCode: '# Afficher votre nom\n# Afficher la version de Python\nimport sys\n\n# Votre code ici',
            solution: 'import sys\nprint("Mon nom est [Votre Nom]")\nprint(f"Python version: {sys.version}")',
            tests: 'assert "sys.version" in open(__file__).read()',
            hints: ["Utilisez la fonction print()", "Importez le module sys"],
          },
        ],
      },
      {
        id: "py-basics-2",
        title: "Variables & Types de Données",
        description: "Comprenez les types fondamentaux : int, float, str, bool, None et le typage dynamique.",
        duration: 60,
        type: "theory",
        completed: true,
        order: 2,
        content: `# Variables et Types de Données

## Déclaration de variables
Python utilise le typage dynamique — pas besoin de déclarer le type.

\`\`\`python
nom = "Python"          # str
version = 3.12          # float
annee = 1991            # int
est_genial = True       # bool
rien = None             # NoneType
\`\`\`

## Types numériques
\`\`\`python
entier = 42
flottant = 3.14159
complexe = 3 + 4j
grand_nombre = 1_000_000_000  # Underscore pour lisibilité

# Opérations
print(10 / 3)   # 3.333... (division flottante)
print(10 // 3)  # 3 (division entière)
print(10 % 3)   # 1 (modulo)
print(2 ** 10)  # 1024 (puissance)
\`\`\`

## Strings avancés
\`\`\`python
# F-strings (Python 3.6+)
nom = "World"
print(f"Hello, {nom}!")
print(f"{2**10 = }")  # Debug format: 2**10 = 1024

# Multi-line
texte = """
Ceci est un texte
sur plusieurs lignes
"""

# Méthodes utiles
"python".upper()        # PYTHON
"  spaces  ".strip()    # spaces
"a,b,c".split(",")     # ['a', 'b', 'c']
"-".join(["a","b","c"]) # a-b-c
\`\`\``,
        codeExamples: [],
        exercises: [],
      },
      {
        id: "py-basics-3",
        title: "Structures de Contrôle",
        description: "if/elif/else, boucles for et while, compréhensions de listes.",
        duration: 55,
        type: "practice",
        completed: true,
        order: 3,
        content: `# Structures de Contrôle

## Conditions
\`\`\`python
age = 25
if age < 18:
    print("Mineur")
elif age < 65:
    print("Adulte")
else:
    print("Senior")

# Ternaire
status = "majeur" if age >= 18 else "mineur"

# Match/Case (Python 3.10+)
match status:
    case "majeur":
        print("Accès autorisé")
    case "mineur":
        print("Accès restreint")
    case _:
        print("Inconnu")
\`\`\`

## Boucles
\`\`\`python
# For
for i in range(10):
    print(i)

for lettre in "Python":
    print(lettre)

# While
compteur = 0
while compteur < 5:
    compteur += 1

# Compréhensions de listes
carres = [x**2 for x in range(10)]
pairs = [x for x in range(100) if x % 2 == 0]
matrice = [[i*j for j in range(5)] for i in range(5)]
\`\`\``,
        codeExamples: [],
        exercises: [],
      },
    ],
  },
  {
    id: "python-oop",
    title: "POO Avancée en Python",
    description:
      "Classes, héritage, métaclasses, descripteurs, protocoles, design patterns. Maîtrisez l'orienté objet comme un expert.",
    icon: "🏗️",
    category: "python-fundamentals",
    level: "advanced",
    duration: 900,
    tags: ["oop", "classes", "metaclasses", "patterns", "protocols"],
    color: "#00f5ff",
    progress: 20,
    totalLessons: 20,
    completedLessons: 4,
    lessons: [],
  },
  {
    id: "python-async",
    title: "Python Asynchrone & Concurrence",
    description:
      "async/await, asyncio, multithreading, multiprocessing, GIL. Performances maximales pour vos applications.",
    icon: "⚡",
    category: "python-fundamentals",
    level: "advanced",
    duration: 720,
    tags: ["async", "asyncio", "threading", "multiprocessing", "concurrency"],
    color: "#00f5ff",
    progress: 0,
    totalLessons: 18,
    completedLessons: 0,
    lessons: [],
  },
  {
    id: "python-advanced",
    title: "Python Avancé : Techniques d'Expert",
    description:
      "Decorators, generators, context managers, descriptors, memory management, profiling, optimization.",
    icon: "🔥",
    category: "python-fundamentals",
    level: "expert",
    duration: 960,
    tags: ["decorators", "generators", "optimization", "profiling"],
    color: "#00f5ff",
    progress: 0,
    totalLessons: 22,
    completedLessons: 0,
    lessons: [],
  },
  {
    id: "python-testing",
    title: "Testing & Qualité du Code Python",
    description:
      "pytest, unittest, TDD, BDD, mocking, coverage, CI/CD. Écrivez du code fiable et maintenable.",
    icon: "🧪",
    category: "python-fundamentals",
    level: "intermediate",
    duration: 540,
    tags: ["testing", "pytest", "tdd", "quality", "ci-cd"],
    color: "#00f5ff",
    progress: 0,
    totalLessons: 15,
    completedLessons: 0,
    lessons: [],
  },
  {
    id: "design-patterns",
    title: "Design Patterns en Python",
    description:
      "Les 23 patterns GoF + patterns modernes Python. Singleton, Factory, Observer, Strategy, et plus encore.",
    icon: "🏛️",
    category: "python-fundamentals",
    level: "advanced",
    duration: 780,
    tags: ["design-patterns", "architecture", "solid", "clean-code"],
    color: "#00f5ff",
    progress: 0,
    totalLessons: 24,
    completedLessons: 0,
    lessons: [],
  },

  // ========================
  // IA & MACHINE LEARNING
  // ========================
  {
    id: "math-for-ai",
    title: "Mathématiques pour l'IA",
    description:
      "Algèbre linéaire, calcul, probabilités, statistiques. Les fondations mathématiques essentielles pour l'IA.",
    icon: "📐",
    category: "ai-ml",
    level: "intermediate",
    duration: 1080,
    tags: ["math", "linear-algebra", "calculus", "probability", "statistics"],
    color: "#bf5af2",
    progress: 30,
    totalLessons: 28,
    completedLessons: 8,
    lessons: [],
  },
  {
    id: "machine-learning",
    title: "Machine Learning Complet",
    description:
      "Scikit-learn, régression, classification, clustering, ensemble methods, feature engineering. Du concept au déploiement.",
    icon: "🧠",
    category: "ai-ml",
    level: "intermediate",
    duration: 1440,
    tags: ["ml", "scikit-learn", "regression", "classification", "clustering"],
    color: "#bf5af2",
    progress: 15,
    totalLessons: 35,
    completedLessons: 5,
    lessons: [],
  },
  {
    id: "deep-learning",
    title: "Deep Learning avec PyTorch",
    description:
      "Réseaux de neurones, CNN, RNN, Transformers, GANs. Construisez des modèles deep learning de pointe.",
    icon: "🔮",
    category: "ai-ml",
    level: "advanced",
    duration: 1800,
    tags: ["deep-learning", "pytorch", "cnn", "rnn", "transformers", "gan"],
    color: "#bf5af2",
    progress: 0,
    totalLessons: 40,
    completedLessons: 0,
    lessons: [],
  },
  {
    id: "llms-mastery",
    title: "LLMs & Transformers : Maîtrise Totale",
    description:
      "GPT, BERT, LLaMA, fine-tuning, RLHF, quantization, deployment. Devenez expert en grands modèles de langage.",
    icon: "💬",
    category: "ai-ml",
    level: "expert",
    duration: 1200,
    tags: ["llm", "gpt", "transformers", "fine-tuning", "rlhf"],
    color: "#bf5af2",
    progress: 0,
    totalLessons: 30,
    completedLessons: 0,
    lessons: [],
  },
  {
    id: "rag-systems",
    title: "RAG & Vector Databases",
    description:
      "Retrieval Augmented Generation, embeddings, ChromaDB, FAISS, LangChain, LlamaIndex. Construisez des systèmes RAG production-ready.",
    icon: "🔍",
    category: "ai-ml",
    level: "advanced",
    duration: 840,
    tags: ["rag", "embeddings", "chromadb", "faiss", "langchain"],
    color: "#bf5af2",
    progress: 0,
    totalLessons: 22,
    completedLessons: 0,
    lessons: [],
  },
  {
    id: "ai-agents",
    title: "Agents IA Autonomes",
    description:
      "CrewAI, AutoGen, LangGraph, agents multi-modaux, chaînes de raisonnement, outils personnalisés. L'avenir de l'IA.",
    icon: "🤖",
    category: "ai-ml",
    level: "expert",
    duration: 960,
    tags: ["agents", "crewai", "autogen", "langchain", "autonomous"],
    color: "#bf5af2",
    progress: 0,
    totalLessons: 25,
    completedLessons: 0,
    lessons: [],
  },
  {
    id: "computer-vision",
    title: "Computer Vision avec Python",
    description:
      "OpenCV, détection d'objets, segmentation, OCR, vision embarquée. Faites voir vos machines.",
    icon: "👁️",
    category: "ai-ml",
    level: "advanced",
    duration: 720,
    tags: ["opencv", "computer-vision", "detection", "segmentation"],
    color: "#bf5af2",
    progress: 0,
    totalLessons: 20,
    completedLessons: 0,
    lessons: [],
  },
  {
    id: "nlp-mastery",
    title: "NLP : Traitement du Langage Naturel",
    description:
      "spaCy, NLTK, Transformers, sentiment analysis, NER, text generation. Maîtrisez le NLP moderne.",
    icon: "📝",
    category: "ai-ml",
    level: "advanced",
    duration: 840,
    tags: ["nlp", "spacy", "nltk", "transformers", "sentiment"],
    color: "#bf5af2",
    progress: 0,
    totalLessons: 22,
    completedLessons: 0,
    lessons: [],
  },

  // ========================
  // CYBERSÉCURITÉ
  // ========================
  {
    id: "cyber-fundamentals",
    title: "Fondamentaux de la Cybersécurité",
    description:
      "CIA triad, cryptographie, authentification, sécurité réseau. Les bases indispensables.",
    icon: "🔐",
    category: "cybersecurity",
    level: "beginner",
    duration: 600,
    tags: ["security", "cia", "cryptography", "authentication"],
    color: "#ff375f",
    progress: 60,
    totalLessons: 18,
    completedLessons: 11,
    lessons: [],
  },
  {
    id: "pentesting",
    title: "Pentesting avec Python",
    description:
      "Reconnaissance, scanning, exploitation, post-exploitation. Outils : Scapy, Nmap, pwntools, Impacket.",
    icon: "⚔️",
    category: "cybersecurity",
    level: "advanced",
    duration: 1440,
    tags: ["pentesting", "exploitation", "scapy", "nmap", "pwntools"],
    color: "#ff375f",
    progress: 10,
    totalLessons: 35,
    completedLessons: 3,
    lessons: [],
  },
  {
    id: "web-hacking",
    title: "Web Hacking & Bug Bounty",
    description:
      "XSS, SQLi, SSRF, CSRF, IDOR, RCE. Apprenez à trouver et exploiter les vulnérabilités web de manière éthique.",
    icon: "🕷️",
    category: "cybersecurity",
    level: "advanced",
    duration: 1200,
    tags: ["web-hacking", "xss", "sqli", "ssrf", "bug-bounty"],
    color: "#ff375f",
    progress: 0,
    totalLessons: 30,
    completedLessons: 0,
    lessons: [],
  },
  {
    id: "malware-analysis",
    title: "Analyse de Malware & Reverse Engineering",
    description:
      "Analyse statique/dynamique, désobfuscation, unpacking, IoC extraction. Devenez analyste malware.",
    icon: "🦠",
    category: "cybersecurity",
    level: "expert",
    duration: 1080,
    tags: ["malware", "reverse-engineering", "analysis", "forensic"],
    color: "#ff375f",
    progress: 0,
    totalLessons: 28,
    completedLessons: 0,
    lessons: [],
  },
  {
    id: "blue-team",
    title: "Blue Team & SOC Analyst",
    description:
      "SIEM, détection d'intrusion, threat hunting, incident response, forensic. Défendez les systèmes.",
    icon: "🛡️",
    category: "cybersecurity",
    level: "advanced",
    duration: 960,
    tags: ["blue-team", "soc", "siem", "forensic", "incident-response"],
    color: "#ff375f",
    progress: 0,
    totalLessons: 25,
    completedLessons: 0,
    lessons: [],
  },
  {
    id: "osint",
    title: "OSINT avec Python",
    description:
      "Reconnaissance open source, scraping d'informations, analyse de réseaux sociaux, géolocalisation. Techniques OSINT avancées.",
    icon: "🔎",
    category: "cybersecurity",
    level: "intermediate",
    duration: 720,
    tags: ["osint", "reconnaissance", "social-engineering", "scraping"],
    color: "#ff375f",
    progress: 0,
    totalLessons: 20,
    completedLessons: 0,
    lessons: [],
  },
  {
    id: "cryptography",
    title: "Cryptographie Appliquée en Python",
    description:
      "AES, RSA, ECC, hashing, signatures, TLS, blockchain basics. Implémentez et comprenez la crypto.",
    icon: "🔑",
    category: "cybersecurity",
    level: "advanced",
    duration: 840,
    tags: ["cryptography", "aes", "rsa", "hashing", "tls"],
    color: "#ff375f",
    progress: 0,
    totalLessons: 22,
    completedLessons: 0,
    lessons: [],
  },

  // ========================
  // RÉSEAUX
  // ========================
  {
    id: "network-fundamentals",
    title: "Réseaux Informatiques : Fondamentaux",
    description:
      "Modèle OSI, TCP/IP, DNS, DHCP, HTTP/HTTPS. Comprenez le fonctionnement d'Internet.",
    icon: "🌐",
    category: "networks",
    level: "beginner",
    duration: 720,
    tags: ["networking", "osi", "tcp-ip", "dns", "http"],
    color: "#30d158",
    progress: 40,
    totalLessons: 20,
    completedLessons: 8,
    lessons: [],
  },
  {
    id: "python-networking",
    title: "Programmation Réseau en Python",
    description:
      "Sockets, clients/serveurs TCP/UDP, protocoles personnalisés, programmation réseau avancée.",
    icon: "🔌",
    category: "networks",
    level: "intermediate",
    duration: 840,
    tags: ["sockets", "tcp", "udp", "networking", "protocols"],
    color: "#30d158",
    progress: 0,
    totalLessons: 22,
    completedLessons: 0,
    lessons: [],
  },
  {
    id: "packet-analysis",
    title: "Analyse de Paquets & Wireshark",
    description:
      "Capture de paquets, analyse de trafic, Scapy, détection d'anomalies réseau.",
    icon: "📡",
    category: "networks",
    level: "advanced",
    duration: 600,
    tags: ["wireshark", "scapy", "packet-analysis", "traffic"],
    color: "#30d158",
    progress: 0,
    totalLessons: 16,
    completedLessons: 0,
    lessons: [],
  },
  {
    id: "network-security",
    title: "Sécurité Réseau & Firewalls",
    description:
      "VPN, VLAN, firewalls, IDS/IPS, hardening réseau. Sécurisez les infrastructures.",
    icon: "🔒",
    category: "networks",
    level: "advanced",
    duration: 720,
    tags: ["firewall", "vpn", "vlan", "ids", "ips"],
    color: "#30d158",
    progress: 0,
    totalLessons: 18,
    completedLessons: 0,
    lessons: [],
  },

  // ========================
  // DATA SCIENCE
  // ========================
  {
    id: "pandas-mastery",
    title: "Pandas : Maîtrise Complète",
    description:
      "DataFrames, nettoyage, transformation, agrégation, time series, performance. Le couteau suisse du data scientist.",
    icon: "🐼",
    category: "data-science",
    level: "intermediate",
    duration: 960,
    tags: ["pandas", "dataframe", "data-cleaning", "analysis"],
    color: "#ff9f0a",
    progress: 25,
    totalLessons: 24,
    completedLessons: 6,
    lessons: [],
  },
  {
    id: "data-visualization",
    title: "Visualisation de Données",
    description:
      "Matplotlib, Seaborn, Plotly, dashboards interactifs. Racontez des histoires avec vos données.",
    icon: "📈",
    category: "data-science",
    level: "intermediate",
    duration: 720,
    tags: ["matplotlib", "seaborn", "plotly", "visualization", "dashboards"],
    color: "#ff9f0a",
    progress: 0,
    totalLessons: 20,
    completedLessons: 0,
    lessons: [],
  },
  {
    id: "data-engineering",
    title: "Data Engineering avec Python",
    description:
      "ETL, pipelines, Apache Airflow, dbt, data lakes, data warehousing. Construisez des pipelines robustes.",
    icon: "🔧",
    category: "data-science",
    level: "advanced",
    duration: 1080,
    tags: ["etl", "airflow", "pipeline", "data-engineering"],
    color: "#ff9f0a",
    progress: 0,
    totalLessons: 28,
    completedLessons: 0,
    lessons: [],
  },
  {
    id: "numpy-polars",
    title: "NumPy & Polars : Performance Maximale",
    description:
      "Calcul numérique haute performance, vectorisation, Polars pour le big data. Allez au-delà de Pandas.",
    icon: "⚙️",
    category: "data-science",
    level: "advanced",
    duration: 600,
    tags: ["numpy", "polars", "performance", "vectorization"],
    color: "#ff9f0a",
    progress: 0,
    totalLessons: 16,
    completedLessons: 0,
    lessons: [],
  },

  // ========================
  // AUTOMATISATION
  // ========================
  {
    id: "web-scraping",
    title: "Web Scraping Professionnel",
    description:
      "BeautifulSoup, Scrapy, Playwright, Selenium. Extraction de données à grande échelle.",
    icon: "🕸️",
    category: "automation",
    level: "intermediate",
    duration: 840,
    tags: ["scraping", "beautifulsoup", "scrapy", "selenium", "playwright"],
    color: "#ffd60a",
    progress: 35,
    totalLessons: 22,
    completedLessons: 8,
    lessons: [],
  },
  {
    id: "automation-bots",
    title: "Bots & Automatisation",
    description:
      "Bots Discord, Telegram, Twitter. Automatisation de tâches, workflows, cron jobs.",
    icon: "🤖",
    category: "automation",
    level: "intermediate",
    duration: 720,
    tags: ["bots", "discord", "telegram", "automation", "workflows"],
    color: "#ffd60a",
    progress: 0,
    totalLessons: 20,
    completedLessons: 0,
    lessons: [],
  },
  {
    id: "api-integration",
    title: "Intégration d'APIs",
    description:
      "REST, GraphQL, OAuth, rate limiting, webhooks. Connectez vos applications au monde.",
    icon: "🔗",
    category: "automation",
    level: "intermediate",
    duration: 600,
    tags: ["api", "rest", "graphql", "oauth", "webhooks"],
    color: "#ffd60a",
    progress: 0,
    totalLessons: 16,
    completedLessons: 0,
    lessons: [],
  },

  // ========================
  // WEB DEVELOPMENT
  // ========================
  {
    id: "fastapi-mastery",
    title: "FastAPI : Le Framework Moderne",
    description:
      "APIs REST, WebSockets, authentification, tests, documentation automatique, déploiement. FastAPI de A à Z.",
    icon: "⚡",
    category: "web-dev",
    level: "intermediate",
    duration: 1080,
    tags: ["fastapi", "api", "rest", "websocket", "async"],
    color: "#0a84ff",
    progress: 50,
    totalLessons: 28,
    completedLessons: 14,
    lessons: [],
  },
  {
    id: "django-mastery",
    title: "Django : Le Framework Full-Stack",
    description:
      "ORM, vues, templates, authentification, admin, REST framework, channels. Construisez des applications web complètes.",
    icon: "🎸",
    category: "web-dev",
    level: "intermediate",
    duration: 1440,
    tags: ["django", "orm", "web", "fullstack"],
    color: "#0a84ff",
    progress: 0,
    totalLessons: 35,
    completedLessons: 0,
    lessons: [],
  },
  {
    id: "microservices",
    title: "Architecture Microservices",
    description:
      "Docker, Kubernetes, message queues, service discovery, API gateway. Architecture scalable moderne.",
    icon: "🏗️",
    category: "web-dev",
    level: "expert",
    duration: 960,
    tags: ["microservices", "docker", "kubernetes", "architecture"],
    color: "#0a84ff",
    progress: 0,
    totalLessons: 25,
    completedLessons: 0,
    lessons: [],
  },

  // ========================
  // IOT & ROBOTIQUE
  // ========================
  {
    id: "iot-raspberry",
    title: "IoT avec Raspberry Pi & Python",
    description:
      "GPIO, capteurs, MQTT, dashboards IoT, automatisation hardware. Connectez le monde physique.",
    icon: "🍓",
    category: "iot-robotics",
    level: "intermediate",
    duration: 840,
    tags: ["iot", "raspberry-pi", "mqtt", "sensors", "gpio"],
    color: "#64d2ff",
    progress: 0,
    totalLessons: 22,
    completedLessons: 0,
    lessons: [],
  },
  {
    id: "robotics-python",
    title: "Robotique avec Python",
    description:
      "ROS, contrôle de moteurs, vision embarquée, navigation autonome. Programmez des robots.",
    icon: "🦾",
    category: "iot-robotics",
    level: "advanced",
    duration: 1080,
    tags: ["robotics", "ros", "motors", "navigation", "vision"],
    color: "#64d2ff",
    progress: 0,
    totalLessons: 28,
    completedLessons: 0,
    lessons: [],
  },
];

export const getCoursesByCategory = (category: string): Course[] =>
  courses.filter((c) => c.category === category);

export const getCourseById = (id: string): Course | undefined =>
  courses.find((c) => c.id === id);

export const getTotalProgress = (): number => {
  const total = courses.reduce((acc, c) => acc + c.totalLessons, 0);
  const completed = courses.reduce((acc, c) => acc + c.completedLessons, 0);
  return total > 0 ? Math.round((completed / total) * 100) : 0;
};
