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

  @ViewChild('heroVisual') heroVisual!: ElementRef<HTMLDivElement>;

  // Parallax transform signals
  readonly photoTransform = signal('translate(0px, 0px)');
  readonly iconsTransform = signal('translate(0px, 0px)');
  readonly glowTransform = signal('translate(0px, 0px)');

  // Subtitles keys for rotation
  readonly subtitleKeys = [
    'home.subtitle_jog_1',
    'home.subtitle_jog_2',
    'home.subtitle_jog_3',
  ];

  // Signal to track the current subtitle index
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

    // Normalized position from -1 to 1
    const x = ((event.clientX - rect.left) / rect.width - 0.5) * 2;
    const y = ((event.clientY - rect.top) / rect.height - 0.5) * 2;

    // Photo moves subtly in the same direction as the cursor
    this.photoTransform.set(`translate(${x * 10}px, ${y * 8}px)`);

    // Icons move a bit more, in opposite direction (depth effect)
    this.iconsTransform.set(`translate(${x * -16}px, ${y * -12}px)`);

    // Glow follows the cursor gently
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
