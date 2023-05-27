import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {InstitucionalThemeComponent} from "../themes/institucional-theme/institucional-theme.component";
import {QuemSomosComponent} from "./quem-somos/quem-somos.component";

const routes: Routes = [
  {
    path: '',
    component: InstitucionalThemeComponent,
    data: {
      title: 'Home'
    },
    children: [
      {
        path: 'home',
        component: HomeComponent,
      }
    ]
  },
  {
    path: '',
    component: InstitucionalThemeComponent,
    data: {
      title: 'Quem Somos'
    },
    children: [
      {
        path: 'quemsomos',
        component: QuemSomosComponent,
      }
    ]
  },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class InstitucionalRoutingModule {
}
