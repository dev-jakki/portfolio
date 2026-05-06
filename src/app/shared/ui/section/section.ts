import { Component, input, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-section',
  templateUrl: './section.html',
  styleUrl: './section.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SectionComponent {
  title = input<string>('');
  subtitle = input<string>('');
}
