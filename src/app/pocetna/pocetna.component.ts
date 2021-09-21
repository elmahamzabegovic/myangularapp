import { Component, OnChanges, OnDestroy, OnInit } from '@angular/core';

@Component({ //dekorator klase
  selector: 'app-pocetna', 
  templateUrl: './pocetna.component.html',
  styleUrls: ['./pocetna.component.scss']
})
export class PocetnaComponent implements OnInit, OnDestroy {

  brojevi: number[] = [1,2,3,4,5];
   // brojevi: number[] = [];
    prikaziUl: boolean = true;
    uslov: boolean = true;
  constructor() { }

  ngOnInit() {
    console.log(this.brojevi);
  }

  ngOnDestroy() {
  }

}
