import { Samochod } from './../samochod';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-samochody',
  templateUrl: './samochody.component.html',
  styleUrls: ['./samochody.component.scss']
})
export class SamochodyComponent implements OnInit {
  @Input() carItems: Samochod[] = [];

  constructor() {
   }
  ngOnInit() {
    console.dir(this.carItems)
   }
 }
