import { Component, ChangeDetectionStrategy, inject, HostListener, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { CardComponent } from '../../shared/ui/card/card';
import { PortfolioService } from '../../core/services/portfolio.service';
import { ButtonComponent } from '../../shared/ui/button/button';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, TranslateModule, CardComponent, ButtonComponent],
  templateUrl: './projects.html',
  styleUrl: './projects.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Projects implements OnInit {
  portfolioService = inject(PortfolioService);
  projects = this.portfolioService.getProjects()();
  currentIndex = 0;
  visibleCount = 3;

  ngOnInit() {
    this.updateVisibleCount();
  }

  @HostListener('window:resize')
  onResize() {
    this.currentIndex = 0;
    this.updateVisibleCount();
  }

  private updateVisibleCount() {
    const width = window.innerWidth;
    if (width < 480) {
      this.visibleCount = 1;
    } else if (width < 768) {
      this.visibleCount = 2;
    } else if (width < 1200) {
      this.visibleCount = 2;
    } else {
      this.visibleCount = 3;
    }
  }

  get canPrev() {
    return this.currentIndex > 0;
  }

  get canNext() {
    return this.currentIndex < (this.projects?.length ?? 0) - this.visibleCount;
  }

  prev() {
    if (this.canPrev) this.currentIndex--;
  }

  next() {
    if (this.canNext) this.currentIndex++;
  }

  get transformPercent() {
    const translatePercent = (this.currentIndex * 100) / this.visibleCount;
    return `translateX(-${translatePercent}%)`;
  }

  trackById(_index: number, project: any) {
    return project.id;
  }
}
