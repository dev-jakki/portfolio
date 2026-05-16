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
    { name: 'Angular', icon: '/assets/icons/angular.svg' },
    { name: 'Java', icon: '/assets/icons/java.svg' },
    { name: 'Spring Boot', icon: '/assets/icons/spring.svg' },
    { name: 'JavaScript', icon: '/assets/icons/javascript.svg' },
    { name: 'TypeScript', icon: '/assets/icons/typescript.svg' },
    { name: 'Docker', icon: '/assets/icons/docker.svg' },
    { name: 'Bootstrap', icon: '/assets/icons/bootstrap.svg' },
    { name: 'HTML', icon: '/assets/icons/html5.svg' },
    { name: 'CSS', icon: '/assets/icons/css3.svg' },
    { name: 'React', icon: '/assets/icons/react.svg' },
    { name: 'Node.js', icon: '/assets/icons/nodejs.svg' },
    { name: 'MongoDB', icon: '/assets/icons/mongodb.svg' },
    { name: 'MySQL', icon: '/assets/icons/mysql.svg' },
    { name: 'PostgreSQL', icon: '/assets/icons/postgresql.svg' },
    { name: 'Git', icon: '/assets/icons/git.svg' },
    { name: 'GitHub', icon: '/assets/icons/github.svg' },
    { name: 'IntelliJ IDEA', icon: '/assets/icons/intellij.svg' },
    { name: 'Kiro IDE', icon: '/assets/icons/kiro.svg' },
    { name: 'VS Code', icon: '/assets/icons/vscode.svg' },
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
