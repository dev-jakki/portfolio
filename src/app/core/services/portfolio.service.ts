import { Injectable, signal } from '@angular/core';
import { Project, Skill, Experience, ContactData } from '../models/portfolio.model';

@Injectable({
  providedIn: 'root'
})
export class PortfolioService {
  private readonly projects = signal<Project[]>([
    {
      id: 1,
      title: 'DevStudies',
      description: 'Plataforma de estudos com gerenciamento de cronograma de estudos com gráficos e análise de progresso.',
      image: '/assets/images/dev-studies.png',
      technologies: ['React', 'TypeScript', 'TailwindCSS'],
      demoUrl: '#',
      githubUrl: 'https://github.com/dev-jakki',
      featured: true
    },
    {
      id: 2,
      title: 'Dashboard Financeiro',
      description: 'Dashboard interativo com gráficos em tempo real para controle de finanças pessoais.',
      image: '/assets/images/dashboard.png',
      technologies: ['Next.js', 'TypeScript', 'Chart.js'],
      demoUrl: '#',
      githubUrl: 'https://github.com/dev-jakki',
      featured: true
    },
    {
      id: 3,
      title: 'E-commerce Platform',
      description: 'Plataforma de e-commerce completa com integração de pagamentos e gerenciamento de produtos.',
      image: '/assets/images/ecommerce.png',
      technologies: ['React', 'Node.js', 'MongoDB'],
      demoUrl: '#',
      githubUrl: 'https://github.com/dev-jakki'
    },
    {
      id: 4,
      title: 'Task Manager App',
      description: 'Aplicação web para gerenciamento de tarefas com sincronização em tempo real.',
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
      company: 'Desenvolvedor Frontend',
      position: 'Freelancer',
      period: 'Atualmente',
      description: 'Desenvolvendo interfaces modernas, componentes reutilizáveis e experiências digitais com as melhores tecnologias do mercado.',
      technologies: ['React', 'Next.js', 'TypeScript', 'TailwindCSS']
    },
    {
      id: 2,
      company: 'Empresa Tech XYZ',
      position: 'Desenvolvedor Full Stack',
      period: '2023 - 2024',
      description: 'Desenvolvimento de aplicações web escaláveis, APIs REST e otimização de performance. Trabalhando em equipe ágil.',
      technologies: ['React', 'Node.js', 'MongoDB', 'Docker']
    },
    {
      id: 3,
      company: 'Startup ABC',
      position: 'Desenvolvedor Frontend',
      period: '2022 - 2023',
      description: 'Criação de interfaces responsivas, componentes reutilizáveis e implementação de testes unitários.',
      technologies: ['React', 'TypeScript', 'Jest', 'Storybook']
    }
  ]);

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
}
