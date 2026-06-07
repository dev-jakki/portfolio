import { Component, ChangeDetectionStrategy, inject, ViewChild, ElementRef, AfterViewInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { PortfolioService } from '../../core/services/portfolio.service';
import { Subscription } from 'rxjs';
import ace from 'ace-builds';
import 'ace-builds/src-noconflict/ext-language_tools';
import 'ace-builds/src-noconflict/mode-javascript';
import 'ace-builds/src-noconflict/theme-one_dark';

@Component({
  selector: 'app-about-me',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './about-me.html',
  styleUrl: './about-me.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AboutMe implements AfterViewInit, OnDestroy {
  @ViewChild('editor') private editor!: ElementRef<HTMLElement>;

  portfolioService = inject(PortfolioService);
  private translate = inject(TranslateService);

  about = this.portfolioService.getAbout();
  readonly yearsOfExperience = new Date().getFullYear() - 2023 || 1;

  private aceEditor: ace.Ace.Editor | null = null;
  private langSub: Subscription | null = null;

  private buildCode(): string {
    const t = (key: string) => this.translate.instant(`about.codeBlock.${key}`);

    return `const Jakki = {
    ${t('nome')}: "Jackciel Felix",
    ${t('idade')}: 21,
    ${t('formacao')}: "${t('formacaoValue')}",
    ${t('foco')}: "${t('focoValue')}",
    ${t('paixoes')}: ${t('paixoesValue')},
    ${t('tecnologias')}: ["Angular", "TypeScript", "Java", "Spring Boot 3"],
    ${t('objetivo')}: "${t('objetivoValue')}"
}


${t('comment')}
`;
  }

  ngAfterViewInit() {
    if (window.innerWidth <= 768) return;

    this.aceEditor = ace.edit(this.editor.nativeElement, {
      mode: 'ace/mode/javascript',
      theme: 'ace/theme/one_dark',
      readOnly: false,
      showPrintMargin: false,
      fontSize: '14px',
      highlightActiveLine: false,
      highlightGutterLine: false,
      maxLines: Infinity,
      minLines: 15,
      wrap: true,
      useWorker: false
    });

    this.aceEditor.setValue(this.buildCode(), -1);

    this.langSub = this.translate.onLangChange.subscribe(() => {
      this.aceEditor?.setValue(this.buildCode(), -1);
    });
  }

  ngOnDestroy() {
    this.langSub?.unsubscribe();
  }
}
