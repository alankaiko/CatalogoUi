import {Component, OnInit} from '@angular/core';
import {Grupo} from "../shared/grupo";
import {Location} from '@angular/common';
import {GrupoService} from "../shared/grupo.service";
import {MessageService} from "primeng/api";
import {isEmptyObject} from "jquery";

@Component({
  selector: 'cad-grupo',
  templateUrl: './cad-grupo.component.html',
  styleUrls: ['./cad-grupo.component.css'],
  providers: [MessageService]
})
export class CadGrupoComponent implements OnInit {
  grupo = new Grupo;

  constructor(private grupoService: GrupoService,
              private location: Location,
              private messageService: MessageService) {
  }

  ngOnInit(): void {
    if(isEmptyObject(this.grupo.datacadastro))
      this.grupo.datacadastro = new Date;
  }

  get editando() {
    return Boolean(this.grupo.codigo)
  }

  AdicionarGrupo() {
    this.grupoService.salvar(this.grupo).subscribe(response => {
     if(response) {
       this.messageService.add({
         severity: 'info',
         summary: 'Salvo',
         life: 6000
       });
       this.Voltar();
     }
    });
  }

  Voltar() {
    this.location.back();
  }

  private CamposErro(campo: string) {
    this.messageService.add({
      severity: 'error',
      summary: 'Erro',
      detail: 'Preencher campo ' + campo.toUpperCase(),
      life: 6000
    });
  }
}
