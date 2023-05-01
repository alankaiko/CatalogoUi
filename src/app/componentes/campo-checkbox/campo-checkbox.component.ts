import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'campo-checkbox',
  templateUrl: './campo-checkbox.component.html',
  styleUrls: ['./campo-checkbox.component.css']
})
export class CampoCheckboxComponent implements OnInit {
  @Input() labelText: string;
  @Input() classe = "";
  @Input() style: { [key: string]: string; } = {};
  @Input() readOnly: boolean = false;
  @Input() binary: boolean = true;
  @Input() possuiLabel: boolean = false;
  @Input() placeholder: string = '';

  private _textoSelecionado: any;
  @Output() textoChange: EventEmitter<boolean> = new EventEmitter<boolean>();

  ngOnInit(): void {}

  get texto(): boolean {
    return this._textoSelecionado;
  }

  @Input() set texto(value: boolean) {
    if(this._textoSelecionado === value)
      return;

    this._textoSelecionado = value;
    this.textoChange.emit(this._textoSelecionado);
  }

}
