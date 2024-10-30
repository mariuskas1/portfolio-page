import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { CarouselModule } from 'ngx-carousel-ease';
import { trigger, transition, style, animate, keyframes } from '@angular/animations';




@Component({
  selector: 'app-references',
  standalone: true,
  imports: [CommonModule, CarouselModule],
  templateUrl: './references.component.html',
  styleUrl: './references.component.scss',
  animations: [
    trigger('slideAnimation', [
      transition(':enter', [
        animate('500ms ease', keyframes([
          style({ transform: 'translateX(100%)', opacity: 0, offset: 0 }),
          style({ transform: 'translateX(0%)', opacity: 1, offset: 1.0 })
        ]))
      ]),
      transition(':leave', [
        animate('500ms ease', keyframes([
          style({ transform: 'translateX(0%)', opacity: 1, offset: 0 }),
          style({ transform: 'translateX(-100%)', opacity: 0, offset: 1.0 })
        ]))
      ])
    ])
  ]
})

export class ReferencesComponent {


  slideConfig = {"slidesToShow": 3, "slidesToScroll": 1};


  currentSlide = 1;


  slides = [
    {
      "text": "Marius has proven to be a reliable group partner. His technical skills and proactive approach were crucial to the success of our project.",
      "name": "H.Janisch - Team Partner"
    },
    {
      "text": "I had the good fortune of working with Lukas in a group project at the Developer Akademie that involve a lot of effort. He always stayed, calm, cool, and focused, and made sure our team was set up for success. He's super knowledgeable, easy to work with, and I'd happily work with him again given the chance.",
      "name": "A.Fischer - Team Partner"
    },
    {
      "text": "Our project benefited enormously from Marius' efficient way of working.",
      "name": "T.Schulz - Frontend Developer"
    }
  ];


  nextSlide(){
    this.currentSlide = (this.currentSlide + 1) % this.slides.length;
  }
  

  previousSlide(){
    this.currentSlide = (this.currentSlide - 1 + this.slides.length) % this.slides.length;
  }


  getSlideClass(i:number){
    if(i === this.currentSlide){
      return 'in';
    } else {
      return 'out';
    }
  }
}
