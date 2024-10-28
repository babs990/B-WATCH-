import { NgOptimizedImage } from '@angular/common';
import { AfterViewInit, Component, OnInit, signal } from '@angular/core';
import { marques, nouveaux } from './marque';
import { FormArray, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { PanierComponent } from '../panier/panier.component';
import { FooterComponent } from "../footer/footer.component";

@Component({
  selector: 'app-acceuil',
  standalone: true,
  imports: [NgOptimizedImage, ReactiveFormsModule, PanierComponent, FooterComponent],
  templateUrl: './acceuil.component.html',
  styleUrl: './acceuil.component.css'
})
export class AcceuilComponent implements AfterViewInit{

  marques = signal(marques)
  nouveautes = signal(nouveaux)
  index!: number;
  i=0

  // Animations
  ngAfterViewInit(): void {

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

  clickleft(){
    if(this.i>0){
      this.i--
    }
  }
  clickright(){
    if(this.i<2){
      this.i++
    }
  }
}
