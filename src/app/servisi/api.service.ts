import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Drzave } from '../Interfaces/drzave';
import { Zaposleni } from '../zaposleni';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  key = '?api_key=33a5f6cb-52ae-4bcd-9e39-f5eee3cca367';

  constructor(private http: HttpClient) { }

  public getDrzave(): Observable<Drzave[]> { //definisemo povratni tip podataka koji je tipa observable koji u sebi sadrzi konkretno tip koji mi vracamo a to je Drzave, tj niz podataka Drzave
    return this.http.get<Drzave[]>('https://www.angular-kurs.online/api/drzave');  //definisemo koje podatke mi ocekujemo da dobijemo nazad od apija a to je niz objekata drzave 
   }

   public getDrzavePoNazivu(drzavaForm: any): Observable<Drzave[]> {
    //return this.http.get<Drzave[]>('https://www.angular-kurs.online/api/drzave/' + drzavaForm.naziv)
    return this.http.get<Drzave[]>(`https://www.angular-kurs.online/api/drzave/${drzavaForm.naziv}`)
   }

   public postZaposleni(zaposleniForm: Zaposleni) { 
     return this.http.post('https://www.angular-kurs.online/api/zaposlenici', zaposleniForm)
   }

   public getCats() {
     return this.http.get('https://api.thecatapi.com/v1/breeds' + this.key);
   }

   public getZaposleni(): Observable<Zaposleni[]> {
     return this.http.get<Zaposleni[]>('https://www.angular-kurs.online/api/zaposlenici');
   }
}
