import { Component, OnInit, ɵConsole } from '@angular/core';
import { PeliculasService } from '../../services/peliculas.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-pelicula',
  templateUrl: './pelicula.component.html',
})
export class PeliculaComponent implements OnInit {

  private idPelicula: string;
  private Pelicula;

  constructor(private activatedroute: ActivatedRoute, private peliculasservice: PeliculasService) {
    this.idPelicula = this.activatedroute.snapshot.paramMap.get('id');
  }

  ngOnInit() {
    this.getPeliculasService();
  }

  getPeliculasService() {
    this.peliculasservice.getPelicula(this.idPelicula).then(
      (data: any) => {
        this.Pelicula = data;
        console.log(this.Pelicula);
      }
    ).catch(
      (error) => {
        console.log('error', error);
      }
    );
  }
}
