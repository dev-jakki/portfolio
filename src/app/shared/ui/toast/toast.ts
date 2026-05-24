import {
  Component,
  ChangeDetectionStrategy,
  inject,
  input,
  output,
  OnInit,
  OnDestroy,
  signal,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { Toast, ToastService } from '../../../core/services/toast.service';

@Component({
  selector: 'app-toast-item',
  standalone: true,
  imports: [CommonModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div
      class="toast toast--{{ toast().type }}"
      [class.toast--leaving]="leaving()"
      role="alert"
      aria-live="polite"
      (click)="close()"
    >
      <div class="toast__icon">
        @if (toast().type === 'success') {
          <i class="ph ph-check-circle"></i>
        } @else {
          <i class="ph ph-x-circle"></i>
        }
      </div>

      <div class="toast__body">
        <strong class="toast__title">{{ toast().title }}</strong>
        <p class="toast__message">{{ toast().message }}</p>
      </div>

      <button class="toast__close" aria-label="Fechar" (click)="$event.stopPropagation(); close()">
        <i class="ph ph-x"></i>
      </button>

      <div class="toast__progress">
        <div
          class="toast__progress-bar"
          [style.animation-duration.ms]="toast().duration"
        ></div>
      </div>
    </div>
  `,
  styles: [`
    :host { display: block; }

    .toast {
      position: relative;
      display: flex;
      align-items: flex-start;
      gap: 12px;
      padding: 14px 16px 22px;
      border-radius: 12px;
      min-width: 320px;
      max-width: 420px;
      cursor: pointer;
      overflow: hidden;
      backdrop-filter: blur(12px);
      box-shadow:
        0 8px 32px rgba(0, 0, 0, 0.4),
        0 2px 8px rgba(0, 0, 0, 0.25),
        inset 0 1px 0 rgba(255,255,255,0.06);
      animation: toast-in 0.4s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
      transition: transform 0.2s ease;

      &:hover { transform: translateY(-2px); }

      &--leaving {
        animation: toast-out 0.35s ease forwards !important;
        pointer-events: none;
      }

      &--success {
        background: rgba(10, 16, 30, 0.94);
        border: 1px solid rgba(34, 197, 94, 0.45);
        .toast__icon { color: #22c55e; }
        .toast__progress-bar {
          background: linear-gradient(90deg, #22c55e, #4ade80);
          box-shadow: 0 0 8px rgba(34, 197, 94, 0.6);
        }
      }

      &--error {
        background: rgba(10, 16, 30, 0.94);
        border: 1px solid rgba(239, 68, 68, 0.45);
        .toast__icon { color: #ef4444; }
        .toast__progress-bar {
          background: linear-gradient(90deg, #ef4444, #f87171);
          box-shadow: 0 0 8px rgba(239, 68, 68, 0.6);
        }
      }
    }

    .toast__icon {
      font-size: 1.5rem;
      flex-shrink: 0;
      margin-top: 1px;
    }

    .toast__body {
      flex: 1;
      min-width: 0;
    }

    .toast__title {
      display: block;
      font-size: 0.88rem;
      font-weight: 700;
      color: #f1f5f9;
      margin-bottom: 3px;
    }

    .toast__message {
      margin: 0;
      font-size: 0.8rem;
      color: #94a3b8;
      line-height: 1.5;
    }

    .toast__close {
      background: none;
      border: none;
      color: #475569;
      cursor: pointer;
      padding: 2px 4px;
      font-size: 1rem;
      flex-shrink: 0;
      line-height: 1;
      border-radius: 4px;
      transition: color 0.15s ease, background 0.15s ease;
      margin-top: 1px;

      &:hover {
        color: #e2e8f0;
        background: rgba(255,255,255,0.08);
      }
    }

    .toast__progress {
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
      height: 3px;
      background: rgba(255, 255, 255, 0.06);
    }

    .toast__progress-bar {
      height: 100%;
      width: 100%;
      transform-origin: left center;
      border-radius: 0 2px 2px 0;
      animation: progress-shrink linear forwards;
    }

    @keyframes toast-in {
      from {
        opacity: 0;
        transform: translateX(110%) scale(0.88);
      }
      to {
        opacity: 1;
        transform: translateX(0) scale(1);
      }
    }

    @keyframes toast-out {
      from {
        opacity: 1;
        transform: translateX(0) scale(1);
        max-height: 140px;
        margin-bottom: 0;
        padding-top: 14px;
        padding-bottom: 22px;
      }
      to {
        opacity: 0;
        transform: translateX(60%) scale(0.9);
        max-height: 0;
        margin-bottom: -10px;
        padding-top: 0;
        padding-bottom: 0;
      }
    }

    @keyframes progress-shrink {
      from { transform: scaleX(1); }
      to   { transform: scaleX(0); }
    }
  `],
})
export class ToastItemComponent implements OnInit, OnDestroy {
  toast = input.required<Toast>();
  dismissed = output<number>();

  leaving = signal(false);
  private timer: ReturnType<typeof setTimeout> | null = null;

  ngOnInit(): void {
    this.timer = setTimeout(() => this.close(), this.toast().duration);
  }

  ngOnDestroy(): void {
    if (this.timer) clearTimeout(this.timer);
  }

  close(): void {
    if (this.leaving()) return;
    this.leaving.set(true);
    setTimeout(() => this.dismissed.emit(this.toast().id), 350);
  }
}


@Component({
  selector: 'app-toast',
  standalone: true,
  imports: [CommonModule, ToastItemComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="toast-container" aria-label="Notificações">
      @for (t of toastService.toasts(); track t.id) {
        <app-toast-item [toast]="t" (dismissed)="toastService.dismiss($event)" />
      }
    </div>
  `,
  styles: [`
    .toast-container {
      position: fixed;
      top: 24px;
      right: 24px;
      z-index: 9999;
      display: flex;
      flex-direction: column;
      gap: 10px;
      pointer-events: none;
    }

    app-toast-item {
      pointer-events: all;
    }

    @media (max-width: 480px) {
      .toast-container {
        top: 16px;
        right: 12px;
        left: 12px;
      }
    }
  `],
})
export class ToastComponent {
  toastService = inject(ToastService);
}
