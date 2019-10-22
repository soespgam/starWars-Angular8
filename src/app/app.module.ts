import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core'; 
import {FormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

//Rutas
import{APP_ROUTING}from './app.routes';

//Servicios
import{PersonajesService} from './services/personajes.service';
import{PeliculasService} from './services/peliculas.service';

//componentes

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { PersonajesComponent } from './components/personajes/personajes.component';
import { PeliculasComponent } from './components/peliculas/peliculas.component';
import { AboutComponent } from './components/about/about.component';
import { PeliculaComponent } from './components/pelicula/pelicula.component';
import { PersonajeComponent } from './components/personaje/personaje.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    PersonajesComponent,
    PeliculasComponent,
    AboutComponent,
    PeliculaComponent,
    PersonajeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    APP_ROUTING
  ],
  //aca van los servicios
  providers: [
    PersonajesService,
    PeliculasService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
