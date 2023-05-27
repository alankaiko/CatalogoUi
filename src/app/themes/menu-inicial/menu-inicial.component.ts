import {Component, OnInit} from '@angular/core';
import {MenuItem} from "primeng/api";
import {LogoutService} from "../../seguranca/logout.service";
import {Router} from "@angular/router";
import {ErrorHandlerService} from "../../seguranca/error-handler.service";

@Component({
  selector: 'menu-inicial',
  templateUrl: './menu-inicial.component.html',
  styleUrls: ['./menu-inicial.component.css']
})
export class MenuInicialComponent implements OnInit {
  items: MenuItem[];

  constructor(private logoutService: LogoutService,
              private errorHandler: ErrorHandlerService,
              private router: Router) {
  }

  ngOnInit(): void {
    this.CarregarMenu();
  }

  CarregarMenu() {
    this.items = [
      {
        label: 'Parametro', routerLink: ['pages/parametro/cadastrar'],
      },
      {
        label: 'Grupo', routerLink: ['pages/grupos'],
      },
      {
        label: 'Cadastrar Parametro', routerLink: ['pages/produtos/cadastrar'],
      },
      {
        label: 'Cadastrar Grupo', routerLink: ['pages/grupos/cadastrar'],
      },
      {
        label: 'Sair', command: () => this.logout(),
        visible: true
      }
    ];
  }

  logout() {
    this.logoutService.logout()
      .then(() => {
        this.router.navigate(['/login']);
      })
      .catch(erro => this.errorHandler.handle(erro));
  }
}
