import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BejelentkezesRoutingModule } from './bejelentkezes-routing.module';
import { BejelentkezesComponent } from './bejelentkezes.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field'
import { MatInputModule } from '@angular/material/input'
import { MatButtonModule } from '@angular/material/button'
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner'

@NgModule({
  declarations: [
    BejelentkezesComponent
  ],
  imports: [
    CommonModule,
    BejelentkezesRoutingModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatProgressSpinnerModule
  ]
})
export class BejelentkezesModule { }
