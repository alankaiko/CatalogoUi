import {Injectable} from '@angular/core';
import {AbstractCrudService} from "../core/service/abstract-crud.service";
import {Produto} from "../shared/model/produto";
import {ProdutoDTO} from "../shared/dto/produto-dto";
import {HttpClient, HttpHeaders, HttpParams} from "@angular/common/http";

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

  uploadHeaders(): HttpHeaders {
    return new HttpHeaders()
      .append('Authorization', 'Bearer ' + localStorage.getItem('token'))
  }

  urlUploadAnexo(): string {
    return `${this.url('')}/anexo`;
  }
}
