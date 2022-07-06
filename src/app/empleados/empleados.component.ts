import { Component, OnInit } from '@angular/core';
import { EmpleadosService } from '../services/empleados.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { from } from 'rxjs';

@Component({
    selector: 'app-empleados',
    templateUrl: './empleados.component.html',
    styleUrls: ['./empleados.component.scss']
})
export class EmpleadosComponent implements OnInit {

    empleados:any = [];
    empleadoForm:any = {};
    buscar:string;

    page: number = 0;
    pagina:number = 1;

    constructor(private empleadosServ: EmpleadosService, private modalService: NgbModal) {
       
    }

    ngOnInit(): void {
        this.listarEmpleados();
    }

    listarEmpleados(){
        this.empleadosServ.getAllEmpleados().then((data:any)=>{
            this.empleados = data.data.employees;
        })
    }

    nextPage(){
        this.page += 10
        this.pagina ++;
    }

    prevPage(){
        if(this.page >0 ){
            this.page -= 10;
            this.pagina --;
        }
    }

    modalView(modal){
        this.modalService.open(modal, { backdropClass: 'light-blue', size: 'md' });
    }

    guardarEmpleado(form){
        this.empleadoForm.birthday = this.empleadoForm.birthday.replace('-','/')
        this.empleadoForm.birthday = this.empleadoForm.birthday.replace('-','/')
        this.empleadosServ.setEmpleado(this.empleadoForm).then(data=>{
            this.modalService.dismissAll();
            this.listarEmpleados();
        })
    }
}
