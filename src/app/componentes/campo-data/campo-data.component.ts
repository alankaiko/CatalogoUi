import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {PrimeNGConfig} from "primeng/api";
import {constantes} from "../../core/constante";

@Component({
  selector: 'campo-data',
  templateUrl: './campo-data.component.html',
  styleUrls: ['./campo-data.component.css']
})
export class CampoDataComponent implements OnInit {
  @Input() labelText!: string;
  @Input() name!: string;
  @Input() classe = "";
  @Input() dateFormat!: string;
  @Input() placeholder = "00/00/0000";
  @Input() yearRange: string = '1900:2030'
  @Input() monthNavigator: boolean = false;
  @Input() yearNavigator: boolean = false;
  @Input() style: { [key: string]: string; } = {};
  @Input() styleLabel: { [key: string]: string; } = {};
  @Input() styleData: { [key: string]: string; } = {};
  @Input() required: boolean = false;
  @Input() readOnly: boolean = false;
  @Input() possuiLabel: boolean = true;
  @Input() showOnFocus: boolean = true;
  @Input() timeOnly: boolean = false;
  @Input() inline: boolean = false;
  @Input() stepMinute!: number;
  @Input() minDate!: Date;
  @Input() maxDate!: Date;

  private _textoSelecionado: any;
  @Output() textoChange: EventEmitter<any> = new EventEmitter<any>();
  @Output() onClose: EventEmitter<any> = new EventEmitter<any>();
  @Output() change: EventEmitter<any> = new EventEmitter<any>();

  constructor(private config: PrimeNGConfig) {
  }

  ngOnInit(): void {
    this.config.setTranslation(constantes.calendar.pt);
  }

  get texto(): any {
    return this._textoSelecionado;
  }

  @Input() set texto(value: any) {
    if(this._textoSelecionado === value)
      return;

    this._textoSelecionado = value;
    this.textoChange.emit(this._textoSelecionado);
  }
}
