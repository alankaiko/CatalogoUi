import {Component, OnInit} from '@angular/core';
import {MenuItem} from "primeng/api";

@Component({
  selector: 'institucional-menu',
  templateUrl: './institucional-menu.component.html',
  styleUrls: ['./institucional-menu.component.css']
})
export class InstitucionalMenuComponent implements OnInit {
  items: MenuItem[];

  constructor() {
  }

  ngOnInit(): void {
    this.CarregarMenu();
  }

  CarregarMenu() {
    this.items = [
      {
        label: 'Home', routerLink: ['institucional/home'],
      },
      {
        label: 'Quem Somos', routerLink: ['institucional/quemsomos'],
      },
      {
        label: 'Produtos'
      },
      {
        label: 'Portifólio'
      },
      {
        label: 'Orçamento'
      },
      {
        label: 'Contato'
      },
    ];
  }
}
