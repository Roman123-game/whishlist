import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { WishItem } from '../shared/models/wishitems';
import { FormsModule } from '@angular/forms';
import { WishItemsComponent } from './wish-item/wish-item.component';
import { WishFormComponent } from './wish-form/wish-form.component';
import { WishFilterComponent } from './wish-filter/wish-filter.component';
import events from '../shared/services/eventService'



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet,FormsModule, WishItemsComponent,WishFormComponent,WishFilterComponent ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  items : WishItem[] = [
    new WishItem('Learn Angular'),
    new WishItem('Get Coffee', true),
    new WishItem('Find grass that cuts itself')
  ];

  listFilter : String = '0';
  title = 'wishlist';
  visibleItems : WishItem[] = this.items;



  filterChanged(value: any) {
    if (value === '0') {
      this.visibleItems = this.items;
    } else if (value === '1') {
      this.visibleItems = this.items.filter(item => !item.isComplete);
    } else {
      this.visibleItems = this.items.filter(item => item.isComplete);
    }
  }
         constructor(){
          events.listen('removeItem',(items:any)=>{
            console.log(items.wishItem);
            const afterfilter = this.visibleItems.filter(ite=>ite.wishItem !== items.wishItem)
            this.visibleItems = afterfilter
          })
         }

}

  // filterChange(value:any){

  // }



