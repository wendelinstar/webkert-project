import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HirekRoutingModule } from './hirek-routing.module';
import { HirekComponent } from './hirek.component';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';


@NgModule({
  declarations: [
    HirekComponent
  ],
  imports: [
    CommonModule,
    HirekRoutingModule,
    MatCardModule,
    MatIconModule
  ]
})
export class HirekModule { }
