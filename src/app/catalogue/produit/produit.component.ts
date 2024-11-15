import { AfterContentInit, Component, computed, ElementRef, inject, OnInit, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MontreService } from '../../montre.service';
import { toSignal } from '@angular/core/rxjs-interop';
import { NgOptimizedImage } from '@angular/common';
import { FooterComponent } from '../../footer/footer.component';

@Component({
  selector: 'app-produit',
  standalone: true,
  imports: [NgOptimizedImage,FooterComponent],
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
  produits:object[] = []
  
  
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
  addToCart( item:object){

    if(!this.service.getItem('produits')?.includes(JSON.stringify(item))){
      this.produits.push(item)
    }

    return this.service.setItem('produits',JSON.stringify(this.produits))
  }
}
