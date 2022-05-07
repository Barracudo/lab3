import { CssSelector } from '@angular/compiler';
import { areAllEquivalent } from '@angular/compiler/src/output/output_ast';
import { Template } from '@angular/compiler/src/render3/r3_ast';
import { Component, OnInit } from '@angular/core';
import { DaneOsobowe } from './DaneOsobowe';
import { Samochod } from './samochod';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

car1 = new Samochod("Mitsubishi", "Lancer", 2004);


 /* constructor(marka, model, rok){
    marka = this.marka;
    model = this.model;
    rok = this.rok;
  }*/

cars=[this.car1.properties];

}

//"Mitsubishi", "Lancer", 2004

//"Dacia", "Logan", 2017

//Toyota", "Auris", 2020

//"Fiat", "126p", 1986

// change check for github.
