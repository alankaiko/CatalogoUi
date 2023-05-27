import {AbstractEntity} from "../../core/model/abstract-entity";
import {EnumPermissao} from "../enuns/enum-permissao";

export class Permissao extends AbstractEntity {
  descricao: EnumPermissao;
}
