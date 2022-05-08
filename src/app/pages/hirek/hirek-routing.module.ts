import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HirekComponent } from './hirek.component';

const routes: Routes = [
  { path: '', component: HirekComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HirekRoutingModule { }
