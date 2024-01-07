import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { wishItem } from '../shared/wishitems';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet,FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  items: wishItem[] = [
    new wishItem('learn angualr', false),
    new wishItem('have a cofee', false),
    new wishItem('have a tea', true),
  ];
  title = 'whishlist';
  wishText = "";
  filter:string = '0';
  visibleItems : wishItem[]= this.items;

  addWishes(){
    this.items.push(new wishItem(this.wishText));
    this.wishText = ''

  }

  filterChange(value:any){
    if(value==='0'){
      this.visibleItems= this.items;
    }
    else if(value === '1'){
      this.visibleItems = this.items.filter(item=>!item.isComplete)
    }
    else {
      this.visibleItems = this.items.filter(item=>item.isComplete)
    }
  }

  toggleItem(item: wishItem) {
    item.isComplete = !item.isComplete;
    console.log(item);
  }
}
