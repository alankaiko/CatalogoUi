import {Injectable} from '@angular/core';
import {AbstractCrudService} from "../../../core/service/abstract-crud.service";
import {Produto} from "./produto";
import {ProdutoDTO} from "./produto-dto";
import {HttpClient, HttpParams} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ProdutoService extends AbstractCrudService<Produto, ProdutoDTO> {
  constructor(http: HttpClient) {
    super('produtos', http);
  }

  consultar(filtro?: ProdutoDTO): Promise<any> {
    let params = new HttpParams({
      fromObject: {
        page: filtro.pagina.toString(),
        size: filtro.itensPorPagina.toString()
      }
    });

    if (filtro.nome)
      params = params.append('nome', filtro.nome);

    return this.http.get<any>(this.url(`?resumo`), { params })
      .toPromise()
      .then(response => {
        const produtos = response;

        const resultado = {
          produtos,
          total: response.totalElements
        };

        return resultado;
      });
  }
}
