import { Component, ChangeDetectionStrategy, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { ButtonComponent } from '../../shared/ui/button/button';
import { SectionComponent } from '../../shared/ui/section/section';
import { PortfolioService } from '../../core/services/portfolio.service';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule, TranslateModule, ButtonComponent, SectionComponent],
  templateUrl: './contact.html',
  styleUrl: './contact.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Contact {
  private portfolioService = inject(PortfolioService);
  contact = this.portfolioService.getContact();

  formData = signal({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  updateForm(field: string, value: string) {
    this.formData.update(form => ({
      ...form,
      [field]: value
    }));
  }

  onSubmit() {
    console.log('Form submitted:', this.formData());
    // Reset form
    this.formData.set({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
  }
}
