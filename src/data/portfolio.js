export const portfolioData = {
  personal: {
    name: "Ajit Kumar",
    role: "B.Tech CSE Student",
    college: "SVIET, Chandigarh",
    location: "Chandigarh, India",
    email: "ajitkr8153@gmail.com",
    phone: "+91 8539876974",
    avatar: "https://i.pinimg.com/736x/03/eb/d6/03ebd625cc0b9d636256ecc44c0ea324.jpg",
    github: "https://github.com/ajitkr8153-del",
    linkedin: "https://linkedin.com/in/ajitkumar-dev",
    resumeUrl: "#resume",
    availability: "Open to Internships & Opportunities",
    tagline: "B.Tech CSE Student passionate about software development and technology.",
    shortBio: "I am a B.Tech Computer Science Engineering student passionate about software development, problem solving, and building impactful technology solutions."
  },

  about: {
    story: [
      "I am a B.Tech Computer Science Engineering student passionate about software development and technology."
    ],
    details: {
      studying: "B.Tech in Computer Science & Engineering",
      college: "SVIET, Chandigarh",
      interests: ["Software Development", "Web Development", "Problem Solving"],
      learning: ["Data Structures & Algorithms", "Web Development", "Git & GitHub"],
      careerGoals: "To become a skilled software engineer and build impactful technology solutions."
    },
    highlights: [
      {
        title: "Programming & Problem Solving",
        description: "Focusing on C++, C, Python, and Data Structures & Algorithms.",
        icon: "Brain"
      },
      {
        title: "Web Development",
        description: "Building responsive web interfaces with HTML, CSS, and JavaScript.",
        icon: "Globe"
      },
      {
        title: "Version Control & Tooling",
        description: "Proficient in Git, GitHub workflows, and VS Code development environment.",
        icon: "GitBranch"
      }
    ]
  },

  skills: {
    categories: [
      { id: "all", label: "All Skills" },
      { id: "languages", label: "Languages" },
      { id: "frontend", label: "Frontend" },
      { id: "tools", label: "Tools" }
    ],
    list: [
      // Languages
      { name: "C++", category: "languages", level: "Proficient", icon: "Cpu", highlight: true },
      { name: "C", category: "languages", level: "Proficient", icon: "Code", highlight: true },
      { name: "Python", category: "languages", level: "Intermediate", icon: "Terminal", highlight: true },

      // Frontend
      { name: "HTML", category: "frontend", level: "Proficient", icon: "Layout", highlight: true },
      { name: "CSS", category: "frontend", level: "Proficient", icon: "Sparkles", highlight: true },
      { name: "JavaScript", category: "frontend", level: "Intermediate", icon: "FileCode", highlight: true },

      // Tools
      { name: "Git", category: "tools", level: "Proficient", icon: "GitBranch", highlight: true },
      { name: "GitHub", category: "tools", level: "Proficient", icon: "Github", highlight: true },
      { name: "VS Code", category: "tools", level: "Proficient", icon: "Monitor", highlight: true }
    ]
  },

  projects: [
    {
      id: "project-1",
      title: "Project Name",
      subtitle: "Software & Web Development Project",
      description: "Short description of your project.",
      techStack: ["C++", "Programming"],
      category: "Software",
      featured: true,
      githubUrl: "https://github.com/ajitkr8153-del/Portfolio",
      liveUrl: "https://github.com/ajitkr8153-del/Portfolio",
      highlights: [
        "Built with clean programming architecture",
        "Version controlled with Git & GitHub",
        "Problem-solving and algorithmic approach"
      ],
      previewGradient: "from-indigo-600 via-purple-600 to-cyan-500"
    }
  ],

  education: [
    {
      degree: "B.Tech in Computer Science & Engineering",
      institution: "SVIET, Chandigarh",
      duration: "Expected Graduation: 2028",
      graduationYear: "2028",
      location: "Chandigarh, India",
      description: "Undergraduate degree program focusing on Computer Science fundamentals, Software Development, Data Structures & Algorithms, and Web Development."
    }
  ],

  achievements: [
    {
      title: "Add your certifications",
      organization: "Certifications",
      date: "Ongoing",
      description: "Relevant industry or academic certifications in programming and web technologies.",
      badge: "Certification"
    },
    {
      title: "Add your achievements",
      organization: "Academic & Tech",
      date: "Ongoing",
      description: "Key milestones, hackathons, and technical project accomplishments.",
      badge: "Achievement"
    },
    {
      title: "Add coding certificates",
      organization: "Coding Platforms",
      date: "Ongoing",
      description: "Problem solving and coding certifications earned across recognized platforms.",
      badge: "Coding Certificate"
    }
  ],

  navLinks: [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Education", href: "#education" },
    { name: "Achievements", href: "#achievements" },
    { name: "Contact", href: "#contact" }
  ]
};
