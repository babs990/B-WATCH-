import { NgOptimizedImage } from '@angular/common';
import { Component, ElementRef, inject, signal ,computed } from '@angular/core';
import { MontreService } from '../montre.service';

@Component({
  selector: 'app-panier',
  standalone: true,
  imports: [NgOptimizedImage],
  templateUrl: './panier.component.html',
  styleUrl: './panier.component.css'
})
export class PanierComponent {

  readonly service = inject(MontreService)
  items = signal(JSON.parse(this.service.getItem('produits') || '[]'))

  el:any
  constructor(el:ElementRef){
    this.el = el
  }

  hidePanier(){
    this.el.nativeElement.querySelector('#fenetre').classList.add('translate-x-full')
    this.el.nativeElement.querySelector('#doubleFenetre').classList.add('translate-x-full')
  }

  

}
