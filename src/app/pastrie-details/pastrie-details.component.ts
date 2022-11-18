import { Component, OnInit, Input } from '@angular/core';
import { Pastrie } from '../pastrie';
import { PastrieService } from '../pastrie.service';


@Component({
  selector: 'app-pastrie-details',
  templateUrl: './pastrie-details.component.html',
  styleUrls: ['./pastrie-details.component.scss']
})
export class PastrieDetailsComponent implements OnInit {
  
  @Input() pastrie: Pastrie | undefined;
  ingredients: Array<string> = [];
  sortRef = 'default';
  pastrieService: PastrieService;

  constructor(pastrieService:PastrieService) { 
    this.pastrieService = pastrieService;
  }

  ngOnInit(): void {
  }

  ngOnChanges (): void {
    if(this.pastrie){
      this.getIngredientList(this.pastrie.id)
    }
  }

  getIngredientList(id: string){
    this.ingredients = this.pastrieService.getPastrieIngredientList(id);
  }

  addIngredient(event: Event){
    let ingredient = (event.target as HTMLInputElement).value;
    this.ingredients.push(ingredient);
    console.log(ingredient);
  }

  deleteIngredient(ingredient : string[]){
    let suppr = this.ingredients.indexOf(ingredient[0]);
    this.ingredients.splice(suppr, 1);
    console.log(suppr);
  }

  sortIngredients() {
    this.ingredients.sort((a, b) => -1 * a.localeCompare(b))

    switch (this.sortRef) {
      case "default":
        //change to desc
        this.ingredients.sort((a, b) => a.localeCompare(b));
        this.sortRef = 'asc';
        break;
      case "asc":
        //change to desc
        this.ingredients.sort((a, b) => -1 * a.localeCompare(b))
        this.sortRef = 'desc';
        break;
      case "desc":
        //change to asc
        this.ingredients.sort((a, b) => a.localeCompare(b));
        this.sortRef = 'asc';
        break;
    }

  }

  hideIngredients() {
    this.ingredients
  }

}
