import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import {InstitucionalRoutingModule} from "./institucional-routing.module";
import { QuemSomosComponent } from './quem-somos/quem-somos.component';
import { ProdutosComponent } from './produtos/produtos.component';
import { PortifolioComponent } from './portifolio/portifolio.component';
import { OrcamentoComponent } from './orcamento/orcamento.component';
import { ContatoComponent } from './contato/contato.component';

@NgModule({
  declarations: [
    HomeComponent,
    QuemSomosComponent,
    ProdutosComponent,
    PortifolioComponent,
    OrcamentoComponent,
    ContatoComponent
  ],
  imports: [
    CommonModule,
    InstitucionalRoutingModule
  ]
})
export class InstitucionalModule { }
