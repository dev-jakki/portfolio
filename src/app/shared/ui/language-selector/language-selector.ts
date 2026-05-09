import { Component, ChangeDetectionStrategy, signal, HostListener, ElementRef } from '@angular/core';
import { TranslateAppService } from '../../../core/services/translate.service';

@Component({
  selector: 'app-language-selector',
  templateUrl: './language-selector.html',
  styleUrl: './language-selector.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LanguageSelectorComponent {
  languageDropdownOpen = signal(false);

  get languages() {
    return this.translateService.getLanguages();
  }

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
