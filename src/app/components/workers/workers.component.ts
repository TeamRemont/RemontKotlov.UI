import { Component, Input } from '@angular/core';

@Component({
  selector: 'workers',
  templateUrl: './workers.component.html',
  styleUrl: './workers.component.scss'
})
export class WorkersComponent {
@Input() lang!:string
}
