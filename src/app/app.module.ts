import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PocetnaComponent } from './pocetna/pocetna.component';
import { DrugaComponent } from './druga/druga.component';
import { NavigacijaComponent } from './navigacija/navigacija.component';
import { FooterComponent } from './footer/footer.component';
import { HttpClientModule } from '@angular/common/http';
import { DrzaveComponent } from './drzave/drzave.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DrzaveFormComponent } from './drzave-form/drzave-form.component';
import { DrzaveReactiveComponent } from './drzave-reactive/drzave-reactive.component';
import { UnesiZaposlenogComponent } from './unesi-zaposlenog/unesi-zaposlenog.component';
import { ZaposleniciComponent } from './zaposlenici/zaposlenici.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatInputModule} from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatSnackBarModule} from '@angular/material/snack-bar';


@NgModule({
  declarations: [
    AppComponent,
    PocetnaComponent,
    DrugaComponent,
    NavigacijaComponent,
    FooterComponent,
    DrzaveComponent,
    DrzaveFormComponent,
    DrzaveReactiveComponent,
    UnesiZaposlenogComponent,
    ZaposleniciComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule, 
    ReactiveFormsModule, BrowserAnimationsModule, 
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    MatProgressBarModule, 
    MatSnackBarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
