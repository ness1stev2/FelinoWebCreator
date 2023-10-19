import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FelinoWebCreatorRoutingModule } from './felino-web-creator-routing.module';
import { InicioComponent } from './inicio/inicio.component';
import { NosotrosComponent } from './nosotros/nosotros.component';


@NgModule({
  declarations: [
    InicioComponent,
    NosotrosComponent
  ],
  imports: [
    CommonModule,
    FelinoWebCreatorRoutingModule
  ]
})
export class FelinoWebCreatorModule { }
