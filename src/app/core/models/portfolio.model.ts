export interface Project {
  id: number;
  title: string;
  description: string;
  url: string;
  technologies: string[];
  demoUrl?: string;
  githubUrl?: string;
  featured?: boolean;
}

export interface Skill {
  name: string;
  icon: string;
  level?: number;
  premium?: boolean;
}

export interface Experience {
  id: number;
  company: string;
  position: string;
  period: string;
  status?: string;
  description: string;
  details?: string[];
  frontendDescription?: string;
  frontendDetails?: string[];
  backendDescription?: string;
  backendDetails?: string[];
  technologies?: string[];
}

export interface ContactData {
  email: string;
  linkedin: string;
  github: string;
  github_repos: string;
  instagram?: string;
}

export interface AboutData {
  title: string;
  subtitle: string;
  softSkills: SoftSkillsData[];
}

export interface SoftSkillsData {
  value: string;
  description: string;
  obs?: string;
}