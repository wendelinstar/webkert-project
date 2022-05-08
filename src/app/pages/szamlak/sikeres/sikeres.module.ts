import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SikeresRoutingModule } from './sikeres-routing.module';
import { SikeresComponent } from './sikeres.component';


@NgModule({
  declarations: [
    SikeresComponent
  ],
  imports: [
    CommonModule,
    SikeresRoutingModule
  ]
})
export class SikeresModule { }
