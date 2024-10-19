import { NgOptimizedImage } from '@angular/common';
import { AfterViewInit, Component } from '@angular/core';
import {gsap} from 'gsap';

@Component({
  selector: 'app-panier',
  standalone: true,
  imports: [NgOptimizedImage],
  templateUrl: './panier.component.html',
  styleUrl: './panier.component.css'
})
export class PanierComponent implements AfterViewInit {

  ngAfterViewInit(): void {
    gsap.from('#entete',{
      y: -20,
      duration: 2,
      opacity: 0,
      scrollTrigger: {
        trigger: '#fenetre',
        start:'left 90%',
        markers: true
      }
    })
  }
}
