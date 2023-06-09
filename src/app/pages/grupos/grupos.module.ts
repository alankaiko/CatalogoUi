import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListaGrupoComponent } from './lista-grupo/lista-grupo.component';
import { CadGrupoComponent } from './cad-grupo/cad-grupo.component';
import {GruposRoutingModule} from "./grupos-routing.module";
import {ComponentesModule} from "../../componentes/componentes.module";
import {ToastModule} from "primeng/toast";
import {TableModule} from "primeng/table";

@NgModule({
  declarations: [
    ListaGrupoComponent,
    CadGrupoComponent
  ],
  imports: [
    CommonModule,
    GruposRoutingModule,
    ComponentesModule,
    ToastModule,
    TableModule
  ]
})
export class GruposModule { }
