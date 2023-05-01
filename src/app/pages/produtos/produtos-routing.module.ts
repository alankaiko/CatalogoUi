import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ListaProdutoComponent} from "./lista-produto/lista-produto.component";
import {CadProdutoComponent} from "./cad-produto/cad-produto.component";

const routes: Routes = [
  {
    path: '',
    component: ListaProdutoComponent,
    data: {
      title: 'Produtos'
    }
  },
  {
    path: 'cadastrar',
    component: CadProdutoComponent,
    data: {
      title: 'Cadastrar Produtos'
    }
  },

  {
    path: ':cod',
    component: CadProdutoComponent,
    data: {
      title: 'Editar Produtos'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProdutosRoutingModule {
}
