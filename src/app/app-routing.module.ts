import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmpleadosComponent } from './empleados/empleados.component';
import { GruposComponent } from './grupos/grupos.component';
import { HomeComponent } from './home/home.component';

import { RutasGuard } from "./guards/rutas.guard";

const routes: Routes = [
    {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
    },{
        path: 'empleados',
        loadChildren: ()=> import('./empleados/empleados.module').then(m => m.EmpleadosModule)
    },{
        path: 'grupos',
        loadChildren: ()=> import('./grupos/grupos.module').then(m =>m.GruposModule)
    },{
        path: 'home',
        loadChildren: ()=> import('./home/home.module').then(m =>m.HomeModule)
    },{  
        path: '**',
        component: HomeComponent,
        canActivate: [RutasGuard]
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
