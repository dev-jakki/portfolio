import { Component, ChangeDetectionStrategy, inject, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { PortfolioService } from '../../core/services/portfolio.service';
import ace from 'ace-builds';
import 'ace-builds/src-noconflict/ext-language_tools';
import 'ace-builds/src-noconflict/mode-javascript';
import 'ace-builds/src-noconflict/theme-one_dark';

const code = `const Jakki = {
    nome: "Jackciel Felix",
    idade: 21,
    formacao: "Engenharia de Software",
    foco: "Análise e Desenvolvimento",
    paixoes: ["Resolver problemas", "API", "UI/UX"],
    tecnologias: ["Angular", "TypeScript", "Java", "Spring Boot 3"],
    objetivo: "Criar soluções que fazem a diferença"
}


// Vamos construir algo incrível juntos? 🚀
`;

@Component({
  selector: 'app-about-me',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './about-me.html',
  styleUrl: './about-me.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AboutMe implements AfterViewInit {
  @ViewChild('editor') private editor!: ElementRef<HTMLElement>;
  portfolioService = inject(PortfolioService);
  about = this.portfolioService.getAbout();

  ngAfterViewInit() {
    const aceEditor = ace.edit(this.editor.nativeElement, {
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

    aceEditor.setValue(code, -1);
  }
}
