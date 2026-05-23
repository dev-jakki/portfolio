import {
  Component,
  ChangeDetectionStrategy,
  inject,
  signal,
  computed,
  viewChild,
  ElementRef,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { ButtonComponent } from '../../shared/ui/button/button';
import { PortfolioService } from '../../core/services/portfolio.service';
import { EmailJsService } from '../../core/services/emailjs.service';

type FormStatus = 'idle' | 'loading' | 'success' | 'error';

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, TranslateModule, ButtonComponent],
  templateUrl: './contact.html',
  styleUrl: './contact.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Contact {
  private portfolioService = inject(PortfolioService);
  private emailJsService = inject(EmailJsService);

  contact = this.portfolioService.getContact();

  formRef = viewChild<ElementRef<HTMLFormElement>>('contactForm');

  formErrors = signal<FormErrors>({});
  formStatus = signal<FormStatus>('idle');
  charCount = signal(0);

  isLoading = computed(() => this.formStatus() === 'loading');
  isSuccess = computed(() => this.formStatus() === 'success');
  isError = computed(() => this.formStatus() === 'error');

  onMessageInput(event: Event) {
    this.charCount.set((event.target as HTMLTextAreaElement).value.length);
    this.clearError('message');
  }

  clearError(field: keyof FormErrors) {
    this.formErrors.update(errors => ({ ...errors, [field]: undefined }));
  }

  private validate(form: HTMLFormElement): boolean {
    const data = new FormData(form);
    const errors: FormErrors = {};

    const name = (data.get('name') as string)?.trim();
    const email = (data.get('email') as string)?.trim();
    const message = (data.get('message') as string)?.trim();

    if (!name) errors.name = 'required';
    if (!email) {
      errors.email = 'required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      errors.email = 'invalid';
    }
    if (!message) {
      errors.message = 'required';
    } else if (message.length < 10) {
      errors.message = 'minLength';
    }

    this.formErrors.set(errors);
    return Object.keys(errors).length === 0;
  }

  async sendEmail(event: Event) {
    event.preventDefault();
    const form = (event.target as HTMLFormElement);

    if (!this.validate(form)) return;

    this.formStatus.set('loading');

    try {
      await this.emailJsService.sendForm(form);
      this.formStatus.set('success');
      form.reset();
      this.charCount.set(0);
      this.formErrors.set({});
      setTimeout(() => this.formStatus.set('idle'), 5000);
    } catch {
      this.formStatus.set('error');
      setTimeout(() => this.formStatus.set('idle'), 5000);
    }
  }
}
