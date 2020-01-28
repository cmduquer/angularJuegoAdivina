import { Component, OnInit } from '@angular/core';
import { JuegoService } from './../../services/juego.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-panel-juego',
  templateUrl: './panel-juego.component.html',
  styleUrls: ['./panel-juego.component.css']
})
export class PanelJuegoComponent implements OnInit {
  valorJuego: number;
  vidas: number = 0;
  estado: string;
  numeros: Array<number> = [];
  valorIngresado: number;
  resultado: string = 'En curso';
  finalizado: boolean = false;
  ganador: boolean = false;
  pista: string;
  max: number;

  constructor(private juegoService: JuegoService, private router: Router) {
    this.juegoService.estadoJuego().subscribe(next =>{this.estado = next});
  }

  ngOnInit() {
    this.max = this.juegoService.obtieneMaximo();
    if(this.estado !== 'iniciado'){
      if(this.estado === 'finalizado'){
        this.router.navigate(['gameover']);
      }
    }
    if(this.estado === 'no iniciado'){
      this.router.navigate(['bienvenida']);
    } else {
      this.juegoService.comienzaJuego();
      this.juegoService.listaNumeros().subscribe( next => { this.numeros = next });
    }
    this.juegoService.numeroVidas().subscribe(next => {this.vidas = next});
  }
  
  intento(): void {
    const resultado = this.juegoService.ingresaNumero(this.valorIngresado);
    if(resultado == '=') {
      this.juegoService.finalizaJuego();
      this.router.navigate(['gameover']);
    } else {
      if(this.estado==='finalizado'){
        this.juegoService.finalizaJuego();
        this.router.navigate(['gameover']);
      }
      if(resultado === '>'){
        this.pista = 'El número es muy grande';
      }
      if(resultado === '<'){
        this.pista = 'El número es muy pequeño';
      }
    }
    this.valorIngresado = 0;
    
  }

  reinicio() : void {
    this.juegoService.reset();
  }

}
