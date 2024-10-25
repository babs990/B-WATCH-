import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { filter,Observable } from 'rxjs';
import { Marque, marqueListe } from './marque';

@Injectable({
  providedIn: 'root'
})
export class MontreService {
  private readonly http = inject(HttpClient)
  private readonly marqueUrl = 'https://back-bwatch.vercel.app/marques.json'

  getMarque(): Observable<marqueListe>{
    return this.http.get<marqueListe>(this.marqueUrl)
  }

}
