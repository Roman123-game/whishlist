import { Component,Output,EventEmitter } from '@angular/core';
import { WishItem } from '../../shared/models/wishitems';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-wish-form',
  standalone: true,
  imports: [ FormsModule ],
  templateUrl: './wish-form.component.html',
  styleUrl: './wish-form.component.css'
})
export class WishFormComponent {

  @Output() addWish =new EventEmitter<WishItem>();

  newWishText  = '';

  addNewWish() {
    // this.items.push(new WishItem(this.newWishText));
    this.addWish.emit(new WishItem(this.newWishText))
    this.newWishText = '';
  }


}
