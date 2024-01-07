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
  wishText = ""

  addWishes(){
    this.items.push(new wishItem(this.wishText));
    this.wishText = ''

  }

  toggleItem(item: wishItem) {
    item.isComplete = !item.isComplete;
    console.log(item);
  }
}
