import { Component,Input} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { WishItem } from '../../shared/models/wishitems';
import events from '../../shared/services/eventService'

@Component({
  selector: 'app-wish-item',
  standalone: true,
  imports: [FormsModule,CommonModule ],
  templateUrl: './wish-item.component.html',
  styleUrl: './wish-item.component.css'
})
export class WishItemsComponent {

@Input() wishes:WishItem[]=[]

  toggleItem(item : WishItem) {
    item.isComplete = !item.isComplete;
    console.log(item);
  }

  removeItem(event:any){
events.emit('removeItem',event)
  }



}
