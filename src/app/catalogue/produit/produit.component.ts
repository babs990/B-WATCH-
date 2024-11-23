import { AfterContentInit, Component, computed, ElementRef, inject, OnInit, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MontreService } from '../../montre.service';
import { toSignal } from '@angular/core/rxjs-interop';
import { NgOptimizedImage } from '@angular/common';
import { FooterComponent } from '../../footer/footer.component';
import { PanierComponent } from '../../panier/panier.component';

@Component({
  selector: 'app-produit',
  standalone: true,
  imports: [NgOptimizedImage,FooterComponent,PanierComponent],
  templateUrl: './produit.component.html',
  styleUrl: './produit.component.css'
})
export class ProduitComponent{

  readonly route = inject(ActivatedRoute)
  readonly service = inject(MontreService)
  readonly id = Number(this.route.snapshot.paramMap.get('id'))
  readonly marques = toSignal(this.service.getMarque())
  readonly marque = computed (() => this.marques()?.find(item => item.id == this.id))
  readonly searchInput = signal('')
  private element : any
  readonly loading = computed(() => !this.marque());
  item : string[] = []
  produits = '{}'
  
  readonly result = computed(()=>{
    return this.marque()?.produits.filter((item)=>{
      return item
    })
  })

  constructor(el:ElementRef){  
    this.element = el
  }

  searchReveal(){
    this.element.nativeElement.querySelector('#search').classList.remove('hidden')
  }
  searchHide(){
    this.element.nativeElement.querySelector('#search').classList.add('hidden')
  }

  // Ajouter objet dans le localStorage
  addToCart( nom:string,product:never){
    localStorage.setItem(nom,JSON.stringify(product))
    this.item.push((localStorage.getItem(nom) || '{}'))
    this.produits = `${this.item}`
    console.log(this.item)
  }
}
