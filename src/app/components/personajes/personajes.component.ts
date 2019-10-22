import { Component, OnInit } from '@angular/core';
import { PersonajesService } from '../../services/personajes.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html',
  styleUrls: ['./personajes.component.css']
})
export class PersonajesComponent implements OnInit {

  personajes: any = [];

  constructor(private _personajesService: PersonajesService , private router:Router) { }

  ngOnInit() {
    this._personajesService.getPersonajes().then((data: any) => {
      const result = data.results;
      this.personajes = result;
      console.log(this.personajes)
    }).catch(
      (err)=>{
        console.log("ERROR", err)
      }
    );
  }

  verPersonaje(idx: number) {
    this.router.navigate(['/Personaje', idx]);

  }
}


