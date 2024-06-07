import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Prodotto } from './prodotto';


@Injectable()
export class ProdottoService {

  constructor(private http: HttpClient) { }

  //ProductAPIBaseUrl = 'http://localhost:8000/api/prodotti/';
  jsonAPIProuct: string = "/api";
  ProductAPIBaseUrl = 'http://localhost:8000' + this.jsonAPIProuct;

  getAllProdotti(): Observable<Prodotto[]> {

    //return this.http.get<Prodotto[]>(this.ProductAPIBaseUrl)
    return this.http.get<Prodotto[]>(this.ProductAPIBaseUrl + '/readAll')
  }

  getProdotto(name: string): Observable<Prodotto> {
    return this.http.get<Prodotto>(this.ProductAPIBaseUrl + '/read/' + name)
  }

  insertProdotto(prodotto: Prodotto): Observable<Prodotto> {
    return this.http.post<Prodotto>(this.ProductAPIBaseUrl + '/create/', prodotto)
  }

  updateProdotto(prodotto: Prodotto): Observable<void> {
    return this.http.put<void>(
      this.ProductAPIBaseUrl + '/update/' + prodotto.nome,
      prodotto
    )
  }

  deleteProdotto(name: string) {
    return this.http.delete(this.ProductAPIBaseUrl + '/delete/' + name)
  }

}