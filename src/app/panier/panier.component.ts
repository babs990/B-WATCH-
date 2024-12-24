import { NgOptimizedImage } from '@angular/common';
import { Component, ElementRef, inject, signal ,computed, Input, OnInit, AfterViewInit, Output, EventEmitter } from '@angular/core';
import { MontreService } from '../montre.service';
import { object } from 'underscore';
import { Router } from '@angular/router';

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
  el:any
  router : Router
  
  ngAfterViewInit(): void {
    console.log(this.el.nativeElement.querySelector('#contenu').childElementCount)
    this.count.set(this.el.nativeElement.querySelector('#contenu').childElementCount)
    if(sessionStorage.getItem('total')){
      this.total.set(Number(sessionStorage.getItem('total')))
    }
  }

  constructor(el:ElementRef , r :Router){
    this.el = el
    this.router = r
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
    this.total.set(this.total() + prix) 
    sessionStorage.setItem('total' , `${this.total()}`)
  }

  decrement(nom : string, prix: number){
    if(Number(this.el.nativeElement.querySelector('#' + nom).textContent) >1){
      this.el.nativeElement.querySelector('#' + nom).textContent = Number(this.el.nativeElement.querySelector('#' + nom).textContent) - 1
      sessionStorage.setItem(nom ,this.el.nativeElement.querySelector('#' + nom).textContent)
      this.total.set(this.total() - prix) 
      sessionStorage.setItem('total' , `${this.total()}`)
    }
  }


  nombre(nom : string){
    return sessionStorage.getItem(nom)
  } 

  goToValidation(){
    if(this.total() == 0){
      window.alert('Panier vide')
    }else{
      this.router.navigateByUrl('validation')
    }
  }

}
