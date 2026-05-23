import { Component, ChangeDetectionStrategy, inject } from '@angular/core';
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
  private techIconMap: Record<string, string> = {
    'React': '/assets/images/react.png',
    'TypeScript': '/assets/images/typescript.png',
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
    'GitHub': '/assets/images/github.png'
  };

  getTechIcon(tech: string) {
    return this.techIconMap[tech] ?? null;
  }
}
