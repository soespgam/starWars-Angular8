import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';



@Injectable()
export class PersonajesService {

    constructor(private http: HttpClient, private router: Router) { }

    getPersonajes() {
        return new Promise((resolve, reject) => {
            this.http.get('https://swapi.dev/api/people/?format=json').subscribe(
                result => {
                    resolve(result);
                },
                err => {
                    reject(err)
                });
        });
    }

    getPersonaje(id: string) {
        let index = Number.parseInt(id);
        index = index + 1;
        return new Promise((resolve, reject) => {
            this.http.get('https://swapi.dev/api/people/' + index + '/').subscribe(
                result => {
                    resolve(result);
                },
                err => {
                    reject(err)
                });
        });
    }
}
