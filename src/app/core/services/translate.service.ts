import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TranslateAppService {
  private currentLanguage = signal<string>(this.getInitialLanguage());

  constructor(private translate: TranslateService) {
    this.initializeTranslation();
  }

  private initializeTranslation(): void {
    const savedLanguage = localStorage.getItem('language') || this.currentLanguage();

    this.translate.setDefaultLang('pt-BR');
    this.translate.addLangs(['pt-BR', 'en']);

    this.setLanguage(savedLanguage);
  }

  private getInitialLanguage(): string {
    const saved = localStorage.getItem('language');
    if (saved) return saved;

    const browser = navigator.language;
    if (browser.startsWith('pt')) return 'pt-BR';
    return 'en';
  }

  setLanguage(lang: string): void {
    this.translate.use(lang);
    this.currentLanguage.set(lang);
    localStorage.setItem('language', lang);
  }

  getLanguage(): string {
    return this.currentLanguage();
  }

  getLanguages(): { code: string; label: string; image: string; flag: string }[] {
    return [
      { code: 'pt-BR', label: 'languages.pt-BR.name', image: 'assets/images/br.png', flag: 'languages.pt-BR.flag' },
      { code: 'en', label: 'languages.en.name', image: 'assets/images/us.png', flag: 'languages.en.flag' },
    ];
  }
}
