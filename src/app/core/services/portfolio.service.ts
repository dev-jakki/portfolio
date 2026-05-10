import { Injectable, signal } from '@angular/core';
import { Project, Skill, Experience, ContactData, AboutData } from '../models/portfolio.model';

@Injectable({
  providedIn: 'root'
})
export class PortfolioService {
  private readonly projects = signal<Project[]>([
    {
      id: 1,
      title: 'projects.devstudies.title',
      description: 'projects.devstudies.description',
      image: '/assets/images/dev-studies.png',
      technologies: ['React', 'TypeScript', 'TailwindCSS'],
      demoUrl: '#',
      githubUrl: 'https://github.com/dev-jakki',
      featured: true
    },
    {
      id: 2,
      title: 'projects.dashboard.title',
      description: 'projects.dashboard.description',
      image: '/assets/images/dashboard.png',
      technologies: ['Next.js', 'TypeScript', 'Chart.js'],
      demoUrl: '#',
      githubUrl: 'https://github.com/dev-jakki',
      featured: true
    },
    {
      id: 3,
      title: 'projects.ecommerce.title',
      description: 'projects.ecommerce.description',
      image: '/assets/images/ecommerce.png',
      technologies: ['React', 'Node.js', 'MongoDB'],
      demoUrl: '#',
      githubUrl: 'https://github.com/dev-jakki'
    },
    {
      id: 4,
      title: 'projects.taskmanager.title',
      description: 'projects.taskmanager.description',
      image: '/assets/images/task-manager.png',
      technologies: ['Angular', 'Firebase', 'TypeScript'],
      demoUrl: '#',
      githubUrl: 'https://github.com/dev-jakki'
    }
  ]);

  private readonly skills = signal<Skill[]>([
    // Frontend
    { name: 'HTML', category: 'frontend', icon: 'html5' },
    { name: 'CSS', category: 'frontend', icon: 'css3' },
    { name: 'JavaScript', category: 'frontend', icon: 'javascript' },
    { name: 'TypeScript', category: 'frontend', icon: 'typescript' },
    { name: 'React', category: 'frontend', icon: 'react' },
    { name: 'Next.js', category: 'frontend', icon: 'nextjs' },
    { name: 'TailwindCSS', category: 'frontend', icon: 'tailwindcss' },
    { name: 'Angular', category: 'frontend', icon: 'angular' },
    // Backend
    { name: 'Node.js', category: 'backend', icon: 'nodejs' },
    { name: 'Express', category: 'backend', icon: 'express' },
    { name: 'MongoDB', category: 'backend', icon: 'mongodb' },
    { name: 'PostgreSQL', category: 'backend', icon: 'postgresql' },
    // Tools
    { name: 'Git', category: 'tools', icon: 'git' },
    { name: 'GitHub', category: 'tools', icon: 'github' },
    { name: 'Docker', category: 'tools', icon: 'docker' },
    { name: 'VS Code', category: 'tools', icon: 'vscode' }
  ]);

  private readonly experience = signal<Experience[]>([
    {
      id: 1,
      company: 'experience.freelancer.company',
      position: 'experience.freelancer.position',
      period: 'experience.freelancer.period',
      description: 'experience.freelancer.description',
      technologies: ['React', 'Next.js', 'TypeScript', 'TailwindCSS']
    },
    {
      id: 2,
      company: 'experience.techxyz.company',
      position: 'experience.techxyz.position',
      period: 'experience.techxyz.period',
      description: 'experience.techxyz.description',
      technologies: ['React', 'Node.js', 'MongoDB', 'Docker']
    },
    {
      id: 3,
      company: 'experience.startupabc.company',
      position: 'experience.startupabc.position',
      period: 'experience.startupabc.period',
      description: 'experience.startupabc.description',
      technologies: ['React', 'TypeScript', 'Jest', 'Storybook']
    }
  ]);

  private readonly about = signal<AboutData>({
    title: 'about.title',
    subtitle: 'about.subtitle',
    softSkills: [
      {
        value: 'about.softSkills1.value',
        description: 'about.softSkills1.description'
      },
      {
        value: 'about.softSkills2.value',
        description: 'about.softSkills2.description',
      },
      {
        value: 'about.softSkills3.value',
        description: 'about.softSkills3.description'
      },
      {
        value: 'about.softSkills4.value',
        description: 'about.softSkills4.description',
        obs: 'about.softSkills4.obs'
      }
    ]
  });

  private readonly contact: ContactData = {
    email: 'jackcielf@gmail.com',
    linkedin: 'https://www.linkedin.com/in/jackcielf',
    github: 'https://github.com/dev-jakki',
    instagram: 'https://instagram.com'
  };

  getProjects() {
    return this.projects;
  }

  getSkills() {
    return this.skills;
  }

  getExperience() {
    return this.experience;
  }

  getContact() {
    return this.contact;
  }

  getAbout() {
    return this.about;
  }
}
