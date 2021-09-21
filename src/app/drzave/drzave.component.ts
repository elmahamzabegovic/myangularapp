import { Component, OnInit } from '@angular/core';
import { Drzave } from '../Interfaces/drzave';
import { ApiService } from '../servisi/api.service';

@Component({
  selector: 'app-drzave',
  templateUrl: './drzave.component.html',
  styleUrls: ['./drzave.component.scss']
})
export class DrzaveComponent implements OnInit {

  listaDrzava: Drzave[] = []; //definisemo varijablu listaDrzava koja je tipa niz objekata Drzave i odmah je inicijalizujemo na prazan niz pa poslije punimo
  listaDrzavaZaDisplay : Drzave[] = [];
  rastuciPoredak: boolean = true;
  ukupanBrStanovnika: number = 0;
  ukupnaPovrsina: number = 0;
  terminZaPretragu: string = '';
  regije: string[] = [];
  greska: string = '';
  uspjeh: string = '';

  constructor(private api: ApiService) { }

  ngOnInit(): void {

this.api.getDrzave().subscribe((odgovor) => {
  this.listaDrzava = odgovor;
  this.listaDrzavaZaDisplay = odgovor;
  this.uspjeh = 'Uspjesno ste ucitali podatke';

  /*const setStringova = Array.from(new Set(this.listaDrzava.map((drzava) => {
    return drzava.region;
  })));*/

  this.regije = [... new Set(this.listaDrzava.map((drzava) => {
    return drzava.region;
  }))].filter((regije) => regije);


 
  this.ukupanBrStanovnika = this.listaDrzava.reduce((ukupnoStanovnika, drzava) => { //fja reduce prolazi kroz svaki objekat u nizu listaDrzava i ima 2 argumenta -> ukupnoStanovnika 
                                                                                    // koji ima pocetnu vrijednost 0 i trenutni objekat iz niza privremenog naziva drzava i dodaje br  
                                                                                    //stanovnika  iz objekta drzava ( population) sabira ga sa vrijednoscu koju ima ova varijabla ukupnoStanovnika 
                                                                                    //i pohranjuje ponovo u varijablu ukupnoStanovnika i na kraju kad prodje kroz cijeli niz vraca 
                                                                                    //taj ukupan br i pohranjuje ga u varijablu ukupanBrStanovnika koju smo gore deklarisali
                                                                                    //fja reduce reducira niz u jednu jedinu vrijednost
    
    ukupnoStanovnika = ukupnoStanovnika + drzava.population;
    return ukupnoStanovnika;
  }, 0)

  console.log(this.ukupanBrStanovnika);

  this.ukupnaPovrsina = this.listaDrzava.reduce((total, drzava) => {
    total = total + drzava.area;
    return total;
  }, 0)
});

    this.api.getDrzave().subscribe((odgovor) => {
      this.listaDrzava = odgovor; //dodijeli varijabli listaDrzava odgtovor koji dobijamo od apija 
       


    }, (greska) => { 
      this.greska= 'Greska u radu: ' + greska.status;
   });

    // const  gradovi = ["Srebrenik", "Maglaj", "Sokolac", "Cazin", "Visoko", "Ilijas", "Sarajevo"];
    // console.log("Prije sortiranja: ", gradovi);
    // gradovi.sort();
    // console.log(gradovi);

    // const brojevi = [1, 9, 4, 77, 10000, 6, 44];
    // console.log("Prije sortiranja: ", brojevi);
    // brojevi.sort((a,b) => { return a - b });
    // console.log(brojevi);

 
  }

  sortiraj() {
    if ( this.rastuciPoredak) {
      this.listaDrzava.sort((drzavaA, drzavaB) => {

        if(drzavaA.name < drzavaB.name) {
          return -1;
        }
        
        if(drzavaA.name > drzavaB.name) {
          return 1;
        }
          return 0;
      });
    } else {
      this.listaDrzava.sort((drzavaA, drzavaB) => {

        if(drzavaA.name > drzavaB.name) {
          return -1;
        }
        
        if(drzavaA.name < drzavaB.name) {
          return 1;
        }
          return 0;
      });
    }

    this.rastuciPoredak = !this.rastuciPoredak;
  }

  sortirajBrStanovnika() {

    this.listaDrzava.sort((a, b) => {
      if(this.rastuciPoredak){ 
        if(a.population > b.population) return 1;
        else if(a.population < b.population) return -1;
        return 0;
      }
      else {
        if(a.population < b.population) return 1;
        else if(a.population > b.population) return -1;
        return 0;
      }
      
    });
    this.rastuciPoredak=!this.rastuciPoredak;
  }
  
  /*sortirajBrStanovnika() {
    if(this.rastuciPoredak) {
      this.listaDrzava.sort((drzavaA, drzavaB) => drzavaA.population - drzavaB.population)
    } else {
      this.listaDrzava.sort((drzavaA, drzavaB) => drzavaB.population - drzavaA.population)
    }
    this.rastuciPoredak = !this.rastuciPoredak;
  }*/

  filtriraj() {

    this.listaDrzavaZaDisplay = this.listaDrzava.filter((drzava) => {
      return drzava.name.toLowerCase().includes(this.terminZaPretragu.toLowerCase());

    });
    // const pretraga = this.listaDrzava.filter((drzava) => drzava.name.includes(this.terminZaPretragu))
    
    // console.log("Rez pretrage: ", pretraga)
  }

  ponistiPretragu() {
    this.listaDrzavaZaDisplay = this.listaDrzava;
    this.terminZaPretragu = '';
  }

  pretraga(event: string) {
    console.log(event);
    this.listaDrzavaZaDisplay = this.listaDrzava.filter((drzava) => {
      return drzava.name.toLowerCase().includes(event.toLowerCase());
    })
  } 

  filtritajRegije(regija: string) {
    this.listaDrzavaZaDisplay = this.listaDrzava.filter((drzava) => {
      return drzava.region.toLowerCase().includes(regija.toLowerCase());
    })
  }

}


