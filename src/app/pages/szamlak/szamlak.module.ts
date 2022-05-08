import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SzamlakRoutingModule } from './szamlak-routing.module';
import { SzamlakComponent } from './szamlak.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DateFormatPipe } from '../../shared/pipes/date-format.pipe';
import { MatSelectModule } from '@angular/material/select'
import { MatOptionModule } from '@angular/material/core';
import { MatCardModule } from '@angular/material/card'

@NgModule({
  declarations: [
    SzamlakComponent,
    DateFormatPipe
  ],
  imports: [
    CommonModule,
    SzamlakRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatSelectModule,
    MatOptionModule,
    MatCardModule
  ]
})
export class SzamlakModule { }
