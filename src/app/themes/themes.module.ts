import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuInicialComponent } from './menu-inicial/menu-inicial.component';
import { RodapeComponent } from './rodape/rodape.component';
import { LayoutThemeComponent } from './layout-theme/layout-theme.component';
import {RouterModule} from "@angular/router";
import {MenubarModule} from "primeng/menubar";

@NgModule({
  declarations: [
    MenuInicialComponent,
    RodapeComponent,
    LayoutThemeComponent
  ],
    imports: [
        CommonModule,
        RouterModule,
      MenubarModule
    ]
})
export class ThemesModule { }
