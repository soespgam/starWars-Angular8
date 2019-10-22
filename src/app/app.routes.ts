import { RouterModule,Routes} from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { PeliculasComponent } from './components/peliculas/peliculas.component';
import { PersonajesComponent } from './components/personajes/personajes.component';
import { PeliculaComponent } from './components/pelicula/pelicula.component';
import {PersonajeComponent} from './components/personaje/personaje.component';




const APP_ROUTES:Routes =[
{ path:'home', component: HomeComponent },
{ path:'About', component: AboutComponent },
{ path:'Peliculas', component: PeliculasComponent },
{ path:'Personajes', component: PersonajesComponent },
{ path:'Personaje/:id', component: PersonajeComponent },
{ path:'Pelicula/:id', component: PeliculaComponent },    
{ path:'**',pathMatch:'full', redirectTo:'home'}

];


export const APP_ROUTING =RouterModule.forRoot(APP_ROUTES);