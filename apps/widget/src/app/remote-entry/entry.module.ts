import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { RemoteEntryComponent } from './entry.component';
import { BannerComponent } from '../banner/banner.component';
import { LoanComponent } from '../loan/loan.component';
import { CategoriesComponent } from '../categories/categories.component';
import { ButtonModule } from '@mfe/ui/button';
import { SharedModule } from '@mfe/shared';

@NgModule({
  declarations: [
    RemoteEntryComponent,
    BannerComponent,
    LoanComponent,
    CategoriesComponent,
  ],
  imports: [
    CommonModule,
    ButtonModule,
    SharedModule,
    RouterModule.forChild([
      {
        path: '',
        component: RemoteEntryComponent,
      },
    ]),
  ],
  providers: [],
})
export class RemoteEntryModule {}
