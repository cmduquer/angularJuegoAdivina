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

  public comienzaJuego(): void {
    this._vidas.next(this.vidaMaxima);
    this._numeros.next([]);
    this.numeroAleatorio = Math.floor(Math.random()*(this.numeromaximo));
    this._estado.next('iniciado');
  }

  public finalizaJuego(): void {
    this._estado.next('finalizado');
  }
  
  public estadoJuego(): Observable<string> {
    return this._estado;
  }

  public ingresaNumero(n: number): string {
    const arreglo = this._numeros.getValue();
    arreglo.push(n);
    this._numeros.next(arreglo);
    this._vidas.next(this._vidas.getValue() - 1);
    if(n == this.numeroAleatorio){
      this.resultadoJuego = 'ganador';
      return '='; 
    } else {
      if(this._vidas.getValue() === 0) {
        this._estado.next('finalizado');
        this.resultadoJuego = 'perdedor';
      }
      if(n > this.numeroAleatorio){
        return '>';
      }
      if(n < this.numeroAleatorio){
        return '<';
      }
    }
  }

  public listaNumeros(): Observable<Array<number>> {
    return this._numeros;
  }

  public reset() {
    this._estado.next('no iniciado');
    this._numeros.next([]);
  }

  public numeroVidas(): Observable<number> {
    return this._vidas;
  }

  public resultadoFinalJuego(): string {
    return this.resultadoJuego;
  }
  
  public obtieneVidas(): number {
    return this.vidaMaxima;
  }

  public ajustaVidas(vidas: number): void{
    this.vidaMaxima = vidas;
  }

  public ajustaNumeroMaximo(max: number) : void{
    this.numeromaximo = max;
  }

  public obtieneMaximo(): number{
    return this.numeromaximo;
  }
  
}
