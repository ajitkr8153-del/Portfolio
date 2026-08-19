export const portfolioData = {
  personal: {
    name: "Ajit Kumar",
    role: "Frontend Developer & UI/UX Craftsman",
    tagline: "Building responsive, modern, and accessible web experiences with React & modern CSS.",
    shortBio: "I am a passionate frontend developer and CS student dedicated to crafting clean, high-performance web applications that merge intuitive design with robust code.",
    college: "Indian Institute of Information Technology",
    location: "Bangalore, India",
    email: "ajit.dev.kumar@example.com",
    github: "https://github.com/ajitkumar-dev",
    linkedin: "https://linkedin.com/in/ajitkumar-dev",
    resumeUrl: "#resume", // Links to download or preview modal
    availability: "Available for Internships & Junior Roles",
    yearsOfExperience: "2+ Years",
    projectsCompleted: "15+",
    problemsSolved: "400+"
  },

  about: {
    story: [
      "Hello! I am Ajit Kumar, a Computer Science student with a strong passion for building responsive, high-performance web applications. I bridge the gap between design and clean frontend engineering.",
      "My journey started with simple HTML/CSS pages and quickly evolved into architecting full-fledged React applications with state management, modular components, and fluid animations.",
      "I love solving complex UI challenges, optimizing web performance, and constantly exploring cutting-edge web technologies to deliver exceptional user experiences."
    ],
    details: {
      studying: "B.Tech in Computer Science & Engineering",
      interests: ["Frontend Engineering", "UI/UX Design Systems", "Component Architecture", "Web Performance"],
      learning: ["Next.js App Router", "TypeScript Deep-Dive", "State Machines", "Accessibility (a11y)"],
      projectTypes: ["Interactive Web Applications", "Productivity Dashboards", "Student Portals", "Developer Tooling"],
      careerGoals: "To contribute to impactful web applications within collaborative, high-velocity engineering teams, and grow into a leading frontend architect."
    },
    highlights: [
      {
        title: "Clean Code Architect",
        description: "Writing modular, reusable, and maintainable component architectures.",
        icon: "Code2"
      },
      {
        title: "Pixel-Perfect UI/UX",
        description: "Translating Figma designs into responsive, accessible interfaces with Tailwind CSS.",
        icon: "Palette"
      },
      {
        title: "Fast Learner",
        description: "Quickly adapting to new libraries, frameworks, and modern web standards.",
        icon: "Zap"
      },
      {
        title: "Problem Solver",
        description: "Strong foundation in data structures, algorithms, and logical debugging.",
        icon: "Brain"
      }
    ]
  },

  skills: {
    categories: [
      { id: "all", label: "All Skills" },
      { id: "languages", label: "Languages" },
      { id: "frontend", label: "Frontend" },
      { id: "tools", label: "Tools & Workflow" }
    ],
    list: [
      // Languages
      { name: "JavaScript (ES6+)", category: "languages", level: "Advanced", icon: "Code", highlight: true },
      { name: "TypeScript", category: "languages", level: "Intermediate", icon: "FileCode", highlight: true },
      { name: "Python", category: "languages", level: "Proficient", icon: "Terminal", highlight: false },
      { name: "Java", category: "languages", level: "Proficient", icon: "Coffee", highlight: false },
      { name: "C++", category: "languages", level: "Intermediate", icon: "Cpu", highlight: false },
      
      // Frontend
      { name: "React.js", category: "frontend", level: "Advanced", icon: "Atom", highlight: true },
      { name: "Tailwind CSS", category: "frontend", level: "Advanced", icon: "Wind", highlight: true },
      { name: "HTML5 & Semantic Web", category: "frontend", level: "Advanced", icon: "Layout", highlight: false },
      { name: "CSS3 & Modern Animations", category: "frontend", level: "Advanced", icon: "Sparkles", highlight: false },
      { name: "Next.js", category: "frontend", level: "Intermediate", icon: "Globe", highlight: true },
      { name: "Responsive Web Design", category: "frontend", level: "Advanced", icon: "Smartphone", highlight: false },

      // Tools
      { name: "Git & Version Control", category: "tools", level: "Advanced", icon: "GitBranch", highlight: true },
      { name: "GitHub Collaboration", category: "tools", level: "Advanced", icon: "Github", highlight: true },
      { name: "VS Code", category: "tools", level: "Advanced", icon: "Monitor", highlight: false },
      { name: "Figma UI/UX", category: "tools", level: "Intermediate", icon: "Figma", highlight: true },
      { name: "Vite", category: "tools", level: "Advanced", icon: "Zap", highlight: false },
      { name: "Postman", category: "tools", level: "Intermediate", icon: "Send", highlight: false },
      { name: "Vercel & Netlify Deployment", category: "tools", level: "Proficient", icon: "Cloud", highlight: false }
    ]
  },

  projects: [
    {
      id: "devpulse",
      title: "DevPulse - Developer Workspace & Dashboard",
      subtitle: "Analytics, Task Manager & Live Code Sandbox",
      description: "A feature-rich developer command center offering real-time productivity tracking, custom widget management, and responsive code snippets preview.",
      techStack: ["React.js", "Tailwind CSS", "Lucide React", "LocalStorage API", "Vite"],
      category: "Frontend App",
      featured: true,
      githubUrl: "https://github.com/ajitkumar-dev/devpulse-workspace",
      liveUrl: "https://devpulse-demo.vercel.app",
      highlights: [
        "Interactive dark/light glassmorphic UI with animated charts",
        "Persistent task board and code snippet library",
        "100% responsive across all mobile and desktop viewports"
      ],
      previewGradient: "from-indigo-600 via-purple-600 to-pink-500"
    },
    {
      id: "campusmart",
      title: "CampusMart - Student Peer Marketplace",
      subtitle: "Campus E-Commerce & Resource Sharing",
      description: "A tailored digital marketplace built for college students to buy, sell, and exchange academic textbooks, electronics, and dorm essentials with real-time filters.",
      techStack: ["React", "Tailwind CSS", "Context API", "JavaScript ES6"],
      category: "Web Application",
      featured: true,
      githubUrl: "https://github.com/ajitkumar-dev/campus-mart",
      liveUrl: "https://campus-mart-preview.vercel.app",
      highlights: [
        "Instant multi-criteria search and price sorting",
        "Interactive product modal with direct seller contact trigger",
        "Simulated shopping cart and wishlist management"
      ],
      previewGradient: "from-emerald-500 via-teal-600 to-cyan-600"
    },
    {
      id: "algosphere",
      title: "AlgoSphere - Algorithm & Path Visualizer",
      subtitle: "Interactive Visual Learning Tool",
      description: "An educational visualizer that helps students understand complex sorting algorithms (Merge, Quick, Bubble) and graph pathfinding with real-time step control.",
      techStack: ["React", "JavaScript", "HTML5 Canvas", "Tailwind CSS"],
      category: "Educational Tool",
      featured: true,
      githubUrl: "https://github.com/ajitkumar-dev/algosphere-visualizer",
      liveUrl: "https://algosphere-visualizer.vercel.app",
      highlights: [
        "Adjustable execution speed & dynamic array randomizer",
        "Visual step-by-step element swap and comparison highlights",
        "Accompanying time & space complexity breakdowns"
      ],
      previewGradient: "from-blue-600 via-indigo-600 to-violet-700"
    },
    {
      id: "weatherwise",
      title: "WeatherWise - Climate Trends & Forecast Hub",
      subtitle: "Minimalist Weather Station UI",
      description: "A modern glassmorphism weather dashboard presenting 7-day atmospheric forecasts, air quality index, interactive temperature trends, and city search.",
      techStack: ["React.js", "Tailwind CSS", "Lucide Icons"],
      category: "Frontend UI",
      featured: false,
      githubUrl: "https://github.com/ajitkumar-dev/weatherwise-hub",
      liveUrl: "https://weatherwise-hub.vercel.app",
      highlights: [
        "Dynamic background gradients shifting with day/night weather conditions",
        "Hourly temperature timeline with clean SVG charts",
        "Fast local caching for favorite cities"
      ],
      previewGradient: "from-amber-500 via-orange-600 to-rose-600"
    }
  ],

  education: [
    {
      degree: "Bachelor of Technology in Computer Science & Engineering",
      institution: "Indian Institute of Information Technology",
      duration: "2022 - 2026 (Expected)",
      location: "Bangalore, India",
      score: "CGPA: 8.85 / 10.0",
      description: "Core coursework in Data Structures & Algorithms, Object Oriented Programming, Database Management Systems, Computer Networks, and Web Technologies.",
      achievements: [
        "Active technical lead in Campus Web Development Club",
        "Mentored 50+ junior students in foundational JavaScript and React workshops",
        "Maintained top 10% academic standing in the department"
      ]
    },
    {
      degree: "Higher Secondary Education (Class XII - Science Stream)",
      institution: "Delhi Public School",
      duration: "2020 - 2022",
      location: "India",
      score: "Score: 94.6%",
      description: "Specialized in Physics, Chemistry, Mathematics, and Computer Science (Python/C++ fundamentals).",
      achievements: [
        "School Subject Topper in Computer Science",
        "Finalist in Regional Science & Mathematics Olympiad"
      ]
    }
  ],

  achievements: [
    {
      title: "Smart India Hackathon Finalist",
      organization: "Ministry of Education / AICTE",
      date: "2024",
      description: "Developed an accessible offline-first disaster emergency portal for rapid local community response.",
      badge: "National Finalist"
    },
    {
      title: "Meta Front-End Developer Certificate",
      organization: "Meta / Coursera",
      date: "2024",
      description: "Comprehensive professional certification covering React, responsive design, version control, and UI principles.",
      badge: "Certified"
    },
    {
      title: "400+ Coding Problems Solved",
      organization: "LeetCode & HackerRank",
      date: "2023 - Present",
      description: "Earned 5-Star badge in Problem Solving with consistent practice across graphs, trees, DP, and arrays.",
      badge: "Top 15%"
    },
    {
      title: "Hacktoberfest Open Source Contributor",
      organization: "DigitalOcean & GitHub",
      date: "2023, 2024",
      description: "Successfully merged 10+ PRs across popular developer tools, documentation repos, and frontend component libraries.",
      badge: "Contributor"
    }
  ],

  navLinks: [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Education", href: "#education" },
    { name: "Contact", href: "#contact" }
  ]
};
