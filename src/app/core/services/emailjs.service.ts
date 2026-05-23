import { Injectable } from '@angular/core';
import emailjs, { type EmailJSResponseStatus } from '@emailjs/browser';

@Injectable({ providedIn: 'root' })
export class EmailJsService {
  private readonly SERVICE_ID = 'service_ghen7vw';
  private readonly TEMPLATE_ID = 'template_0k8af42';
  private readonly PUBLIC_KEY = 'qnO2giboqkp5nevNc';

  sendForm(form: HTMLFormElement): Promise<EmailJSResponseStatus> {
    return emailjs.sendForm(this.SERVICE_ID, this.TEMPLATE_ID, form, {
      publicKey: this.PUBLIC_KEY,
    });
  }
}
