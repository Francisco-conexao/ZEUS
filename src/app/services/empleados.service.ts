import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
	providedIn: 'root'
})
export class EmpleadosService {
	
	private url:string = 'https://6edeayi7ch.execute-api.us-east-1.amazonaws.com/v1/examen/';

	constructor(private http: HttpClient) { }

	getAllEmpleados(){
		return new Promise(
            resolve => {
                this.http.get<any>(this.url + 'employees/francisco')
                    .subscribe(
                        data => {
                            resolve(data);
                        }
                    )
            }
        )
	}

	setEmpleado(data){
		return new Promise(
            resolve => {
                this.http.post<any>(this.url + 'employees/francisco', data)
                    .subscribe(
                        data => {
                            resolve(data);
                        }
                    )
            }
        )
	}
}
