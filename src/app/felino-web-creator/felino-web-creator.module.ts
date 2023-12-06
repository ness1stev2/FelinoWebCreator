import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScrollingModule } from '@angular/cdk/scrolling';

import { FelinoWebCreatorRoutingModule } from './felino-web-creator-routing.module';
import { InicioComponent } from './inicio/inicio.component';
import { NosotrosComponent } from './nosotros/nosotros.component';
import { PreciosComponent } from './precios/precios.component';
import { ServiciosComponent } from './servicios/servicios.component';


@NgModule({
  declarations: [
    InicioComponent,
    NosotrosComponent,
    PreciosComponent,
    ServiciosComponent,
  ],
  imports: [
    CommonModule,
    FelinoWebCreatorRoutingModule,
    ScrollingModule,
  ]
})
export class FelinoWebCreatorModule { }
