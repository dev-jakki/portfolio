import {
  Component,
  ChangeDetectionStrategy,
  signal,
  HostListener,
  ElementRef,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { TranslateAppService } from '../../core/services/translate.service';

@Component({
  selector: 'app-header',
  imports: [CommonModule, RouterLink, TranslateModule],
  templateUrl: './header.html',
  styleUrl: './header.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Header {
  menuOpen = signal(false);
  languageDropdownOpen = signal(false);
  activeSection: string = '';

  constructor(
    public translateService: TranslateAppService,
    private elementRef: ElementRef,
  ) {}

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent) {
    const target = event.target as HTMLElement;
    const isClickInsideHeader = this.elementRef.nativeElement.contains(target);

    if (!isClickInsideHeader && this.languageDropdownOpen()) {
      this.languageDropdownOpen.set(false);
    }
  }

  @HostListener('window:scroll', [])
  onScroll() {
    const sections = document.querySelectorAll('section');
    const headerHeight = 80; // Altura para detectar a seção ativa

    let current = '';

    sections.forEach(section => {
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

  get languages() {
    return this.translateService.getLanguages();
  }

  toggleMenu() {
    this.menuOpen.update((open) => !open);
  }

  closeMenu() {
    this.menuOpen.set(false);
  }

  toggleLanguageDropdown() {
    this.languageDropdownOpen.update((open) => !open);
  }

  selectLanguage(lang: string) {
    this.translateService.setLanguage(lang);
    this.languageDropdownOpen.set(false);
  }

  getCurrentLanguageFlag(): string {
    const current = this.translateService.getLanguage();
    return this.languages.find((l) => l.code === current)?.flag || 'Language';
  }

  getCurrentLanguageImage(): string {
    const current = this.translateService.getLanguage();
    return this.languages.find((l) => l.code === current)?.image || '🌐';
  }
}
