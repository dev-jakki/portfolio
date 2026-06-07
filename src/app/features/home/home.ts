import { Component, ChangeDetectionStrategy, inject, signal, effect, ElementRef, ViewChild, HostListener } from '@angular/core';
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

  readonly yearsOfExperience = new Date().getFullYear() - 2023 || 1;

  @ViewChild('heroVisual') heroVisual!: ElementRef<HTMLDivElement>;

  readonly photoTransform = signal('translate(0px, 0px)');
  readonly iconsTransform = signal('translate(0px, 0px)');
  readonly glowTransform = signal('translate(0px, 0px)');

  readonly subtitleKeys = [
    'home.subtitle_jog_1',
    'home.subtitle_jog_2',
    'home.subtitle_jog_3',
  ];

  readonly currentSubtitleIndex = signal(1);

  constructor() {
    effect(() => {
      const intervalId = setInterval(() => {
        this.currentSubtitleIndex.update((prev) => (prev + 1) % this.subtitleKeys.length);
      }, 4000);

      return () => clearInterval(intervalId);
    });
  }

  onVisualMouseMove(event: MouseEvent): void {
    const el = this.heroVisual.nativeElement;
    const rect = el.getBoundingClientRect();

    const x = ((event.clientX - rect.left) / rect.width - 0.5) * 2;
    const y = ((event.clientY - rect.top) / rect.height - 0.5) * 2;

    this.photoTransform.set(`translate(${x * 10}px, ${y * 8}px)`);
    this.iconsTransform.set(`translate(${x * -16}px, ${y * -12}px)`);
    this.glowTransform.set(`translate(${x * 20}px, ${y * 16}px)`);
  }

  onVisualMouseLeave(): void {
    this.photoTransform.set('translate(0px, 0px)');
    this.iconsTransform.set('translate(0px, 0px)');
    this.glowTransform.set('translate(0px, 0px)');
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
