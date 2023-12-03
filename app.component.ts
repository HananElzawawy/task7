import { Component, Output } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'task7';
  mydatatotarnsfer= "hanan"

    items = ['item1', 'item2', 'item3', 'item4'];
  
    addItem(newItempar: string) {
      this.items.push(newItempar);
    }
  }
  

