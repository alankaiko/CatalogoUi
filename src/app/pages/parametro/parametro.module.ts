import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CadParametroComponent } from './cad-parametro/cad-parametro.component';
import {ComponentesModule} from "../../componentes/componentes.module";
import {ParametroRoutingModule} from "./parametro-routing.module";

@NgModule({
  declarations: [
    CadParametroComponent
  ],
  imports: [
    CommonModule,
    ComponentesModule,
    ParametroRoutingModule
  ]
})
export class ParametroModule { }
