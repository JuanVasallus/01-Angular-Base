import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';


@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent {

  nuevo: Personaje ={
    nombre: 'Maestro Roshi',
    poder: 1000
  }

  personaje: Personaje[] = [
    {
      nombre: 'Goku',
      poder: 15000
    },
    {
      nombre: 'Vegeta',
      poder: 7500
    }
  ];

  agregarNuevoPersonaje(argumento: Personaje){
    this.personaje.push(argumento);
  }  
}
