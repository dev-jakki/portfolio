import { Component, ChangeDetectionStrategy, inject, signal, effect, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { ButtonComponent } from '../../shared/ui/button/button';
import { PortfolioService } from '../../core/services/portfolio.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, TranslateModule, ButtonComponent],
  templateUrl: './home.html',
  styleUrl: './home.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Home {
  portfolioService = inject(PortfolioService);

  // Subtitles keys for rotation
  readonly subtitleKeys = [
    'home.subtitle_jog_1',
    'home.subtitle_jog_2',
    'home.subtitle_jog_3',
  ];

  // Signal to track the current subtitle index
  readonly currentSubtitleIndex = signal(1); // Start at index 1 (home.subtitle_jog_1)

  constructor() {
    // Effect to rotate subtitles every 4 seconds
    effect(() => {
      const intervalId = setInterval(() => {
        this.currentSubtitleIndex.update((prev) => (prev + 1) % this.subtitleKeys.length);
      }, 4000);

      return () => clearInterval(intervalId);
    });
  }

  getActiveSubtitleKey() {
    return this.subtitleKeys[this.currentSubtitleIndex()];
  }

  scrollTo(sectionId: string): void {
    const el = document.getElementById(sectionId);
    
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
