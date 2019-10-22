import { Component, OnInit } from '@angular/core';
import { PeliculasService } from '../../services/peliculas.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-peliculas',
  templateUrl: './peliculas.component.html',
  styleUrls: ['./peliculas.component.css']
})
export class PeliculasComponent implements OnInit {

  peliculas: any[];

  constructor(private _serviciopeliculas: PeliculasService, private router: Router) {
  }

  ngOnInit() {
    this.getPrueba();
  }

  getPrueba() {
    this._serviciopeliculas.getPeliculas().then(
      (data: any) => {
        const response = data.results;
        console.log(data);
        this.peliculas = response;
        console.log(this.peliculas);
      }).catch(
        (error) => {
          console.log('error', error)
        }
      );
  }
  verPelicula(idx: number) {
    this.router.navigate(['/Pelicula', idx]);

  }

}
