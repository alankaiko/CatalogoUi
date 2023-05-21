import {AbstractEntity} from "../../../core/model/abstract-entity";
import {Imagem} from "./imagem";
import {Grupo} from "../../grupos/shared/grupo";

export class Produto extends AbstractEntity{
  nome!: string;
  descricao!: string;
  imagems!: Imagem[];
  grupo!: Grupo;
  informacao!: string;
}
