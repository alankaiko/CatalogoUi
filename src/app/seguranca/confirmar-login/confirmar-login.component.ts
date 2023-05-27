import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ConfirmationService, MessageService} from "primeng/api";
import {isEmptyObject} from "jquery";
import {Usuario} from "../../shared/model/usuario";
import {UsuarioService} from "../../zservices/usuario.service";

@Component({
  selector: 'confirmar-login',
  templateUrl: './confirmar-login.component.html',
  styleUrls: ['./confirmar-login.component.css'],
  providers: [ConfirmationService, MessageService]
})
export class ConfirmarLoginComponent implements OnInit {
  @Input() visible: boolean;
  @Output() visibleChange: EventEmitter<boolean> = new EventEmitter();
  @Output() onClose: EventEmitter<any> = new EventEmitter();
  @Input() tituloHeader: string = 'Confirmar Login';
  @Input() styleDialog: string = '';
  @Output() onSalvar: EventEmitter<any> = new EventEmitter();
  @Output() onCancelar: EventEmitter<any> = new EventEmitter();
  @Input() usuario = new Usuario;

  constructor(private confirmacao: ConfirmationService,
              private messageService: MessageService,
              private service: UsuarioService) { }

  ngOnInit(): void {}

  async removerClasses() {
    const corpo = document.getElementsByClassName('p-dialog')[0] as HTMLDivElement;
    await corpo.classList.add('window');
    await corpo.classList.remove('p-dialog');

    const header = document.getElementsByClassName('p-dialog-header')[0] as HTMLDivElement;
    await header.classList.add('title-bar');
    await header.classList.remove('p-dialog-header');

    const titulo = document.getElementsByClassName('p-dialog-title')[0] as HTMLDivElement;
    await titulo.classList.add('title-bar-text');
    await titulo.classList.remove('p-dialog-title');

    const botaofechar = document.getElementsByClassName('p-dialog-header-icons')[0] as HTMLButtonElement;
    await botaofechar.classList.add('title-bar-controls');
    await botaofechar.classList.remove('p-dialog-header-icons');

    const iconebotao = document.getElementsByClassName('p-dialog-header-close-icon')[0] as HTMLElement;
    iconebotao.classList.remove('pi-times','pi');
  }

  private CamposErro(campo: string) {
    this.messageService.add({severity:'error', summary: 'Erro', detail:'Preencher campo ' + campo.toUpperCase(), life:6000});
  }

  public onShow() {
    this.usuario.login = localStorage.getItem('login');

    this.removerClasses();
  }

  public onHide() {
    this.visibleChange.emit(false);
    this.usuario = new Usuario;
  }

  Salvar() {
    if(this.ValidaCampoVazio())
      return;

    this.VerificarLogin();
  }

  VerificarLogin() {
    this.service.VerificarSenhaUsuario(this.usuario).then(response => {
      this.onClose.emit(response);
      this.visibleChange.emit(false);
      this.usuario = new Usuario;
    });
  }

  ValidaCampoVazio() {
    if (isEmptyObject(this.usuario.login)){
      this.CamposErro('Login');
      const editor = document.getElementById('login');
      editor.setAttribute('style' , 'background-color: #fcd5d5; text-transform: uppercase;');
      return true;
    }

    if (isEmptyObject(this.usuario.senha)){
      this.CamposErro('Senha');
      const editor = document.getElementById('senha');
      editor.setAttribute('style' , 'background-color: #fcd5d5; text-transform: uppercase;');
      return true;
    }

    return false;
  }


}
