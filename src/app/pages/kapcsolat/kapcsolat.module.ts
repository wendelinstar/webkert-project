import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { KapcsolatRoutingModule } from './kapcsolat-routing.module';
import { KapcsolatComponent } from './kapcsolat.component';
import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';


@NgModule({
  declarations: [
    KapcsolatComponent
  ],
  imports: [
    CommonModule,
    KapcsolatRoutingModule,
    FormsModule,
    MatCardModule,
    MatIconModule
  ]
})
export class KapcsolatModule { }
