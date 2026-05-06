import { Component, ChangeDetectionStrategy, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { TranslateAppService } from '../../core/services/translate.service';

@Component({
  selector: 'app-header',
  imports: [CommonModule, RouterLink, TranslateModule],
  templateUrl: './header.html',
  styleUrl: './header.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Header {
  menuOpen = signal(false);
  languageDropdownOpen = signal(false);

  constructor(public translateService: TranslateAppService) {}

  get languages() {
    return this.translateService.getLanguages();
  }

  toggleMenu() {
    this.menuOpen.update(open => !open);
  }

  closeMenu() {
    this.menuOpen.set(false);
  }

  toggleLanguageDropdown() {
    this.languageDropdownOpen.update(open => !open);
  }

  selectLanguage(lang: string) {
    this.translateService.setLanguage(lang);
    this.languageDropdownOpen.set(false);
  }

  getCurrentLanguageName(): string {
    const current = this.translateService.getLanguage();
    return this.languages.find(l => l.code === current)?.name || 'Language';
  }
}

