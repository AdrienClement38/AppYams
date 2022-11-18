import { Component, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms'
import { EventEmitter } from '@angular/core';
import { PastrieService } from '../pastrie.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
  
})
export class SearchComponent implements OnInit {

  pastrieService: PastrieService;

  @Output() searchedResult : EventEmitter<undefined | any> = new EventEmitter()


  constructor(pastrieService: PastrieService) { 
    this.pastrieService = pastrieService
  }

  ngOnInit(): void {
  }

  onSubmit(form : NgForm) {
    let input = this.pastrieService.search(form.value['word']);
    this.searchedResult.emit(input);
    
  }
}
