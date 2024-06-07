import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { ProdottoService } from './prodotti/prodotto.service';
import { ProdottiComponent } from './prodotti/prodotti.component';

const routes: Routes = [
  { path: 'users', component: ProdottiComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    ProdottiComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  exports: [ RouterModule ],
  providers: [ProdottoService],
  bootstrap: [ProdottiComponent]
})
export class AppModule { }
