import {Component, Input, OnInit} from '@angular/core';
import {Produto} from "../../shared/model/produto";

@Component({
  selector: 'card-produto',
  templateUrl: './card-produto.component.html',
  styleUrls: ['./card-produto.component.css']
})
export class CardProdutoComponent implements OnInit {
  @Input() produto: Produto;

  constructor() { }

  ngOnInit(): void {
  }

}
