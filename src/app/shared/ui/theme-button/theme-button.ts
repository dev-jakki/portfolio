import { Component, ChangeDetectionStrategy, signal } from '@angular/core';

@Component({
  selector: 'app-theme-button',
  templateUrl: './theme-button.html',
  styleUrl: './theme-button.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ThemeButtonComponent {
  theme = signal<'dark' | 'light'>('dark');

  constructor() {
    this.initializeTheme();
  }
  
  toggleTheme() {
    const nextTheme = this.theme() === 'dark' ? 'light' : 'dark';
    this.theme.set(nextTheme);
    this.applyTheme(nextTheme);
  }

  applyTheme(theme: 'dark' | 'light'): void {
    document.body.classList.toggle('light-theme', theme === 'light');
    document.body.classList.toggle('dark-theme', theme === 'dark');
    localStorage.setItem('theme', theme);
  }

  initializeTheme(): void {
    const savedTheme = localStorage.getItem('theme') as 'dark' | 'light' | null;
    const theme = savedTheme ?? 'dark';
    this.theme.set(theme);
    this.applyTheme(theme);
  }
}
