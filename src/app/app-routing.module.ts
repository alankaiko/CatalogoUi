import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LayoutThemeComponent} from "./themes/layout-theme/layout-theme.component";

const routes: Routes = [
  {
    path: '',
    component: LayoutThemeComponent,
    children: [
      {
        path: 'pages',
        loadChildren: () => import('./pages/pages.module').then(m => m.PagesModule)
      }
    ]
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
