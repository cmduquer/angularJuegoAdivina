import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PanelJuegoComponent } from './components/panel-juego/panel-juego.component';
import { GameoverComponent } from './components/gameover/gameover.component';
import { BienvenidaComponent } from './components/bienvenida/bienvenida.component';
import { ConfiguracionComponent } from './components/configuracion/configuracion.component';


const routes: Routes = [
  { path: '', redirectTo: 'bienvenida', pathMatch: 'full' },
  {
    path: 'bienvenida',
    component: BienvenidaComponent
  },
  {
    path: 'gameover',
    component: GameoverComponent
  },
  {
    path: 'paneljuego',
    component: PanelJuegoComponent
  },
  {
    path: 'configuracion',
    component: ConfiguracionComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
