import { NgOptimizedImage } from '@angular/common';
import { AfterViewInit, Component, ElementRef, OnInit, signal } from '@angular/core';
import { marques, nouveaux } from './marque';
import { FormArray, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { PanierComponent } from '../panier/panier.component';
import { FooterComponent } from "../footer/footer.component";
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-acceuil',
  standalone: true,
  imports: [NgOptimizedImage, ReactiveFormsModule, PanierComponent, FooterComponent,RouterLink],
  templateUrl: './acceuil.component.html',
  styleUrl: './acceuil.component.css'
})
export class AcceuilComponent implements AfterViewInit{

  marques = signal(marques)
  nouveautes = signal(nouveaux)
  index!: number;
  item : any= []
  element : any
  i=0
  constructor(el : ElementRef){
    this.element = el
  }

  // Animations
  ngAfterViewInit(): void {
    for (var i = 0; i < localStorage.length; i++) {
      this.item.push(JSON.parse(localStorage.getItem(localStorage.key(i) || '{}') || '{}'));
    } 

    // animation de la montre dans le hero
    gsap.registerPlugin(ScrollTrigger);
    gsap.from('#montreHero',{
      scale:0.9,
      duration:4,
      delay:0.2,
      opacity:0,
      ease:'bounce'
    })

    // animation des marques populaires
    gsap.from('#marquesPopulaire',{
      y: 100,
      duration: 3,
      opacity: 0,
      scrollTrigger:{
        trigger:'#marquesPopulaire',
        start:"top 90%",
      }
    })

    // animation presentation bwatch
    gsap.from('#presentation',{
      y: 100,
      duration: 3,
      opacity: 0,
      scrollTrigger: {
        trigger: '#presentation',
        start:'top 95%',
      }
    })

    // animation nouveautes
    gsap.from('#nouveautes',{
      y:100,
      duration:3,
      opacity:0,
      delay: 0.2,
      scrollTrigger: {
        trigger: '#nouveautes',
        start:'top 95%',
      }
    })

    // animation article
    gsap.from('#textArticle',{
      x:-100,
      duration:3,
      opacity:0,
      scrollTrigger:{
        trigger:'#article',
        start:'top 80%',
      }
    })
    gsap.from('#imageArticle',{
      x:100,
      duration:3,
      opacity:0,
      scrollTrigger:{
        trigger:'#article',
        start:'top 80%',
      }
    })

    // animation formulaire
    gsap.from('#imageForm',{
      x:-200,
      duration:3,
      ease:'bounce',
      opacity:0,
      scrollTrigger:{
        trigger:'#form',
        start:'top 90%',
      }
    })
    gsap.from('#formForm',{
      scale:0.9,
      duration:3,
      ease:'bounce',
      opacity:0,
      scrollTrigger:{
        trigger:'#form',
        start:'top 90%',
      }
    })
  }

  clickleft(nom:string){
    const e = this.element.nativeElement.querySelector('#' + nom)?.classList

    if(e.contains('-translate-x-[95px]')){
      e.remove('-translate-x-[95px]')
      e.add('-translate-x-0')
      this.element.nativeElement.querySelector('.' + nom)?.childNodes[0].classList.remove('bg-slate-300')
      this.element.nativeElement.querySelector('.' + nom)?.childNodes[0].classList.add('bg-[#171229]')
      this.element.nativeElement.querySelector('.' + nom)?.childNodes[1].classList.remove('bg-[#171229]')
      this.element.nativeElement.querySelector('.' + nom)?.childNodes[1].classList.add('bg-slate-300')
    }
    else if(e.contains('-translate-x-[190px]')){
      e.remove('-translate-x-[190px]')
      e.add('-translate-x-[95px]')
      this.element.nativeElement.querySelector('.' + nom)?.childNodes[1].classList.remove('bg-slate-300')
      this.element.nativeElement.querySelector('.' + nom)?.childNodes[1].classList.add('bg-[#171229]')
      this.element.nativeElement.querySelector('.' + nom)?.childNodes[2].classList.remove('bg-[#171229]')
      this.element.nativeElement.querySelector('.' + nom)?.childNodes[2].classList.add('bg-slate-300')
    }
  }

  clickright(nom:string){
    const e = this.element.nativeElement.querySelector('#' + nom)?.classList

    if(e.contains('-translate-x-[95px]')){
      e.remove('-translate-x-[95px]')
      e.add('-translate-x-[190px]')
      this.element.nativeElement.querySelector('.' + nom)?.childNodes[2].classList.remove('bg-slate-300')
      this.element.nativeElement.querySelector('.' + nom)?.childNodes[2].classList.add('bg-[#171229]')
      this.element.nativeElement.querySelector('.' + nom)?.childNodes[1].classList.remove('bg-[#171229]')
      this.element.nativeElement.querySelector('.' + nom)?.childNodes[1].classList.add('bg-slate-300')

    }
    else if(e.contains('-translate-x-0')){
      e.remove('-translate-x-0')
      e.add('-translate-x-[95px]')
      console.log(this.element.nativeElement.querySelector('.' + nom).childNodes)
      this.element.nativeElement.querySelector('.' + nom)?.childNodes[1].classList.remove('bg-slate-300')
      this.element.nativeElement.querySelector('.' + nom)?.childNodes[1].classList.add('bg-[#171229]')
      this.element.nativeElement.querySelector('.' + nom)?.childNodes[0].classList.remove('bg-[#171229]')
      this.element.nativeElement.querySelector('.' + nom)?.childNodes[0].classList.add('bg-slate-300')
    }

  }
}
