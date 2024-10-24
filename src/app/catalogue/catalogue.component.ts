import { NgOptimizedImage } from '@angular/common';
import { Component, ElementRef, inject } from '@angular/core';
import { MontreService } from '../montre.service';
import { Marque } from '../marque';
import { toSignal } from '@angular/core/rxjs-interop';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-catalogue',
  standalone: true,
  imports: [NgOptimizedImage],
  templateUrl: './catalogue.component.html',
  styleUrl: './catalogue.component.css'
})
export class CatalogueComponent {

  private service =inject(MontreService)
  marque = toSignal(this.service.getMarque()) 
  element:any
  constructor(el:ElementRef){
    this.element=el
  }

  dropTranslate(){
    this.element.nativeElement.querySelector('#hublot').childNodes[2].classList.remove('translate-x-[290px]')
  }
  addTranslate(){
    this.element.nativeElement.querySelector('#hublot').childNodes[2].classList.add('translate-x-[290px]')
  }


  
}
