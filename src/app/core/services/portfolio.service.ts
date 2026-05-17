import { Injectable, signal } from '@angular/core';
import { Project, Skill, Experience, ContactData, AboutData } from '../models/portfolio.model';

@Injectable({
  providedIn: 'root'
})
export class PortfolioService {
  private readonly projects = signal<Project[]>([
    {
      id: 1,
      title: 'projects.project1.title',
      description: 'projects.project1.description',
      url: this.getScreenshotUrl("https://url-shortening-jakkifx.netlify.app"),
      technologies: ['Angular', 'TypeScript', 'Bitly API'],
      demoUrl: 'https://url-shortening-jakkifx.netlify.app/',
      githubUrl: 'https://github.com/dev-jakki/url-shortening',
      featured: true
    },
    {
      id: 2,
      title: 'projects.project2.title',
      description: 'projects.project2.description',
      url: this.getScreenshotUrl("https://nick-search-jakki.netlify.app"),
      technologies: ['GitHub API', 'JavaScript', 'Jasmine'],
      demoUrl: '#',
      githubUrl: 'https://github.com/dev-jakki',
      featured: true
    },
    {
      id: 3,
      title: 'projects.project3.title',
      description: 'projects.project3.description',
      url: this.getScreenshotUrl("https://todo-jakkifx.netlify.app"),
      technologies: ['React', 'Node.js', 'MongoDB'],
      demoUrl: '#',
      githubUrl: 'https://github.com/dev-jakki'
    },
    {
      id: 4,
      title: 'projects.project4.title',
      description: 'projects.project4.description',
      url: '/assets/images/task-manager.png',
      technologies: ['Angular', 'Firebase', 'TypeScript'],
      demoUrl: '#',
      githubUrl: 'https://github.com/dev-jakki'
    }
  ]);

  private readonly skills = signal<Skill[]>([
    { name: 'Angular', icon: '/assets/images/angular.png' },
    { name: 'Java', icon: '/assets/images/java.png' },
    { name: 'Spring Boot', icon: '/assets/images/spring.png' },
    { name: 'JavaScript', icon: '/assets/images/javascript.png' },
    { name: 'TypeScript', icon: '/assets/images/typescript.png' },
    { name: 'Docker', icon: '/assets/images/docker.png' },
    { name: 'Bootstrap', icon: '/assets/images/bootstrap.png' },
    { name: 'HTML', icon: '/assets/images/html.png' },
    { name: 'CSS', icon: '/assets/images/css.png' },
    { name: 'React', icon: '/assets/images/react.png' },
    { name: 'Node.js', icon: '/assets/images/nodejs.png' },
    { name: 'MongoDB', icon: '/assets/images/mongodb.png' },
    { name: 'MySQL', icon: '/assets/images/mysql.png' },
    { name: 'PostgreSQL', icon: '/assets/images/postgresql.png' },
    { name: 'Git', icon: '/assets/images/git.png' },
    { name: 'GitHub', icon: '/assets/images/github.png' },
    { name: 'IntelliJ IDEA', icon: '/assets/images/intellij.png' },
    { name: 'Kiro IDE', icon: '/assets/images/kiro.svg' },
    { name: 'VS Code', icon: '/assets/images/vscode.png' },
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
    email: 'jackcielfelix.dev@gmail.com',
    linkedin: 'https://www.linkedin.com/in/jackcielf',
    github: 'https://github.com/dev-jakki',
    instagram: 'https://instagram.com/dev_jakki'
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

  getScreenshotUrl(url: string): string {
    return `https://api.microlink.io/?url=${encodeURIComponent(url)}&screenshot=true&meta=false&embed=screenshot.url`;
  }
}
