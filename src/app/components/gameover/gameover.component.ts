import { Component, OnInit } from '@angular/core';
import { JuegoService } from './../../services/juego.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-gameover',
  templateUrl: './gameover.component.html',
  styleUrls: ['./gameover.component.css']
})
export class GameoverComponent implements OnInit {

  resultado: string;
  numeros: Array<number>;

  constructor(private juegoService: JuegoService, private router: Router) { }

  ngOnInit() {
    this.resultado = this.juegoService.resultadoFinalJuego();
    this.juegoService.listaNumeros().subscribe(data =>{this.numeros = data});
  }

  restart(): void {
    this.juegoService.comienzaJuego();
    this.router.navigate(['paneljuego']);
  }

  finalizar(): void {
    this.router.navigate(['bienvenida']);
  }

}
