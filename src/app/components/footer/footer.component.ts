import { Component, Input } from '@angular/core';

@Component({
  selector: 'site-footer',
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  @Input() lang!: string
}
