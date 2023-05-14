import {Injectable} from '@angular/core';
import {AbstractCrudService} from "../../../core/service/abstract-crud.service";
import {HttpClient} from "@angular/common/http";
import {Grupo} from "./grupo";
import {GrupoDTO} from "./grupo-dto";

@Injectable({
  providedIn: 'root'
})
export class GrupoService extends AbstractCrudService<Grupo, GrupoDTO> {
  constructor(http: HttpClient) {
    super('grupos', http);
  }
}
