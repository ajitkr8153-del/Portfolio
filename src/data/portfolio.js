export const portfolioData = {
  personal: {
    name: "Ajit Kumar",
    role: "Software & Web Developer",
    tagline: "Crafting scalable web applications, clean code architectures, and modern UI/UX experiences.",
    shortBio: "Passionate developer skilled in C++, JavaScript, Web Development, and Data Structures & Algorithms. Focused on building responsive, high-performance software with intuitive user interfaces.",
    college: "Indian Institute of Information Technology",
    location: "India",
    email: "ajitkr8153@gmail.com",
    phone: "+91 8539876974",
    avatar: "https://i.pinimg.com/736x/03/eb/d6/03ebd625cc0b9d636256ecc44c0ea324.jpg",
    github: "https://github.com/ajitkr8153-del",
    linkedin: "https://linkedin.com/in/ajitkumar-dev",
    resumeUrl: "#resume",
    availability: "Open for Opportunities & Collaborations",
    yearsOfExperience: "2+ Years",
    projectsCompleted: "15+",
    problemsSolved: "400+",
    spokenLanguages: ["English", "Hindi"]
  },

  about: {
    story: [
      "Hello! I am Ajit Kumar, a passionate software developer and programmer with a strong foundation in C++, modern JavaScript, and web technologies.",
      "I specialize in full-cycle web development and UI/UX design, transforming algorithmic problem-solving skills and creative concepts into fast, responsive, and user-centric web applications.",
      "With strong expertise in Version Control (Git & GitHub) and Data Structures & Algorithms, I continuously refine my coding practices to write clean, modular, and maintainable software."
    ],
    details: {
      studying: "Computer Science & Engineering",
      interests: [
        "Software Development",
        "Web Development",
        "Data Structures & Algorithms",
        "UI/UX & Graphic Design",
        "Version Control"
      ],
      spokenLanguages: ["English", "Hindi"],
      learning: ["Advanced Algorithms", "Next.js & React Ecosystem", "System Design Fundamentals"],
      projectTypes: ["Web Applications", "Interactive Dashboards", "Algorithmic Tools", "UI Design Systems"],
      careerGoals: "To engineer scalable, impactful software solutions in high-growth technology environments while advancing my expertise in full-stack architecture."
    },
    expertise: [
      {
        title: "Software Development",
        description: "Designing structured software solutions with solid architectural principles.",
        icon: "Code2"
      },
      {
        title: "Web Development",
        description: "Building responsive, modern, and high-performance interfaces using HTML, CSS, JavaScript, and React.",
        icon: "Globe"
      },
      {
        title: "Programming & DSA",
        description: "Robust foundation in C++, algorithmic thinking, and efficient problem solving.",
        icon: "Brain"
      },
      {
        title: "UI/UX & Graphic Design",
        description: "Crafting intuitive layouts, visual harmony, and engaging interactive experiences.",
        icon: "Palette"
      },
      {
        title: "Version Control",
        description: "Proficient Git and GitHub workflows for seamless collaboration and code management.",
        icon: "GitBranch"
      }
    ],
    highlights: [
      {
        title: "Problem Solver",
        description: "Strong grasp of Data Structures & Algorithms with consistent problem-solving practice in C++ and JS.",
        icon: "Brain"
      },
      {
        title: "Web & UI Craftsman",
        description: "Expertise in crafting responsive web layouts with modern HTML, CSS, and interactive JavaScript.",
        icon: "Palette"
      },
      {
        title: "Clean Code & Git",
        description: "Committed to maintainable codebases, modular components, and efficient version control.",
        icon: "GitBranch"
      },
      {
        title: "Fast & Adaptable",
        description: "Quick learner passionate about adopting modern software tooling and engineering best practices.",
        icon: "Zap"
      }
    ]
  },

  skills: {
    categories: [
      { id: "all", label: "All Skills" },
      { id: "languages", label: "Programming & Languages" },
      { id: "web", label: "Web Development & UI" },
      { id: "core", label: "Core & Problem Solving" }
    ],
    list: [
      // Programming & Languages
      { name: "C++", category: "languages", level: "Proficient", icon: "Cpu", highlight: true },
      { name: "JavaScript", category: "languages", level: "Advanced", icon: "Code", highlight: true },
      { name: "HTML & CSS", category: "languages", level: "Advanced", icon: "Layout", highlight: true },

      // Web Development & UI
      { name: "Web Development", category: "web", level: "Advanced", icon: "Globe", highlight: true },
      { name: "UI/UX & Graphic Design", category: "web", level: "Advanced", icon: "Palette", highlight: true },
      { name: "React.js", category: "web", level: "Advanced", icon: "Atom", highlight: true },
      { name: "Tailwind CSS", category: "web", level: "Advanced", icon: "Wind", highlight: true },

      // Core & Problem Solving
      { name: "Data Structures & Algorithms", category: "core", level: "Advanced", icon: "Brain", highlight: true },
      { name: "Problem Solving", category: "core", level: "Advanced", icon: "Zap", highlight: true },
      { name: "Git & GitHub", category: "core", level: "Advanced", icon: "GitBranch", highlight: true },
      { name: "Version Control", category: "core", level: "Advanced", icon: "Github", highlight: true },
      { name: "Software Development", category: "core", level: "Advanced", icon: "Terminal", highlight: true }
    ]
  },

  projects: [
    {
      id: "devpulse",
      title: "DevPulse - Developer Workspace & Dashboard",
      subtitle: "Analytics, Task Manager & Live Code Sandbox",
      description: "A feature-rich developer command center offering real-time productivity tracking, custom widget management, and responsive code snippets preview.",
      techStack: ["JavaScript", "HTML & CSS", "React", "Tailwind CSS", "Git"],
      category: "Web Development",
      featured: true,
      githubUrl: "https://github.com/ajitkr8153-del/Portfolio",
      liveUrl: "https://github.com/ajitkr8153-del/Portfolio",
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
      techStack: ["JavaScript", "HTML & CSS", "React", "Tailwind CSS", "GitHub"],
      category: "Software Project",
      featured: true,
      githubUrl: "https://github.com/ajitkr8153-del/Portfolio",
      liveUrl: "https://github.com/ajitkr8153-del/Portfolio",
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
      subtitle: "Data Structures & Algorithm Interactive Visualizer",
      description: "An educational visualizer that helps students understand complex sorting algorithms (Merge, Quick, Bubble) and graph pathfinding with real-time step control.",
      techStack: ["C++", "JavaScript", "HTML5 Canvas", "Tailwind CSS", "DSA"],
      category: "Algorithms & DSA",
      featured: true,
      githubUrl: "https://github.com/ajitkr8153-del/Portfolio",
      liveUrl: "https://github.com/ajitkr8153-del/Portfolio",
      highlights: [
        "Adjustable execution speed & dynamic array randomizer",
        "Visual step-by-step element swap and comparison highlights",
        "Accompanying time & space complexity breakdowns"
      ],
      previewGradient: "from-blue-600 via-indigo-600 to-violet-700"
    }
  ],

  education: [
    {
      degree: "Bachelor of Technology in Computer Science & Engineering",
      institution: "Indian Institute of Information Technology",
      duration: "2022 - 2026 (Expected)",
      location: "India",
      score: "CGPA: 8.85 / 10.0",
      description: "Comprehensive coursework in Data Structures & Algorithms, Software Development, Object-Oriented Programming with C++, Web Development, and Database Systems.",
      achievements: [
        "Consistent top performance in Programming and Data Structures",
        "Active member of Web Development and Open Source initiatives",
        "Conducted peer study sessions on C++ problem solving and Git version control"
      ]
    },
    {
      degree: "Higher Secondary Education (Science Stream)",
      institution: "Senior Secondary School",
      duration: "2020 - 2022",
      location: "India",
      score: "Score: 94.6%",
      description: "Focus on Mathematics, Physics, Chemistry, and Computer Science fundamentals.",
      achievements: [
        "Top academic rank in Computer Science",
        "Active participant in Science and Mathematics competitions"
      ]
    }
  ],

  achievements: [
    {
      title: "Smart India Hackathon Finalist",
      organization: "Ministry of Education / AICTE",
      date: "2024",
      description: "Engineered an accessible web platform providing offline-first crisis resources and rapid response mapping.",
      badge: "National Finalist"
    },
    {
      title: "400+ DSA & Programming Problems Solved",
      organization: "LeetCode & HackerRank",
      date: "2023 - Present",
      description: "Earned 5-Star badge in Problem Solving with rigorous daily practice in C++ across dynamic programming, trees, and graph algorithms.",
      badge: "Problem Solving"
    },
    {
      title: "Open Source Version Control Contributor",
      organization: "GitHub / Hacktoberfest",
      date: "2023, 2024",
      description: "Successfully contributed and merged multiple pull requests in developer utility and UI component repositories.",
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
