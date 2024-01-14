import { Component, Output,EventEmitter } from '@angular/core';
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
  @Output() filter =new EventEmitter<any>();

  listFilter : String = '0';
  selectedValue :String = ""

  returnValue(value: any) {
    this.filter.emit(value)
}
}
