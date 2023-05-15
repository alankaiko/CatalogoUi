import {Component, OnInit} from '@angular/core';
import {Produto} from "../shared/produto";
import {ProdutoService} from "../shared/produto.service";
import {isEmptyObject} from "jquery";
import {Location} from '@angular/common';
import {MessageService} from "primeng/api";

@Component({
  selector: 'app-cad-produto',
  templateUrl: './cad-produto.component.html',
  styleUrls: ['./cad-produto.component.css'],
  providers: [MessageService]
})
export class CadProdutoComponent implements OnInit {
  produto = new Produto;

  constructor(private produtoService: ProdutoService,
              private location: Location,
              private messageService: MessageService) {
  }

  ngOnInit(): void {

    if (isEmptyObject(this.produto.datacadastro))
      this.produto.datacadastro = new Date;
  }

  get editando() {
    return Boolean(this.produto.codigo)
  }

  AdicionarProduto() {
    this.produtoService.salvar(this.produto).subscribe(response => {
      if (response) {
        this.messageService.add({
          severity: 'info',
          summary: 'Salvo',
          life: 6000
        });
        this.Voltar();
      }
    });
  }

  Voltar() {
    this.location.back();
  }

  private CamposErro(campo: string) {
    this.messageService.add({
      severity: 'error',
      summary: 'Erro',
      detail: 'Preencher campo ' + campo.toUpperCase(),
      life: 6000
    });
  }

}
