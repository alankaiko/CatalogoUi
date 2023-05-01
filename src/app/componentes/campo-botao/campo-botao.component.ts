import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'campo-botao',
  templateUrl: './campo-botao.component.html',
  styleUrls: ['./campo-botao.component.css']
})
export class CampoBotaoComponent implements OnInit {
    @Input() style: { [key: string]: string; } = {};
    @Input() styleClass: string;
    @Input() disabled: boolean = false;
    @Input() pButton: string;
    @Input() pRipple!: string;
    @Input() type: string;
    @Input() label: string;
    @Input() icon: string;

    private _textoSelecionado!: any;
    @Output() textoChange: EventEmitter<any> = new EventEmitter<any>();

    ngOnInit(): void {}

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
