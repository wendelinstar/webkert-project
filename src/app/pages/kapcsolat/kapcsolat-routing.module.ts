import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { KapcsolatComponent } from './kapcsolat.component';

const routes: Routes = [
  { path: '', component: KapcsolatComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class KapcsolatRoutingModule { }
