import { NgOptimizedImage } from '@angular/common';
import {  Component, computed, effect, ElementRef, inject, signal, viewChild } from '@angular/core';
import { MontreService } from '../montre.service';
import { toSignal } from '@angular/core/rxjs-interop';
import _, { shuffle } from 'underscore'
import { FooterComponent } from '../footer/footer.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-catalogue',
  standalone: true,
  imports: [NgOptimizedImage,FooterComponent,RouterLink],
  templateUrl: './catalogue.component.html',
  styleUrl: './catalogue.component.css'
})
export class CatalogueComponent{

  private service =inject(MontreService)
  readonly marque = toSignal(this.service.getMarque())
  marqueFiltre = signal('homme')
  readonly searchInput = signal('')

  readonly marqueHomme = computed(()=>{
    return this.marque()?.filter((element)=>element.type == 'Homme')
  })

  readonly marqueFemme = computed(()=>{
    return this.marque()?.filter((element)=>element.type == 'Femme')
  })

  readonly marquePopulaire = computed(()=>{
    if(this.marque() != undefined){
      return _.shuffle( this.marque()!.filter((element)=>element.etoiles >= 4)) 
    }
    return
  })

  readonly result = computed(()=>{
    return this.marque()?.filter((item)=>{
      return item.nom.toUpperCase().includes(this.searchInput().toUpperCase())
    })
  })
  readonly loading = computed(() => !this.marque()); 
  private element:any
    

  constructor(el:ElementRef){
    this.element=el
  }

  // Afficher ou masquer filtre
  filterReveal(){
    const t =this.element.nativeElement.querySelector('#filtre')
    if(t.classList.contains('hidden')){
      t.classList.remove('hidden')
    }else{
      t.classList.add('hidden')
    }
  }

  // Afficher et masquer les recherches
  searchReveal(){
    this.element.nativeElement.querySelector('#search').classList.remove('hidden')
  }
  searchHide(){
    this.element.nativeElement.querySelector('#search').classList.add('hidden')
  }

  // filtre Homme
  filtreHomme(){
    this.element.nativeElement.querySelector('#homme').classList.add('bg-[#342250]')

    if(this.element.nativeElement.querySelector('#femme').classList.contains('bg-[#342250]')){
      this.element.nativeElement.querySelector('#femme').classList.remove('bg-[#342250]')
    }

    if(this.element.nativeElement.querySelector('#populaire').classList.contains('bg-[#342250]')){
      this.element.nativeElement.querySelector('#populaire').classList.remove('bg-[#342250]')
    }

    this.marqueFiltre.set('homme')
  }

  // filtre femme
  filtreFemme(){
    this.element.nativeElement.querySelector('#femme').classList.add('bg-[#342250]')

    if(this.element.nativeElement.querySelector('#homme').classList.contains('bg-[#342250]')){
      this.element.nativeElement.querySelector('#homme').classList.remove('bg-[#342250]')
    }

    if(this.element.nativeElement.querySelector('#populaire').classList.contains('bg-[#342250]')){
      this.element.nativeElement.querySelector('#populaire').classList.remove('bg-[#342250]')
    }

    this.marqueFiltre.set('femme')
  }

  // filtre populaire
  filtrePopulaire(){
    this.element.nativeElement.querySelector('#populaire').classList.add('bg-[#342250]')

    if(this.element.nativeElement.querySelector('#femme').classList.contains('bg-[#342250]')){
      this.element.nativeElement.querySelector('#femme').classList.remove('bg-[#342250]')
    }

    if(this.element.nativeElement.querySelector('#homme').classList.contains('bg-[#342250]')){
      this.element.nativeElement.querySelector('#homme').classList.remove('bg-[#342250]')
    }

    this.marqueFiltre.set('populaire')
  }

}
