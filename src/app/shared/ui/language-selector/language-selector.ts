import { Component, ChangeDetectionStrategy, signal, HostListener, ElementRef, ChangeDetectorRef, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { Subscription } from 'rxjs';
import { TranslateAppService } from '../../../core/services/translate.service';

@Component({
  selector: 'app-language-selector',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './language-selector.html',
  styleUrl: './language-selector.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LanguageSelectorComponent implements OnDestroy {
  languageDropdownOpen = signal(false);
  private languageChangeSubscription?: Subscription;

  get languages() {
    return this.translateService.getLanguages();
  }

  constructor(
    public translateService: TranslateAppService,
    private translate: TranslateService,
    private elementRef: ElementRef,
    private cdr: ChangeDetectorRef,
  ) {
    this.languageChangeSubscription = this.translate.onLangChange.subscribe(() => {
      this.cdr.markForCheck();
    });
  }

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

  getCurrentLanguageImage(): string {
    const current = this.translateService.getLanguage();
    return this.languages.find((l) => l.code === current)?.image || '🌐';
  }

  ngOnDestroy(): void {
    this.languageChangeSubscription?.unsubscribe();
  }
}
