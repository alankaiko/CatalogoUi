import {AbstractEntity} from "../../../core/model/abstract-entity";
import {Imagem} from "../../produtos/shared/imagem";

export class Informacao extends AbstractEntity {
  texto!: string;
  imagem!: Imagem;
}
