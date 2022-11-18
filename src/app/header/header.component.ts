import { Component, OnInit } from '@angular/core';
import { PASTRIES } from '../pastries/mock-pastries';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  search(event: Event) {
    const recipe = (event.target as HTMLInputElement).value.toLowerCase();
    let found = PASTRIES.filter((elem) => {
      let returnRecipe = elem.name.toString().toLowerCase().includes(recipe);
      return returnRecipe;
    })
    console.log(found);
    
  }

}
