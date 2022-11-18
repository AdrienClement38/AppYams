import { Injectable } from '@angular/core';
import { Pastrie } from './pastrie';
import { PASTRIES, INGREDIENTS_LISTS } from './pastries/mock-pastries';
import { List } from './pastrie';

@Injectable({
  providedIn: 'root'
})
export class PastrieService {

  constructor() { 

  }
 
  getPastries(): Pastrie[] {
    return PASTRIES;
  }

  getPastrie(id: string){
    let pastrie = PASTRIES.find(pastrie => pastrie.id == id);
    return pastrie;
  }
  
  getPastrieIngredientList(pastrieid: string){
    let ingredientsList: List [] = INGREDIENTS_LISTS;
    let ingredients = ingredientsList.find(list => list.id === pastrieid)?.list || [];
    return ingredients;
  }

  search(pastrieName: string) {
    let pastries = this.getPastries();
    let searchedPastries = pastries.filter((pastries) => {
      let found = pastries.name.toLowerCase().includes((pastrieName).toLowerCase());
      return found;
    })
    return searchedPastries;
  }

}
