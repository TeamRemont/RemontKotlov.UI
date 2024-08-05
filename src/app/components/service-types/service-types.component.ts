import { Component, Input } from '@angular/core';

@Component({
  selector: 'service-types',
  templateUrl: './service-types.component.html',
  styleUrl: './service-types.component.scss'
})
export class ServiceTypesComponent {
  @Input() lang!: string
}
