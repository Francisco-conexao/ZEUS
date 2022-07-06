import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { EmpleadosRoutingModule } from './empleados-routing.module';
import { EmpleadosComponent } from './empleados.component';
import {FiltroPipe} from './../pipes/filtro.pipe'

@NgModule({
  declarations: [EmpleadosComponent, FiltroPipe],
  imports: [
    FormsModule,
    CommonModule,
    EmpleadosRoutingModule
  ]
})
export class EmpleadosModule { }
