import { Component, ChangeDetectionStrategy, inject, HostListener, OnInit, signal, computed } from '@angular/core';
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

  private readonly sourceProjects = this.portfolioService.getProjects()();

  projects = [
    ...this.sourceProjects,
    ...this.sourceProjects,
    ...this.sourceProjects,
  ];

  visibleCount = 3;

  currentIndex = signal(this.sourceProjects.length);

  animated = signal(true);

  ngOnInit() {
    this.updateVisibleCount();
    this.currentIndex.set(this.sourceProjects.length);
  }

  @HostListener('window:resize')
  onResize() {
    this.updateVisibleCount();
    this.animated.set(false);
    this.currentIndex.set(this.sourceProjects.length);
    requestAnimationFrame(() => this.animated.set(true));
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

  get canPrev() { return true; }
  get canNext() { return true; }

  prev() {
    this.currentIndex.update(i => i - 1);
    this.checkWrap();
  }

  next() {
    this.currentIndex.update(i => i + 1);
    this.checkWrap();
  }

  private checkWrap() {
    const len = this.sourceProjects.length;
    const idx = this.currentIndex();

    if (idx >= len * 2) {
      setTimeout(() => {
        this.animated.set(false);
        this.currentIndex.set(idx - len);
        requestAnimationFrame(() => this.animated.set(true));
      }, 420);
    }

    if (idx < len) {
      setTimeout(() => {
        this.animated.set(false);
        this.currentIndex.set(idx + len);
        requestAnimationFrame(() => this.animated.set(true));
      }, 420);
    }
  }

  get transformPercent() {
    const translatePercent = (this.currentIndex() * 100) / this.visibleCount;
    return `translateX(-${translatePercent}%)`;
  }

  trackById(_index: number, project: any) {
    return project.id;
  }

  openGithub(): void {
    window.open(this.portfolioService.getContact().github_repos, '_blank');
  }
}
