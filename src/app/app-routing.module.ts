import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './shared/services/auth.guard'

const routes: Routes = [
  { 
  path: 'bejelentkezes', 
  loadChildren: () => import('./pages/bejelentkezes/bejelentkezes.module').then(m => m.BejelentkezesModule)
  },
  {
  path: 'regisztracio', 
  loadChildren: () => import('./pages/regisztracio/regisztracio.module').then(m => m.RegisztracioModule) 
  },
  {
  path: 'hirek', 
  loadChildren: () => import('./pages/hirek/hirek.module').then(m => m.HirekModule) 
  },
  {
  path: 'kapcsolat', 
  loadChildren: () => import('./pages/kapcsolat/kapcsolat.module').then(m => m.KapcsolatModule) 
  },
  {
  path: 'szamlak', 
  loadChildren: () => import('./pages/szamlak/szamlak.module').then(m => m.SzamlakModule),
  canActivate: [AuthGuard]
  },
  {
  path: 'not-found', 
  loadChildren: () => import('./pages/not-found/not-found.module').then(m => m.NotFoundModule) 
  },
  {
    path: '',
    redirectTo: '/bejelentkezes',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: '/not-found'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
