import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss'
})
export class SkillsComponent {


  shownTechnologies = "frontend";


  changeTechnologies(){
    if(this.shownTechnologies === "frontend"){
      this.shownTechnologies = "backend";
    } else if(this.shownTechnologies === "backend"){
      this.shownTechnologies = "frontend";
    }
  };



  frontendSkills = [
    {
      "name": "HTML",
      "id": "html",
      "image": "./../../assets/img/skills/html.png"
    },
    {
      "name": "CSS",
      "id": "css",
      "image": "./../../assets/img/skills/css.png"
    },
    {
      "name": "JavaScript",
      "id": "javascript",
      "image": "./../../assets/img/skills/javascript.png"
    },
    {
      "name": "Material Design",
      "id": "material",
      "image": "./../../assets/img/skills/materialdesign.png"
    },
    {
      "name": "TypeScript",
      "id": "typescript",
      "image": "./../../assets/img/skills/typescript.png"
    },
    {
      "name": "Angular",
      "id": "angular",
      "image": "./../../assets/img/skills/angular.png"
    },
    {
      "name": "Firebase",
      "id": "firebase",
      "image": "./../../assets/img/skills/firebase.png"
    },
    {
      "name": "GIT",
      "id": "git",
      "image": "./../../assets/img/skills/git.png"
    },
    {
      "name": "Rest-Api",
      "id": "rest-api",
      "image": "./../../assets/img/skills/rest.png"
    },
    {
      "name": "Scrum",
      "id": "scrum",
      "image": "./../../assets/img/skills/scrum.png"
    },
    {
      "name": "Growth mindset",
      "id": "growth",
      "image": "./../../assets/img/skills/growthmindset.png"
    }
  ];
  
  

  backendSkills = [
  {
    "name": "Python",
    "id": "python",
    "image": "./../../assets/img/skills/backend/Python.png"
  },
  {
    "name": "Django",
    "id": "django",
    "image": "./../../assets/img/skills/backend/Django.png"
  },
  {
    "name": "Linux",
    "id": "linux",
    "image": "./../../assets/img/skills/backend/Linux.png"
  },
  {
    "name": "Redis",
    "id": "redis",
    "image": "./../../assets/img/skills/backend/Redis.png"
  },
  {
    "name": "Flask",
    "id": "flask",
    "image": "./../../assets/img/skills/backend/Flask.png"
  },
  {
    "name": "PostgreSQL",
    "id": "postgresql",
    "image": "./../../assets/img/skills/backend/PostgreSQL.png"
  },
  {
    "name": "Heroku",
    "id": "heroku",
    "image": "./../../assets/img/skills/backend/Heroku.png"
  },
  {
    "name": "SQL",
    "id": "sql",
    "image": "./../../assets/img/skills/backend/SQL.png"
  },
  {
    "name": "Docker",
    "id": "docker",
    "image": "./../../assets/img/skills/backend/Docker.png"
  },
  {
    "name": "Cloud",
    "id": "cloud",
    "image": "./../../assets/img/skills/backend/Cloud.png"
  },
  {
    "name": "RxJs",
    "id": "rxjs",
    "image": "./../../assets/img/skills/backend/RxJs.png"
  }
];

}
