import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListaProdutoComponent } from './lista-produto/lista-produto.component';
import { CadProdutoComponent } from './cad-produto/cad-produto.component';
import {ProdutosRoutingModule} from "./produtos-routing.module";
import {ComponentesModule} from "../../componentes/componentes.module";
import {ToastModule} from "primeng/toast";
import {DataViewModule} from "primeng/dataview";

@NgModule({
  declarations: [
    ListaProdutoComponent,
    CadProdutoComponent
  ],
  imports: [
    CommonModule,
    ProdutosRoutingModule,
    ComponentesModule,
    ToastModule,
    DataViewModule
  ]
})
export class ProdutosModule { }
