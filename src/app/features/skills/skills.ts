import { Component, ChangeDetectionStrategy, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { CardComponent } from '../../shared/ui/card/card';
import { SectionComponent } from '../../shared/ui/section/section';
import { PortfolioService } from '../../core/services/portfolio.service';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule, TranslateModule, CardComponent, SectionComponent],
  templateUrl: './skills.html',
  styleUrl: './skills.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Skills {
  private portfolioService = inject(PortfolioService);
  private skills = this.portfolioService.getSkills();

  getSkillsByCategory(category: string) {
    return this.skills().filter(s => s.category === category);
  }

  getCategoryName(category: string): string {
    const names: { [key: string]: string } = {
      'frontend': 'skills.frontend',
      'backend': 'skills.backend',
      'tools': 'skills.tools'
    };
    return names[category] || category;
  }
}
