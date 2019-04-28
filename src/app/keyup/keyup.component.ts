import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-keyup',
  templateUrl: './keyup.component.html',
  styles: []
})
export class KeyupComponent implements OnInit {

  values:string = "";
  constructor() { }

  ngOnInit() {
  }

  onKey(event: KeyboardEvent):void {
    this.values += (<HTMLInputElement>event.target).value + "| ";
  }
}
