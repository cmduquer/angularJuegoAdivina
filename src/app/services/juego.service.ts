import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class JuegoService {

  private numeromaximo: number = 101;
  private vidaMaxima: number = 5;
  private _estado: BehaviorSubject<string>;
  private _numeros: BehaviorSubject<Array<number>>;
  private numeroAleatorio: number = 1;
  private _vidas: BehaviorSubject<number>;
  private resultadoJuego: string;

  constructor() { 
    this._vidas = <BehaviorSubject<number>> new BehaviorSubject(0);
    this._numeros = <BehaviorSubject<Array<number>>> new BehaviorSubject([]);
    this._estado = <BehaviorSubject<string>> new BehaviorSubject('no iniciado');
  }

  
}
