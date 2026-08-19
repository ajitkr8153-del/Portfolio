export const portfolioData = {
  personal: {
    name: "Ajit Kumar",
    role: "B.Tech CSE Student | Aspiring Software Engineer",
    college: "Swami Vivekanand Institute of Engineering & Technology (SVIET), Chandigarh",
    location: "Chandigarh, India",
    email: "ajitkr8153@gmail.com",
    phone: "+91 8539876974",
    avatar: "https://i.pinimg.com/736x/03/eb/d6/03ebd625cc0b9d636256ecc44c0ea324.jpg",
    github: "https://github.com/ajitkr8153-del",
    linkedin: "https://linkedin.com/in/ajitkumar-dev",
    resumeUrl: "#resume",
    availability: "Open to Internships & Collaboration",
    tagline: "B.Tech CSE Student | Aspiring Software Engineer passionate about building impactful technology.",
    shortBio: "I am a Computer Science Engineering student with a strong interest in software development, problem-solving, and emerging technologies. I enjoy turning ideas into practical projects while continuously improving my technical and creative skills."
  },

  about: {
    story: [
      "I am a Computer Science Engineering student with a strong interest in software development, problem-solving, and emerging technologies. I enjoy turning ideas into practical projects while continuously improving my technical and creative skills."
    ],
    details: {
      studying: "B.Tech in Computer Science & Engineering",
      college: "Swami Vivekanand Institute of Engineering & Technology (SVIET), Chandigarh",
      interests: [
        "Software Development",
        "Web Development",
        "Data Structures & Algorithms",
        "UI/UX Design"
      ],
      learning: [
        "Advanced C++",
        "Data Structures & Algorithms",
        "Web Technologies",
        "Git & GitHub"
      ],
      careerGoals: "To become a skilled Software Engineer and contribute to innovative, scalable, and impactful technology solutions."
    },
    highlights: [
      {
        title: "Programming & Problem Solving",
        description: "Strong focus on C++, C, Python and algorithmic thinking through Data Structures & Algorithms.",
        icon: "Brain"
      },
      {
        title: "Web Development",
        description: "Building responsive web interfaces with HTML5, CSS3, JavaScript and modern web technologies.",
        icon: "Globe"
      },
      {
        title: "Design & Tooling",
        description: "UI/UX design with Figma & Canva, version control with Git & GitHub, and VS Code workflows.",
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
      { name: "JavaScript", category: "languages", level: "Intermediate", icon: "FileCode", highlight: true },

      // Frontend
      { name: "HTML5", category: "frontend", level: "Proficient", icon: "Layout", highlight: true },
      { name: "CSS3", category: "frontend", level: "Proficient", icon: "Sparkles", highlight: true },
      { name: "JavaScript", category: "frontend", level: "Intermediate", icon: "FileCode", highlight: true },
      { name: "Responsive Web Design", category: "frontend", level: "Intermediate", icon: "Monitor", highlight: true },

      // Tools
      { name: "Git", category: "tools", level: "Proficient", icon: "GitBranch", highlight: true },
      { name: "GitHub", category: "tools", level: "Proficient", icon: "Github", highlight: true },
      { name: "VS Code", category: "tools", level: "Proficient", icon: "Monitor", highlight: true },
      { name: "Canva", category: "tools", level: "Intermediate", icon: "Sparkles", highlight: true },
      { name: "Figma", category: "tools", level: "Beginner", icon: "Layout", highlight: false }
    ]
  },

  projects: [
    {
      id: "project-1",
      title: "Project Name",
      subtitle: "Real-World Problem Solver",
      description: "A practical project focused on solving a real-world problem through clean, efficient, and user-friendly technology.",
      techStack: ["C++", "JavaScript", "HTML", "CSS"],
      category: "Software",
      featured: true,
      githubUrl: "https://github.com/ajitkr8153-del",
      liveUrl: "https://github.com/ajitkr8153-del",
      highlights: [
        "Clean and efficient code architecture",
        "User-friendly interface and experience",
        "Real-world problem-solving approach",
        "Version controlled with Git & GitHub"
      ],
      previewGradient: "from-indigo-600 via-purple-600 to-cyan-500"
    }
  ],

  education: [
    {
      degree: "Bachelor of Technology (B.Tech) – Computer Science & Engineering",
      institution: "Swami Vivekanand Institute of Engineering & Technology (SVIET), Chandigarh",
      duration: "Expected Graduation: 2028",
      graduationYear: "2028",
      location: "Chandigarh, India",
      description: "Undergraduate degree program focusing on Computer Science fundamentals, Software Development, Data Structures & Algorithms, Web Development, and emerging technologies."
    }
  ],

  achievements: [
    {
      title: "Technical Certifications",
      organization: "Online Platforms",
      date: "Ongoing",
      description: "Earning certifications in programming, web development, and software engineering from recognized platforms.",
      badge: "Certification"
    },
    {
      title: "Coding & Development Projects",
      organization: "Personal & Academic",
      date: "Ongoing",
      description: "Building practical projects applying programming, web development, and problem-solving skills.",
      badge: "Projects"
    },
    {
      title: "Participation in Technical Events",
      organization: "SVIET & External",
      date: "Ongoing",
      description: "Active participation in hackathons, coding competitions, and technical workshops.",
      badge: "Events"
    },
    {
      title: "Academic & Extracurricular Achievements",
      organization: "SVIET, Chandigarh",
      date: "Ongoing",
      description: "Academic excellence and active involvement in extracurricular and co-curricular activities.",
      badge: "Academic"
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
