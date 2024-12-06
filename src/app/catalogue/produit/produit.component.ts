import { AfterContentInit, AfterViewInit, Component, computed, ElementRef, inject, OnInit, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MontreService } from '../../montre.service';
import { toSignal } from '@angular/core/rxjs-interop';
import { NgOptimizedImage } from '@angular/common';
import { FooterComponent } from '../../footer/footer.component';
import { PanierComponent } from '../../panier/panier.component';
import gsap from 'gsap';

@Component({
  selector: 'app-produit',
  standalone: true,
  imports: [NgOptimizedImage,FooterComponent,PanierComponent],
  templateUrl: './produit.component.html',
  styleUrl: './produit.component.css'
})
export class ProduitComponent implements OnInit{

  readonly route = inject(ActivatedRoute)
  readonly service = inject(MontreService)
  readonly id = Number(this.route.snapshot.paramMap.get('id'))
  readonly marques = toSignal(this.service.getMarque())
  readonly marque = computed (() => this.marques()?.find(item => item.id == this.id))
  readonly searchInput = signal('')
  numb :number = 1
  produit  = computed(()=> this.marque()?.produits.find((item)=>item['numb'] == this.numb))
  private element : any
  readonly loading = computed(() => !this.marque());
  item : any[] = []
  donnees : any = []
  total = signal(0)
  count = signal(0)
      
  readonly result = computed(()=>{
    return this.marque()?.produits.filter((item)=>{
      return item
    })
  })

  ngOnInit(): void {
    for (var i = 0; i < localStorage.length; i++) {
      this.item.push(JSON.parse(localStorage.getItem(localStorage.key(i) || '{}') || '{}'));
    }
    
    this.total.set(this.item.reduce((accumulator, currentValue) => accumulator + currentValue.prix,
    0, ))

    this.count.set(this.item.length)
  }

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
    if(!localStorage.getItem(nom)){
      localStorage.setItem(nom,JSON.stringify(product))
      this.item.push(JSON.parse(localStorage.getItem(nom) || '{}'))
      this.count.set(this.item.length)
      this.total.set(this.item.reduce((accumulator, currentValue) => accumulator + currentValue.prix,
      0, ))   
    }
  }

  viewReveal(n : number){
    this.numb = n
    this.produit  = computed(()=> this.marque()?.produits.find((item)=>item['numb'] == this.numb))
    this.element.nativeElement.querySelector('#view').classList.remove('hidden')
    gsap.from('#productView',{
      translateY:200,
      duration:1,
    })
  }

  hideReveal(){
    this.element.nativeElement.querySelector('#view').classList.add('hidden')
  }

  // supprimer un produit 
  deleteToCart(nom : string){
    const n = this.item.filter((item)=> item.name == nom)
    const i = Number(sessionStorage.getItem(nom) || '1')
    this.item = this.item.filter((item)=> item.name != nom)
    this.count.set(this.item.length)
    const t = Number(sessionStorage.getItem('total') || `${this.total()}`) - (n[0].prix*i)
    console.log(t)
    this.total.set(t)
    sessionStorage.setItem('total',`${this.total()}`)
  }
}
