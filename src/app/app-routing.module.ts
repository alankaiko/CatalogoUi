import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LayoutThemeComponent} from "./themes/layout-theme/layout-theme.component";
import {LoginFormComponent} from "./seguranca/login-form/login-form.component";
import {NaoAutorizadoComponent} from "./seguranca/nao-autorizado.component";
import {PaginaNaoEncontradaComponent} from "./seguranca/pagina-nao-encontrada.component";
import {AuthGuard} from "./seguranca/auth.guard";

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'institucional',
        loadChildren: () => import('./institucional/institucional.module').then(m => m.InstitucionalModule)
      }
    ]
  },

  {
    path: '',
    canActivate: [AuthGuard],
    component: LayoutThemeComponent,
    children: [
      {
        path: 'pages',
        loadChildren: () => import('./pages/pages.module').then(m => m.PagesModule)
      }
    ]
  },

  {path: '', redirectTo: 'institucional/home', pathMatch: 'full'},
  {path: 'login', component: LoginFormComponent},
  {path: 'nao-autorizado', component: NaoAutorizadoComponent},
  {path: 'pagina-nao-encontrada', component: PaginaNaoEncontradaComponent},
  {path: '**', redirectTo: 'pagina-nao-encontrada'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
