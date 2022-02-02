import { Component, OnInit } from '@angular/core';
import { AppFacade } from '@mfe/shared';

@Component({
  selector: 'mfe-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss'],
})
export class CategoriesComponent {
  constructor(public appFacade: AppFacade) {}
}
