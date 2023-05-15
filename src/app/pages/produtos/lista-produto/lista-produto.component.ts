import {Component, OnInit} from '@angular/core';
import {ProdutoService} from "../shared/produto.service";
import {ProdutoDTO} from "../shared/produto-dto";
import {response} from "express";

@Component({
  selector: 'app-lista-produto',
  templateUrl: './lista-produto.component.html',
  styleUrls: ['./lista-produto.component.css']
})
export class ListaProdutoComponent implements OnInit{
  filtro = new ProdutoDTO;

  constructor(private produtoService: ProdutoService) {
  }

  ngOnInit(): void {
    this.produtoService.consultar(this.filtro).then(response => {
      console.log('teste');
      console.log(response);
    })
  }

}
