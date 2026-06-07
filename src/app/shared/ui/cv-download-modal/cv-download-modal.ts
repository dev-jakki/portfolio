import {
  Component,
  ChangeDetectionStrategy,
  output,
  HostListener,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-cv-download-modal',
  imports: [CommonModule, TranslateModule],
  templateUrl: './cv-download-modal.html',
  styleUrl: './cv-download-modal.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CvDownloadModalComponent {
  closed = output<void>();

  close() {
    this.closed.emit();
  }

  @HostListener('document:keydown.escape')
  onEscape() {
    this.close();
  }

  downloadFile(fileName: string) {
    const link = document.createElement('a');
    link.href = `assets/cv/${fileName}`;
    link.download = fileName;
    link.click();
  }

  downloadFrontend() {
    this.downloadFile('curriculo-frontend-angular.pdf');
  }

  downloadFullstack() {
    this.downloadFile('curriculo-fullstack-angular-java.pdf');
  }

  downloadCoverLetter() {
    this.downloadFile('cover-letter.pdf');
  }
}
