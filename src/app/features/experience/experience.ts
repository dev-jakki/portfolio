import { Component, ChangeDetectionStrategy, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { PortfolioService } from '../../core/services/portfolio.service';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './experience.html',
  styleUrl: './experience.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Experience {
  portfolioService = inject(PortfolioService);

  // Track which cards are expanded (by id). First card starts expanded.
  expandedIds = signal<Set<number>>(new Set([1]));

  private techIconMap: Record<string, string> = {
    'Angular': '/assets/images/angular.png',
    'Java': '/assets/images/java.png',
    'Spring Boot': '/assets/images/spring.png',
    'React': '/assets/images/react.png',
    'TypeScript': '/assets/images/typescript.png',
    'Next.js': '/assets/images/nextjs.png',
    'TailwindCSS': '/assets/images/tailwindcss.png',
    'Node.js': '/assets/images/nodejs.png',
    'Node': '/assets/images/nodejs.png',
    'JavaScript': '/assets/images/javascript.png',
    'HTML5': '/assets/images/html.png',
    'CSS3': '/assets/images/css.png',
    'Docker': '/assets/images/docker.png',
    'MongoDB': '/assets/images/mongodb.png',
    'MySQL': '/assets/images/mysql.png',
    'PostgreSQL': '/assets/images/postgresql.png',
    'Git': '/assets/images/git.png',
    'GitHub': '/assets/images/github.png',
    'Vue.js': '/assets/images/vuejs.png',
    'AWS': '/assets/images/aws.png',
    'Azure DevOps': '/assets/images/azure.png',
  };

  getTechIcon(tech: string): string | null {
    return this.techIconMap[tech] ?? null;
  }

  isExpanded(id: number): boolean {
    return this.expandedIds().has(id);
  }

  toggleCard(id: number): void {
    const current = new Set(this.expandedIds());
    if (current.has(id)) {
      current.delete(id);
    } else {
      current.add(id);
    }
    this.expandedIds.set(current);
  }
}
