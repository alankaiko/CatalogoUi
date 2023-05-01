import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'painel-tabs-prime',
  templateUrl: './painel-tabs-prime.component.html',
  styleUrls: ['./painel-tabs-prime.component.css']
})
export class PainelTabsPrimeComponent implements OnInit {
  @Input() valor: any[] = [];
  @Input() activeIndex!: number;

  ngOnInit(): void {}

}
