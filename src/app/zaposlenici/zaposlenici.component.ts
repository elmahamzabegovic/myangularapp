import { Component, OnInit } from '@angular/core';
import { ApiService } from '../servisi/api.service';
import { Zaposleni } from '../zaposleni';

@Component({
  selector: 'app-zaposlenici',
  templateUrl: './zaposlenici.component.html',
  styleUrls: ['./zaposlenici.component.scss']
})
export class ZaposleniciComponent implements OnInit {

  zaposleni: Zaposleni[] = [];
  constructor(private api: ApiService) { }

  ngOnInit(): void {

    this.api.getZaposleni().subscribe((odgovor) => {
      this.zaposleni = odgovor;
    });
  }

}
