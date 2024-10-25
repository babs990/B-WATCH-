import { NgOptimizedImage } from '@angular/common';
import { AfterViewInit, Component, computed, effect, ElementRef, inject, viewChild } from '@angular/core';
import { MontreService } from '../montre.service';
import { toSignal } from '@angular/core/rxjs-interop';
import _, { shuffle } from 'underscore'

@Component({
  selector: 'app-catalogue',
  standalone: true,
  imports: [NgOptimizedImage],
  templateUrl: './catalogue.component.html',
  styleUrl: './catalogue.component.css'
})
export class CatalogueComponent{

  private service =inject(MontreService)
  readonly marque = toSignal(this.service.getMarque())
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
  readonly loading = computed(() => !this.marque()); 
  private element:any
  catalogue = viewChild<ElementRef>("catalogue");
    
  constructor(el:ElementRef){
    this.element=el
    effect(() => {
      console.log("catalogue: ", 
      this.catalogue()?.nativeElement.childNodes[2].parentElement.querySelector('#Hublot'));
  });
  }

  dropTranslate(id:string){
    this.element.nativeElement.querySelector('#' + id).childNodes[2].classList.remove('translate-y-[320px]')
  }
  addTranslate(id:string){
    this.element.nativeElement.querySelector('#' + id).childNodes[2].classList.add('translate-y-[320px]')
  }  

  
}
