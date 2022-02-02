import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { TakeawaysComponent } from "./takeaways.component";

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: TakeawaysComponent
      }
    ])
  ],
  declarations: [
    TakeawaysComponent
  ]
})
export class TakeawaysModule { }