import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-panel-juego',
  templateUrl: './panel-juego.component.html',
  styleUrls: ['./panel-juego.component.css']
})
export class PanelJuegoComponent implements OnInit {

  vidas: number = 5;
  numeros: Array<number> = [];
  valorIngresado: number = 5;
  resultado: string = 'En curso';
  finalizado: boolean = false;

  constructor() { }

  ngOnInit() {
  }

}
