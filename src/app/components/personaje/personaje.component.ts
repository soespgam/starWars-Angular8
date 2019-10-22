import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PersonajesService } from '../../services/personajes.service';

@Component({
  selector: 'app-personaje',
  templateUrl: './personaje.component.html',
  styleUrls: ['./personaje.component.css']
})
export class PersonajeComponent implements OnInit {

  private idPersonaje: string;
  private personaje;

  constructor(private activatedroute: ActivatedRoute, private personajesservice: PersonajesService) {
    this.idPersonaje = this.activatedroute.snapshot.paramMap.get('id');
  }

  ngOnInit() {
    this.getPersonajesService();
  }

  getPersonajesService() {
    this.personajesservice.getPersonaje(this.idPersonaje).then(
      (data: any) => {
        this.personaje = data;
        console.log(this.personaje);
      }).catch(
        (error) => {
          console.log('error', error)
        });
  }

}
