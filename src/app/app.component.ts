import { NgOptimizedImage } from '@angular/common';
import { AfterViewInit, Component, ElementRef, HostListener, inject, OnInit, viewChild } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { PanierComponent } from './panier/panier.component';
import { toSignal } from '@angular/core/rxjs-interop';
import { MontreService } from './montre.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,NgOptimizedImage,RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements AfterViewInit{

  private service =inject(MontreService)
  readonly marque = toSignal(this.service.getMarque())
  ecran = window.innerWidth
  el:any
  router : any

  constructor(el:ElementRef , route : Router){
    this.el = el
    this.router = route
  }
  
  ngAfterViewInit(): void {
    
  }

  click(id : number){
    this.router.navigate(['../catalogue/produit',id])
  .then(() => {
    window.location.reload();
  });
  }

  revealPanier(){
    this.el.nativeElement.querySelector('#fenetre').classList.remove('translate-x-full')
    this.el.nativeElement.querySelector('#doubleFenetre').classList.remove('translate-x-full')
  }

  revealCatalogue(){
    this.el.nativeElement.querySelector('#catalogue').classList.remove('hidden')
  }

  hideCatalogue(){
    this.el.nativeElement.querySelector('#catalogue').classList.add('hidden')
  }

}
