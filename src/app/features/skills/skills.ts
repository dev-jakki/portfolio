import { Component, ChangeDetectionStrategy, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { PortfolioService } from '../../core/services/portfolio.service';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './skills.html',
  styleUrl: './skills.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Skills {
  private portfolioService = inject(PortfolioService);
  public skills = this.portfolioService.getSkills();
}
