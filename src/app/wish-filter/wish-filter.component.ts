import { Component, Output,EventEmitter,Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-wish-filter',
  standalone: true,
  imports: [ CommonModule,FormsModule],
  templateUrl: './wish-filter.component.html',
  styleUrl: './wish-filter.component.css'
})
export class WishFilterComponent {
  @Input() filter:String=''
  @Output() filterChanged =new EventEmitter<any>();

  selectedValue :String = ""

  returnValue(filter: any) {
    this.filterChanged.emit(filter)
}
}
