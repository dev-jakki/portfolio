export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  demoUrl?: string;
  githubUrl?: string;
  featured?: boolean;
}

export interface Skill {
  name: string;
  category: 'frontend' | 'backend' | 'tools';
  icon: string;
  level?: number;
}

export interface Experience {
  id: number;
  company: string;
  position: string;
  period: string;
  description: string;
  technologies?: string[];
}

export interface ContactData {
  email: string;
  linkedin: string;
  github: string;
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