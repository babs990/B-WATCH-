import { NgOptimizedImage } from '@angular/common';
import { AfterViewInit, Component, ElementRef } from '@angular/core';
import {gsap} from 'gsap';

@Component({
  selector: 'app-panier',
  standalone: true,
  imports: [NgOptimizedImage],
  templateUrl: './panier.component.html',
  styleUrl: './panier.component.css'
})
export class PanierComponent {

  el:any
  constructor(el:ElementRef){
    this.el = el
  }

  hidePanier(){
    this.el.nativeElement.querySelector('#fenetre').classList.add('translate-x-full')
    this.el.nativeElement.querySelector('#doubleFenetre').classList.add('translate-x-full')
  }

}
