import {AbstractEntity} from "../../../core/model/abstract-entity";
import {Informacao} from "./informacao";

export class Parametro extends AbstractEntity {
  nome!: string;
  informacoes!: Informacao[];
}
