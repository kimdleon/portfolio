import { PortfolioData } from "@/types/portfolio";

export const portfolioData: PortfolioData = {
  personal: {
    name: "Kim De Leon",
    title: "Senior Associate Full Stack Developer",
    summary:
      "Full stack engineer with 4+ years of proven experience architecting scalable enterprise applications. Experienced with Azure OpenAI integration, cloud infrastructure on AWS, and modern web development.",
    email: "deleonkimberlynelle@gmail.com",
    phone: "+63 945 607 5151",
  },
  about: {
    headline: "Senior Associate Full Stack Developer with Azure OpenAI Integration Experience",
    paragraphs: [
      "Full stack developer with 4+ years of experience building enterprise applications. Skilled in React, TypeScript, PHP, and MySQL. I've worked with Azure OpenAI integration and AWS cloud infrastructure to deliver scalable solutions.",
      "I focus on building clean, maintainable code and creating responsive user experiences. Open to collaborating on challenging projects where I can grow and contribute meaningfully.",
    ],
  },
  experience: [
    {
      title: "Senior Developer",
      company: "Transcosmos Asia Philippines",
      period: "March 2024 - Present",
      description:
        "Architecting and deploying Azure OpenAI (GPT-4) applications for enterprise clients. Engineering microservices infrastructure on AWS ECS, developing Chrome Extensions, and implementing Selenium-based test automation frameworks.",
      technologies: [
        "Azure OpenAI (GPT-4)",
        "AWS ECS",
        "Chrome Extensions",
        "Selenium",
        "React",
        "TypeScript",
      ],
    },
    {
      title: "Full Stack Developer",
      company: "Transcosmos Asia Philippines",
      period: "July 2022 - March 2024",
      description:
        "Developed and deployed full-stack web applications using React and PHP. Engineered REST APIs with proper authentication and error handling, optimized MySQL databases, and collaborated with cross-functional teams to deliver high-quality features.",
      technologies: [
        "React",
        "TypeScript",
        "PHP",
        "MySQL",
        "REST APIs",
        "Responsive Design",
      ],
    },
    {
      title: "Part-Time Full Stack Developer",
      company: "Bitpeak",
      period: "2025 - 2026",
      description:
        "Developed backend features and APIs using Laravel framework. Designed and optimized MySQL database schemas, implemented database migrations, and ensured data integrity across applications.",
      technologies: [
        "Laravel",
        "PHP",
        "MySQL",
        "REST APIs",
        "Database Design",
      ],
    },
    {
      title: "Part-Time Web Developer",
      company: "Gov Learn",
      period: "2025 - 2026",
      description:
        "Managed and developed a webinar website platform. Built responsive registration system, event management dashboards, and backend integration with MySQL for participant tracking and analytics.",
      technologies: [
        "React",
        "PHP",
        "MySQL",
        "Bootstrap",
        "REST APIs",
        "Event Management",
      ],
    },
  ],
  projects: [
    {
      title: "Virtual Mentors - Gov Learn",
      description:
        "Full-stack webinar registration and event management platform with real-time participant tracking.",
      highlights: [
        "Built responsive webinar registration system with real-time form validation",
        "Developed event management dashboard for administrators",
        "Engineered backend integration with MySQL for persistent data storage",
      ],
      technologies: ["React", "PHP", "MySQL", "Bootstrap", "REST APIs"],
      link: "https://www.virtual-mentors.com",
      image: "/gov-learn.png",
      year: "2025",
    },
    {
      title: "URS Online Assessment Application",
      description:
        "Centralized online assessment platform developed for University of Rizal System students and instructors.",
      highlights: [
        "Student and instructor dashboards with role-based access control",
        "Assessment creation and management system for educators",
        "Real-time exam delivery with progress tracking",
        "Results analysis and reporting for academic evaluation",
      ],
      technologies: ["React", "TypeScript", "MySQL", "REST APIs", "Bootstrap"],
      github: "https://github.com/kimdl/updated-oaa.git",
      image: "/oaa.jpeg",
      year: "2021",
    },
    {
      title: "Azure OpenAI Enterprise Integration",
      description:
        "Architected and deployed production-grade Azure OpenAI (GPT-4) applications for enterprise clients, enabling intelligent automation of complex business workflows.",
      highlights: [
        "Integrated GPT-4 API with enterprise systems for natural language processing",
        "Built scalable microservices architecture on AWS ECS for production deployment",
        "Implemented prompt engineering strategies for client-specific use cases",
        "Conducted AI research and rapid prototyping to validate implementation approaches",
      ],
      technologies: ["Azure OpenAI", "GPT-4", "AWS ECS", "React", "TypeScript"],
    },
    {
      title: "Enterprise Full-Stack Applications (Transcosmos)",
      description:
        "Developed and maintained multiple production full-stack web applications serving enterprise clients with complex business requirements.",
      highlights: [
        "Built REST APIs with proper authentication, validation, and error handling",
        "Optimized MySQL database schemas for complex query scenarios",
        "Implemented responsive frontend interfaces using React and modern CSS",
        "Maintained legacy systems while implementing architectural improvements",
      ],
      technologies: ["React", "TypeScript", "PHP", "MySQL", "REST APIs"],
    },
  ],
  skills: [
    {
      name: "Frontend Development",
      skills: [
        "React",
        "TypeScript",
        "JavaScript",
        "Tailwind CSS",
        "Bootstrap",
        "HTML5/CSS3",
      ],
    },
    {
      name: "Backend Development",
      skills: [
        "PHP",
        "Laravel",
        "REST API Design",
        "Server-Side Logic",
        "API Authentication & Security",
      ],
    },
    {
      name: "Database & ORM",
      skills: [
        "MySQL",
        "Database Design",
        "SQL Query Optimization",
        "Prisma ORM",
        "Data Modeling",
      ],
    },
    {
      name: "Cloud & AI",
      skills: [
        "AWS (ECS, EC2, S3)",
        "Azure OpenAI",
        "GPT-4 Integration",
        "LLM Prompt Engineering",
        "Microservices Architecture",
      ],
    },
    {
      name: "Automation & Testing",
      skills: [
        "Selenium WebDriver",
        "Chrome Extensions",
        "QA Automation",
        "Test Framework Development",
      ],
    },
    {
      name: "Development Tools & Practices",
      skills: [
        "Git",
        "Bitbucket",
        "GitHub",
        "VS Code",
        "Figma",
        "Agile Methodologies",
      ],
    },
  ],
  social: {
    github: "https://github.com/kimdleon",
    linkedin: "https://www.linkedin.com/in/kimberly-nelle-de-leon-374706213",
  },
};
