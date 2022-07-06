import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class GruposService {

    private url: string = 'https://6edeayi7ch.execute-api.us-east-1.amazonaws.com/v1/examen/';

    constructor(private http: HttpClient) { }

    getAllGrupos() {
        return new Promise(
            resolve => {
                this.http.get<any>(this.url + 'groups/francisco')
                .subscribe(
                    data => {
                        resolve(data);
                    }
                )
            }
        )
    }

    getEmpleados(data) {
        return new Promise(
            resolve => {
                this.http.get<any>(this.url + 'employees/francisco/getByGroup?id='+data)
                .subscribe(
                    data => {
                        data.data.employees.forEach(item => {
                            item.check = true;
                        });
                        resolve(data);
                    }
                )
            }
        )
    }
}
