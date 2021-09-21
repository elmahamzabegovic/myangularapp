import { Component, OnInit } from '@angular/core';
import { Drzave } from '../Interfaces/drzave';
import { ApiService } from '../servisi/api.service';

@Component({
  selector: 'app-drzave-form',
  templateUrl: './drzave-form.component.html',
  styleUrls: ['./drzave-form.component.scss']
})
export class DrzaveFormComponent implements OnInit {
  drzave: Drzave[] = [];

  constructor(private api: ApiService) { } //injektujemo ga da bi mogli koristiti funkcije iz ApiService

  ngOnInit(): void {
  }

  onSubmit(drzavaForm: any) {
    this.api.getDrzavePoNazivu(drzavaForm.value).subscribe((odgovor) => {
      this.drzave = odgovor;
    }); 
  }

}
