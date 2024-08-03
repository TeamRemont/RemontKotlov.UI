import { Component } from '@angular/core';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.scss'
})
export class MainPageComponent {
  lang=localStorage.getItem("lang") != null ? localStorage.getItem("lang") : "Uzbek"

  changeLang(lang:string){
    this.lang=lang
    console.log(lang);
  }
}
