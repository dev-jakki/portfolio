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
      demoUrl: 'https://nick-search-jakki.netlify.app',
      githubUrl: 'https://github.com/dev-jakki',
      featured: true
    },
    {
      id: 3,
      title: 'projects.project3.title',
      description: 'projects.project3.description',
      url: this.getScreenshotUrl("https://todo-jakkifx.netlify.app"),
      technologies: ['Angular', 'Bootstrap', 'Local Storage'],
      demoUrl: 'https://todo-jakkifx.netlify.app',
      githubUrl: 'https://github.com/dev-jakki'
    },
    {
      id: 4,
      title: 'projects.project4.title',
      description: 'projects.project4.description',
      url: this.getScreenshotUrl("https://chat-illustration-jakki.netlify.app"),
      technologies: ['Angular', 'Sass', 'Responsive'],
      demoUrl: 'https://chat-illustration-jakki.netlify.app',
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

  private readonly skillsFrontend = signal<Skill[]>([
    { name: 'Angular', icon: '/assets/images/svg/angular.svg', premium: true },
    { name: 'JavaScript', icon: '/assets/images/svg/javascript.svg' },
    { name: 'TypeScript', icon: '/assets/images/svg/typescript.svg', premium: true },
    { name: 'React', icon: '/assets/images/svg/react.svg' },
    { name: 'HTML', icon: '/assets/images/svg/html5.svg' },
    { name: 'CSS', icon: '/assets/images/svg/css.svg' },
    { name: 'Bootstrap', icon: '/assets/images/svg/bootstrap.svg' },
  ]);

  private readonly skillsBackend = signal<Skill[]>([
    { name: 'Java', icon: '/assets/images/svg/java.svg' },
    { name: 'Spring Boot', icon: '/assets/images/svg/spring.svg', premium: true },
    { name: 'Node.js', icon: '/assets/images/svg/nodedotjs.svg' },
    { name: 'MongoDB', icon: '/assets/images/svg/mongodb.svg' },
    { name: 'MySQL', icon: '/assets/images/svg/mysql.svg' },
    { name: 'PostgreSQL', icon: '/assets/images/svg/postgresql.svg' },
    { name: 'Docker', icon: '/assets/images/svg/docker.svg', premium: true },
    { name: 'AWS', icon: '/assets/images/svg/aws.svg', premium: true },
    { name: 'Azure DevOps', icon: '/assets/images/svg/azure.svg' },
  ]);

  private readonly skillsTools = signal<Skill[]>([
    { name: 'Git', icon: '/assets/images/svg/git.svg' },
    { name: 'GitHub', icon: '/assets/images/svg/github.svg' },
    { name: 'IntelliJ IDEA', icon: '/assets/images/svg/intellijidea.svg' },
    { name: 'VS Code', icon: '/assets/images/svg/vscode.svg' },
    { name: 'Kiro IDE', icon: '/assets/images/svg/kiro.svg' },
  ]);

  private readonly experience = signal<Experience[]>([
    {
      id: 1,
      company: 'experience.company1.company',
      position: 'experience.company1.position',
      period: 'experience.company1.period',
      status: 'experience.company1.status',
      description: 'experience.company1.description',
      frontendDescription: 'experience.company1.frontendDescription',
      frontendDetails: [
        'experience.company1.frontendDetail1',
        'experience.company1.frontendDetail2',
        'experience.company1.frontendDetail3',
        'experience.company1.frontendDetail4',
        'experience.company1.frontendDetail5',
        'experience.company1.frontendDetail6',
      ],
      backendDescription: 'experience.company1.backendDescription',
      backendDetails: [
        'experience.company1.backendDetail1',
        'experience.company1.backendDetail2',
        'experience.company1.backendDetail3',
        'experience.company1.backendDetail4',
        'experience.company1.backendDetail5',
        'experience.company1.backendDetail6',
      ],
      technologies: ['Angular', 'Java', 'Spring Boot', 'Docker', 'AWS', 'Azure DevOps']
    },
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
    github_repos: 'https://github.com/dev-jakki?tab=repositories',
    instagram: 'https://instagram.com/dev_jakki'
  };

  getProjects() {
    return this.projects;
  }

  getSkills() {
    return this.skills;
  }

  getSkillsFrontend() {
    return this.skillsFrontend;
  }

  getSkillsBackend() {
    return this.skillsBackend;
  }

  getSkillsTools() {
    return this.skillsTools;
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
