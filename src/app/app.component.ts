import { Component, OnInit } from '@angular/core';
import { Samochod } from './samochod';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {

  car1 = new Samochod("Mitsubishi", "Lancer", 2004);    // tworzymy instancje klasy "Samochod" i przypisujemy właśności
  car2 = new Samochod("Dacia", "Logan", 2017);
  car3 = new Samochod("Toyota", "Auris", 2020);
  car4 = new Samochod("Fiat", "126p", 1986);

  cars = [];    // deklarujemy pustą tablicę "cars"

  ngOnInit(): void {
    
    this.cars = [                   // podczas inicjalizacji komponentu przypisujemy do tablicy "cars" utworzone wcześniej obiekty (instancje klasy "Samochod")
      this.car1.properties(),       // i wywołujemy metodę "properties()", zwracającą ich własności
      this.car2.properties(),
      this.car3.properties(),
      this.car4.properties()
    ];
   
  }

}

// change check for github.
