import { NgOptimizedImage } from '@angular/common';
import { Component, signal } from '@angular/core';
import { marques, nouveaux } from './marque';
import { AppObserveElementDirective } from '../app-observe-element.directive';

@Component({
  selector: 'app-acceuil',
  standalone: true,
  imports: [NgOptimizedImage,AppObserveElementDirective],
  templateUrl: './acceuil.component.html',
  styleUrl: './acceuil.component.css'
})
export class AcceuilComponent {

  marques = signal(marques)
  nouveautes = signal(nouveaux)
  index!: number;

  isIntersecting (status: boolean, index: number) {
    console.log('Element #' + index + ' is intersecting ' + status)
  }
}
