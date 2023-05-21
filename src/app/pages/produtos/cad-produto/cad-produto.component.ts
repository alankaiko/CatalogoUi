import {Component, OnInit} from '@angular/core';
import {Produto} from "../shared/produto";
import {ProdutoService} from "../shared/produto.service";
import {isEmptyObject} from "jquery";
import {Location} from '@angular/common';
import {MessageService} from "primeng/api";
import {GrupoService} from "../../grupos/shared/grupo.service";

@Component({
  selector: 'app-cad-produto',
  templateUrl: './cad-produto.component.html',
  styleUrls: ['./cad-produto.component.css'],
  providers: [MessageService]
})
export class CadProdutoComponent implements OnInit {
  produto = new Produto;
  dropgrupos: any[];

  constructor(private produtoService: ProdutoService,
              private grupoService: GrupoService,
              private location: Location,
              private messageService: MessageService) {
  }

  ngOnInit(): void {
    this.carregarGrupos();

    if (isEmptyObject(this.produto.datacadastro))
      this.produto.datacadastro = new Date;
  }

  get editando() {
    return Boolean(this.produto.codigo)
  }

  AdicionarProduto() {
    this.produtoService.salvar(this.produto).subscribe(response => {
      if (response) {
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

  carregarGrupos() {
    this.grupoService.listar().toPromise().then(response => {
      this.dropgrupos = response.map(resp => ({label: resp.nome, value: resp}));
    })
  }

  get uploadHeaders() {
    return this.produtoService.uploadHeaders();
  }

  get urlUploadAnexo() {
    return this.produtoService.urlUploadAnexo();
  }

  aoTerminarUploadAnexo(event: any) {
    console.log(event);
    const anexo = event.originalEvent.body;
    if (isEmptyObject(this.produto.imagems))
      this.produto.imagems = [];

    // this.paciente.imagem.nomeimagem = anexo.nome;
    // this.paciente.imagem.caminho = anexo.url;
    // this.paciente.imagem.extensao = anexo.nome.substring(anexo.nome.indexOf('.') + 1, anexo.nome.length);
  }

  erroUpload(event: any) {
    this.messageService.add({severity: 'error', detail: 'Erro ao tentar enviar anexo! '});
  }
}
