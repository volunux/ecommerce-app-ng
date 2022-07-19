import { Component, Input, OnInit } from '@angular/core';
import { AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-entity-one-title-val-msg',
  templateUrl: './entity-one-title-val-msg.component.html',
  styleUrls: ['./entity-one-title-val-msg.component.css']
})
export class EntityOneTitleValMsgComponent implements OnInit {

  constructor() { }

  @Input() public title: AbstractControl | null = null;

  ngOnInit(): void {

  }

}
