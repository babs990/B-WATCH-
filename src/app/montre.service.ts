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

  // Set a value in local storage
  setItem(key: string, value: string): void {
    localStorage.setItem(key, value);
  }
  
  // Get a value from local storage
  getItem(key: string): string | null {
    return localStorage.getItem(key);
  }

  // Remove a value from local storage
  removeItem(key: string): void {
    localStorage.removeItem(key);
  }

}
