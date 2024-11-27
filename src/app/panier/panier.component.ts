import { NgOptimizedImage } from '@angular/common';
import { Component, ElementRef, inject, signal ,computed, Input, OnInit, AfterViewInit, Output, EventEmitter } from '@angular/core';
import { MontreService } from '../montre.service';
import { object } from 'underscore';

@Component({
  selector: 'app-panier',
  standalone: true,
  imports: [NgOptimizedImage],
  templateUrl: './panier.component.html',
  styleUrl: './panier.component.css'
})
export class PanierComponent implements AfterViewInit {

  readonly service = inject(MontreService)
  @Input() item :any = []
  @Input () count = signal(0)
  @Input () total = signal(0)
  @Output() delete: EventEmitter<string> = new EventEmitter()
  
  ngAfterViewInit(): void {
    console.log(this.el.nativeElement.querySelector('#contenu').childElementCount)
    this.count.set(this.el.nativeElement.querySelector('#contenu').childElementCount)
  }

  el:any
  constructor(el:ElementRef){
    this.el = el
  }

  deleteProduit(nom : string){
    localStorage.removeItem(nom)
    this.delete.emit(nom)
    sessionStorage.removeItem(nom)
  }

  hidePanier(){
    this.el.nativeElement.querySelector('#fenetre').classList.add('translate-x-full')
    this.el.nativeElement.querySelector('#doubleFenetre').classList.add('translate-x-full')
  }

  increment(nom : string, prix: number){
    this.el.nativeElement.querySelector('#' + nom).textContent = Number(this.el.nativeElement.querySelector('#' + nom).textContent) + 1
    sessionStorage.setItem(nom ,this.el.nativeElement.querySelector('#' + nom).textContent)
    sessionStorage.setItem('total' , `${this.total}`)
    this.total.set(this.total() + prix) 
  }

  decrement(nom : string, prix: number){
    if(Number(this.el.nativeElement.querySelector('#' + nom).textContent) >1){
      this.el.nativeElement.querySelector('#' + nom).textContent = Number(this.el.nativeElement.querySelector('#' + nom).textContent) - 1
      sessionStorage.setItem(nom ,this.el.nativeElement.querySelector('#' + nom).textContent)
      sessionStorage.setItem('total' , `${this.total}`)
      this.total.set(this.total() - prix) 
    }
  }

  nombre(nom : string){
    return sessionStorage.getItem(nom)
  } 

}
