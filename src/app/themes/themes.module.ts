import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MenuInicialComponent} from './menu-inicial/menu-inicial.component';
import {RodapeComponent} from './rodape/rodape.component';
import {LayoutThemeComponent} from './layout-theme/layout-theme.component';
import {RouterModule} from "@angular/router";
import {MenubarModule} from "primeng/menubar";
import { InstitucionalThemeComponent } from './institucional-theme/institucional-theme.component';
import { InstitucionalMenuComponent } from './institucional-menu/institucional-menu.component';
import { InstitucionalRodapeComponent } from './institucional-rodape/institucional-rodape.component';

@NgModule({
  declarations: [
    MenuInicialComponent,
    RodapeComponent,
    LayoutThemeComponent,
    InstitucionalThemeComponent,
    InstitucionalMenuComponent,
    InstitucionalRodapeComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    MenubarModule
  ]
})
export class ThemesModule {
}
