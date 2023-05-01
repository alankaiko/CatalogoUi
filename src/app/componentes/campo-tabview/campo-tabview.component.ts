import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'campo-tabview',
  templateUrl: './campo-tabview.component.html',
  styleUrls: ['./campo-tabview.component.css']
})
export class CampoTabviewComponent implements OnInit {
  @Input() index: number = 0;
  @Input() options: any = [];
  @Input() style: { [key: string]: string; } = {};

  constructor() { }

  ngOnInit(): void {
  }

}
