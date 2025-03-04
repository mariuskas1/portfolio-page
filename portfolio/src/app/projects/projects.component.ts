import { Component, OnInit } from '@angular/core';
import { ModalComponent } from "./modal/modal.component";
import { TranslateModule } from '@ngx-translate/core';
import AOS from "aos";

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [ModalComponent, TranslateModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent implements OnInit {

    ngOnInit(): void {
      AOS.init();
    }

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
      if(this.clickedProject < 3){
        this.clickedProject++;
      } else if (this.clickedProject === 3){
        this.clickedProject = 0;
      }
    }

}
