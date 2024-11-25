import { NgOptimizedImage } from '@angular/common';
import { Component, ElementRef, inject, signal ,computed, Input, OnInit, AfterViewInit, Output, EventEmitter } from '@angular/core';
import { MontreService } from '../montre.service';

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
  }

  hidePanier(){
    this.el.nativeElement.querySelector('#fenetre').classList.add('translate-x-full')
    this.el.nativeElement.querySelector('#doubleFenetre').classList.add('translate-x-full')
  }

  increment(nom : string){
    this.el.nativeElement.querySelector('#' + nom).textContent = Number(this.el.nativeElement.querySelector('#' + nom).textContent) + 1
  }

  decrement(nom : string){
    if(Number(this.el.nativeElement.querySelector('#' + nom).textContent) >1){
      this.el.nativeElement.querySelector('#' + nom).textContent = Number(this.el.nativeElement.querySelector('#' + nom).textContent) - 1
    }
  }

}
