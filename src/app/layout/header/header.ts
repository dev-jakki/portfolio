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
  theme = signal<'dark' | 'light'>('dark');
  activeSection: string = '';

  constructor(
    public translateService: TranslateAppService,
    private elementRef: ElementRef,
  ) {
    this.initializeTheme();
  }

  initializeTheme(): void {
    const savedTheme = localStorage.getItem('theme') as 'dark' | 'light' | null;
    const theme = savedTheme ?? 'dark';
    this.theme.set(theme);
    this.applyTheme(theme);
  }

  applyTheme(theme: 'dark' | 'light'): void {
    document.body.classList.toggle('light-theme', theme === 'light');
    document.body.classList.toggle('dark-theme', theme === 'dark');
    localStorage.setItem('theme', theme);
  }

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

  toggleTheme() {
    const nextTheme = this.theme() === 'dark' ? 'light' : 'dark';
    this.theme.set(nextTheme);
    this.applyTheme(nextTheme);
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
