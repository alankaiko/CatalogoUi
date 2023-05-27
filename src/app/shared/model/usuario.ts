import {AbstractEntity} from "../../core/model/abstract-entity";
import {Permissao} from "./permissao";

export class Usuario extends AbstractEntity {
  nome: string;
  sobrenome: string;
  login: string;
  senha: string;
  teste: string;
  permissoes: Permissao[];
}
