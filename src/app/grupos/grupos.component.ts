import { Component, OnInit } from '@angular/core';
import { GruposService } from '../services/grupos.service';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';

@Component({
    selector: 'app-grupos',
    templateUrl: './grupos.component.html',
    styleUrls: ['./grupos.component.scss']
})
export class GruposComponent implements OnInit {

    grupos:any = [];
    gruposDone:any = [];
    grupoDrag:any = {};

    empleados:any = [];

    constructor(private gruposServ: GruposService) { }

    ngOnInit(): void {
        this.listarGrupos();
    }

    listarGrupos(){
        this.gruposServ.getAllGrupos().then((data:any)=>{
            this.grupos = data.data.groups;
        })
    }


    onDropped(event: CdkDragDrop<string[]>){
        if (event.previousContainer !== event.container) {
            let grupoDrag = this.grupos[event.previousIndex];
            grupoDrag.check = true;
            if(!this.gruposDone.find(item => item.id == grupoDrag.id )){
                this.gruposServ.getEmpleados(grupoDrag.id).then((data:any)=>{
                    grupoDrag.empleados = data.data.employees;
                    this.gruposDone.push(grupoDrag);
                })
            }
            
        }
    }

    checked(grupo){
        grupo.empleados.forEach(item => {
            item.check = grupo.check;
        });
    }

    borrarGrupo(index){
        this.gruposDone.splice(index,1);
    }

    continuar(){
        this.gruposDone.forEach(grupo => {
            grupo.empleados.forEach(empleado =>{
                if(empleado.check){
                    console.log(empleado);
                }
            })
        });
        
    }
}
