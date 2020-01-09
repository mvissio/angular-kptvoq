import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular';
  boxs = new Array<boxI>();
  classClick = {
    empy: "",
    clicked: "clicked",
    lastClicked:"lastClicked" 
  }

  constructor(){
    this.onCreateData();
  }
  onCreateData(){
    for (var i = 0; i < 4; i++) {
      this.boxs.push({id: i, clicked: this.classClick.empy});
    }
  }
  onClickBox(i){
    let lastClick = this.boxs.find(b=> b.clicked === this.classClick.clicked);
    this.boxs.forEach(b=> b.clicked = this.classClick.empy);
    this.boxs[i].clicked= this.classClick.clicked;
    if(lastClick){
      this.boxs[lastClick.id].clicked=this.classClick.lastClicked;
    }
  }
}
export interface boxI {
  id: number;
  clicked: string;
}