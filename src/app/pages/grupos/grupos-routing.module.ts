import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ListaGrupoComponent} from "./lista-grupo/lista-grupo.component";
import {CadGrupoComponent} from "./cad-grupo/cad-grupo.component";

const routes: Routes = [
  {
    path: '',
    component: ListaGrupoComponent,
    data: {
      title: 'Grupos'
    }
  },
  {
    path: 'cadastrar',
    component: CadGrupoComponent,
    data: {
      title: 'Cadastrar Grupo'
    }
  },

  {
    path: ':cod',
    component: CadGrupoComponent,
    data: {
      title: 'Editar Grupo'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GruposRoutingModule {
}
