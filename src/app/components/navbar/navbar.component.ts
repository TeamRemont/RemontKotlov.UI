import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  @Output() sendLang = new EventEmitter()

  lang = localStorage.getItem("lang") != null ? localStorage.getItem("lang") : "Uzbek"
  secondaryLang=this.lang=="Uzbek"?"Russian":"Uzbek"

  changeLang(lang: string) {
    this.sendLang.emit(lang)
    this.secondaryLang=this.lang!
    this.lang = lang
    localStorage.setItem("lang",this.lang)
  }
}
