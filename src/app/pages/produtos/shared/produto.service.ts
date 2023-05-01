import {Injectable} from '@angular/core';
import {AbstractCrudService} from "../../../core/service/abstract-crud.service";
import {Produto} from "./produto";
import {ProdutoDTO} from "./produto-dto";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ProdutoService extends AbstractCrudService<Produto, ProdutoDTO> {
  constructor(http: HttpClient) {
    super('produtos', http);
  }
}
