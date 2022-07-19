import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-entry-delete-all',
  templateUrl: './entry-delete-all.component.html',
})
export class EntryDeleteAllComponent implements OnInit {

  constructor() { }

  @Input() public entityTitle: string = "";
  @Input() public entriesAvailable: boolean = false;
  @Output() public deleteAllEntries: EventEmitter<boolean> = new EventEmitter<boolean>();

  ngOnInit(): void {
    
  }

  public deleteAll(): void {
    this.deleteAllEntries.emit(true);
  }

}
