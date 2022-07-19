import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-changes-menu',
  templateUrl: './changes-menu.component.html',
  styleUrls: ['./changes-menu.component.css']
})
export class ChangesMenuComponent implements OnInit {

  constructor() { }

  @Input('entryId') public id: number = 0;

  @Input('deleteList') public itemDeleteList: number[] = [];

  ngOnInit(): void {

  }

  itemSelected(checked: boolean, id: number): void {

    const itemIndex: number = this.itemDeleteList.indexOf(id);
    
    if (checked === true && itemIndex === -1) {
      this.itemDeleteList.push(id);
    }
    else if (checked === false && itemIndex > -1) {
      this.itemDeleteList.splice(itemIndex, 1);
    }

  }

}
