import { Component, OnInit } from '@angular/core';
import { JuegoService } from './../../services/juego.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-bienvenida',
  templateUrl: './bienvenida.component.html',
  styleUrls: ['./bienvenida.component.css']
})
export class BienvenidaComponent implements OnInit {

  estado: string;

  constructor(private juegoService: JuegoService, private router: Router) { 
    this.juegoService.estadoJuego().subscribe( next => { this.estado = next});
  }

  ngOnInit() {
    if(this.estado === 'iniciado'){
      this.router.navigate(['paneljuego']);
    }
  }

  iniciarJuego(): void{
    this.juegoService.comienzaJuego();
    this.router.navigate(['paneljuego']);
  }

  configurar(): void {
    this.router.navigate(['configuracion']);
  }

}
