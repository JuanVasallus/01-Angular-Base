import { Component } from "@angular/core"; 

@Component({
    selector: 'app-contador',
    template:`
        <hr>
        <h1>{{title}}</h1>

        <span>Con 2 Metodos</span>
        <br>
        <button (click)="sumar();">+1</button>
        <span> {{numero}} </span>
        <button (click)="restar();">-1</button>
        <br><br><br>
        <span>Con 1 Metodos</span>
        <br>
        <button (click)="acumular(+1);">+1</button>
        <span> {{numero2}} </span>
        <button (click)="acumular(-1);">-1</button>
        
        <br><br><br>
        <span>Con Valor Base</span>
        <br>
        <button (click)="acumularbase(base);">+ {{base}}</button>
        <span> La base es: <strong> {{numero3}} </strong>  </span>
        <button (click)="acumularbase(-base);">- {{base}}</button>
    `

})


export class contadorComponent{
    title: string = 'Contador App';
    numero: number = 10;
    numero2: number = 10;
    numero3: number = 10;
  
    base: number = 15;
  
    sumar()  {
      this.numero += 1;
    }
    restar()  {
      this.numero -= 1
    }
  
    acumular (valor: number){
      this.numero2 += valor;
    }
  
    acumularbase (valor: number){
      this.numero3 += valor;
    }
}