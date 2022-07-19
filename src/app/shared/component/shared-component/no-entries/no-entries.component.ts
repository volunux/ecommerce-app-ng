import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-no-entries',
  templateUrl: './no-entries.component.html',
  styleUrls: ['./no-entries.component.css']
})
export class NoEntriesComponent implements OnInit {

  constructor() { }

  @Input() public entriesSize: number = 0;

  ngOnInit(): void {
  }

}
