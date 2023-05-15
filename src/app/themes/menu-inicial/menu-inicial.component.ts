import {Component, OnInit} from '@angular/core';
import {MenuItem} from "primeng/api";

@Component({
  selector: 'menu-inicial',
  templateUrl: './menu-inicial.component.html',
  styleUrls: ['./menu-inicial.component.css']
})
export class MenuInicialComponent implements OnInit{
  items: MenuItem[];

  ngOnInit(): void {
    this.CarregarMenu();
  }

  CarregarMenu() {
    this.items = [
      {
        label: 'Produto', routerLink: ['pages/produtos'],
      },
      {
        label: 'Grupo', routerLink: ['pages/grupos'],
      },
      {
        label: 'Cadastrar Produto', routerLink: ['pages/produtos/cadastrar'],
      },
      {
        label: 'Cadastrar Grupo', routerLink: ['pages/grupos/cadastrar'],
      },
    ];
  }
}
