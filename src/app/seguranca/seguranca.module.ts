import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';

import { LoginFormComponent } from './login-form/login-form.component';
import {NaoAutorizadoComponent} from "./nao-autorizado.component";
import {PaginaNaoEncontradaComponent} from "./pagina-nao-encontrada.component";
import {ConfirmarLoginComponent} from "./confirmar-login/confirmar-login.component";
import {DialogModule} from "primeng/dialog";
import {ComponentesModule} from "../componentes/componentes.module";

export function tokenGetter() {
  return localStorage.getItem('token');
}

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    InputTextModule,
    ButtonModule,
    DialogModule,
    ComponentesModule
  ],
  declarations: [
    LoginFormComponent,
    NaoAutorizadoComponent,
    PaginaNaoEncontradaComponent,
    ConfirmarLoginComponent
  ],
  providers: [

  ]
})
export class SegurancaModule { }
