import { Component, Input } from '@angular/core';

@Component({
  selector: 'mfe-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent {
  @Input() text = 'Button';
  constructor() {}
}
