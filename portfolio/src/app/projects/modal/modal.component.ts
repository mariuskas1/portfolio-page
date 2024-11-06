import { CommonModule } from '@angular/common';
import { Component, Input, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-modal',
  standalone: true,
  imports: [TranslateModule, CommonModule],
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.scss',
  animations: [
    trigger('slideInOut', [
      state('in', style({ translate: '0%' })),
      state('out', style({ translate:  '100%'})),
      transition('in => out', animate('200ms ease-out')),
      transition('out => in', animate('200ms ease-in'))
    ])
  ]
})
export class ModalComponent {
  @Input() projectRowClicked?:boolean;
  @Input() clickedProject!:number;
  @Output() closeModal = new EventEmitter<any>();
  @Output() next = new EventEmitter<any>();

  hideModal(){
    this.closeModal.emit();
  }

  showNextProject(){
    this.next.emit();
  }


  projects = [
    {
      "number": 1,
      "name": "Join",
      "description": "Task manager inspired by the Kanban System. Create and organize tasks using drag and drop functions, assign users and categories.",
      "technologies": ["JavaScript", "HTML", "CSS", "Firebase"],
      "links": {
        "test": "https://example.com/project-alpha",
        "git": "https://github.com/mariuskas1/join"
      },
      "image": "./../../../assets/img/projects/join.png"
    },
    {
      "number": 2,
      "name": "Sharkie",
      "description": "A 2D game based on an object-oriented approach. Help Sharkie Sharkie to maneuver his way through the dangerous deep sea.",
      "technologies": ["Javascript", "HTML", "CSS"],
      "links": {
        "test": "https://example.com/project-beta",
        "git": "https://github.com/mariuskas1/sharkie"
      },
      "image": "./../../../assets/img/projects/polloloco.png"
    },
    {
      "number": 3,
      "name": "Next Project",
      "description": "Task manager inspired by the Kanban System. Create and organize tasks using drag and drop functions, assign users and categories.",
      "technologies": ["Angular", "TypeScript", "Firebase", "HTML", "CSS"],
      "links": {
        "test": "https://example.com/project-gamma",
        "git": "https://github.com/username/project-gamma"
      },
      "image": "./../../../assets/img/projects/dabubble.png"
    }
  ];


  get openedProjectData() {
    return this.clickedProject !== undefined ? this.projects[this.clickedProject] : null;
  }


  
  

}
