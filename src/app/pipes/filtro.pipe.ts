import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'filtro'
})
export class FiltroPipe implements PipeTransform {

    transform(empleados: any, page:number = 0, buscar:string = ''): any {
        
        const filteEmpleados = empleados.filter(item => {
            return (item.name.toLowerCase().indexOf(buscar.toLowerCase()) > -1 || item.last_name.toLowerCase().indexOf(buscar.toLowerCase()) > -1);
        })
        
        return filteEmpleados.slice(page, page+10);
    }

}
