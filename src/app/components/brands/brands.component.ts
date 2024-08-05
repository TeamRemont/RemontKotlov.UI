import { Component, Input } from '@angular/core';

@Component({
  selector: 'brands',
  templateUrl: './brands.component.html',
  styleUrl: './brands.component.scss'
})
export class BrandsComponent {
@Input() lang!:string
}
