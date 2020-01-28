import { Component, OnInit } from '@angular/core';
import { JuegoService } from './../../services/juego.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-configuracion',
  templateUrl: './configuracion.component.html',
  styleUrls: ['./configuracion.component.css']
})
export class ConfiguracionComponent implements OnInit {

  max: number;
  vidas: number;

  constructor(private juegoService: JuegoService, private router: Router) {}

  ngOnInit() {
    this.max = this.juegoService.obtieneMaximo();
    this.vidas = this.juegoService.obtieneVidas();
  }

  guardarCambios(): void {
    this.juegoService.ajustaNumeroMaximo(this.max);
    this.juegoService.ajustaVidas(this.vidas);
    alert('Cambios guardados');
    this.router.navigate(['bienvenida']);
  }

}
