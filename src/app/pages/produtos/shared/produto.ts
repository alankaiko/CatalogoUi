import {AbstractEntity} from "../../../core/model/abstract-entity";

export class Produto extends AbstractEntity{
  nome!: string;
  descricao!: string;
}
