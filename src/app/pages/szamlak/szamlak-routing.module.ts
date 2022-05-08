import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SzamlakComponent } from './szamlak.component';

const routes: Routes = [
  { path: '', component: SzamlakComponent },
  { path: 'sikeres', loadChildren: () => import('./sikeres/sikeres.module').then(m => m.SikeresModule) }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SzamlakRoutingModule { }
