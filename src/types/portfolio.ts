export interface ExperienceItem {
  title: string;
  company: string;
  period: string;
  description: string;
  technologies: string[];
}

export interface ProjectItem {
  title: string;
  description: string;
  highlights: string[];
  technologies: string[];
  link?: string;
  github?: string;
  image?: string;
  year?: string;
}

export interface SkillCategory {
  name: string;
  skills: string[];
}

export interface PortfolioData {
  personal: {
    name: string;
    title: string;
    summary: string;
    email: string;
    phone: string;
  };
  about: {
    headline: string;
    paragraphs: string[];
  };
  experience: ExperienceItem[];
  projects: ProjectItem[];
  skills: SkillCategory[];
  social: {
    github?: string;
    linkedin?: string;
    twitter?: string;
  };
}
