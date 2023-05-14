import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {DashboardComponent} from "./dashboard/dashboard.component";
import {LayoutThemeComponent} from "../themes/layout-theme/layout-theme.component";

const routes: Routes = [
  {
    path: '',
    component: LayoutThemeComponent,
    data: {
      title: 'Dashboard'
    },
    children: [
      {
        path: 'dashboard',
        component: DashboardComponent,
      }
    ]
  },

  {
    path: 'produtos',
    loadChildren: () => import('./produtos/produtos.module').then(m => m.ProdutosModule)
  },
  {
    path: 'grupos',
    loadChildren: () => import('./grupos/grupos.module').then(m => m.GruposModule)
  },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PagesRoutingModule {
}
