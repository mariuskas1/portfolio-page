import { CommonModule } from '@angular/common';
import { Component, Input, Output, OnInit } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { LanguageService } from '../../../app/services/language.service';

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
export class ModalComponent implements OnInit {
  @Input() projectRowClicked?:boolean;
  @Input() clickedProject!:number;
  @Output() closeModal = new EventEmitter<any>();
  @Output() next = new EventEmitter<any>();

  currentLanguage!: string;

  constructor(private languageService: LanguageService) {}


  ngOnInit(): void {
    this.languageService.currentLanguage$.subscribe(language => {
      this.currentLanguage = language;
    });
  }

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
      "descriptionEN": "Task manager inspired by the Kanban System. Create and organize tasks using drag and drop functions, assign users and categories.",
      "descriptionDE": "Ein Task Manager, angelehnt an das Kanban-System. Erstellen und organisieren Sie Aufgaben mithilfe von Drag-and-Drop-Funktionen.",
      "technologies": ["JavaScript", "HTML", "CSS", "Firebase"],
      "links": {
        "test": "https://join.marius-kasparek.de/index.html",
        "git": "https://github.com/mariuskas1/join"
      },
      "image": "./../../../assets/img/projects/join1.png"
    },
    {
      "number": 2,
      "name": "Sharkie",
      "descriptionEN": "A 2D game based on an object-oriented approach. Help Sharkie to maneuver his way through the dangerous deep sea.",
      "descriptionDE": "Ein 2D-Spiel mit objektorientertem Ansatz. Helfen Sie Sharkie dabei, sich einen Weg durch die gefährliche Tiefsee zu bahnen.",
      "technologies": ["Javascript", "HTML", "CSS"],
      "links": {
        "test": "https://sharkie.marius-kasparek.de/index.html",
        "git": "https://github.com/mariuskas1/sharkie"
      },
      "image": "./../../../assets/img/projects/sharkie.png"
    },
    // {
    //   "number": 3,
    //   "name": "Next Project",
    //   "descriptionEN": "Task manager inspired by the Kanban System. Create and organize tasks using drag and drop functions, assign users and categories.",
    //   "descriptionDE": "Ein Task Manager, angelehnt an das Kanban-System. Erstellen und organisieren Sie Aufgaben mithilfe von Drag-and-Drop-Funktionen.",
    //   "technologies": ["Angular", "TypeScript", "Firebase", "HTML", "CSS"],
    //   "links": {
    //     "test": "marius-kasparek.de",
    //     "git": "https://github.com/username/project-gamma"
    //   },
    //   "image": "./../../../assets/img/projects/join1.png"
    // }
  ];


  get openedProjectData() {
    return this.clickedProject !== undefined ? this.projects[this.clickedProject] : null;
  }


  
  

}
