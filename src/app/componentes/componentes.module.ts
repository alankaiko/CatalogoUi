import { NgModule } from '@angular/core';
import {CampoAutocompleteComponent} from "./campo-autocomplete/campo-autocomplete.component";
import {AutoCompleteModule} from "primeng/autocomplete";
import {SharedModule} from "primeng/api";
import {FormsModule} from "@angular/forms";
import {CampoAutocompleteAtendimentoComponent} from "./campo-autocomplete-atendimento/campo-autocomplete-atendimento.component";
import {CampoAutocompleteMedicoComponent} from "./campo-autocomplete-medico/campo-autocomplete-medico.component";
import {CampoAutocompleteProcedimentoComponent} from "./campo-autocomplete-procedimento/campo-autocomplete-procedimento.component";
import {CampoButtonComponent} from "./campo-button/campo-button.component";
import {CampoButtonAComponent} from "./campo-button-a/campo-button-a.component";
import {CampoButtonDeListaComponent} from "./campo-button-de-lista/campo-button-de-lista.component";
import {CampoCheckboxComponent} from "./campo-checkbox/campo-checkbox.component";
import {CampoDataComponent} from "./campo-data/campo-data.component";
import {CampoDropdownComponent} from "./campo-dropdown/campo-dropdown.component";
import {CampoEditorTextoComponent} from "./campo-editor-texto/campo-editor-texto.component";
import {CampoInputNumberComponent} from "./campo-input-number/campo-input-number.component";
import {CampoNumeroTogleComponent} from "./campo-numero-togle/campo-numero-togle.component";
import {CampoRadioComponent} from "./campo-radio/campo-radio.component";
import {CampoSpinnerComponent} from "./campo-spinner/campo-spinner.component";
import {CampoTabviewComponent} from "./campo-tabview/campo-tabview.component";
import {CampoTextoComponent} from "./campo-texto/campo-texto.component";
import {CampoTextoAreaComponent} from "./campo-texto-area/campo-texto-area.component";
import {CampoTextoDropdownComponent} from "./campo-texto-dropdown/campo-texto-dropdown.component";
import {CampoTextoMascaraComponent} from "./campo-texto-mascara/campo-texto-mascara.component";
import {CampoUploadComponent} from "./campo-upload/campo-upload.component";
import {TabelaDadosComponent} from "./tabela-dados/tabela-dados.component";
import {StickAvisoComponent} from "./stick-aviso/stick-aviso.component";
import {ToastModule} from "primeng/toast";
import {TableModule} from "primeng/table";
import {PainelTabsPrimeComponent} from "./painel-tabs-prime/painel-tabs-prime.component";
import {TabViewModule} from "primeng/tabview";
import {PainelTabsComponent} from "./painel-tabs/painel-tabs.component";
import {FileUploadModule} from "primeng/fileupload";
import {InputMaskModule} from "primeng/inputmask";
import {DropdownModule} from "primeng/dropdown";
import {InputTextModule} from "primeng/inputtext";
import {InputTextareaModule} from "primeng/inputtextarea";
import {SpinnerModule} from "primeng/spinner";
import {RadioButtonModule} from "primeng/radiobutton";
import {InputNumberModule} from "primeng/inputnumber";
import {EditorModule} from "primeng/editor";
import {CalendarModule} from "primeng/calendar";
import {CheckboxModule} from "primeng/checkbox";
import {ButtonModule} from "primeng/button";
import {CampoBotaoComponent} from "./campo-botao/campo-botao.component";
import {CommonModule} from "@angular/common";
import { CampoToolbarComponent } from './campo-toolbar/campo-toolbar.component';
import {ToolbarModule} from "primeng/toolbar";
import { DialogoModalComponent } from './dialogo-modal/dialogo-modal.component';
import { DialogoConfirmacaoComponent } from './dialogo-confirmacao/dialogo-confirmacao.component';
import { DialogoDinamicoComponent } from './dialogo-dinamico/dialogo-dinamico.component';
import {DialogModule} from "primeng/dialog";

@NgModule({
  declarations: [
    CampoAutocompleteComponent,
    CampoAutocompleteAtendimentoComponent,
    CampoAutocompleteMedicoComponent,
    CampoAutocompleteProcedimentoComponent,
    CampoButtonComponent,
    CampoButtonAComponent,
    CampoButtonDeListaComponent,
    CampoCheckboxComponent,
    CampoDataComponent,
    CampoDropdownComponent,
    CampoEditorTextoComponent,
    CampoInputNumberComponent,
    CampoNumeroTogleComponent,
    CampoRadioComponent,
    CampoSpinnerComponent,
    CampoTabviewComponent,
    CampoTextoComponent,
    CampoTextoAreaComponent,
    CampoTextoDropdownComponent,
    CampoTextoMascaraComponent,
    CampoUploadComponent,
    TabelaDadosComponent,
    StickAvisoComponent,
    CampoBotaoComponent,
    PainelTabsPrimeComponent,
    PainelTabsComponent,
    CampoToolbarComponent,
    DialogoModalComponent,
    DialogoConfirmacaoComponent,
    DialogoDinamicoComponent
  ],
  exports: [
    CampoAutocompleteComponent,
    CampoAutocompleteAtendimentoComponent,
    CampoAutocompleteMedicoComponent,
    CampoAutocompleteProcedimentoComponent,
    CampoButtonComponent,
    CampoButtonAComponent,
    CampoButtonDeListaComponent,
    CampoCheckboxComponent,
    CampoDataComponent,
    CampoDropdownComponent,
    CampoEditorTextoComponent,
    CampoInputNumberComponent,
    CampoNumeroTogleComponent,
    CampoRadioComponent,
    CampoSpinnerComponent,
    CampoTabviewComponent,
    CampoTextoComponent,
    CampoTextoAreaComponent,
    CampoTextoDropdownComponent,
    CampoTextoMascaraComponent,
    CampoUploadComponent,
    CampoBotaoComponent,
    TabelaDadosComponent,
    StickAvisoComponent,
    PainelTabsPrimeComponent,
    PainelTabsComponent,
    CampoToolbarComponent,
    DialogoModalComponent,
    DialogoConfirmacaoComponent,
    DialogoDinamicoComponent
  ],
  imports: [
    CommonModule,
    AutoCompleteModule,
    SharedModule,
    FormsModule,
    ToastModule,
    TableModule,
    TabViewModule,
    FileUploadModule,
    InputMaskModule,
    DropdownModule,
    InputTextModule,
    InputTextareaModule,
    SpinnerModule,
    RadioButtonModule,
    InputNumberModule,
    EditorModule,
    CalendarModule,
    CheckboxModule,
    ButtonModule,
    ToolbarModule,
    DialogModule
  ]
})
export class ComponentesModule { }
