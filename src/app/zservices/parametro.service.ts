import {Injectable} from '@angular/core';
import {AbstractCrudService} from "../core/service/abstract-crud.service";
import {Parametro} from "../shared/model/parametro";
import {ParametroDTO} from "../shared/dto/parametro-dto";
import {HttpClient, HttpHeaders, HttpParams} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ParametroService extends AbstractCrudService<Parametro, ParametroDTO> {
  constructor(http: HttpClient) {
    super('parametros', http);
  }

  consultar(filtro?: ParametroDTO): Promise<any> {
    let params = new HttpParams({
      fromObject: {
        page: filtro.pagina.toString(),
        size: filtro.itensPorPagina.toString()
      }
    });

    if (filtro.nome)
      params = params.append('nome', filtro.nome);

    return this.http.get<any>(this.url(`?resumo`), {params})
      .toPromise()
      .then(response => {
        const parametros = response;

        const resultado = {
          parametros,
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
