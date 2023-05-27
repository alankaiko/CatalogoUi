import {Injectable} from '@angular/core';
import {AbstractCrudService} from "../core/service/abstract-crud.service";
import {HttpClient, HttpParams} from "@angular/common/http";
import {Grupo} from "../shared/model/grupo";
import {GrupoDTO} from "../shared/dto/grupo-dto";

@Injectable({
  providedIn: 'root'
})
export class GrupoService extends AbstractCrudService<Grupo, GrupoDTO> {
  constructor(http: HttpClient) {
    super('grupos', http);
  }

  consultar(filtro?: GrupoDTO): Promise<any> {
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
        const grupos = response;

        const resultado = {
          grupos,
          total: response.totalElements
        };

        return resultado;
      });
  }
}
