import {AbstractEntity} from "../../core/model/abstract-entity";
import {Imagem} from "./imagem";

export class Informacao extends AbstractEntity {
  titulo!: string;
  texto!: string;
  imagem!: Imagem;
}
