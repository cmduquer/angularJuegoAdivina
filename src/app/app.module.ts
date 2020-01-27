import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { JuegoService } from './services/juego.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PanelJuegoComponent } from './components/panel-juego/panel-juego.component';
import { FormsModule } from '@angular/forms';
import { BienvenidaComponent } from './components/bienvenida/bienvenida.component';
import { GameoverComponent } from './components/gameover/gameover.component';
import { ConfiguracionComponent } from './components/configuracion/configuracion.component';

@NgModule({
  declarations: [
    AppComponent,
    PanelJuegoComponent,
    BienvenidaComponent,
    GameoverComponent,
    ConfiguracionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [JuegoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
