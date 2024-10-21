import { NgOptimizedImage } from '@angular/common';
import { Component, ElementRef, HostListener } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PanierComponent } from './panier/panier.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,NgOptimizedImage,PanierComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent{

  el:any
  constructor(el:ElementRef){
    this.el = el
  }

  revealPanier(){
    this.el.nativeElement.querySelector('#fenetre').classList.remove('translate-x-full')
    this.el.nativeElement.querySelector('#doubleFenetre').classList.remove('translate-x-full')
  }

}
