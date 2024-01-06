import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { wishItem } from '../shared/wishitems';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  items: wishItem[] = [
    new wishItem("learn angualr",false),
    new wishItem("have a cofee",false),
    new wishItem("have a tea",true)
  ];
  title = 'whishlist';
}
