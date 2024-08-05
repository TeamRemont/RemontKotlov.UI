import { Component } from '@angular/core';
import  * as AOS from 'aos'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'RemontKotlov.UI';

  ngOnInit(): void {
    AOS.init()
  }
}
