import { Component, input, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.html',
  styleUrl: './button.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ButtonComponent {
  text = input('');
  icon = input('');
  variant = input<'primary' | 'secondary' | 'outline'>('primary');
  disabled = input(false);
  loading = input(false);
}
