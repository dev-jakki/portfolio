import { Component, ChangeDetectionStrategy, signal, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { TranslateAppService } from '../../core/services/translate.service';
import { ThemeButtonComponent } from '../../shared/ui/theme-button/theme-button';
import { LanguageSelectorComponent } from '../../shared/ui/language-selector/language-selector';
import { CvDownloadModalComponent } from '../../shared/ui/cv-download-modal/cv-download-modal';

@Component({
  selector: 'app-header',
  imports: [
    CommonModule,
    RouterLink,
    TranslateModule,
    ThemeButtonComponent,
    LanguageSelectorComponent,
    CvDownloadModalComponent,
  ],
  templateUrl: './header.html',
  styleUrl: './header.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Header {
  menuOpen = signal(false);
  cvModalOpen = signal(false);
  activeSection: string = '';

  constructor(public translateService: TranslateAppService) {}

  openCvModal() {
    this.cvModalOpen.set(true);
  }

  closeCvModal() {
    this.cvModalOpen.set(false);
  }

  @HostListener('window:scroll', [])
  onScroll() {
    const sections = document.querySelectorAll('section');
    const headerHeight = 200; // Altura para detectar a seção ativa

    let current = '';

    sections.forEach((section) => {
      const rect = section.getBoundingClientRect();

      if (rect.top <= headerHeight && rect.bottom >= headerHeight) {
        current = section.id;
      }
    });

    this.activeSection = current;
  }

  menuActive(nameSection: string): boolean {
    if (this.activeSection === nameSection) return true;
    return false;
  }

  toggleMenu() {
    this.menuOpen.update((open) => !open);
  }

  closeMenu() {
    this.menuOpen.set(false);
  }
}
