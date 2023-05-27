import {Component, OnInit} from '@angular/core';
import {Parametro} from "../../../shared/model/parametro";
import {ParametroService} from "../../../zservices/parametro.service";
import {MessageService} from "primeng/api";
import {Location} from "@angular/common";
import {Informacao} from "../../../shared/model/informacao";
import {isEmptyObject} from "jquery";

@Component({
  selector: 'app-cad-parametro',
  templateUrl: './cad-parametro.component.html',
  styleUrls: ['./cad-parametro.component.css'],
  providers: [MessageService]
})
export class CadParametroComponent implements OnInit {
  parametro = new Parametro;

  constructor(private parametroService: ParametroService,
              private location: Location,
              private messageService: MessageService) {
  }

  ngOnInit(): void {
    this.carregarParametro();

    if(isEmptyObject(this.parametro.datacadastro))
      this.parametro.datacadastro = new Date;
  }

  get uploadHeaders() {
    return this.parametroService.uploadHeaders();
  }

  async carregarParametro() {
    await this.parametroService.buscarId(1)
      .subscribe(parametro => {
        if(parametro) {
          this.parametro = parametro;
          if(isEmptyObject(this.parametro.informacoes)){
            this.parametro.informacoes = [];
          }
        }

        else
          this.parametro = new Parametro;
      });
  }

  get urlUploadAnexo() {
    return this.parametroService.urlUploadAnexo();
  }

  aoTerminarUploadAnexo(event: any) {
    const anexo = event.originalEvent.body;

    // this.paciente.imagem.nomeimagem = anexo.nome;
    // this.paciente.imagem.caminho = anexo.url;
    // this.paciente.imagem.extensao = anexo.nome.substring(anexo.nome.indexOf('.') + 1, anexo.nome.length);
  }

  erroUpload(event: any) {
    this.messageService.add({severity: 'error', detail: 'Erro ao tentar enviar anexo! '});
  }

  SalvarParametro() {
    this.parametroService.salvar(this.parametro).subscribe(response => {
      if (response) {
        this.messageService.add({
          severity: 'info',
          summary: 'Salvo',
          life: 6000
        });
        this.Voltar();
      }
    })
  }

  Voltar() {
    this.location.back();
  }

  adicionarInformacao() {
    this.parametro.informacoes.push(new Informacao);
  }

  removerParametro() {
  }
}
