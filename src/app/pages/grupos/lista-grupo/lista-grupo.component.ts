import {Component, OnInit} from '@angular/core';
import {GrupoService} from "../../../zservices/grupo.service";
import {Grupo} from "../../../shared/model/grupo";
import {LazyLoadEvent} from "primeng/api";
import {GrupoDTO} from "../../../shared/dto/grupo-dto";

@Component({
  selector: 'lista-grupo',
  templateUrl: './lista-grupo.component.html',
  styleUrls: ['./lista-grupo.component.css']
})
export class ListaGrupoComponent implements OnInit{
  grupos: Grupo[];
  filtro = new GrupoDTO;
  totalRegistros = 0;

  constructor(private grupoService: GrupoService) {
  }

  ngOnInit(): void {
  }

  Consultar(pagina = 0): Promise<any> {
    this.filtro.pagina = pagina;

    return this.grupoService.consultar(this.filtro)
      .then(response => {
        this.totalRegistros = response.total;
        this.grupos = response.grupos.content;
      }).catch(erro => console.log(erro));
  }

  MudarPagina(event: LazyLoadEvent) {
    setTimeout(() => {
      this.filtro.nome = event.globalFilter;
      const pagina = event.first! / event.rows!;
      this.Consultar(pagina);
    }, 250);
  }
}
