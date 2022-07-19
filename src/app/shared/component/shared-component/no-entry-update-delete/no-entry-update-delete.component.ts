import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-no-entry-update-delete',
  templateUrl: './no-entry-update-delete.component.html',
  styleUrls: ['./no-entry-update-delete.component.css']
})
export class NoEntryUpdateDeleteComponent implements OnInit {

  constructor() { }

  @Input('entityTitle') public title: string;
  @Input() public entry: any;

  ngOnInit(): void {
  }

}
