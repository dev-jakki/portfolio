import { Component, input, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.html',
  styleUrl: './card.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CardComponent {
  hoverable = input(false);
}
