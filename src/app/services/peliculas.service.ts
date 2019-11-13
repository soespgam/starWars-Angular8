import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';



@Injectable()
export class PeliculasService {


    constructor(private http: HttpClient) { }

    getPeliculas() {
        return new Promise((res, error) => {
            this.http.get('https://swapi.co/api/films/?format=json').subscribe(
                response => {
                    res(response)
                },
                err => {
                    error(err)
                }
            )
        });
    }

    getPelicula(id: string) {
        let index = Number.parseInt(id);
        index = index + 1
        return new Promise((resolve, reject) => {
            this.http.get('https://swapi.co/api/films/' + index + '/').subscribe(
                result => {
                    resolve(result);
                },
                err => {
                    reject(err)
                }
            )
        });
    }

}

