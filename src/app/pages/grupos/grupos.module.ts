import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListaGrupoComponent } from './lista-grupo/lista-grupo.component';
import { CadGrupoComponent } from './cad-grupo/cad-grupo.component';
import {GruposRoutingModule} from "./grupos-routing.module";

@NgModule({
  declarations: [
    ListaGrupoComponent,
    CadGrupoComponent
  ],
  imports: [
    CommonModule,
    GruposRoutingModule
  ]
})
export class GruposModule { }
