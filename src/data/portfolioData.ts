import type {
  PersonalInfo,
  AboutMeData,
  SkillCategory,
  ExperienceItem,
  ProjectItem,
  EducationItem,
  AcademicAchievement,
  CertificationItem,
  SoftSkillItem,
  LanguageItem
} from '../types/portfolio';

export const personalInfo: PersonalInfo = {
  name: "Bhuvanasri S",
  shortName: "Bhuvi",
  brandName: "BHUVANASRI",
  role: "AI & Machine Learning Graduate | Full Stack Developer",
  subheading: "AI & Machine Learning Graduate | Full Stack Developer | AI Enthusiast",
  description: "Passionate about building intelligent solutions, developing scalable web applications, and transforming ideas into impactful digital experiences through AI and technology.",
  email: "bhuvanasri.aienthusiast@gmail.com",
  phone: "+91 94897 63252",
  phoneRaw: "+919489763252",
  linkedin: "https://www.linkedin.com/in/bhuvanasri-saravanan-674870258",
  github: "https://github.com/Bhuvanasri06",
  location: "Puducherry, India",
  availability: "Available for Full-Time Roles & Immediate Opportunities",
  degree: "B.Tech – Artificial Intelligence and Machine Learning",
  institution: "Manakula Vinayagar Institute of Technology, Puducherry",
  cgpa: "8.40 / 10",
  resumePath: "/Bhuvanasri_resume.pdf"
};

export const aboutMeData: AboutMeData = {
  title: "About Me",
  content: "I am an Artificial Intelligence and Machine Learning graduate from Manakula Vinayagar Institute of Technology, Puducherry, with a CGPA of 8.40/10. I have practical experience in developing machine learning models, building REST APIs, and creating responsive web applications.\n\nI have worked with Python, FastAPI, React, MongoDB, MySQL, and Natural Language Processing. I enjoy solving real-world problems through AI-driven solutions and full-stack development.",
  pillars: [
    {
      title: "AI & Machine Learning",
      description: "Developing predictive models, anomaly detection pipelines, NLP systems, and deep learning architectures for real-world tasks.",
      icon: "Brain",
      tags: ["Deep Learning", "NLP", "Computer Vision", "Anomaly Detection"]
    },
    {
      title: "Full Stack Development",
      description: "Building responsive, modern user interfaces connected to high-performance asynchronous backends and real-time protocols.",
      icon: "Code2",
      tags: ["React.js", "FastAPI", "WebSockets", "REST APIs"]
    },
    {
      title: "Problem Solving",
      description: "Transforming complex algorithmic challenges and system requirements into clean, maintainable, production-ready code.",
      icon: "Sparkles",
      tags: ["Algorithmic Design", "Clean Architecture", "Code Quality", "Security"]
    },
    {
      title: "Continuous Learning",
      description: "Actively mastering cutting-edge tools including Agentic AI, modern cloud platforms, and advanced AI frameworks.",
      icon: "Compass",
      tags: ["Agentic AI", "Google Cloud", "IIT Madras Workshops", "Research"]
    }
  ],
  stats: [
    { label: "B.Tech CGPA", value: "8.40", suffix: "/10" },
    { label: "Core Projects", value: "4", suffix: "Built" },
    { label: "Internships", value: "2", suffix: "Completed" },
    { label: "Certifications", value: "7", suffix: "Earned" }
  ]
};

export const skillCategories: SkillCategory[] = [
  {
    id: "languages",
    category: "Programming Languages",
    icon: "Code",
    description: "Core languages for algorithmic logic, system modeling, and full-stack engineering",
    skills: [
      { name: "Python", level: "Primary & Advanced", badge: "Core" },
      { name: "SQL", level: "Relational Queries & DDL", badge: "Core" },
      { name: "JavaScript", level: "ES6+ & Modern Web", badge: "Frontend" },
      { name: "HTML", level: "Semantic Markup & Accessibility", badge: "Web" },
      { name: "CSS", level: "Responsive Layouts & Animations", badge: "Styling" }
    ]
  },
  {
    id: "frontend",
    category: "Frontend Development",
    icon: "Layout",
    description: "Building interactive, performant, and accessible user interfaces",
    skills: [
      { name: "React.js", level: "Hooks, State & Component Architecture", badge: "Primary UI" }
    ]
  },
  {
    id: "ai-ml",
    category: "AI & Machine Learning",
    icon: "Cpu",
    description: "Intelligent systems, neural architectures, linguistic parsing, and visual recognition",
    skills: [
      { name: "Deep Learning", level: "CNNs, Transfer Learning, ResNet50", badge: "Advanced" },
      { name: "Natural Language Processing", level: "spaCy, NLTK, Text Analysis, PII/Spam", badge: "Specialist" },
      { name: "Computer Vision", level: "OpenCV, Frame Extraction, Detection", badge: "Applied" },
      { name: "Machine Learning", level: "Supervised, Unsupervised, Anomaly Detection", badge: "Core" }
    ]
  },
  {
    id: "analytics",
    category: "Data Analytics",
    icon: "BarChart3",
    description: "Data visualization, statistical modeling, and business intelligence",
    skills: [
      { name: "Power BI", level: "Interactive Dashboards & Reports", badge: "Analytics" },
      { name: "Excel", level: "Formulas, Data Modeling & Pivots", badge: "Analysis" }
    ]
  },
  {
    id: "frameworks",
    category: "Libraries & Frameworks",
    icon: "Boxes",
    description: "High-performance data manipulation, numeric computation, and async backends",
    skills: [
      { name: "FastAPI", level: "Async Endpoints, WebSockets, Validation", badge: "Backend API" },
      { name: "Pandas", level: "Data Preprocessing, Cleaning & Wrangling", badge: "Data" },
      { name: "NumPy", level: "Matrix Operations & Array Computations", badge: "Math" }
    ]
  },
  {
    id: "databases",
    category: "Databases",
    icon: "Database",
    description: "Relational data structures, document schemas, and persistent storage",
    skills: [
      { name: "MySQL", level: "Relational Schemas, Constraints & Queries", badge: "RDBMS" },
      { name: "MongoDB", level: "Document Collections, Aggregation & NoSQL", badge: "NoSQL" }
    ]
  },
  {
    id: "tools",
    category: "Tools & Platforms",
    icon: "Wrench",
    description: "Version control, research environments, collaboration, and visual design",
    skills: [
      { name: "Git", level: "Distributed Branching, Commits & Staging", badge: "VCS" },
      { name: "GitHub", level: "Repository Management, Pull Requests & CI", badge: "Platform" },
      { name: "Google Colab", level: "GPU/TPU Model Training & Experimentation", badge: "ML Lab" },
      { name: "Canva", level: "UI Prototyping & Visual Presentations", badge: "Design" }
    ]
  }
];

export const experienceData: ExperienceItem[] = [
  {
    id: "datatech",
    role: "Full Stack Developer Intern",
    company: "Datatech Genius",
    period: "July 2026 – October 2026",
    badge: "Full Stack",
    accentColor: "purple",
    responsibilities: [
      "Developed responsive web pages using HTML, CSS, JavaScript, and React.",
      "Built and integrated REST APIs using FastAPI.",
      "Used Python and MongoDB for backend development and data management.",
      "Implemented frontend features, form validation, and API integration.",
      "Used Git and GitHub for version control and code management."
    ],
    techStack: ["React.js", "FastAPI", "Python", "MongoDB", "JavaScript", "HTML/CSS", "Git", "GitHub"]
  },
  {
    id: "sian",
    role: "AI Developer Intern",
    company: "Sian Next Gen Technologies",
    period: "March 2026 – June 2026",
    badge: "AI & ML",
    accentColor: "blue",
    responsibilities: [
      "Developed machine learning models for data analysis.",
      "Built REST APIs using FastAPI.",
      "Worked with Python, MongoDB, and NLP."
    ],
    techStack: ["Python", "FastAPI", "MongoDB", "NLP", "Machine Learning", "Data Analysis", "REST APIs"]
  }
];

export const projectsData: ProjectItem[] = [
  {
    id: "onivah-messaging",
    title: "ONIVAH Messaging System",
    duration: "May 2026 – September 2026",
    category: "Full Stack & AI Security",
    badge: "Featured System",
    description: "Developed a secure real-time messaging platform for client-vendor communication with live chat and event-based conversations. Integrated NLP-based spam and sensitive information detection to enhance user privacy and messaging security.",
    technologies: [
      "React.js",
      "FastAPI",
      "MongoDB",
      "Prisma ORM",
      "Python",
      "WebSockets",
      "spaCy",
      "Regex",
      "JWT",
      "Cloud Storage"
    ],
    highlights: [
      "Real-time bidirectional client-vendor messaging using high-concurrency WebSockets",
      "Integrated NLP filter detecting sensitive data (PII, credentials, sensitive keys) and spam before persistence",
      "Secure role-based access control with stateless JSON Web Tokens (JWT)",
      "High-throughput MongoDB document database orchestrated with Prisma ORM",
      "Modern React frontend with optimistic UI updates and responsive event notifications"
    ],
    architecture: "ONIVAH features a responsive React.js client communicating over duplex WebSockets to an asynchronous FastAPI backend. Inbound messages pass through a custom NLP parsing pipeline (spaCy & Regex) to flag or redact sensitive information in real time prior to MongoDB storage.",
    githubUrl: "https://github.com/Bhuvanasri06",
    illustrationType: "chat-network"
  },
  {
    id: "insider-threat",
    title: "AI-Based Insider Threat Detection System",
    duration: "November 2025 – April 2026",
    category: "AI & Cybersecurity",
    badge: "IEEE Presented",
    description: "Developed a security system to identify potential insider threats by analyzing user behavior and system activities using machine learning and rule-based techniques. Implemented anomaly detection and alert generation to support organizational security.",
    technologies: [
      "Python",
      "Machine Learning",
      "Anomaly Detection",
      "Data Analytics",
      "Cybersecurity"
    ],
    highlights: [
      "Continuous user behavior analytics (UBA) monitoring login velocity, access anomalies, and file system spikes",
      "Hybrid ML model combining unsupervised anomaly detection with rule-based heuristics for low false positives",
      "Automated real-time risk scoring and instantaneous security alert dispatching",
      "Presented at the 7th IEEE-International Conference – ICSCAN (June 2026)"
    ],
    architecture: "System activity logs and audit trails are ingested, parsed, and normalized through Python data processing pipelines. Multi-feature anomaly detectors flag deviations from baseline behavioral profiles, feeding real-time alert triage matrices.",
    githubUrl: "https://github.com/Bhuvanasri06",
    illustrationType: "security-shield"
  },
  {
    id: "drug-discovery",
    title: "Accelerating Drug Discovery Using Machine Learning",
    duration: "January 2025 – April 2025",
    category: "Bioinformatics & AI",
    badge: "AI Research",
    description: "Developed an AI-driven framework for drug discovery involving target identification, molecular screening, and lead optimization. Integrated predictive modeling with bioinformatics tools.",
    technologies: [
      "Python",
      "Machine Learning",
      "NLP",
      "Cheminformatics",
      "Cloud Computing"
    ],
    highlights: [
      "High-throughput computational screening of virtual molecular candidates",
      "Quantitative structure-activity relationship (QSAR) predictive models for binding affinity",
      "Linguistic NLP representations for SMILES chemical sequence embeddings",
      "Cloud-accelerated model inference for parallel molecular candidate evaluation"
    ],
    architecture: "Bioinformatics databases and molecular structures were converted into vectorized cheminformatics fingerprints and sequence embeddings. Supervised ML regression and classification pipelines scored candidate viability to expedite lead discovery cycles.",
    githubUrl: "https://github.com/Bhuvanasri06",
    illustrationType: "molecule-dna"
  },
  {
    id: "deepfake-detection",
    title: "Deepfake Video Detection Using Transfer Learning (ResNet50)",
    duration: "July 2024 – December 2024",
    category: "Computer Vision & Deep Learning",
    badge: "Research Paper",
    description: "Built a transfer learning-based model to detect deepfake videos using convolutional neural networks (CNNs). Analyzed inconsistencies across video frames to support authenticity detection.",
    technologies: [
      "Python",
      "TensorFlow",
      "OpenCV",
      "Data Analytics"
    ],
    highlights: [
      "Automated video frame splitting and facial region-of-interest (ROI) cropping with OpenCV",
      "Fine-tuned ResNet50 deep convolutional network to identify subtle generative artifacts and spatial blending errors",
      "Multi-frame temporal consistency aggregation for robust authenticity verification",
      "Research paper presented at the 2nd International Conference on Emerging Technologies (ACET, Feb 2025)"
    ],
    architecture: "Video streams are broken down into sequential frames, face crops are aligned and normalized, then passed through deep residual feature extractors (ResNet50) with customized classification heads that flag synthetic manipulation signatures.",
    githubUrl: "https://github.com/Bhuvanasri06",
    illustrationType: "vision-scan"
  }
];

export const educationData: EducationItem[] = [
  {
    degree: "B.Tech – Artificial Intelligence and Machine Learning",
    institution: "Manakula Vinayagar Institute of Technology, Puducherry",
    period: "2022 – 2026",
    score: "CGPA: 8.40 / 10",
    status: "Graduated",
    highlights: [
      "Specialized in Deep Learning, NLP, Data Structures, Machine Learning, and Web Architecture",
      "Active participant in technical symposiums, research conferences, and AI workshops",
      "Academic excellence with consistent high performance throughout semesters"
    ]
  },
  {
    degree: "Higher Secondary Certificate (HSC)",
    institution: "Thiruvalluvar Government Girls Higher Secondary School",
    period: "2020 – 2022",
    score: "Percentage: 80.5%",
    status: "Completed",
    highlights: [
      "Mathematics, Physics, Chemistry, and Computer Science foundation",
      "Strong analytical foundation and scientific inquiry"
    ]
  },
  {
    degree: "Secondary School Leaving Certificate (SSLC)",
    institution: "Kannagi Government Girls Higher Secondary School",
    period: "2019 – 2020",
    score: "Percentage: 75%",
    status: "Completed",
    highlights: [
      "Completed secondary curriculum with distinction in Science and Mathematics"
    ]
  }
];

export const academicAchievements: AcademicAchievement[] = [
  {
    title: "Conference Paper: Deepfake Video Detection",
    event: "2nd International Conference on Emerging Technologies (ACET)",
    date: "February 2025",
    description: "Presented research paper detailing transfer learning architectures using ResNet50 for synthetic face manipulation detection across video frames."
  },
  {
    title: "IEEE Conference Paper: AI-Based Insider Threat Detection",
    event: "7th IEEE-International Conference – ICSCAN",
    date: "June 2026",
    description: "Presented research on user behavior anomaly detection and security heuristics to identify insider threats in corporate IT systems."
  }
];

export const certificationsData: CertificationItem[] = [
  {
    title: "Research Paper Presentation – Deepfake Video Detection",
    issuer: "ACET",
    date: "October 2024",
    category: "Research & Publication",
    icon: "FileText",
    color: "purple"
  },
  {
    title: "Deep Learning Workshop",
    issuer: "IIT Madras",
    date: "February 2024",
    category: "Workshop & Deep Learning",
    icon: "Cpu",
    color: "blue"
  },
  {
    title: "Testing of Electronic Devices",
    issuer: "Raja Electronics Institute",
    date: "March 2024",
    category: "Hardware & Electronics",
    icon: "CircuitBoard",
    color: "violet"
  },
  {
    title: "Agentic AI",
    issuer: "Eyesense AI / Google Cloud",
    date: "September 2024",
    category: "Autonomous AI Agents",
    icon: "Bot",
    color: "purple"
  },
  {
    title: "Data Science Course",
    issuer: "Wipro",
    date: "September 2025",
    category: "Data Science & Analytics",
    icon: "LineChart",
    color: "blue"
  },
  {
    title: "Artificial Intelligence Course",
    issuer: "IBM SkillsBuild",
    date: "November 2025",
    category: "AI Fundamentals & Ethics",
    icon: "Sparkles",
    color: "violet"
  },
  {
    title: "Java Full Stack Developer",
    issuer: "TNS India Foundation / Capgemini",
    date: "2025 – 2026",
    category: "Full Stack Engineering",
    icon: "Code2",
    color: "purple"
  }
];

export const softSkillsData: SoftSkillItem[] = [
  { name: "Teamwork", desc: "Collaborating seamlessly across cross-functional teams and developer pods", icon: "Users" },
  { name: "Analytical Thinking", desc: "Deconstructing complex datasets and system edge cases into systematic solutions", icon: "Brain" },
  { name: "Problem-Solving", desc: "Crafting efficient algorithms and troubleshooting full-stack issues quickly", icon: "Lightbulb" },
  { name: "Adaptability", desc: "Rapidly mastering new AI frameworks, modern stacks, and evolving requirements", icon: "RefreshCw" },
  { name: "Leadership", desc: "Guiding project initiatives, mentoring peers, and taking ownership of delivery", icon: "ShieldCheck" },
  { name: "Time Management", desc: "Balancing academic rigor, research presentations, and internship deliverables", icon: "Clock" }
];

export const languagesData: LanguageItem[] = [
  { language: "English", proficiency: "Fluent", level: "Professional & Academic Working Proficiency", badge: "Fluent" },
  { language: "Tamil", proficiency: "Native", level: "Native Proficiency", badge: "Native" }
];
