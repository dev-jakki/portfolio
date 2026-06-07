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
  templateUrl: './toast-item.html',
  styleUrl: './toast-item.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
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
  templateUrl: './toast.html',
  styleUrl: './toast.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ToastComponent {
  toastService = inject(ToastService);
}
