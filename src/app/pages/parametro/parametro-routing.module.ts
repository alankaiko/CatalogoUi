import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CadParametroComponent} from "./cad-parametro/cad-parametro.component";

const routes: Routes = [
  {
    path: 'cadastrar',
    component: CadParametroComponent,
    data: {
      title: 'Cadastrar Parâmetro'
    }
  },

  {
    path: ':cod',
    component: CadParametroComponent,
    data: {
      title: 'Editar Parâmetro'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ParametroRoutingModule {
}
