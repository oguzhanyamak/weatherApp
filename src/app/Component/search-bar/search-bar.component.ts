import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {

  constructor() { }
  @Output() trigger = new EventEmitter<string>();

  ngOnInit(): void {
  }
  setCityName(name:string){
    console.log(name);
    this.trigger.emit(name);
  }

}
