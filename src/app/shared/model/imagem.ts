import {AbstractEntity} from "../../core/model/abstract-entity";

export class Imagem extends AbstractEntity{
  caminho!: string;
  nomeimagem!: string;
  extensao!: string;
}
