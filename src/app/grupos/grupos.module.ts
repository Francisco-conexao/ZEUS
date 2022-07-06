import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DragDropModule } from "@angular/cdk/drag-drop";

import { GruposRoutingModule } from './grupos-routing.module';
import { GruposComponent } from './grupos.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [GruposComponent],
  imports: [
    FormsModule,
    CommonModule,
    GruposRoutingModule,
    DragDropModule
  ]
})
export class GruposModule { }
