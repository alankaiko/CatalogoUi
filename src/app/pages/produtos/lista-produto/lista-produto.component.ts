import {Component, OnInit} from '@angular/core';
import {ProdutoService} from "../../../zservices/produto.service";
import {ProdutoDTO} from "../../../shared/dto/produto-dto";
import {Produto} from "../../../shared/model/produto";
import {LazyLoadEvent} from "primeng/api";

@Component({
  selector: 'app-lista-produto',
  templateUrl: './lista-produto.component.html',
  styleUrls: ['./lista-produto.component.css']
})
export class ListaProdutoComponent implements OnInit{
  filtro = new ProdutoDTO;
  produtos: Produto[];
  totalRegistros = 0;

  constructor(private produtoService: ProdutoService) {
  }

  ngOnInit(): void {
  }

  Consultar(pagina = 0): Promise<any> {
    this.filtro.pagina = pagina;

    return this.produtoService.consultar(this.filtro)
      .then(response => {
        this.totalRegistros = response.total;
        this.produtos = response.produtos.content;
      }).catch(erro => console.log(erro));
  }

  MudarPagina(event: LazyLoadEvent) {
    setTimeout(() => {
      this.filtro.nome = event.globalFilter;
      const pagina = event.first! / event.rows!;
      this.Consultar(pagina);
    }, 250);
  }

}
