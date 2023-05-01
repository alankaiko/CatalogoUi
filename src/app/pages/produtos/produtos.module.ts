import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListaProdutoComponent } from './lista-produto/lista-produto.component';
import { CadProdutoComponent } from './cad-produto/cad-produto.component';
import {ProdutosRoutingModule} from "./produtos-routing.module";

@NgModule({
  declarations: [
    ListaProdutoComponent,
    CadProdutoComponent
  ],
  imports: [
    CommonModule,
    ProdutosRoutingModule
  ]
})
export class ProdutosModule { }
