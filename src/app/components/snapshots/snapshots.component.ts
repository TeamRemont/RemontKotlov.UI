import { Component, Input } from '@angular/core';


@Component({
  selector: 'snapshots',
  templateUrl: './snapshots.component.html',
  styleUrl: './snapshots.component.scss'
})
export class SnapshotsComponent {
  @Input() lang!:string 
}
