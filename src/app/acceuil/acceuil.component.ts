import { NgOptimizedImage } from '@angular/common';
import { Component, signal } from '@angular/core';
import { marques, nouveaux } from './marque';
@Component({
  selector: 'app-acceuil',
  standalone: true,
  imports: [NgOptimizedImage],
  templateUrl: './acceuil.component.html',
  styleUrl: './acceuil.component.css'
})
export class AcceuilComponent {

  marques = signal(marques)
  nouveautes = signal(nouveaux)
}
