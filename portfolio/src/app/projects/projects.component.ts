import { Component } from '@angular/core';
import { ModalComponent } from "./modal/modal.component";

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [ModalComponent],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {

    hoveredProject: number | null = null;


    showPreview(index: number): void {
      this.hoveredProject = index;
    }


    hidePreview(): void {
      this.hoveredProject = null;
    }


    projectRowClicked = false;
    clickedProject = 0;


    openProjectModal(i: number){
      this.projectRowClicked = true;
      this.clickedProject = i;
    }

    closeModal(){
      this.projectRowClicked = false;
    }

    nextProject(){
      if(this.clickedProject < 2){
        this.clickedProject++;
      } else if (this.clickedProject === 2){
        this.clickedProject = 0;
      }
    }

}
