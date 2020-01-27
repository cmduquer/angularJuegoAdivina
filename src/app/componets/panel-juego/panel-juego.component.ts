import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-panel-juego',
  templateUrl: './panel-juego.component.html',
  styleUrls: ['./panel-juego.component.css']
})
export class PanelJuegoComponent implements OnInit {
  valorJuego: number;
  vidas: number = 5;
  numeros: Array<number> = [];
  valorIngresado: number;
  resultado: string = 'En curso';
  finalizado: boolean = false;
  ganador: boolean = false;
  pista: string;

  constructor() { }

  ngOnInit() {
    this.valorJuego = Math.floor(Math.random() * (101));
  }
  
  intento(): void {
    if(this.valorIngresado == this.valorJuego) {
      this.ganador = true;
      this.finalizado = true;
      this.pista = 'Igual';
    }
    if(this.valorIngresado > this.valorJuego) {
      this.pista = 'Mi número es menor';
    }
    if(this.valorIngresado < this.valorJuego) {
      this.pista = 'Mi número es mayor';
    }
    this.numeros.push(this.valorIngresado);
    console.log(this.numeros);
    this.vidas = this.vidas - 1;
    if(this.vidas === 0){
      this.finalizado = true;
    }
  }

  reinicio() : void {
    this.valorJuego = Math.floor(Math.random() * (101));  
    this.vidas = 5;
    this.numeros = [];
    this.valorIngresado = null;
    this.finalizado = false;
    this.ganador = false;
    this.pista = '';
  }

}
